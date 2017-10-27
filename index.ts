import {Server} from './server';
import regDB from './models/regDB';
import { HomeRoute } from './routes/homeRoute';
import { FilterRoute} from './routes/filterRoute';
//instances of my routes
var server = new Server();
var routes = new HomeRoute();
var filterRoute = new FilterRoute();

server.app.get('/', routes.getRegNum);
server.app.post('/', routes.createRegNum);
server.app.post('/filter', filterRoute.filter);
