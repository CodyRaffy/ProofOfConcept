import * as React from "react";
import { Store } from "./../../Store";
import { IPlayer } from "./../../types/player";
import PlayersGrid from "./../../containers/Players/PlayersGridContainer";
import EditPlayer from "./../../containers/Players/EditPlayerContainer";
import AddPlayer from "./../../containers/Players/AddPlayerContainer";

import { updatePlayer, fetchPlayer } from "./../../actions/PlayerActions";

export interface IOwnProps { }

export interface IConnectedState {
    players: IPlayer[];
    showEdit: boolean;
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
        const { showEdit, showAdd, players, addPlayer } = this.props;

        const addingOrEditing = showAdd || showEdit; 
        const showPlayerGrid = players.length > 0 && !addingOrEditing;
        const showEmptyPlayersGrid = players.length === 0 && !addingOrEditing;

        return (
            <div>
                <h2>Tic Tac Toe Players</h2>
                {!addingOrEditing && [(<button className="btn btn-primary" type="button" onClick={addPlayer}>Add Player</button>), (<br/>)]}
                {showPlayerGrid && (<PlayersGrid></PlayersGrid>)}
                {showEmptyPlayersGrid && (<span>Please add a Tic Tac Toe Player</span>)  }
                {showEdit && (<EditPlayer></EditPlayer>) }
                {showAdd && (<AddPlayer></AddPlayer>) }
            </div>
        );
    }
}