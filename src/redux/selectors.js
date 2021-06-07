// this file will handle filtering data

// filter aswers by string ( use regex )
import { createSelector } from "reselect";

export const getLayout = (state) => state.data.layoutMode;
export const getAnswers = (state) => state.data.answers;
export const getQuestion = (state) => state.data.question;
export const getSearchBarText = (state) => state.data.searchBarText;

export const getfilteredAnswers = createSelector(
  getAnswers, 
  getSearchBarText,
  (answers, searchBarText) => 
  searchBarText !== "" 
  ? answers.filter( answer => answer.text.toLowerCase().includes(searchBarText.toLowerCase())) 
  : answers
)