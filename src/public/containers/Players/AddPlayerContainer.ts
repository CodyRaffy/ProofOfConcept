import { AddPlayer, IOwnProps, IConnectedState, IConnectedDispatch } from 'components/players/AddPlayer';
import * as actions from 'actions/PlayerActions';

import { App } from 'types/App';
import { connect, Dispatch } from 'react-redux';
import { IPlayer } from 'shared/models/player';
var cuid = require('cuid');

export const mapStateToProps = (App: App, props: IOwnProps): IConnectedState => ({});

export const mapDispatchToProps = (dispatch: Dispatch<actions.PlayerActionTypes>): IConnectedDispatch => ({
    add: (firstName: string, lastName: string) => {
        var id = cuid();
        return dispatch(actions.saveAddPlayer(id, firstName, lastName));
    }
});

export default connect<IConnectedState, IConnectedDispatch, IOwnProps>(mapStateToProps, mapDispatchToProps)(AddPlayer);