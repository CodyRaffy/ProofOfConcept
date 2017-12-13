import { PlayerActionTypes } from "./../../actions/PlayerActions";
import { ActionTypeKeys } from "./../../actions/ActionTypeKeys";
import { IAppState } from "../../types/App";

const defaultState : IAppState = {
    currentGameId: undefined,
    editPlayerId: undefined,
    addPlayer: undefined
}

export function appStateReducer(appState: IAppState = defaultState, action: PlayerActionTypes) {
    switch (action.type) {
        case ActionTypeKeys.START_ADD_PLAYER:
            return { ...appState, addPlayer: {}};
        case ActionTypeKeys.EDIT_PLAYER:
            return { ...appState, editPlayerId: action.id};
        default:
            return appState;
    }
}