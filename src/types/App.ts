import { IGame } from "./Game";
import { IPlayer } from "./Player";
import { IHomePage } from "./HomePage";
import { IPlayerPage } from "./PlayerPage";

export type App = {
    readonly domain: IDomain,
    readonly appState: IAppState,
    readonly ui: IUi
}

export interface IDomain {
    gameIds: string[];
    playerIds: string[];
    lookup: any
}

export interface IAppState {
    currentGameId: string;
    editPlayerId: string;
    addPlayer: IPlayer;
}

export interface IUi {
    homePage: IHomePage,
    playerPage: IPlayerPage
}