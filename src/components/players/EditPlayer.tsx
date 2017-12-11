import * as React from "react";
import { Store } from "./../../Store";
import { IPlayer } from "./../../types/player";

import { updatePlayer, fetchPlayer } from "./../../actions/PlayerActions";

export interface IPlayerProps {
    currentPlayerIdEditing: string;
    firstName: string;
    lastName: string;
    addingPlayer: boolean;
    editingPlayer: boolean;
    save?: () => void;
}

export class EditPlayer extends React.Component<IPlayerProps, {}> {

    render() {
        const { currentPlayerIdEditing, firstName, lastName, addingPlayer, editingPlayer, save } = this.props;

        return (
            <div>
                <h1>Player Information</h1>
                <label htmlFor="firstName">First Name:</label>
                <input id="firstName" type="text" value={firstName} />
                <br />
                <label htmlFor="lastName">Last Name:</label>
                <input id="lastName" type="text" value={lastName} />
                <br />
                <button onClick={save}>Save</button>
            </div>
        );
    }
}