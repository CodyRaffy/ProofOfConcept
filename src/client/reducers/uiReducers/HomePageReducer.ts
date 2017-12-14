import { HomeActionTypes } from "./../../actions/HomeActions";
import { ActionTypeKeys } from "./../../actions/ActionTypeKeys";
import { IHomePage } from "./../../types/HomePage";

export function homePageReducer(homePage: IHomePage = { selectingPlayers: false }, action: HomeActionTypes) {
    switch (action.type) {
        case ActionTypeKeys.START_SELECT_PLAYERS:
            return { ...homePage, selectingPlayers: true };
        default:
            return homePage;
    }
}