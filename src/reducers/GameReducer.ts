import { ActionTypes } from "../actions/ActionTypes";
import { ActionTypeKeys } from "../actions/ActionTypeKeys";
import { State } from "../state/State";

const defaultState : State = {
    players: [ 
        {
            id: "1",
            firstName: "Cody",
            lastName: "Raffy"
        },
        {
            id: "2",
            firstName: "Missy",
            lastName: "Flynn"
        }
    ],
    games: []
}

export function gameReducer(s: State = defaultState, action: ActionTypes) {
    switch (action.type) {
        case ActionTypeKeys.PLAYER_MOVE:
            return {...s, test: 13};
        default:
            return s;
    }
}