import { PlayersGridRow, IPlayerGridRowProps } from './../../components/players/PlayersGridRow';
import * as actions from './../../actions/PlayerActions';

import { App } from './../../types/App';
import { connect, Dispatch } from 'react-redux';

export const mapStateToProps = (App: App, props: IPlayerGridRowProps) => {
    return {
        player: props.player
    }
}

export const mapDispatchToProps = (dispatch: Dispatch<actions.PlayerActionTypes>) => {
    return {
        editItem: (id: string) => dispatch(actions.editPlayer(id)),
        deletePlayer: (id: string) => dispatch(actions.deletePlayer(id))
    }
}

export default connect<{}, {}, IPlayerGridRowProps>(mapStateToProps, mapDispatchToProps)(PlayersGridRow);