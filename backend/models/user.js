const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator")

const userSchema = mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  name: {type: String, required: true},
  position: {type: String, required: false},
  patientType: {type: String, required: false},
  symptoms: {type: String, required: false},
  centreId: {type: String, required: false}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User",userSchema); //Name of collection to insert,update and delete data from
