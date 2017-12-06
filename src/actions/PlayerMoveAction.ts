import { ActionTypeKeys } from "./ActionTypeKeys";

export interface PlayerMoveAction {
    type: ActionTypeKeys.PLAYER_MOVE;
    moveInfo: any;
}