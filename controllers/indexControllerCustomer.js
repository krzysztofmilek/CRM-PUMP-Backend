const Customer = require("../models/CustomerModel");

module.exports = {
  dataNow: (req, res) => {
    const start = new Date().toISOString().replace("T", " ").substring(0, 10);
    let filter = { data: { $lt: start } };
    Customer.find(filter)
      .lean()
      .exec((err, dataGet) => {
        if (err) {
          res.send("Błąd pobrania użykowników");
        }
        res.json(dataGet);
      });
  },

  allCustomers: (req, res) => {
    // console.log(req.query);
    //  console.log("zapytanie");
    Customer.find(req.query)
      .lean()
      .exec((err, allCustomer) => {
        // console.log("test");
        if (err) {
          res.send("Błąd pobrania użykowników");
        }
        res.json(allCustomer);
      });
  },

  customerFindData: (req, res) => {
    //console.log(req.query)
    Customer.find(req.query)
      .lean()
      .exec((err, customerFindData) => {
        if (err) {
          res.send("Błąd wyszukania");
        }
        res.json(customerFindData);
        //   console.log(findData)
      });
  },

  customerCreate: (req, res) => {
   
      let newCustomer = new Customer(req.body);
      newCustomer.save()
      .then(()=>{
        res.json(newCustomer);

      }  ).catch(err => { 
        res.json({error: true});
      });
      //console.log(req.body)
      //res.json(newCustomer);
   
      /* res.json(err);
      console.error(err);
      return; */
   
  },

  customerDelete: (req, res) => {
    Customer.findByIdAndDelete(req.params.id).exec((err) => {
      if (err) {
        res.send("Błąd usuwania uzytkownika");
      }

      res.json({ deleted: true });
    });
  },

  customerUpdate: (req, res) => {
    Customer.findByIdAndUpdate(req.params.id, req.body).exec(
      (err, updateCustomer) => {
        if (err) {
          res.send("Błąd aktualizacji");
        }
        res.json(updateCustomer);
      }
    );
  },
};
