import { combineReducers } from "redux";

import { homePageReducer } from "./uiReducers/HomePageReducer";
import { playerPageReducer } from "./uiReducers/PlayerPageReducer";

import { appStateReducer } from "./appState/AppStateReducer";

import { playerReducer } from "./domain/PlayerReducer";
import { lookupReducer } from "./domain/LookupReducer";

var uiReducer = combineReducers({ homePage: homePageReducer, playerPage: playerPageReducer });
var domainReducer = combineReducers({ playerIds: playerReducer, lookup: lookupReducer });

export default combineReducers({ ui: uiReducer, appState: appStateReducer, domain: domainReducer });