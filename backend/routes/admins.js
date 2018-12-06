const express = require("express");
const AdminModel = require('../models/admin');
const mongoose = require('mongoose');
const router = express.Router();
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());


//Log in an Admin
router.post('/', (req, res, next) => {

  console.log('LOG in Attempt reached');

  AdminModel.findOne({ email: req.body.email, password: req.body.password },function(err,admin){
    if(err){
      return res.send(err);
    }
    if (!admin){
      return res.json({"success" : false});
    }
    return res.json({"success" : true});
  });

});

//----------------------------------------------------------------
//----------------------------------------------------------------
//All Admins
router.get('', (req, res, next) => {

  AdminModel.find(function(err,admins){
    if(err){
      res.send(err);
    }
    else{
      res.json(admins);
    }
  })

});
//----------------------------------------------------------------
//----------------------------------------------------------------
//Single Admin
router.get('/:id', (req, res, next) => {

  console.log('GET: Admin by id:' + req.params.id);

  AdminModel.findOne({_id: req.params.id},function(err,admin){
    if(err){
      res.send(err);
    }
    else{
      res.json(admin);
    }
  });

});
//----------------------------------------------------------------
//----------------------------------------------------------------
//single admin Update
router.get('/:id', (req, res, next) => {

  console.log('UPDATE: Admin by id: ' + req.params.id);

  var admin = req.body;
  var updAdmin = {};

  if(admin.firstName){
    updAdmin.firstName = admin.firstName;
  }
  if(admin.lastName){
    updAdmin.lasttName = admin.lastName;
  }
  if(admin.email){
    updAdmin.email = admin.email;
  }
  if(admin.password){
    updAdmin.password = admin.password;
  }
  if(!updAdmin){
    res.status(400);
  }else{
    AdminModel.update({_id: req.params.id},updAdmin,{},function(err, admin){
      if(err){
        res.send(err);
      }
      else{
        res.json(admin);
      }
    });
  }
});

//----------------------------------------------------------------
//----------------------------------------------------------------

//----------------------------------------------------------------
//----------------------------------------------------------------
//Single Admin DELETE
router.delete('/:id', (req, res, next) => {


  console.log('DELETE: Admin by id:' + req.params.id);

  AdminModel.remove({_id: req.params.id},function(err,admin){
    if(err){
      res.send(err);
    }
    else{
      res.json(admin);
    }
  });

});

module.exports = router;
