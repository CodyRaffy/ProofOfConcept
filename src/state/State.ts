import { IGame } from "./Game";
import { IPerson } from "./Person";

export type State = {
    readonly games: IGame[];
    readonly players: IPerson[]
}