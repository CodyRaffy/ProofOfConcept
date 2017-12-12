import * as React from "react";
import { Store } from "./../../Store";
import { IPlayer } from "./../../types/player";
import PlayersGrid from "./../../containers/Players/PlayersGridContainer";
import EditPlayer from "./../../containers/Players/EditPlayerContainer";

import { updatePlayer, fetchPlayer } from "./../../actions/PlayerActions";

export interface IOwnProps { }

export interface IConnectedState {
    players: IPlayer[];
}

export interface IConnectedDispatch { 
    fetchAllPlayers?: () => void;
}

export class Players extends React.Component<IOwnProps & IConnectedState & IConnectedDispatch, {}> {
    componentDidMount() {
        if (this.props.players === null || this.props.players === undefined || this.props.players.length === 0) {
            this.props.fetchAllPlayers();
        }
    }

    render() {
        return (
            <div>
                <PlayersGrid></PlayersGrid>
                <EditPlayer></EditPlayer>
            </div>
        );
    }
}