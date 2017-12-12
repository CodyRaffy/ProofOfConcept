import { PlayersGridRow, IOwnProps, IConnectedState, IConnectedDispatch } from './../../components/players/PlayersGridRow';
import * as actions from './../../actions/PlayerActions';

import { App } from './../../types/App';
import { connect, Dispatch } from 'react-redux';

export const mapStateToProps = (App: App, props: IOwnProps): IConnectedState => ({ });

export const mapDispatchToProps = (dispatch: Dispatch<actions.PlayerActionTypes>) : IConnectedDispatch => ({
    editItem: (id: string) => dispatch(actions.editPlayer(id)),
    deleteItem: (id: string) => dispatch(actions.deletePlayer(id))
});

export default connect<IConnectedState, IConnectedDispatch, IOwnProps>(mapStateToProps, mapDispatchToProps)(PlayersGridRow);