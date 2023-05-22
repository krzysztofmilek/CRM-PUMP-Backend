const Action = require("../models/ActionModel");
const Customer = require("../models/CustomerModel")

module.exports = {
  allAction: (req, res) => {
    Action.find(req.query)
   .populate('customer')
      .lean()
      .exec((err, allAction) => {
        if (err) {
          res.send("Błąd pobrania danych");
        }
        res.json(allAction);
      });
  },

  findAction: (req, res) => {
    Action.findById(req.params.id, req.body)
      .lean()
      .exec((err, findAction) => {
        if (err) {
          res.send("Błąd wyszukania");
        }
        res.json(findAction);
        console.log(findAction)
      });
  },


  actionCreate: (req, res) => {
    let newAction = new Action({ ...req.body, customer: req.body.customer });
    //console.log("RESSSSSSSSSSSSSSSS:", res); 
    newAction.save();
   // const _id = newAction._id;
   console.log("REQQQQQQQQQ id customer: ", req.body.customer)
   Customer.updateOne(
    { _id: req.body.customer},
    { $push: { action: newAction._id } },
  function(err, data){
    console.log(data)
    console.log(err)
  }
  )
    res.json(newAction);
    //console.log(req.body.customer); 
    console.log( "id action:",newAction._id); 
  },

  actionDelete: (req, res) => {
    Action.findByIdAndDelete(req.params.id).exec((err) => {
      if (err) {
        res.send("Błąd usuwania");
      }

      res.json({ deleted: true });
    });
  },
  
  actionUpdate: (req, res) => {
    Action.findByIdAndUpdate(req.params.id, req.body).exec(
      (err, updateAction) => {
        if (err) {
          res.send("Błąd aktualizacji");
        }
        res.json(updateAction);
      
      }
    );
  },



};
