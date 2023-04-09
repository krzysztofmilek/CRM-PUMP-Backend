
const User = require('../models/UserModel');


module.exports = {


//Users Endpoint.............................................





    allUsers: (req, res) => {
        console.log(req.query)
        console.log("zapytamie")
        User.find(req.query)
            .lean()
            .exec((err, allUser) => {
                console.log("test")
                if (err) {
                    res.send("Błąd pobrania użykowników");
                }
                res.json(allUser)
            });
    },

    findData: (req, res) => {
        //console.log(req.query)
         User.find(req.query)
         .lean()
         .exec((err, findData) => {
                 if (err) {
                     res.send("Błąd wyszukania");
                 }
         res.json(findData)
      //   console.log(findData)
             });
     },

     create: (req, res) => {
        let newUser = new Uswer(req.body);
        newUser.save();
        res.json(newUser)
    },



    delete: (req, res) => {
        User.findByIdAndDelete(req.params.id).exec((err) => {
            if (err) {
                res.send("Błąd usuwania uzytkownika");
            }

           res.json({deleted:true})
         
        })
    },

    update: (req, res) => {
                User.findByIdAndUpdate(req.params.id, req.body).exec((err, updateUser) => {
         
            if (err) {
                res.send("Błąd aktualizacji");
            }
            res.json(updateUser);
          
        })
    },






}