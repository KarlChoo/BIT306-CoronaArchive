const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

//Models
const Officer = require("./models/officer");
const TestCentre = require("./models/testcentre");
const User = require("./models/user")

const app = express();

mongoose.connect("mongodb+srv://zulul:TyA3dm8a94XADnUX@cluster0.wpsie.mongodb.net/coronarchive?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected to database")
  })
  .catch(() => {
    console.log("Connection failed to database")
  })

app.use(bodyParser.json());

app.use((req, res, next) =>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, DELETE, OPTIONS, PUT");
  next();
})

//Login related API
app.post("/api/login", (req,res,next) => {
  let fetchedUser;
  User.findOne({username: req.body.username})
    .then(user =>{
      //Find user valdiation
      if(!user){
        return res.status(401).json({
          message: "User not found in database"
        })
      }
      fetchedUser = user

      //console.log(bcrypt.compare(req.body.password, user.password));
      //console.log(user.password === req.body.password);
      return user.password === req.body.password || bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
      if(typeof result === "object") return result;
      //Password wrong
      if(!result){
        return res.status(401).json({
          message: "Auth failed"
        })
      }
      const token = jwt.sign(
        {username: fetchedUser.username, userId: fetchedUser._id},
        "coronarchive", //Crypto Key
        {expiresIn: "1h"}
      )
      res.status(200).json({
        token: token,
        user: fetchedUser
      })
    })
    .catch(err => {
      return res.status(401).json({
        message: "Auth failed"
      })
    })

})

//Test centre related API
app.get("/api/testcentre", (req, res, next)=>{
  TestCentre.find().then(document => {
    res.status(200).json({
      message: "post fetched successfully",
      testCentres: document
    });
  })
})

app.post("/api/testcentre", (req, res, next)=>{
    const testcentre = new TestCentre({
        centreName: req.body.centreName,
        centreManager: req.body.centreManager
    });

    testcentre.save().then(newCentre =>{
      res.status(200).json({
        message: "Centre added successfully",
        centreId: newCentre._id
      });
    })
})

app.put("/api/updateManagerTestCentre/:id", (req,res, next) =>{
    User.updateOne({_id:req.params.id},{centreId: req.body.centreId})
      .then(result =>{
        res.status(200).json({
          message: "User updated"
        });
      })
})

//Officer related API
/*
app.get('/api/login', (req, res, next) =>{
  Officer.find().then((document) =>{
    res.status(200).json({
      message: "Officers fetched successfully",
      officers: document
    });
  })
});
*/

module.exports = app;