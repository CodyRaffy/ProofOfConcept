import { ActionTypeKeys } from "./ActionTypeKeys";

export type PlayerActionTypes =
    | EditPlayerItemAction
    | DeletePlayerItemAction
    | UpdatePlayerAction
    | FetchPlayerAction
    | FetchAllPlayersAction;

export interface EditPlayerItemAction {
    type: ActionTypeKeys.EDIT_PLAYER;
    id: string;
}
export interface DeletePlayerItemAction {
    type: ActionTypeKeys.DELETE_PLAYER;
    id: string;
}
export interface FetchPlayerAction {
    type: ActionTypeKeys.FETCH_PLAYER;
    id: string;
}

export interface FetchAllPlayersAction {
    type: ActionTypeKeys.FETCH_ALL_PLAYERS;
}

export interface UpdatePlayerAction {
    type: ActionTypeKeys.UPDATE_PLAYER;
    firstName: string;
    lastName: string;
}

export const editPlayer = (id: string): EditPlayerItemAction => ({
    type: ActionTypeKeys.EDIT_PLAYER,
    id
});

export const deletePlayer = (id: string): DeletePlayerItemAction => ({
    type: ActionTypeKeys.DELETE_PLAYER,
    id
});

export const updatePlayer = (firstName: string, lastName: string): UpdatePlayerAction => ({
    type: ActionTypeKeys.UPDATE_PLAYER,
    firstName: firstName,
    lastName: lastName
});

export const fetchPlayer = (id: string): FetchPlayerAction => ({
    type: ActionTypeKeys.FETCH_PLAYER,
    id
});

export const fetchAllPlayers = (): FetchAllPlayersAction => ({
    type: ActionTypeKeys.FETCH_ALL_PLAYERS
});