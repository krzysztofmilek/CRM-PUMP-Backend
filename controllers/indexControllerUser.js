//const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");
const bcrypt = require("bcrypt");


module.exports = {
  //Users Endpoint.............................................

  allUsers: (req, res) => {
    User.find(req.query)
      .lean()
      .exec((err, allUser) => {
        if (err) {
          res.send("Błąd pobrania użykowników");
        }
        res.json(allUser);
      });
  },

  findData: (req, res) => {
    User.find(req.query)
      .lean()
      .exec((err, findData) => {
        if (err) {
          res.send("Błąd wyszukania");
        }
        res.json(findData);
      });
  },

  login: (req, res) => {
    User.findOne({ email: req.body.email }).exec((err, user) => {
      if (err) {
        res.send("error");
        return;
      }
      if (!user) {
        res.json({
          error: true,
          message: "Użytkownik nie istnieje",
        });
        return;
      } else {
        bcrypt.compare(req.body.password, user.password, (err, logged) => {
          if (err) {
            res.json({
              error: true,
              message: "Nieprawidłowe dane logowania",
            });
            return;
          }
          if (logged) {
            const token = user.generateAuthToken(user);
            res.json({ name: user.name, jwt: token, access: user.admin });
        
          } else {
            res.json({
              error: true,
               message: "Nieprawidłowe dane logowania",
            });
            return;
          }
        });
      }
    });
  },

  create: (req, res) => {
    let newUser = new User(req.body);
    newUser.save((err) => {
      if (err) {
        res.send("Błąd dodawania użytkownika");
        res.render("users", {
          error: true,
          massage: "Użytkownik istnieje",
          user: req.body,
        });
      } else {
        res.redirect("users");
      }
    });
  },

  

  delete: (req, res) => {
    User.findByIdAndDelete(req.params.id).exec((err) => {
      if (err) {
        res.send("Błąd usuwania uzytkownika");
      }

      res.json({ deleted: true });
    });
  },

  update: (req, res) => {
    User.findById(req.params.id ).exec((err, updateUser) => {
      updateUser.password = req.body.password;
      updateUser.save((err) => {
        if (err) {
          res.send("Błąd aktualizacji");
        }
        res.json(updateUser);
      });
    });
  },
};

/* update: (req, res) => {
  User.findById(req.params.id, req.body).exec((err, updateUser) => {
    updateUser.save((err) => {
      if (err) {
        res.send("Błąd aktualizacji");
      }
      res.json(updateUser);
    });
  });
}, */
