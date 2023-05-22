const Action = require("../models/ActionModel");
const Customer = require("../models/CustomerModel")

module.exports = {
  allAction: (req, res) => {
    Action.find(req.query)
  // .populate("name")
      .lean()
      .exec((err, allAction) => {
        if (err) {
          res.send("Błąd pobrania danych");
        }
        res.json(allAction);
      });
  },

  actionCreate: (req, res) => {
    let newAction = new Action({ ...req.body, customer: req.body.customer });
    console.log(req.body.customer); 
    newAction.save();
   // console.log("RESRESRERSRSRSRSRSRSRS: ", req.body.customer)
   Customer.updateOne(
    { _id: req.body.customer},
    { $push: { action: newAction._id } }
  )
    res.json(newAction);
    console.log(req.body.customer); 
    console.log(newAction._id); 
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
