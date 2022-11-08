const express = require("express");
const app = express();
const cors = require("cors");
const upload = require("./middleware/imageUpload");
const { uploadForm } = require("./controllers/uploadForm");

//this middleware is used so we can read incoming json data
app.use(express.json());
app.use(cors());

//the parameter inside the single must match the name of incoming file

app.post("/uploadForm", upload.single("image"), uploadForm);

module.exports = app;
