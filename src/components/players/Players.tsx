import * as React from "react";
import { Store } from "./../../Store";
import { IPlayer } from "./../../types/player";
import { PlayersGrid } from "./../../containers/Players/PlayersGridContainer";
import { EditPlayer } from "./EditPlayer";

import { updatePlayer, fetchPlayer } from "./../../actions/PlayerActions";

export interface IPlayerProps {
    players: IPlayer[];
    currentPlayerIdEditing: string;
    firstName: string;
    lastName: string;
    addingPlayer: boolean;
    editingPlayer: boolean;
    fetchAllPlayers?: () => void;
}

export class Players extends React.Component<IPlayerProps, {}> {
    componentDidMount() {
        this.props.fetchAllPlayers();
    }

    render() {
        const { players, currentPlayerIdEditing, firstName, lastName, addingPlayer, editingPlayer } = this.props;

        return (
            <div>
                <PlayersGrid></PlayersGrid>
                <EditPlayer></EditPlayer>
            </div>
    );
    }
}