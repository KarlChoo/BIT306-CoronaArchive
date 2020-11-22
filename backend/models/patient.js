const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator")

//Defines the schema of the collection
const patientSchema = mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  name: {type: String, required: true},
});

patientSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Patient",patientSchema); //Name of collection to insert,update and delete data from
