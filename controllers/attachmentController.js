const { TRMDREIMREQUEST } = require("../models");
const fs = require("fs");
const path = require("path");

const searchAttachment = async (req, res, next) => {
  let { reqNo } = req.body;

  try {
    if (!reqNo) {
      res.status(400).json({ message: "Request Number Required" });
    }

    let getFileName = await TRMDREIMREQUEST.findOne({
      where: { request_no: reqNo },
      attributes: ["request_no", "refdoc"],
    });

    if (!getFileName) {
      res.status(404).json({ message: "Request Not Found" });
    }

    if (!getFileName.refdoc) {
      res.status(404).json({ message: "File Not Uploaded" });
    }

    //File disesuaikan dengan yang ada di server/contoh
    let filePath = path.join(
      "D:/theo/aop/17.apiGetDataPortal/file",
      getFileName.refdoc
    );

    if (fs.existsSync(filePath)) {
      res.sendFile(filePath, (err) => {
        if (err) {
          res.status(500).json({ message: `${err.message}` });
        }
      });
    } else {
      res.status(400).json({ message: "File Not Found In Folder" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { searchAttachment };
