import { PlayerActionTypes } from "./../../actions/PlayerActions";
import { ActionTypeKeys } from "./../../actions/ActionTypeKeys";
import { IPlayerPage } from "./../../types/PlayerPage";

const defaultState = { addingPlayer: false, editingPlayer: false}

export function playerPageReducer(playerPage: IPlayerPage = defaultState, action: PlayerActionTypes) {
    switch (action.type) {
        case ActionTypeKeys.START_ADD_PLAYER:
            return { ...playerPage, addingPlayer: true };
        case ActionTypeKeys.SAVE_ADD_PLAYER:
            return { ...playerPage, addingPlayer: false };
        case ActionTypeKeys.CANCEL_ADD_PLAYER:
            return { ...playerPage, addingPlayer: false };
        default:
            return playerPage;
    }
}