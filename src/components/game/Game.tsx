import * as React from "react";

import { Board } from "./../board/Board";

export interface GameProps { }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Game extends React.Component<GameProps, {}> {
    
    private moves :Array<boolean> = new Array(9);
    
    render() {
        return (
            <Board moves={this.moves}/>
        );
    }
}