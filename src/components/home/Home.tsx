import * as React from "react";
import { withRouter, Link } from 'react-router-dom'

export interface IHomeProps { 
    startSelectPlayer?: () => void;
}

export class Home extends React.Component<IHomeProps, {}> {

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