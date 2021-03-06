import * as React from "react";
import { Switch, Route } from 'react-router-dom';

import Home from "containers/HomeContainer";
import PlayerRoutes from "./../players/PlayerRoutes"
import { Game } from "./../game/Game";

export interface MainProps { }

export class Main extends React.Component<MainProps, {}> {

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route  path='/players' component={PlayerRoutes} />
                    <Route path='/game/:id' component={Game} />
                </Switch>
            </main>
        );
    }
}