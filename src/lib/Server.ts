import * as bodyParser from "body-parser";
import * as express from "express";
import * as pug from 'pug';
import * as logger from "morgan";
import * as path from "path";
import * as fs from 'fs';

class Server {

    public express: express.Application;

    constructor() {
      this.express = express();
      this.middleware();
      this.config();
      this.routes();
    }

    private middleware(): void {

      let morganLogPath = path.join(__dirname, 'log');
      let morganLogFileName = path.join(morganLogPath, 'morgan.log');
      if(!fs.existsSync(morganLogPath)) {
          fs.mkdirSync(morganLogPath);
      }
      fs.appendFileSync(morganLogFileName,"---- Start server ----\n");
      let morganLogStream = fs.createWriteStream(morganLogFileName, {flags: 'a'});

      //console.log("NODE_ENV: ", process.env.NODE_ENV);
      if(process.env.NODE_ENV === 'dev') {
        this.express.use(logger('dev'));  
      }
      if(process.env.NODE_ENV !== 'production') {
        this.express.use(logger('common',{ "stream": morganLogStream }));
      }
      //this.express.use(bodyParser.json());
      //this.express.use(bodyParser.urlencoded({ extended: false }));
    }
  
    public config() {

        console.log("dirname:",__dirname);

        let publicPath = path.resolve(__dirname, '..', 'public');
        let viewsPath = path.resolve(publicPath, 'views');

        console.log("publicPath:", publicPath);
        console.log("viewsPath: ", viewsPath);

        this.express.use(express.static(publicPath));
        this.express.use('/css', express.static(publicPath + '/css'));
        //this.express.use('/bootstrap', express.static(__dirname + '/bootstrap'));
        //this.express.use('/jquery-slim', express.static(__dirname + '/jquery-slim'));
        //this.express.engine('hbs', handlebars.engine());
        this.express.set('views',viewsPath);
        this.express.set('view engine', 'pug');
    }
  
    public routes() {

      let router = express.Router();

      // let msg = "";
      // router.get('/', (req, res, next) => {
      //   res.send("<header>Заголовок</header>Главная страница!<br><a href=hw>Hello world</a><footer>Футер<footer>");

      // });

      router.get('/', (req, res, next) => {
        
        res.render('index.pug', {
          title : "12345",
          header: "Заголовок34",
          body: "Тело",
          footer: "Подножник"
        });
        
      })


      // let body = "";

      // router.get('/', (req, res, next) => {
      //   body = "<header>Заголовок</header>";
      //   next();
      // })
      // router.get('/', (req, res, next) => {
      //   body += "<p><header>Главная страница.</header>";
      //   body += "<p><a href=hw>Hello world</a></p>";
      //   body += "<p><a href=\"about.html\">About...</a></p>";
      //   next();
      // })
      // router.get('/', (req, res, next) => {
      //   body += "<footer>Футер<footer>";
      //   next();
      // })
      // router.get('/', (req, res, next) => {
      //   //console.log("get res:", res);
      //   res.send(body);
      // })
      

      router.get('/hw', (req, res, next) => {
        // res.json({
        //   message: 'Hello World!'
        // });
        res.send("Hello world!");
      });

      this.express.use('/', router);
    }
    
  }

export default new Server().express;  

