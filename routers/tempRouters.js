const express = require("express");
const router = express.Router();





const indexViewControllerTemp = require('../controllers/indexControllerTemponaryData'); //import kontrolera


router.post('/add', indexViewControllerTemp.tempCreate); //dodaje 
router.delete('/delete/:id', indexViewControllerTemp.tempDelete);
router.get('/', indexViewControllerTemp.allTemp); // wyświetla wszystkich 
router.put('/edit/:id', indexViewControllerTemp.tempUpdate); // aktualizacja 


module.exports = router; // eksport całości