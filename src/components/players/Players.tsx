import * as React from "react";
import { Store } from "./../../Store";
import { IPlayer } from "./../../types/player";
import PlayersGrid from "./../../containers/Players/PlayersGridContainer";
import EditPlayer from "./../../containers/Players/EditPlayerContainer";

import { updatePlayer, fetchPlayer } from "./../../actions/PlayerActions";

export interface IOwnProps { }

export interface IConnectedState {
    players: IPlayer[];
    showEdit: boolean;
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
        const { showEdit, players, addPlayer } = this.props;

        const addPlayerButton = (<button type="button" onClick={addPlayer}>Add Player</button>);
        const showAddPlayerButton = !showEdit;
        const showPlayerGrid = players.length > 0 && !showEdit;
        const showEmptyPlayersGrid = players.length === 0 && !showEdit;

        return (
            <div>
                <h2>Tic Tac Toe Players</h2>
                {showAddPlayerButton ? addPlayerButton : null}
                {showAddPlayerButton ? <br /> : null}
                {showPlayerGrid ? (<PlayersGrid></PlayersGrid>) : null}
                {showEmptyPlayersGrid ? (<span>Please add a Tic Tac Toe Player</span>) : null}
                {showEdit ? (<EditPlayer></EditPlayer>) : null}
            </div>
        );
    }
}