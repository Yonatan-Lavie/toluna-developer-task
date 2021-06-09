import _ from 'lodash/array'
import { createSelector } from "reselect";

export const getLayout = (state) => state.data.layoutMode;
export const getAnswers = (state) => state.data.answers;
export const getQuestion = (state) => state.data.question;
export const getSearchBarText = (state) => state.data.searchBarText;

export const getNextAnswerId = createSelector(
  getAnswers,
  (answer) => {
    const nextId =_.last(answer).id + 1;
  return nextId;
  }
)

export const getfilteredAnswers = createSelector(
  getAnswers, 
  getSearchBarText,
  (answers, searchBarText) => 
  searchBarText !== "" 
  ? answers.filter( answer => answer.text.toLowerCase().includes(searchBarText.toLowerCase())) 
  : answers
)