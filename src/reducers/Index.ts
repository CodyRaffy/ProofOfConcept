import { combineReducers } from "redux";

import { appReducer } from "./AppReducer";
import { gameReducer } from "./GameReducer";
import { playerReducer } from "./PlayerReducer";

export default combineReducers({ appReducer, gameReducer, playerReducer });