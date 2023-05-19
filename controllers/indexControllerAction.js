const Action = require("../models/ActionModel");

module.exports = {
  allAction: (req, res) => {
    Action.find(req.query)
      .lean()
      .exec((err, allAction) => {
        if (err) {
          res.send("Błąd pobrania danych");
        }
        res.json(allAction);
      });
  },

  actionCreate: (req, res) => {
    let newAction = new Action(req.body);
    newAction.save();
    console.log(req.body);
    res.json(newAction);
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
