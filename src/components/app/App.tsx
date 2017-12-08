import * as React from "react";

import { Header } from "./../header/Header";
import { Main } from "./../main/Main";

export interface AppProps { }

export class App extends React.Component<AppProps, {}> {
     
    render() {
        return (
        <div>
            <Header />
            <Main />
        </div>
        );
    }
}