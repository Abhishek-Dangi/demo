import express from 'express';
import * as path from 'path';
import * as url from 'url';
import bodyparser from 'body-parser';
import fileupload from 'express-fileupload';
import cors from 'cors';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

var app = express();

//to resolve cross origin problem
app.use(cors());

// to extract post data
app.use(bodyparser());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(fileupload());

// to get router
import IndexRouter from './routes/IndexRouter.js';
import AdminRouter from './routes/AdminRouter.js';
import UserRouter from './routes/UserRouter.js';

//route level middleware to load specific route as per user
app.use("/webapiadmin", AdminRouter);
app.use("/webapiuser", UserRouter);
app.use("/webapi", IndexRouter);

app.listen(3001);
console.log("server invoked at link http://localhost:3001"); 
