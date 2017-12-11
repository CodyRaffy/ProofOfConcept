import { Home, IHomeProps } from './../components/home/Home';
import * as actions from './../actions/HomeActions';

import { App } from './../types/App';
import { connect, Dispatch } from 'react-redux';

export const mapStateToProps = () => {
    return {}
}

export const mapDispatchToProps = (dispatch: Dispatch<actions.HomeActionTypes>) => {
    return {
        startSelectPlayer: () => dispatch(actions.startSelectPlayer())
    }
}

const HomeContainer = connect<{}, {}, IHomeProps>(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;