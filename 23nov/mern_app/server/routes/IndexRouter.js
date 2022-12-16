import express from 'express';
import IndexController from '../controller/IndexController.js';
import jwt from 'jsonwebtoken';
import { sendMail } from './mailAPI.js';
import * as url from 'url';

const router = express.Router();

router.get("/",(req,res)=>{ 
 res.send("<h1>Express server working</h1>"); 
});

router.get("/verifyuser",(req,res)=>{ 
 var vDetails=url.parse(req.url,true).query;
 IndexController.verifyUser(vDetails).then((result)=>{
  res.json({"result":"Verification success...."});  
 }).catch((err)=>{
  res.json({"result":"Verification failed"});
 });  
});


router.post("/register",(req,res)=>{
 //console.log(req.body);
 IndexController.userRegister(req.body).then((result)=>{
  sendMail(req.body.email,req.body.password);
  res.json({"result":"User register successfully...."});  
 }).catch((err)=>{
  res.json({"result":err});
 });
});

router.post("/login",(req,res)=>{
 IndexController.userLogin(req.body).then((result)=>{
    if(result.rescode==0)
        res.json({"token":"error"});
    else
    {
        let payload={"subject":result.userDetails.email};
        let token=jwt.sign(payload,"my pet name is shanky");
        res.json({"token":token,"userDetails":result.userDetails});
    }    
 }).catch((err)=>{
    res.json({"token":"error"});
 });
});

export default router;