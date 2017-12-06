import { applyMiddleware, createStore} from "redux";

var logger = require("redux-logger");
var thunk = require("redux-thunk");
var promise = require("redux-promise-middleware");

import reducer from "./reducers";

const middleware = applyMiddleware(promise(), thunk, logger());

export default createStore(reducer, middleware);
