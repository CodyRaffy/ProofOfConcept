import * as React from "react";
import { Switch, Route } from 'react-router-dom';
import Players from "containers/Players/PlayersContainer";
import EditPlayer from "containers/Players/EditPlayerContainer";

export default class PlayerRoutes extends React.Component<{}, { }> {

    render() {
        return (
            <Switch>
                <Route exact path='/players' component={Players} />
                <Route path='/players/:id' component={EditPlayer} />
            </Switch>
        );
    }
}