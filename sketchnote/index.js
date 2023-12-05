const express = require("express");
const cors = require("cors");
const connection = require("./config/db");
const Router = require("./routes/router");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api", Router);

app.listen(port, async () => {
  console.log(`The server is running at localhost : ${port}`);
  try {
    await connection;
    console.log("connected to db");
  } catch (error) {
    console.log("can't connect to db");
  }
});
