import * as React from "react";
import { Store } from "./../../Store";
import { IPlayer } from "./../../types/player";

import { updatePlayer, fetchPlayer } from "./../../actions/PlayerActions";

export interface IOwnProps { }

export interface IConnectedState {
    player: IPlayer,
}

export interface IConnectedDispatch {
    add: (firstName: string, lastName: string) => void;
}

export class AddPlayer extends React.Component<IOwnProps & IConnectedState & IConnectedDispatch, {}> {

    firstNameChanged = () => {
        
    }
    
    addClickHandler = () => {
        const {player, add} = this.props;
        add(player.firstName, player.lastName);
    }
    
    render() {
        const { player } = this.props;
        
        return (
            <div>
                <h1>Player Information</h1>
                <label htmlFor="firstName">First Name:</label>
                <input id="firstName" type="text" value={player.firstName} onChange={this.firstNameChanged}/> 
                <label htmlFor="lastName">Last Name:</label>
                <input id="lastName" type="text" value={player.lastName} />
                <br />
                <button onClick={this.addClickHandler}>Add New Player</button>
            </div>
        );
    }
}