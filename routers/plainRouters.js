const express = require("express");
const router = express.Router();




const indexViewControllerPlain = require('../controllers/indexControllerPlain'); //import kontrolera


router.post('/add', indexViewControllerPlain.plainCreate); //dodaje 
router.delete('/delete/:id', indexViewControllerPlain.plainDelete);
router.get('/', indexViewControllerPlain.allPlains); // wyświetla wszystkich 


module.exports = router; // eksport całości