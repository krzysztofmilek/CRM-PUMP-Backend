const Plain = require("../models/PlainModel");

module.exports = {
  allPlains: (req, res) => {
    Plain.find(req.query)
      .lean()
      .exec((err, allPlain) => {
        if (err) {
          res.send("Błąd pobrania danych");
        }
        res.json(allPlain);
      });
  },

  plainCreate: (req, res) => {
    let newPlain = new Plain(req.body);
    newPlain.save();
    console.log(req.body);
    res.json(newPlain);
  },

  plainDelete: (req, res) => {
    Plain.findByIdAndDelete(req.params.id).exec((err) => {
      if (err) {
        res.send("Błąd usuwania danych");
      }

      res.json({ deleted: true });
    });
  },
};
