const express = require("express");
const VideoModel = require('../models/video');
const mongoose = require('mongoose');
const router = express.Router();


//----------------------------------------------------------------
//----------------------------------------------------------------
//All Videos
router.get('', (req, res, next) => {

  VideoModel.find(function(err,videos){
    if(err){
      res.send(err);
    }
    else{
      res.json(videos);
    }
  })

});
//----------------------------------------------------------------
//----------------------------------------------------------------
//Single Video
router.get('/:id', (req, res, next) => {

  console.log('GET: Video by id:' + req.params.id);

  VideoModel.findOne({_id: req.params.id},function(err,video){
    if(err){
      res.send(err);
    }
    else{
      res.json(video);
    }
  });

});
//----------------------------------------------------------------
//----------------------------------------------------------------
//single video Update
router.put('/:id', (req, res, next) => {

  console.log('UPDATE: Video by id: ' + req.params.id);

  var video = req.body;
  var updVideo = {};

  if(video.firstName){
    updVideo.firstName = video.firstName;
  }
  if(video.lastName){
    updVideo.lasttName = video.lastName;
  }
  if(video.email){
    updVideo.email = video.email;
  }
  if(video.password){
    updVideo.password = video.password;
  }
  if(!updVideo){
    res.status(400);
  }else{
    VideoModel.update({_id: req.params.id},updVideo,{},function(err, video){
      if(err){
        res.send(err);
      }
      else{
        res.json(video);
      }
    });
  }
});

//----------------------------------------------------------------
//----------------------------------------------------------------
//Insert Video
router.post('', (req, res, next) => {

  console.log('INSERT: Video by id: ');

  var video = req.body;
  if(!video.title || !video.rating || !video.lenght || !video.genre){
    res.status(400);
    console.log('Bad Data for New Video  INSERT: Video by id: ');
  }
  else{
    VideoModel.save(video,function(err, video){
      if(err){
        res.send(err);
      }
      else{
        res.json(video);
      }
    });
  }

});
//----------------------------------------------------------------
//----------------------------------------------------------------
//Single Video DELETE
router.delete('/:id', (req, res, next) => {


  console.log('DELETE: Video by id:' + req.params.id);

  VideoModel.remove({_id: req.params.id},function(err,video){
    if(err){
      res.send(err);
    }
    else{
      res.json(video);
    }
  });

});

module.exports = router;
