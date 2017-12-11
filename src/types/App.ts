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
        playerPage: {
            readonly currentPlayerIdEditing: string;
            readonly firstName: string;
            readonly lastName: string;
        }
    }
    readonly ui: {
        homePage: IHomePage,
        playerPage: {
            addingPlayer: boolean;
            editingPlayer: boolean;
        }
    }
}