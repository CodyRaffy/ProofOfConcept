import * as React from "react";
import { Store } from "./../../Store";
import { IPlayer } from "shared/models/player";

export interface IOwnProps {
    id: string // From route
}

export interface IConnectedState {
    player: IPlayer,
}

export interface IConnectedDispatch {
    save: (id: string, firstName: string, lastName: string) => void;
    setEditPlayer: (id: string) => void;
}

export class EditPlayer extends React.Component<IOwnProps & IConnectedState & IConnectedDispatch, {}> {
    componentDidMount() {
        var match: any = (this.props as any).match;
        const playerId: string = match.params.id;

        if (playerId) {
            this.props.setEditPlayer(playerId);
        }
    }

    saveChangesClickHandler = (event: any) => {
        const { player, save } = this.props;
        
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
        var copy = {...player, [name]: value}
        save(copy.id, copy.firstName, copy.lastName);
    }

    render() {
        const { player } = this.props;

        const saveButton: JSX.Element = (<button onClick={this.saveChangesClickHandler}>Save Changes</button>);

        return (
            <div>
                <h1>Player Information</h1>
                <label htmlFor="firstName">First Name:</label>
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={player.firstName}
                    onChange={this.saveChangesClickHandler} />
                <br />
                <label htmlFor="lastName">Last Name:</label>
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={player.lastName}
                    onChange={this.saveChangesClickHandler} />
                <br />
            </div>
        );
    }
}