import { PlayerActionTypes } from "../actions/PlayerActions";
import { ActionTypeKeys } from "../actions/ActionTypeKeys";
import { IPlayer } from "../types/Player";

export function playerReducer(player: IPlayer, action: PlayerActionTypes) {
    switch (action.type) {
        case ActionTypeKeys.UPDATE_PLAYER:
            return { ...player, firstName: action.firstName, lastName: action.lastName };
        case ActionTypeKeys.FETCH_PLAYER:
            return { ...player, firstName: "Cody", lastName: "Raffy"}
        default:
            return player;
    }
}