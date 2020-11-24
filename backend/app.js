const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

//Models
//const Officer = require("./models/officer");
const TestCentre = require("./models/testcentre");
const User = require("./models/user")
const TestKit = require("./models/testkit");

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

    testcentre.save()
    .then(newCentre =>{
      res.status(200).json({
        message: "Centre added successfully",
        centreId: newCentre._id
      });
    })
    .catch(err => {
      res.status(200).json({
        message: "fail",
        centreId: null
      });
    })
})

app.get("/api/getOneTestCentre/:id", (req,res,next)=> {
    TestCentre.findOne({_id:req.params.id})
      .then(testCentre =>{
        res.status(200).json({
          testCentre: testCentre
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

//Tester related API
app.post("/api/register-tester", (req,res,next) => {
  console.log(req.body);
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        username: req.body.username,
        password: hash,
        name: req.body.name,
        position: req.body.position,
        centreId: req.body.centreId
      })

      user.save()
        .then(newTester => {
          res.status(201).json({
            message: "Tester created",
            kitId: newTester._id
          })
      })
      .catch(err => {
          res.status(500).json({
            error: err
          })
      })
    })
})

app.get("/api/testers/:id", (req,res,next) => {
  User.find({position: "tester",centreId: req.params.id}).then((documents) => {
    res.status(200).json({
      message: "post fetched successfully",
      testers: documents
    });
  })
})

app.delete("/api/delete-tester/:id", (req,res,next) => {
  User.deleteOne({_id: req.params.id}).then(result =>{
    res.status(200).json({
      message: "Tester deleted"
    });
  })
  .catch(err => {
    res.status(200).json({
      message: "Delete tester fail"
    });
  })
})

//Test Kit related API
app.post("/api/add-testkit", (req,res,next) => {
    const testKit = new TestKit({
        kitName: req.body.kitName,
        stock: req.body.stock,
        centreId: req.body.centreId
    })
    testKit.save().then(newTestKit => {
        res.status(201).json({
          message: "Test Kit created",
          kitId: newTestKit._id
        })
    })
    .catch(err => {
        res.status(500).json({
          error: err
        })
    })
})

app.get("/api/testkits/:id", (req,res,next) => {
    TestKit.find({centreId:req.params.id}).then((documents) => {
      res.status(200).json({
        message: "post fetched successfully",
        testKits: documents
      });
    })
})

app.put("/api/update-testkit/:id", (req,res,next) => {
    console.log(req.body);
    TestKit.updateOne({_id:req.params.id},{stock:req.body.stock})
    .then(result =>{
      res.status(200).json({
        message: "Test Kit updated"
      });
    })
})

module.exports = app;
