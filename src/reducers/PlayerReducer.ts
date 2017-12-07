import { ActionTypes } from "../actions/player/PlayerActionTypes";
import { ActionTypeKeys } from "../actions/ActionTypeKeys";
import { IPlayer } from "../state/Player";

export function playerReducer(player: IPlayer, action: ActionTypes) {
    switch (action.type) {
        case ActionTypeKeys.UPDATE_PLAYER:
            return {...player, firstName: action.firstName, lastName: action.lastName};
        default:
            return player;
    }
}