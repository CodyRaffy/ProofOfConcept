import { combineReducers } from "redux";

import { homePageReducer } from "./uiReducers/HomePageReducer";

var uiReducer = combineReducers({ homePage: homePageReducer});

export default combineReducers({ ui: uiReducer });