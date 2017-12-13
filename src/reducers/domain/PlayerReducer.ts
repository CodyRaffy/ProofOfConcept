import { PlayerActionTypes } from "./../../actions/PlayerActions";
import { ActionTypeKeys } from "./../../actions/ActionTypeKeys";

export function playerReducer(playerIds: string[] = [], action: PlayerActionTypes) {
    switch (action.type) {
        case ActionTypeKeys.SAVE_ADD_PLAYER:
            return playerIds.concat([action.id]);
        case ActionTypeKeys.DELETE_PLAYER:
            return playerIds.filter(item => item !== action.id);
        default:
            return playerIds;
    }
}