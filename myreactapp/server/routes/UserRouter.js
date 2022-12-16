import express from 'express';
import AdminController from '../controller/AdminController.js';
import UserController from '../controller/UserController.js';

const router = express.Router();

//middleware to apply security for admin router
// router.use((req, res, next) => {
//     if (req.session.sunm == undefined || req.session.srole != "user")
//         res.redirect("/login");
//     else
//         next();
// });

// middleware to apply security for user route
// router.use((req, res, next) => {
//     if (req.session.sunm == undefined || req.session.srole != "user")
//         res.redirect("/login");
//     else
//         next();
// });

//middleware function to get category list

var clist;
router.use("/viewsubcategory/:catname", (req, res, next) => {
    AdminController.fetchCategory({}).then((result) => {
        clist = result;
        next();
    }).catch((err) => {
        console.log(err);
    });

})

router.get("/", (req, res) => {
    res.render("userhome", { "sunm": req.session.sunm });
});

router.get("/searchproduct", (req, res) => {
    AdminController.fetchCategory({}).then((result) => {
        // console.log(result);
        res.render("searchproduct", { "sunm": req.session.sunm, "clist": result });
    }).catch((err) => {
        console.log(err);
    })

});
router.get("/viewsubcategory/:catname", (req, res) => {
    // console.log(req.params);
    UserController.fetchSubCategory(req.params).then((result) => {
        // console.log(result)
        res.render("viewsubcategory", { "sunm": req.session.sunm, "clist": clist, "sclist": result, "catname": req.params.catname });
    }).catch((err) => {
        console.log(err);
    });
});



router.get("/logout", (req, res) => {
    res.send("<h1>/logout url invoked , admin panel</h1>");
});
router.get("/cpuser", (req, res) => {
    //console.log(req.session.sunm);
    res.render("cpuser", { "sunm": req.session.sunm, "output": "" });
});
router.post("/cpuser", (req, res) => {
    AdminController.manageUsers({ "email": req.session.sunm, "password": req.body.opass, }).then((result) => {
        if (result.length == 0)
            res.render("cpuser", { "sunm": req.session.sunm, "output": "Invalid old password, please enter again" });
        else {
            if (req.body.npass != req.body.cnpass) {
                res.render("cpuser", { "sunm": req.session.sunm, "output": "New and confirm password is mot match" });
            }
            else {
                UserController.cpUser(req.session.sunm, req.body).then((result) => {
                    res.render("cpuser", { "sunm": req.session.sunm, "output": "Password changed successfully, please login again " });

                }).catch((err) => {
                    console.log(err);
                });
                // console.log(result);
            }
        }
    }).catch((err) => {
        console.log(err);
    });
});
router.get("/epuser", (req, res) => {
    //console.log(req.session.sunm);
    AdminController.manageUsers({ "email": req.session.sunm }).then((result) => {
        // console.log(result);
        var m = "", f = "";
        if (result[0].gender == "male")
            m = "checked";
        else
            f = "checked";
        res.render("epuser", { "userDetails": result[0], "m": m, "f": f, "sunm": req.session.sunm, "output": "" });
    }).catch((err) => {
        console.log(err);
    });
});
router.post("/epuser", (req, res) => {
    //console.log(req.session.sunm);
    AdminController.epAdmin(req.body).then((result) => {
        res.redirect("/user/epuser");
    }).catch((err) => {
        console.log(err);
    });
});



router.get("/funds", (req, res) => {
    res.render("funds", { "sunm": req.session.sunm, "output": " " });
});
export default router;