import * as React from "react";

export interface HeaderProps { }

export class Header extends React.Component<HeaderProps, {}> {
    render() {
        return (
            <h1>Tic Tac Toe Header</h1>
        );
    }
}