const express = require("express");
const StudentModel = require('../models/student');
const mongoose = require('mongoose');
const router = express.Router();


router.get('', (req, res, next) => {
  StudentModel.find(function(err,students){
    if(err){
      res.send(err);
    }
    res.json(students);
  })

});

router.get('/:id', (req, res, next) => {

  console.log('GET: Student by id:' + req.params.id);
  mongoose.model('')
})

router.put('/:id', (req, res, next) => {

  console.log('UPDATE: Student by id: ' + req.params.id);

  // Implement Mongoose update Student by ID

})
router.post('/:id', (req, res, next) => {

  console.log('UPDATE: Student by id: ' + req.params.id);

  // Implement Mongoose update Student by ID

})

router.delete('/:id', (req, res, next) => {

  console.log('UPDATE: Student by id: ' + req.params.id);

  // Implement Mongoose delete one Student by ID

});

module.exports = router;
