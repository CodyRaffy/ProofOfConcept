import * as React from "react";

export interface SquareProps { }

// 'SquareProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Square extends React.Component<SquareProps, {}> {
    
    render() {
        return (
            <span>X</span>
          );
    }
}