const express = require("express");
const router = express.Router();
const cors = require("cors");



//const indexViewController = require('../controllers/indexController'); //import kontrolera
const indexViewControllerUser = require('../controllers/indexControllerUser'); //import kontrolera
const indexViewControllerCustomer = require('../controllers/indexControllerCustomer'); //import kontrolera


//Klient endpoint
router.get('/customer/data/', indexViewControllerCustomer.dataNow);
router.get('/customer/findData/?', indexViewControllerCustomer.customerFindData);
router.post('/customer/add', indexViewControllerCustomer.customerCreate); //dodaje Klienta
router.delete('/customer/delete/:id', indexViewControllerCustomer.customerDelete);
router.put('/customer/edit/:id', indexViewControllerCustomer.customerUpdate); 
router.get('/customers/', indexViewControllerCustomer.allCustomers); // wyświetla wszystkich klientów




// Users endpoint
router.get('/findData/?', indexViewControllerUser.findData);
router.post('/addUser', indexViewControllerUser.create); //dodaje usera
router.delete('/delete/:id', indexViewControllerUser.delete);
router.get('', indexViewControllerUser.allUsers); // wyświetla wszystkich użytkowników 
router.put('/edit/:id', indexViewControllerUser.update);



module.exports = router; // eksport całości