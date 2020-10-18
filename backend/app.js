const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) =>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, DELETE, OPTIONS");
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
