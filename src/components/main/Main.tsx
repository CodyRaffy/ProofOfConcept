import * as React from "react";
import { Switch, Route } from 'react-router-dom';

import { Home } from "./../home/Home";
import { Player } from "./../player/Player";
import { Game } from "./../game/Game";

export interface MainProps { }

export class Main extends React.Component<MainProps, {}> {
  
 render() {
     return (
      <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/player/:id' component={Player}/>
        <Route path='/game/:id' component={Game}/>
      </Switch>
  </main>
     );
 }
}