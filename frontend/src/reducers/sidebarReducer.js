import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function sidebarReducer(state = initialState.sidebar, action) {
  switch (action.type) {
    case "TOGGLE_SHOW_QUEUE":
      return Object.assign({}, state, { showQueue: action.value });
    default:
      return state;
  }
}
