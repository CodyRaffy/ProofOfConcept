import { IGame } from "./Game";
import { IPlayer } from "./Player";
import { IHomePage } from "./HomePage";

export type App = {
    readonly domain: {
        readonly games: IGame[];
        readonly players: IPlayer[];
    }
    readonly appState: {
        readonly currentGameId: string;
        readonly playerPage: {
            readonly editPlayer: IPlayer;
        }
    }
    readonly ui: {
        readonly homePage: IHomePage,
        readonly playerPage: {
            readonly addingPlayer: boolean;
            readonly editingPlayer: boolean;
        }
    }
}