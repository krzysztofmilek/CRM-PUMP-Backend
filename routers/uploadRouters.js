var express = require("express");

var router = express.Router();
const multer = require("multer");
const fs = require("fs-extra");
const excelToJson = require("convert-excel-to-json");
const moment = require("moment");
const axios = require("axios")

const uploadCustomerFile = multer({ dest: "public/import/importCustomerFile" });

const upload = multer({ dest: "public/import/importExcelChance/" });

function getGodzina() {
  const today = moment().format("YYYYMMDDHHmmss");
  return today;
}
const nameFile = "data.xlsx";

router.post("/uploadFiles", upload.single("kolaborant"), (req, res) => {
  try {
    if (req.file == null || req.file === "undefined") {
      console.log("błąd 400 - plik nie istnieje");
      res.status(400).json("Brak Pilku");
      return;
      
       
    } else {
     
      const newPath = `public/import/importExcelChance/${nameFile}`;
      fs.rename(req.file.path, newPath);
      const excelData = excelToJson({
        sourceFile: newPath,
        header: {
          rows: 1,
        },
        columnKey: {
          "*": "{{columnHeader}}",
        },
      });
      res.status(200).json(excelData);
      axios.post("http://localhost:8080/temp/add/",excelData)
      
      console.log(excelData);
      
      

   

     

      //fs.remove(newPath);
      //console.log("usunięto"); jak tu wstawić JSONA do bazy  ......
    }
  } catch (error) {
    console.error(error)
    //res.status(500);
    console.log("błąd 500");
    return
   
  }
});

router.post(
  "/uploadCustomerFiles",
  uploadCustomerFile.single("customerFiles"),
  function (req, res) {
    const newPath = `public/import/importCustomerFile/${getGodzina()}_${
      req.file.originalname
    }`;
    fs.rename(req.file.path, newPath, () => {
      res.json("file uploaded!");
    });
  }
);

module.exports = router;
