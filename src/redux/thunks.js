// this file holds thunks that will fetch data from server

import { loadDataSuccess, loadDataInProgress, loadDataFailure, } from './actions'

export const loadData = () => async (dispatch) => {
  try {
    // start fetching data -> switch isloading variable to true
    dispatch(loadDataInProgress());

    fetch('https://s3-us-west-2.amazonaws.com/toluna-frontend-developer-test/data.json')
    // Retrieve its body as ReadableStream
    .then(response => response.body)
    .then(rs => {
      const reader = rs.getReader();

      return new ReadableStream({
        async start(controller) {
          while (true) {
            const { done, value } = await reader.read();

            // When no more data needs to be consumed, break the reading
            if (done) {
              break;
            }

            // Enqueue the next data chunk into our target stream
            controller.enqueue(value);
          }

          // Close the stream
          controller.close();
          reader.releaseLock();
        }
      })
    })
    // Create a new response out of the stream
    .then(rs => new Response(rs))
    // Create an object URL for the response
    .then(response => response.json())
    .then(json => dispatch(loadDataSuccess(json)))
    .catch(console.error);
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