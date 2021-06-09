import axios from 'axios';
import { loadDataSuccess, loadDataInProgress, loadDataFailure, } from './actions'



export const loadData = () => async (dispatch) => {
  try {
    // start fetching data -> switch isloading variable to true
    dispatch(loadDataInProgress());

    axios({
      method: 'get',
      url: 'https://s3-us-west-2.amazonaws.com/toluna-frontend-developer-test/data.json',
      responseType: 'stream'
    }).then((response) => {
      dispatch(loadDataSuccess(response.data))
    });
  } catch (e) {
    // error occurred -> switch isloading variable to false
    dispatch(loadDataFailure());
    // popup alert with error details
    dispatch(displayAlert(e));
  }
};

export const displayAlert = (text) => () => {
  alert(text);
};