//eslint-disable import/default

import { combineReducers } from "redux";

import sidebar from "./sidebarReducer";
const rootReducer = combineReducers({ sidebar });

export default rootReducer;
