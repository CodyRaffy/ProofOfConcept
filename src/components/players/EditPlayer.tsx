import * as React from "react";
import { Store } from "./../../Store";
import { IPlayer } from "./../../types/player";

export interface IOwnProps { 
    id: string // From route
}

export interface IConnectedState {
    player: IPlayer,
}

export interface IConnectedDispatch {
    save : (player: IPlayer) => void;
    setEditPlayer: (id: string) => void;
}

export class EditPlayer extends React.Component<IOwnProps & IConnectedState & IConnectedDispatch, {}> {
    componentDidMount() {
        if (this.props.id) {
            this.props.setEditPlayer(this.props.id);
        }
    }

    saveChangesClickHandler = () => {
        const {player, save} = this.props;
        save(player);
    }

    render() {
        const { player } = this.props;
        
        const saveButton : JSX.Element = (<button onClick={this.saveChangesClickHandler}>Save Changes</button>);

        return (
            <div>
                <h1>Player Information</h1>
                <label htmlFor="firstName">First Name:</label>
                <input id="firstName" type="text" value={player.firstName} /><h1>{player.firstName}</h1>
                <label htmlFor="lastName">Last Name:</label>
                <input id="lastName" type="text" value={player.lastName} />
                <br />
                <button onClick={this.saveChangesClickHandler}>Save Changes</button> 
            </div>
        );
    }
}