"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var playersApi = require("./api/PlayersApi");
var App = /** @class */ (function () {
    function App() {
        this.express = express();
        this.mountRoutes();
    }
    App.prototype.mountRoutes = function () {
        var router = express.Router();
        router.get('/', function (req, res) {
            res.json({
                message: 'Hello World!'
            });
        }),
            router.get('/api/players', function (req, res) {
                res.json(playersApi.getAllPlayers());
            });
        this.express.use('/', router);
    };
    return App;
}());
exports.default = new App().express;
//# sourceMappingURL=App.js.map