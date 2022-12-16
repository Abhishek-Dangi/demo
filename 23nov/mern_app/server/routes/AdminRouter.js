import express from 'express';
import * as url from 'url';
import * as path from 'path';
import AdminController from '../controller/AdminController.js';

const router = express.Router();
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));


//middleware to apply security for admin route
/*router.use((req,res,next)=>{
 if(req.session.sunm==undefined || req.session.srole!="admin")
  res.redirect("/login");
 else
  next();   
});*/  

router.get("/addsubcategory",(req,res,next)=>{
  AdminController.fetchCategory({}).then((result)=>{
   res.json({"cDetails":result});
  }).catch((err)=>{
   console.log(err);
  });
});

router.get("/fetchsubcategory",(req,res,next)=>{
  var urlobj=url.parse(req.url,true).query;
  AdminController.fetchSubCategory(urlobj).then((result)=>{
   res.json({"scDetails":result});
  }).catch((err)=>{
   console.log(err);
  });
});
 

router.get("/manageusers",(req,res)=>{ 
 AdminController.manageUsers({"role":"user"}).then((result)=>{
  //res.render("manageusers",{"userDetails":result,"sunm":req.session.sunm});
  res.json({"userDetails":result});
 }).catch((err)=>{
  console.log(err);   
 })
});

router.get("/manageuserstatus",(req,res)=>{ 
 var urlobj=url.parse(req.url,true).query;  
 AdminController.manageUserStatus(urlobj).then((result)=>{
  res.json({"status":1});
 }).catch((err)=>{
  console.log(err);   
 })
});


router.post("/addcategory",(req,res)=>{ 
 var catnm=req.body.catnm;
 var fileobj=req.files.caticon; 
 var caticonname=Date.now()+"-"+fileobj.name;
 AdminController.addCategory(catnm,caticonname).then((result)=>{
  var uploadpath=path.join(__dirname,"../../ui/public/assets/uploads/cicons",caticonname);
  fileobj.mv(uploadpath);
  res.json({"response":true});
 }).catch((err)=>{
  console.log(err); 
 });
});

 router.post("/addsubcategory",(req,res)=>{ 
  var catname=req.body.catname;
  var subcatname=req.body.subcatname;
  var fileobj=req.files.caticon;
  var subcaticonname=Date.now()+"-"+fileobj.name;
  AdminController.addSubCategory(catname,subcatname,subcaticonname).then((result)=>{
    var uploadpath=path.join(__dirname,"../../ui/public/assets/uploads/scicons",subcaticonname);
    fileobj.mv(uploadpath);
    res.json({"response":true});
  }).catch((err)=>{
    console.log(err); 
  });
 });

 router.post("/addproperty",(req,res)=>{ 
  var title=req.body.title;
  var subcatname=req.body.subcatname;
  var description=req.body.description;
  var fileobj=req.files.caticon;
  var piconname=Date.now()+"-"+fileobj.name;
  AdminController.addProperty(title,subcatname,description,piconname).then((result)=>{
    var uploadpath=path.join(__dirname,"../../ui/public/assets/uploads/picons",piconname);
    fileobj.mv(uploadpath);
    res.json({"response":true});
  }).catch((err)=>{
    console.log(err); 
  });
 });

router.get("/cpadmin",(req,res)=>{ 
 res.render("cpadmin",{"sunm":req.session.sunm,"output":""}); 
});

router.post("/cpadmin",(req,res)=>{ 
  AdminController.manageUsers({"email":req.session.sunm,"password":req.body.opass}).then((result)=>{
    var msg;
    if(result.length==0)
      res.render("cpadmin",{"sunm":req.session.sunm,"output":"Invalid old password , please try again"});  
    else
    {
      if(req.body.npass!=req.body.cnpass)
        res.render("cpadmin",{"sunm":req.session.sunm,"output":"New & Confirm new password mismatch"});
      else
      {
        AdminController.cpAdmin(req.session.sunm,req.body).then((result)=>{
          res.render("cpadmin",{"sunm":req.session.sunm,"output":"Password changed successfully , please login again...."});
        }).catch((err)=>{
          console.log(err);  
        });
      }  
    }    
    
  }).catch((err)=>{
    console.log(err);  
  });  
});


router.get("/epadmin",(req,res)=>{ 
 AdminController.manageUsers({"email":req.session.sunm}).then((result)=>{
  //console.log(result);
  var m="",f="";
  if(result[0].gender=="male")
    m="checked";      
  else
    f="checked";   
  res.render("epadmin",{"userDetails":result[0],"m":m,"f":f,"sunm":req.session.sunm,"output":""});
 }).catch((err)=>{
  console.log(err); 
 }); 
});

router.post("/epadmin",(req,res)=>{ 
 AdminController.epAdmin(req.body).then((result)=>{
  res.redirect("/admin/epadmin"); 
 }).catch((err)=>{
  console.log(err);
 });
});

export default router;