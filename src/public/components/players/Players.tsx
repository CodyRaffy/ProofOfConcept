import * as React from "react";
import { Store } from "./../../Store";
import { IPlayer } from "shared/models/player";
import PlayersGrid from "containers/Players/PlayersGridContainer";
import EditPlayer from "containers/Players/EditPlayerContainer";
import AddPlayer from "containers/Players/AddPlayerContainer";

export interface IOwnProps { 
    id: string // from route
}

export interface IConnectedState {
    players: IPlayer[];
    showAdd: boolean;
}

export interface IConnectedDispatch {
    fetchAllPlayers: () => void;
    addPlayer: () => void;
}

export class Players extends React.Component<IOwnProps & IConnectedState & IConnectedDispatch, {}> {
    componentDidMount() {
        if (this.props.players === null || this.props.players === undefined || this.props.players.length === 0) {
            this.props.fetchAllPlayers();
        }
    }

    render() {
        const {   showAdd, players, addPlayer } = this.props;

        const showPlayerGrid = players.length > 0 && !showAdd;
        const showEmptyPlayersGrid = players.length === 0 && !showAdd;

        return (
            <div>
                <h2>Tic Tac Toe Players</h2>
                {!showAdd && (<button className="btn btn-primary" type="button" onClick={addPlayer}>Add Player</button>)}
                {!showAdd && (<br/>)}
                {showPlayerGrid && (<PlayersGrid></PlayersGrid>)}
                {showEmptyPlayersGrid && (<span>Please add a Tic Tac Toe Player</span>)  }
                {showAdd && (<AddPlayer></AddPlayer>) }
            </div>
        );
    }
}