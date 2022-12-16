import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileupload from 'express-fileupload';

var app=express();

//to resolve cross origin problem
app.use(cors());

//to extract post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//to link file upload module for uploading files
app.use(fileupload());

// to get router
import IndexRouter from './routes/IndexRouter.js';
import AdminRouter from './routes/AdminRouter.js';
import UserRouter from './routes/UserRouter.js';

//route level middleware to load specific route as per user
app.use("/webapiadmin",AdminRouter);
app.use("/webapiuser",UserRouter);
app.use("/webapi",IndexRouter);

app.listen(3001);
console.log("server invoked at link http://localhost:3001"); 
