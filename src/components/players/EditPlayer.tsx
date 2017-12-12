import * as React from "react";
import { Store } from "./../../Store";
import { IPlayer } from "./../../types/player";

import { updatePlayer, fetchPlayer } from "./../../actions/PlayerActions";

export interface IOwnProps { }

export interface IConnectedState {
    player: IPlayer,
    addingPlayer: boolean;
    editingPlayer: boolean;
}

export interface IConnectedDispatch {
    save : (player: IPlayer) => void;
    add: (firstName: string, lastName: string) => void;
}

export class EditPlayer extends React.Component<IOwnProps & IConnectedState & IConnectedDispatch, {}> {

    render() {
        const { player, addingPlayer, editingPlayer, add, save } = this.props;

        const saveButton : JSX.Element = (<button onClick={() => add(player.firstName, player.lastName)}>Save Changes</button>);
        const addButton : JSX.Element = (<button onClick={() => save(player)}>Add New Player</button>);
        const addOrSaveButton = addingPlayer ? addButton : saveButton; 

        return (
            <div>
                <h1>Player Information</h1>
                <label htmlFor="firstName">First Name:</label>
                <input id="firstName" type="text" value={player.firstName} />
                <br />
                <label htmlFor="lastName">Last Name:</label>
                <input id="lastName" type="text" value={player.lastName} />
                <br />
                {addOrSaveButton }
            </div>
        );
    }
}