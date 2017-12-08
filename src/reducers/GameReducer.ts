import { GameActionTypes } from "../actions/game/GameActionTypes";
import { ActionTypeKeys } from "../actions/ActionTypeKeys";
import { IGame } from "../types/Game";
var cuid = require('cuid');

const defaultState : IGame = {
   id: cuid(),
   player1Id: undefined,
   player2Id: undefined,
   moves: [],
   gameOver: false
}

export function gameReducer(game: IGame = defaultState, action: GameActionTypes) {
    switch (action.type) {
        case ActionTypeKeys.PLAYER_MOVE:
            return {...game, moves: game.moves.splice(action.index, 1, action.move)};
        default:
            return game;
    }
}