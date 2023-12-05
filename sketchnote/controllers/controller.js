const ModelA = require("../models/modelA");
const ModelB = require("../models/modelB");
const ModelC = require("../models/modelC");

const createDocumentWithModelA = async (req, res) => {
  try {
    const dataA = new ModelA(req.body);
    await dataA.save();
    res
      .status(201)
      .send({ msg: "New  data A is added", ok: true, data: dataA });
  } catch (error) {
    res.status(400).send({ msg: error.message, ok: false });
  }
};
const createDocumentWithModelB = async (req, res) => {
  try {
    console.log(req.body);
    const dataB = new ModelB(req.body);
    await dataB.save();
    res
      .status(201)
      .send({ msg: "New  data B is added", ok: true, data: dataB });
  } catch (error) {
    res.status(400).send({ msg: error.message, ok: false });
  }
};
const createDocumentWithModelC = async (req, res) => {
  try {
    const dataC = new ModelC(req.body);
    await dataC.save();
    res
      .status(201)
      .send({ msg: "New  data C is added", ok: true, data: dataC });
  } catch (error) {
    res.status(400).send({ msg: error.message, ok: false });
  }
};
const getAllDocumentsWithReferences = async (req, res) => {
  try {
    const documents = await ModelA.find().populate("referenceField").exec();
    res.status(201).send({ msg: "all data sent", ok: true, data: documents });
  } catch (error) {
    res.status(400).send({ msg: error.message, ok: false });
  }
};

module.exports = {
  getAllDocumentsWithReferences,
  createDocumentWithModelA,
  createDocumentWithModelB,
  createDocumentWithModelC,
};
