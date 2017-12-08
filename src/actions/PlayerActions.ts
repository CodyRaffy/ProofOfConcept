import { ActionTypeKeys } from "./ActionTypeKeys";

export type PlayerActionTypes = 
| UpdatePlayerAction

export interface FetchPlayerAction {
    type: ActionTypeKeys.FETCH_PLAYER;
    id: string;
}

export interface UpdatePlayerAction {
    type: ActionTypeKeys.UPDATE_PLAYER;
    firstName: string;
    lastName: string;
}

export const updatePlayer = (firstName: string, lastName: string) : UpdatePlayerAction => ({
    type: ActionTypeKeys.UPDATE_PLAYER,
    firstName: firstName,
    lastName: lastName
});

export const fetchPlayer = (id: string) : FetchPlayerAction => ({
    type: ActionTypeKeys.FETCH_PLAYER,
    id
});