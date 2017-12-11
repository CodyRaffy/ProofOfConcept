import { PlayersGridRow, IPlayersGridProps } from './../../components/players/PlayersGridRow';
import * as actions from './../../actions/PlayerActions';

import { App } from './../../types/App';
import { connect, Dispatch } from 'react-redux';

export const mapStateToProps = (App: App) => {
    return { 
        players: App.domain.players
    }
}

export const mapDispatchToProps = (dispatch: Dispatch<actions.PlayerActionTypes>) => {
    return { }
}

export default connect<{}, {}, IPlayersGridProps>(mapStateToProps, mapDispatchToProps)(PlayersGridRow);