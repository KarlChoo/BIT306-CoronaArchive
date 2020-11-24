const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator")

//Defines the schema of the collection
const testKitSchema = mongoose.Schema({
  kitName:{type: String, required: true},
  stock:{type: Number, required: true},
  centreId:{type: String, required: true}
});

testKitSchema.plugin(uniqueValidator);

module.exports = mongoose.model("TestKit",testKitSchema); //Name of collection to insert,update and delete data from
