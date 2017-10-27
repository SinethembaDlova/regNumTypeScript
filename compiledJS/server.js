"use strict";
exports.__esModule = true;
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var session = require("express-session");
var Server = (function () {
    function Server() {
        this.app = express();
        this.config();
    }
    Server.prototype.config = function () {
        var mongoURL = process.env.MONGO_DB_URL || "mongodb://localhost/registration_type";
        mongoose.connect(mongoURL);
        this.app.engine('hbs', exphbs({
            defaultLayout: "main",
            extname: 'hbs'
        }));
        this.app.set('view engine', 'hbs');
        this.app.use(express.static('public'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(session({
            secret: 'keyboard cat',
            cookie: {
                maxAge: 6000 * 30
            }
        }));
        var port = process.env.PORT || 3000;
        this.app.listen(port, function () { return console.log("Server running on port 3000."); });
    };
    return Server;
}());
exports.Server = Server;
//# sourceMappingURL=server.js.map