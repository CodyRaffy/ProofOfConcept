import * as React from "react";
import { Store } from "./../../Store";
import { IPlayer } from "./../../types/player";

import { updatePlayer, fetchPlayer } from "./../../actions/PlayerActions";

export interface IPlayerProps {
    player: IPlayer;
    save?: () => void;
    fetch?: () => void;
}


export class Player extends React.Component<IPlayerProps, {}> {
    componentWillMount() {
        this.props.fetch()
    }

    render() {
        const { player, save } = this.props;
        
        return (
            <div>
                <h1>Player Information</h1>
                <label htmlFor="firstName">First Name:</label>
                <input id="firstName" type="text" value={player.firstName} />
                <br />
                <label htmlFor="lastName">Last Name:</label>
                <input id="lastName" type="text" value={player.lastName} />
                <br />
                <button onClick={save}>Save</button>
            </div>
        );
    }
}