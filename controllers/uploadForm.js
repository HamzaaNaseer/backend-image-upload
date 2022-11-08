exports.uploadForm = async (req, res) => {
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
};
