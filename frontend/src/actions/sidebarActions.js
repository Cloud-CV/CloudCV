import * as types from "./actionTypes";

function toggleShowQueueSuccess(value) {
  return { type: types.TOGGLE_SHOW_QUEUE, value };
}

export function toggleShowQueue(value) {
  return function(dispatch) {
    return new Promise((resolve, reject) => {
      dispatch(toggleShowQueueSuccess(value));
      resolve("dispatch showQueue value change call");
    });
  };
}
