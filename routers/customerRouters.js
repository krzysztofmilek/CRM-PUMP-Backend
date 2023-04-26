const express = require("express");
const router = express.Router();
const cors = require("cors");




const indexViewControllerCustomer = require('../controllers/indexControllerCustomer'); //import kontrolera


//Klient endpoint
router.get('/data/', indexViewControllerCustomer.dataNow);
router.get('/findData/?', indexViewControllerCustomer.customerFindData);
router.post('/add', indexViewControllerCustomer.customerCreate); //dodaje Klienta
router.delete('/delete/:id', indexViewControllerCustomer.customerDelete);
router.put('/edit/:id', indexViewControllerCustomer.customerUpdate); 
router.get('/', indexViewControllerCustomer.allCustomers); // wyświetla wszystkich klientów


module.exports = router; // eksport całości