import * as React from "react";
import { withRouter } from 'react-router-dom'

export interface IHomeProps { 
    startSelectPlayer?: () => void;
}

const ManagePlayersButton = withRouter(({ history }) => (
    <button
        type='button'
        onClick={() => { history.push('/players') }}
    >
        Manage Players
    </button>
));

export class Home extends React.Component<IHomeProps, {}> {

    render() {
        const { startSelectPlayer } = this.props;
        
        return (
            <div>
                {ManagePlayersButton}
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