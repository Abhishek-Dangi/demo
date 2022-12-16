import express from 'express';
import IndexController from '../controller/IndexController.js';
import jwt from 'jsonwebtoken';
import { sendMail } from './mailAPI.js';

const router = express.Router();


router.get("/", (req, res) => {
    res.send("<h1>express server working</h1>");
});

router.get("/verifyuser", (req, res) => {
    var vDetails = url.parse(req.url, true).query;
    IndexController.verifyUser(vDetails).then((result) => {
        res.json({ "result": "Verification success.." });
    }).catch((err) => {
        res.json({ "result": "Verification failed" });
    })
});

router.post("/register", (req, res) => {

    // console.log(req.body);
    IndexController.userRegister(req.body).then((result) => {
        sendMail(req.body.email, req.body.password);
        res.json({ "result": "User register successfully..." });
    }).catch((err) => {
        res.json({ "result": err });
    });
});

router.post("/login", (req, res) => {
    IndexController.userLogin(req.body).then((result) => {

        if (result.rescode == 0) {
            res.json({ "token": "error" });
        }
        else {
            let payload = { "subject": result.userDetails.email };
            let token = jwt.sign(payload, "my pet name is tomy");
            res.json({ "token": token, "userDetails": result.userDetails });
        }

        /*if (result.rescode == 1 || result.rescode == 2) {
            req.session.sunm = result.userDetails.email;
            req.session.srole = result.userDetails.role;

            if (req.body.chk != undefined) {
                res.cookie("cunm", result.userDetails.email, { maxAge: 3600000 });
                res.cookie("cpass", result.userDetails.password, { maxAge: 3600000 });
            }
        }*/
    }).catch((err) => {
        res.json({ "result": "error" });
    });
});

export default router;




//update field data in data base commment
// db.register.update({"_id":2},{ $set:{"status":1}})
