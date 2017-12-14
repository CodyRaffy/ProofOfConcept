import { Home, IOwnProps, IConnectedState, IConnectedDispatch } from './../components/home/Home';
import * as actions from './../actions/HomeActions';

import { App } from './../types/App';
import { connect, Dispatch } from 'react-redux';

export const mapStateToProps = (App: App, props: IOwnProps): IConnectedState => ({});

export const mapDispatchToProps = (dispatch: Dispatch<actions.HomeActionTypes>): IConnectedDispatch => ({
    startSelectPlayer: () => dispatch(actions.startSelectPlayer())
});

const HomeContainer = connect<IConnectedState, IConnectedDispatch, IOwnProps>(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;