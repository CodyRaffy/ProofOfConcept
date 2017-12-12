import { PlayerActionTypes } from "./../../actions/PlayerActions";
import { ActionTypeKeys } from "./../../actions/ActionTypeKeys";
import { IAppState } from "../../types/App";

const defaultState : IAppState = {
    currentGameId: undefined,
    editPlayerId: undefined
}

export function appStateReducer(appState: IAppState = defaultState, action: PlayerActionTypes) {
    switch (action.type) {
        case ActionTypeKeys.EDIT_PLAYER:
            return { ...appState, editPlayerId: action.id};
        default:
            return appState;
    }
}