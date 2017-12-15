import { PlayersGrid, IOwnProps, IConnectedState, IConnectedDispatch } from 'components/Players/PlayersGrid';
import * as actions from 'actions/PlayerActions';

import { App } from 'types/App';
import { connect, Dispatch } from 'react-redux';

export const mapStateToProps = (App: App, props: IOwnProps) : IConnectedState => ({       
    players: App.domain.playerIds.map(i => App.domain.lookup[i])
});

export const mapDispatchToProps = (dispatch: Dispatch<actions.PlayerActionTypes>) : IConnectedDispatch => ({});

export default connect<IConnectedState, IConnectedDispatch, IOwnProps>(mapStateToProps, mapDispatchToProps)(PlayersGrid);