const express = require("express");
const app = express();
const cors = require("cors");
const upload = require("./middleware/imageUpload");

//this middleware is used so we can read incoming json data
app.use(express.json());
app.use(cors());

//the parameter inside the single must match the name of incoming file

app.post("/uploadForm", upload.single("image"), async (req, res) => {
  try {
    let { phone, name, gender } = req.body;
    console.log(
      "request file image will be ",
      name,
      phone,
      gender,
      req.file.path
    );
    return res.json({
      success: true,
      message: "image uploaded sucessfully",
    });
  } catch (error) {
    console.log("inside the error block");
    console.log(error.message);
    return res.json({ success: false, message: error.message });
  }
});
module.exports = app;
