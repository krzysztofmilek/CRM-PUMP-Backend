var express = require("express");
var router = express.Router();
const multer = require("multer");
const fs = require("fs-extra");
const excelToJson = require("convert-excel-to-json");
const moment = require("moment");
const axios = require("axios")


const uploadCustomerFile = multer({ dest: "public/import/importCustomerFile" });
const upload = multer({ dest: "public/import/importExcelChance/" });
const nameFile = "data.xlsx";

function getGodzina() {
  const today = moment().format("YYYYMMDDHHmmss");
  return today;
}

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
       
    }
  } catch (error) {
    console.error(error)
    //res.status(500);
    console.log("błąd 500");
    return
   
  }
});

router.post("/uploadCustomerFiles", uploadCustomerFile.single("customerFiles"),(req, res) => {

  try {
     if (req.file == null || req.file === "undefined") {
   
      //res.status(500);
      console.log("Brak załącznika");
      return
      
    } else { 
      const newPath = `public/import/importCustomerFile/${
        req.file.originalname
       }`
       fs.rename(req.file.path, newPath);
       res.json("file uploaded!");
      }
      } catch (error) {
      console.error(error)
      //res.status(500);
      console.log("błąd 500");
      return
     
    }


 /*  function (req, res) {
    const newPath = `public/import/importCustomerFile/${
     req.file.originalname
    }`;
    fs.rename(req.file.path, newPath, () => {
      res.json("file uploaded!");
   });
  } */
});





module.exports = router;
