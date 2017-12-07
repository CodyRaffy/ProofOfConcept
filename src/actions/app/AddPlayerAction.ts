import { ActionTypeKeys } from "./../ActionTypeKeys";

export interface AddPlayerAction {
    type: ActionTypeKeys.ADD_PLAYER;
    firstName: string;
    lastName: string;
}