import { IGame } from "./Game";
import { IPlayer } from "./../../shared/models/Player";
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
}

export interface IUi {
    homePage: IHomePage,
    playerPage: IPlayerPage
}