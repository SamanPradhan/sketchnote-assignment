const mongoose = require("mongoose");

const schemaA = new mongoose.Schema({
  referenceField: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: "reference",
  },
  reference: {
    type: String,
    required: true,
    enum: ["ModelB", "ModelC"],
  },
  name: String,
  description: String,
});

const ModelA = mongoose.model("ModelA", schemaA);

module.exports = ModelA;
