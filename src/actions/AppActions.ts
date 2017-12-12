import { ActionTypeKeys } from "./ActionTypeKeys";

export type AppActionTypes = 
| StartGameAction;

export interface StartGameAction {
    type: ActionTypeKeys.START_GAME;
    player1Id: string;
    player2Id: string;
}