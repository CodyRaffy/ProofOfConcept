import { EditPlayer, IOwnProps, IConnectedState, IConnectedDispatch } from './../../components/players/EditPlayer';
import * as actions from './../../actions/PlayerActions';

import { App } from './../../types/App';
import { connect, Dispatch } from 'react-redux';
import { IPlayer } from '../../types/Player';
var cuid = require('cuid');

export const mapStateToProps = (App: App, props: IOwnProps): IConnectedState => ({
    player: App.domain.lookup[App.appState.editPlayerId] || { firstName: '', lastName: '' },
});

export const mapDispatchToProps = (dispatch: Dispatch<actions.PlayerActionTypes>): IConnectedDispatch => ({
    save: (id: string, firstName: string, lastName: string) => dispatch(actions.updatePlayer(id, firstName, lastName)),
    setEditPlayer: (id: string) => dispatch(actions.setEditPlayer(id))
});

export default connect<IConnectedState, IConnectedDispatch, IOwnProps>(mapStateToProps, mapDispatchToProps)(EditPlayer);