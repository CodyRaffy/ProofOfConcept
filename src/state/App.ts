import { IGame } from "./Game";
import { IPlayer } from "./Player";

export type App = {
    readonly games: IGame[];
    readonly players: IPlayer[]
}