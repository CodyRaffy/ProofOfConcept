// Why does this not work anymore now that I am using typescript tsx files
//require("./src/css/style.scss");

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Board } from "./src/components/board/Board";

ReactDOM.render(
    <Board />,
    document.getElementById("app")
);