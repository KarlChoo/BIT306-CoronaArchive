const mongoose = require("mongoose");

//Defines the schema of the collection
const officerSchema = mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  name: {type: String, required: true},
  position: {type: String, required: true},
});

module.exports = mongoose.model("Officer",officerSchema); //Name of collection to insert,update and delete data from
