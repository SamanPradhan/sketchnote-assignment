const mongoose = require("mongoose");

const schemaC = new mongoose.Schema({
  name: String,
  number: Number,
});

const ModelC = mongoose.model("ModelC", schemaC);

module.exports = ModelC;
