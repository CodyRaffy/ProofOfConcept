import { Players, IPlayerProps } from './../components/players/Players';
import * as actions from './../actions/PlayerActions';

import { App } from './../types/App';
import { connect, Dispatch } from 'react-redux';

export const mapStateToProps = (App: App) => {
    return {
        players: App.domain.players,
        currentPlayerIdEditing: App.appState.playerPage.currentPlayerIdEditing,
        firstName: App.appState.playerPage.firstName,
        lastName: App.appState.playerPage.lastName,
        addingPlayer: App.ui.playerPage.addingPlayer,
        editingPlayer: App.ui.playerPage.editingPlayer,
    }
}

export const mapDispatchToProps = (dispatch: Dispatch<actions.PlayerActionTypes>) => {
    return {
        fetchAllPlayers: () => dispatch(actions.fetchAllPlayers())
    }
}

export default connect<{}, {}, IPlayerProps>(mapStateToProps, mapDispatchToProps)(Players);