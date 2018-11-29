const express = require("express");
const UserModel = require('../models/user');
const mongoose = require('mongoose');
const router = express.Router();

//----------------------------------------------------------------
//----------------------------------------------------------------
//All Users
router.get('', (req, res, next) => {

  UserModel.find(function(err,users){
    if(err){
      res.send(err);
    }
    else{
      res.json(users);
    }
  })

});
//----------------------------------------------------------------
//----------------------------------------------------------------
//Single User
router.get('/:id', (req, res, next) => {

  console.log('GET: USer by id:' + req.params.id);

  UserModel.findOne({_id: req.params.id},function(err,user){
    if(err){
      res.send(err);
    }
    else{
      res.json(user);
    }
  });

});
//----------------------------------------------------------------
//----------------------------------------------------------------
//single user Update
router.put('/:id', (req, res, next) => {

  console.log('UPDATE: User by id: ' + req.params.id);

  var user = req.body;
  var updUser = {};

  if(user.firstName){
    updUser.firstName = user.firstName;
  }
  if(user.lastName){
    updUser.lasttName = user.lastName;
  }
  if(user.email){
    updUser.email = user.email;
  }
  if(user.password){
    updUser.password = user.password;
  }
  if(!updUser){
    res.status(400);
  }else{
    UserModel.update({_id: req.params.id},updUser,{},function(err, user){
      if(err){
        res.send(err);
      }
      else{
        res.json(user);
      }
    });
  }
});

//----------------------------------------------------------------
//----------------------------------------------------------------
//Insert User
router.post('', (req, res, next) => {

  console.log('INSERT: User by id: ' + req.params.id);

  var user = req.body;
  if(!user.firstName || !user.lastName|| !user.email || !user.password){
    res.status(400);
    console.log('Bad Data for New User  INSERT: User by id: ' + req.params.id);
  }
  else{
    UserModel.save(user,function(err, user){
      if(err){
        res.send(err);
      }
      else{
        res.json(user);
      }
    });
  }

});
//----------------------------------------------------------------
//----------------------------------------------------------------
//Single User DELETE
router.delete('/:id', (req, res, next) => {


  console.log('DELETE: User by id:' + req.params.id);

  UserModel.remove({_id: req.params.id},function(err,user){
    if(err){
      res.send(err);
    }
    else{
      res.json(user);
    }
  });

});

module.exports = router;
