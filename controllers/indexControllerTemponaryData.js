const Temp = require("../models/TemponaryFileModel");

module.exports = {
  allTemp: (req, res) => {
    Temp.find(req.query)
      .lean()
      .exec((err, allPlain) => {
        if (err) {
          res.send("Błąd pobrania danych");
        }
        res.json(allPlain);
      });
  },

  tempCreate: (req, res) => {
    let newTemp = new Temp(req.body);
    newTemp.save();
    console.log(req.body);
    res.json(newTemp);
  },

  tempDelete: (req, res) => {
    Temp.findByIdAndDelete(req.params.id).exec((err) => {
      if (err) {
        res.send("Błąd usuwania danych");
      }

      res.json({ deleted: true });
    });
  },
  
  tempUpdate: (req, res) => {
    Temp.findByIdAndUpdate(req.params.id, req.body).exec(
      (err, updateTemp) => {
        if (err) {
          res.send("Błąd aktualizacji");
        }
        res.json(updateTemp);
      
      }
    );
  },



};
