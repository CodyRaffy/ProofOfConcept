import { ActionTypeKeys } from "./../ActionTypeKeys";

export interface PlayerMoveAction {
    type: ActionTypeKeys.PLAYER_MOVE;
    index: number;
    move: boolean;
}