import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./app/App";
import { BrowserRouter } from 'react-router-dom'

import { Provider } from "react-redux";
import { Store } from "./../Store";

ReactDOM.render((
  <BrowserRouter>
    <Provider store={Store}>
      <App />
    </Provider>
  </BrowserRouter>
), document.getElementById('root') as HTMLElement)