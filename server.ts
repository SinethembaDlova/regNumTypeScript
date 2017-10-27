import * as express from 'express';
import * as exphbs from 'express-handlebars';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
//import * as flash from 'express-flash';
import * as session from 'express-session';

export class Server {
  //Sever

    public app: express.Application;
    constructor() {

        this.app = express();
        this.config();
        //this.routes();
    }

    public config() {
        //setup mongoose
        const mongoURL = process.env.MONGO_DB_URL || "mongodb://localhost/registration_type";

        mongoose.connect(mongoURL);
        //config my dependencies
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

        //run Server
        const port = process.env.PORT || 3000;
        this.app.listen(port, () => console.log("Server running on port 3000."));

    }
}
