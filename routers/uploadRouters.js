var express = require("express");
var router = express.Router();
const fs = require("fs");
const multer = require("multer");
const moment = require("moment");

const uploadCustomerFile = multer({ dest: "public/import/importCustomerFile" });

const upload = multer({ dest: "public/import/importExcelChance/" });


function getGodzina() {
  const today = moment().format("YYYYMMDDHHmmss");
return today;
}

router.post(
  "/uploadFiles",
  upload.single("kolaborant"),
  function (req, res) {
    const newPath = `public/import/importExcelChance/${getGodzina()}_${req.file.originalname}`;
    fs.rename(req.file.path, newPath, () => {
      res.json("file uploaded!");
    });
  }
);

router.post(
  "/uploadCustomerFiles",
  uploadCustomerFile.single("customerFiles"),
  function (req, res) {
    const newPath = `public/import/importCustomerFile/${getGodzina()}_${req.file.originalname}`;
    fs.rename(req.file.path, newPath, () => {
      res.json("file uploaded!");
    });
  }
);

module.exports = router;
