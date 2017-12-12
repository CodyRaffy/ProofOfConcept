import { PlayerActionTypes } from "./../../actions/PlayerActions";
import { ActionTypeKeys } from "./../../actions/ActionTypeKeys";
import { IAppState } from "../../types/App";


export function appStateReducer(appState: IAppState, action: PlayerActionTypes) {
    switch (action.type) {
        case ActionTypeKeys.EDIT_PLAYER:
            return { ...appState, editPlayerId: action.id};
        default:
            return appState;
    }
}