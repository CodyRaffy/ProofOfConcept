import * as React from "react";

import { Board } from "./../board/Board";

export interface GameProps { }

export class Game extends React.Component<GameProps, {}> {
    
    private moves :Array<boolean> = new Array(9);
    
    render() {
        return (
            <Board moves={this.moves}/>
        );
    }
}