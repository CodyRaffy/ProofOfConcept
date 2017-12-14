import { PlayerActionTypes } from "./../../actions/PlayerActions";
import { ActionTypeKeys } from "./../../actions/ActionTypeKeys";

export function lookupReducer(lookup: any = {}, action: PlayerActionTypes) {
    switch (action.type) {
        case ActionTypeKeys.SAVE_ADD_PLAYER:
            return { ...lookup, [action.id]: { id: action.id, firstName: action.firstName, lastName: action.lastName } };
        case ActionTypeKeys.UPDATE_PLAYER:
            return { ...lookup, [action.id]: { id: action.id, firstName: action.firstName, lastName: action.lastName } };
        case ActionTypeKeys.DELETE_PLAYER:
            var copy = { ...lookup }
            delete copy[action.id];
            return copy;
        default:
            return lookup;
    }
}