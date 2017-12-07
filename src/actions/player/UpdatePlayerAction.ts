import { ActionTypeKeys } from "./../ActionTypeKeys";

export interface UpdatePlayerAction {
    type: ActionTypeKeys.UPDATE_PLAYER;
    firstName: string;
    lastName: string;
}