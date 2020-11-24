const mongoose = require("mongoose");

//Defines the schema of the collection
const testCentreSchema = mongoose.Schema({
  centreName : {type: String, required: true},
  centreManager: {type: String, required: true}
});

module.exports = mongoose.model("TestCentre",testCentreSchema); //Name of collection to insert,update and delete data from
