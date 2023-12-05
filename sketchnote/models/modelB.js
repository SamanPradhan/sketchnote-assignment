const mongoose = require("mongoose");

const schemaB = new mongoose.Schema({
  name: String,
  number: Number,
});

const ModelB = mongoose.model("ModelB", schemaB);

module.exports = ModelB;
