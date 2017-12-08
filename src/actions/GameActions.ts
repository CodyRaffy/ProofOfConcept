import { ActionTypeKeys } from "./ActionTypeKeys";

export type GameActionTypes = 
| PlayerMoveAction;

export interface PlayerMoveAction {
    type: ActionTypeKeys.PLAYER_MOVE;
    index: number;
    move: boolean;
}