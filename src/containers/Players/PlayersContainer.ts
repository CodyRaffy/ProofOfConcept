import { Players, IOwnProps } from './../../components/players/Players';
import * as actions from './../../actions/PlayerActions';

import { App } from './../../types/App';
import { connect, Dispatch } from 'react-redux';

export const mapStateToProps = (App: App, props: IOwnProps) => {
    return {
        players: App.domain.playerIds.map(i => App.domain.lookup[i]),
        showEdit: App.ui.playerPage.addingPlayer || App.ui.playerPage.editingPlayer
    }
}

export const mapDispatchToProps = (dispatch: Dispatch<actions.PlayerActionTypes>) => {
    return {
        fetchAllPlayers: () => dispatch(actions.fetchAllPlayers()),
    }
}

export default connect<{}, {}, IOwnProps>(mapStateToProps, mapDispatchToProps)(Players);