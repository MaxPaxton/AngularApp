const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// *********** Include the Api routes ***********
const studentRoutes = require("./routes/students");
const userRoutes = require("./routes/users");
const adminRoutes = require("./routes/admins");
const videoRoutes = require("./routes/videos");

// *********** Connect to Mongo  ***********
console.log('Attempting to connect to mongoose');

mongoose.connect('mongodb://root:Roos2110@ds037824.mlab.com:37824/assignment',{ useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Mongo database!');
  })
  .catch(err  => {
    console.error('App starting error:', err.stack);
  });

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers',
      'Origin, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, PATCH, DELETE, OPTIONS');

  next();
});

// ******** Setup the Api routes ***********
app.use("/api/students", studentRoutes);
app.use("/api/users", userRoutes);
app.use("/api/admins", adminRoutes);
app.use("/api/videos", videoRoutes);

module.exports = app;
