import * as bodyParser from "body-parser";
import * as express from "express";
import * as logger from "morgan";
import * as path from "path";

class Server {

    public express: express.Application;

    constructor() {
      this.express = express();
      this.middleware();
      this.config();
      this.routes();
    }

    private middleware(): void {
      this.express.use(logger('dev'));
      this.express.use(bodyParser.json());
      this.express.use(bodyParser.urlencoded({ extended: false }));
    }
  
    public config() {
    }
  
    public routes() {

      let router = express.Router();
      
      router.get('/', (req, res, next) => {
        // res.json({
        //   message: 'Hello World!'
        // });
        res.send("Hello world!");
      });

      this.express.use('/', router);
    }
    
  }

export default new Server().express;  

