const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Models
//const ;

const app = express();

mongoose.connect("mongodb+srv://zulul:TyA3dm8a94XADnUX@cluster0.wpsie.mongodb.net/coronarchive?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected to database")
  })
  .catch(() => {
    console.log("Connected failed to database")
  })

app.use(bodyParser.json());

app.use((req, res, next) =>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, DELETE, OPTIONS, PUT");
  next();
})

app.use('/api/testcentre',(req, res, next) =>{
  console.log("Test backend");
  const center = [
    {
      centreID: "1",
      centreName: "Setapak"
    },
    {
      centreID: "2",
      centreName: "Kemaman"
    }
  ]

  res.status(200).json({
    message: "ok",
    center: center
  })
})

module.exports = app;
