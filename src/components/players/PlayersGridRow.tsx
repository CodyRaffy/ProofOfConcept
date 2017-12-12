import * as React from "react";
import { Store } from "./../../Store";
import { IPlayer } from "./../../types/player";
import { Link } from 'react-router-dom'

import { updatePlayer, fetchPlayer } from "./../../actions/PlayerActions";

export interface IOwnProps { 
    player: IPlayer
}

export interface IConnectedState { }

export interface IConnectedDispatch { 
    editItem?: (id: string) => void;
    deleteItem?: (id: string) => void;
}

export class PlayersGridRow extends React.Component<IOwnProps & IConnectedState & IConnectedDispatch, {}> {

    render() {
        const { player, editItem, deleteItem } = this.props;
        const editLinkUrl = "/players/" + player.id;
        return (
            <tr>
                <td>{player.firstName}</td>
                <td>{player.lastName}</td>
                <td>
                    <Link to={editLinkUrl}>Edit</Link>
                </td>
                <td>
                    <a href="#" onClick={() => deleteItem(player.id)}>Delete</a>
                </td>
            </tr>
        );
    }
}