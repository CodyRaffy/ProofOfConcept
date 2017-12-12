import { ActionTypeKeys } from "./ActionTypeKeys";

export type PlayerActionTypes =
    | StartAddPlayerItemAction
    | SaveAddPlayerItemAction
    | CancelAddPlayerItemAction
    | EditPlayerItemAction
    | DeletePlayerItemAction
    | UpdatePlayerAction
    | FetchPlayerAction
    | FetchAllPlayersAction;

export interface StartAddPlayerItemAction {
    type: ActionTypeKeys.START_ADD_PLAYER;
}
export interface SaveAddPlayerItemAction {
    type: ActionTypeKeys.SAVE_ADD_PLAYER;
    id: string;
    firstName: string;
    lastName: string;
}
export interface CancelAddPlayerItemAction {
    type: ActionTypeKeys.CANCEL_ADD_PLAYER;
}
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
    id: string;
    firstName: string;
    lastName: string;
}

export const startAddPlayer = (): StartAddPlayerItemAction => ({
    type: ActionTypeKeys.START_ADD_PLAYER,
});
export const saveAddPlayer = (id: string, firstName: string, lastName: string): SaveAddPlayerItemAction => ({
    type: ActionTypeKeys.SAVE_ADD_PLAYER,
    id,
    firstName,
    lastName
});
export const cancelAddPlayer = (): CancelAddPlayerItemAction => ({
    type: ActionTypeKeys.CANCEL_ADD_PLAYER,
});
export const editPlayer = (id: string): EditPlayerItemAction => ({
    type: ActionTypeKeys.EDIT_PLAYER,
    id
});
export const deletePlayer = (id: string): DeletePlayerItemAction => ({
    type: ActionTypeKeys.DELETE_PLAYER,
    id
});
export const updatePlayer = (id: string, firstName: string, lastName: string): UpdatePlayerAction => ({
    type: ActionTypeKeys.UPDATE_PLAYER,
    id,
    firstName,
    lastName
});
export const fetchPlayer = (id: string): FetchPlayerAction => ({
    type: ActionTypeKeys.FETCH_PLAYER,
    id
});
export const fetchAllPlayers = (): FetchAllPlayersAction => ({
    type: ActionTypeKeys.FETCH_ALL_PLAYERS
});