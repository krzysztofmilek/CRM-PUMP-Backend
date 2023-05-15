var express = require('express');
var router = express.Router();
const fs = require('fs');
const multer  = require('multer');
const moment = require('moment');

const uploadCustomerFile=multer({ dest: 'public/import/importCustomerFile' })

const upload = multer({ dest: 'public/import/importExcelChance/' })


let getToday = setInterval(getGodzina ,1000);

function getGodzina() {
const today = moment().format('YYYYMMDDHHmmss');
console.log("teraz jest: "+ today)
   }
 

router.post('/uploadFiles', upload.single('kolaborant'), function(req, res, next) {

   const newPath = `public/import/importExcelChance/${getToday}_${req.file.originalname}`;
   fs.rename(req.file.path, newPath, ()=>{ res.json("file uploaded!");
});})


router.post('/uploadCustomerFiles', uploadCustomerFile.single('customerFiles'), function(req, res, next) {

    const newPath = `public/import/importCustomerFile/${getToday}_${req.file.originalname}`;
    fs.rename(req.file.path, newPath, ()=>{ res.json("file uploaded!");
 });});

module.exports = router;

