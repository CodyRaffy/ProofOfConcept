import * as React from "react";
import { Link } from 'react-router-dom'

export interface IOwnProps { }

export interface IConnectedState { }

export interface IConnectedDispatch { 
    startSelectPlayer?: () => void;
}

export class Home extends React.Component<IOwnProps & IConnectedState & IConnectedDispatch, {}> {

    render() {
        const { startSelectPlayer } = this.props;
        
        return (
            <div>
                <Link to="/players">Manage Players</Link>
                <br />
                <button
                    type="button"
                    onClick={startSelectPlayer}
                >
                    Start Game
                </button>
            </div>
        );
    }
}