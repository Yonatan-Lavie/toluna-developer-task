// this file holds all task redusers
import {
  ADD_NEW_ANSWER, 
  REMOVE_ANSWER, 
  LOAD_DATA_FAILURE, 
  LOAD_DATA_IN_PROGRESS, 
  LOAD_DATA_SUCCESS,
  UPDATE_QUESTION,
  UPDATE_SEARCH_BAR,
  CHANGE_LAYOUT } from './actions'



// Store:
//    isLoading
//    layoutMode
//    Data
//      question : {text, imageURL}
//      answers  :  [ { id, text, imageURL } ...]

const initialState = { isLoading: false, layoutMode: "desktop", searchBarText: "", question: { text: "", imageURL: "" }, answers: [] }; 

export const data = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_NEW_ANSWER: {
            const { imageURL, text, id } = payload; 
      return {
        ...state,
        answers: state.answers.concat({imageURL:imageURL , text: text, id: id}),
      };
    }
    case REMOVE_ANSWER: {
      const { answer: answerToRemove } = payload;
      return {
        ...state,
        answers: state.answers.filter((answer) => answer.id !== answerToRemove.id),
      }
    }
    case UPDATE_QUESTION: {
      const { question:  questionToUpdate} = payload; 
      return {
        ...state,
        question: {
          text:questionToUpdate, 
          imageURL:state.question.imageURL
        }
      };
    }
    case UPDATE_SEARCH_BAR: {
      const { text: textToUpdate } = payload; 
      return {
        ...state,
        searchBarText: textToUpdate,
      };
    }
    case LOAD_DATA_SUCCESS: {
      const { data } = payload;
      // don't understend way we need to use local storage insted useing redux  ?
      // add data to local storage
      //localStorage.setItem("data", data);
      data.answers.map((answer, key) => answer.id = key);
      return {
        ...state,
        isLoading: false,
        question: data.question,
        answers: data.answers,
      };
    }
    case LOAD_DATA_IN_PROGRESS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOAD_DATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case CHANGE_LAYOUT: {
      const { layoutMode: updatedLayoutMode } = payload;
      return {
        ...state,
        layoutMode : updatedLayoutMode,
      };
    }
    default:
      return state;
  }
}
// Opperations:

//  preforming add new answer to list
//  performing remove answer
//  performing change question