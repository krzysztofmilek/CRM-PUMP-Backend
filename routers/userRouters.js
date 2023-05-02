const express = require("express");
const router = express.Router();
const cors = require("cors");





const indexViewControllerUser = require('../controllers/indexControllerUser'); //import kontrolera

// Users endpoint

router.post('/login/', indexViewControllerUser.login); 
//router.get('/login/', (req,res) => res.render('http://localhost:3000/login'));
router.get('/findData/?', indexViewControllerUser.findData);
router.post('/addUser', indexViewControllerUser.create); //dodaje usera
router.delete('/delete/:id', indexViewControllerUser.delete);
router.get('/allUsers/', indexViewControllerUser.allUsers); // wyświetla wszystkich użytkowników 
router.put('/edit/:id', indexViewControllerUser.update);
router.put('/changePassword/:id', indexViewControllerUser.changePassword);


module.exports = router; // eksport całości