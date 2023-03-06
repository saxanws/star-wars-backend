
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from "dotenv";
import routes from './routes';
import bodyParser from 'body-parser';

export class App {
    public app: express.Application;
    private PORT:any;

    constructor() {
        dotenv.config(); 
        this.app = express(); 
        this.PORT = process.env.PORT || 3001;  
        this.setUpApp();
    }

    private setUpApp() {
        this.app.use(helmet()); // protecting form incoming HTTP header
        this.app.use(cors()); // protecting from origin web page (to be explored more to choose origin website)
        this.app.use(bodyParser.json())
        this.app.use(routes); // set up all the web routes
    }



    public start() {
        this.app.listen(this.PORT, () => {
            console.log(`Server listening on port ${this.PORT}`);
        })
    }
}
