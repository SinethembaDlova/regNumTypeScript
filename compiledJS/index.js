"use strict";
exports.__esModule = true;
var server_1 = require("./server");
var homeRoute_1 = require("./routes/homeRoute");
var filterRoute_1 = require("./routes/filterRoute");
var server = new server_1.Server();
var routes = new homeRoute_1.HomeRoute();
var filterRoute = new filterRoute_1.FilterRoute();
server.app.get('/', routes.getRegNum);
server.app.post('/', routes.createRegNum);
server.app.post('/filter', filterRoute.filter);
//# sourceMappingURL=index.js.map