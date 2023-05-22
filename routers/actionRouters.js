const express = require("express");
const router = express.Router();




const indexViewControllerAction = require('../controllers/indexControllerAction'); //import kontrolera


router.post('/add', indexViewControllerAction.actionCreate); //dodaje 
router.delete('/delete/:id', indexViewControllerAction.actionDelete);
router.get('/', indexViewControllerAction.allAction); // wyświetla wszystkich 
router.put('/edit/:id', indexViewControllerAction.actionUpdate); // aktualizacja 
router.put('/find/:id', indexViewControllerAction.findAction); // aktualizacja 
module.exports = router; // eksport całości