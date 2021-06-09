// this file holds task actions 

// Tasks:

//    Add new answer
//    Remove answer
//    Update answer list
//    Update question string
//    Load Data
//      InProgress
//      Success
//      Failure

export const ADD_NEW_ANSWER = "ADD_NEW_ANSWER";
export const addNewAnswer = ( imageURL, text, id ) => ({
  type: ADD_NEW_ANSWER,
  payload: { imageURL:imageURL, text: text, id: id },
});

export const REMOVE_ANSWER = "REMOVE_ANSWER";
export const removeAnswer = (answer) => ({
  type: REMOVE_ANSWER,
  payload: { answer },
});

export const UPDATE_QUESTION = "UPDATE_QUESTION";
export const updateQuestion = (question) => ({
  type: UPDATE_QUESTION,
  payload: { question },
});

export const UPDATE_SEARCH_BAR = "UPDATE_SEARCH_BAR";
export const updateSearchBar = (text) => ({
  type: UPDATE_SEARCH_BAR,
  payload: { text },
});

export const LOAD_DATA_IN_PROGRESS = "LOAD_DATA_IN_PROGRESS";
export const loadDataInProgress = () => ({
  type: LOAD_DATA_IN_PROGRESS,
});

export const LOAD_DATA_SUCCESS = "LOAD_DATA_SUCCESS";
export const loadDataSuccess = (data) => ({
  type: LOAD_DATA_SUCCESS,
  payload: { data },
});

export const LOAD_DATA_FAILURE = "LOAD_DATA_FAILURE";
export const loadDataFailure = () => ({
  type: LOAD_DATA_FAILURE,
});

export const CHANGE_LAYOUT = "CHANGE_LAYOUT";
export const changeLayout = (layoutMode) => ({
  type: CHANGE_LAYOUT,
  payload: { layoutMode },
});
