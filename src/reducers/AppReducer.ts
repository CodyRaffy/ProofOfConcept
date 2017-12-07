import { AppActionTypes } from "../actions/App/AppActionTypes";
import { ActionTypeKeys } from "../actions/ActionTypeKeys";
import { App } from "../state/App";
var cuid = require('cuid');

const defaultApp : App = {
    games: [],
    players: [] 
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