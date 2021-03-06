const mongoose = require("mongoose");

const testSchema = mongoose.Schema({
  testDate: {type: String, required: true},
  username: {type: String, required: true},
  patientType: {type: String, required: true},
  symptom: {type: String, required: true},
  status: {type: String, required: true},
  result: {type: String, required: false},
  resultDate: {type: String, required: false},
  testerID: {type: String, required: true},
});

module.exports = mongoose.model("Test",testSchema); //Name of collection to insert,update and delete data from
