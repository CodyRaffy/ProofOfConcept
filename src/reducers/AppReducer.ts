import { AppActionTypes } from "../actions/AppActions";
import { ActionTypeKeys } from "../actions/ActionTypeKeys";
import { App } from "../types/App";
var cuid = require('cuid');

const defaultApp : App = {
    games: [],
    players: [],
    currentPlayer: undefined,
    currentGame: undefined 
}

export function appReducer(state: App = defaultApp, action: AppActionTypes) {
    switch (action.type) {
        case ActionTypeKeys.ADD_PLAYER:
            return {...state, moves: state.players.concat({
                id: cuid(),
                firstName: action.firstName,
                lastName: action.lastName
            })};
        default:
            return state;
    }
}