import { ActionTypeKeys } from "./ActionTypeKeys";

export type HomeActionTypes =
    | StartSelectPlayersAction;

export interface StartSelectPlayersAction {
    type: ActionTypeKeys.START_SELECT_PLAYERS;
}

export const startSelectPlayer = (): StartSelectPlayersAction => (
    {
        type: ActionTypeKeys.START_SELECT_PLAYERS
    }
);