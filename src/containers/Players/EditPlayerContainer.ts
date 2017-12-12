import { EditPlayer, IOwnProps, IConnectedState, IConnectedDispatch } from './../../components/players/EditPlayer';
import * as actions from './../../actions/PlayerActions';

import { App } from './../../types/App';
import { connect, Dispatch } from 'react-redux';
import { IPlayer } from '../../types/Player';
var cuid = require('cuid'); 

export const mapStateToProps = (App: App, props: IOwnProps): IConnectedState => ({
    player: App.domain.lookup[App.appState.editPlayerId] || {},
    addingPlayer: App.ui.playerPage.addingPlayer,
    editingPlayer: App.ui.playerPage.editingPlayer
});

export const mapDispatchToProps = (dispatch: Dispatch<actions.PlayerActionTypes>): IConnectedDispatch => ({
    save: (player: IPlayer) => dispatch(actions.updatePlayer(player.id, player.firstName, player.lastName)),
    add: (firstName: string, lastName: string) => {
        var id = cuid();
        return dispatch(actions.saveAddPlayer(id, firstName, lastName));
    }
});

export default connect<IConnectedState, IConnectedDispatch, IOwnProps>(mapStateToProps, mapDispatchToProps)(EditPlayer);