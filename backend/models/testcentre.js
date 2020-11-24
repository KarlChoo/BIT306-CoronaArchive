const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator")

//Defines the schema of the collection
const testCentreSchema = mongoose.Schema({
  centreName : {type: String, required: true, unique: true},
  centreManager: {type: String, required: true}
});

testCentreSchema.plugin(uniqueValidator, {message: "Test centre name has been registered"});

module.exports = mongoose.model("TestCentre",testCentreSchema); //Name of collection to insert,update and delete data from
