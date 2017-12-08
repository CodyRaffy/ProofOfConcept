import { ActionTypeKeys } from "./ActionTypeKeys";

export type AppActionTypes = 
AddPlayerAction | 
StartGameAction;

export interface AddPlayerAction {
    type: ActionTypeKeys.ADD_PLAYER;
    firstName: string;
    lastName: string;
}

export interface StartGameAction {
    type: ActionTypeKeys.START_GAME;
    player1Id: string;
    player2Id: string;
}