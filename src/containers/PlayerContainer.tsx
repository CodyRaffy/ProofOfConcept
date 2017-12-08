import { Player, IPlayerProps } from './../components/player/Player';
import * as actions from './../actions/PlayerActions';

import { App } from './../types/App';
import { connect, Dispatch } from 'react-redux';

export const mapStateToProps = ({ currentPlayer }: App) => {
    return {
        player: currentPlayer
    }
}

export const mapDispatchToProps = (dispatch: Dispatch<actions.FetchPlayerAction>) => {
    return {
        save: (firstName: string, lastName: string) => dispatch(actions.updatePlayer(firstName, lastName)),
        fetch: (id: string) => dispatch(actions.fetchPlayer(id))
    }
}

export default connect<{}, {}, IPlayerProps>(mapStateToProps, mapDispatchToProps)(Player);