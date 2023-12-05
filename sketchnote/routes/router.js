const express = require("express");
const {
  getAllDocumentsWithReferences,
  createDocumentWithModelA,
  createDocumentWithModelB,
  createDocumentWithModelC,
} = require("../controllers/controller");
const Router = express.Router();

Router.get("/getAllDocuments", getAllDocumentsWithReferences);
Router.post("/createA", createDocumentWithModelA);
Router.post("/createB", createDocumentWithModelB);
Router.post("/createC", createDocumentWithModelC);

module.exports = Router;
