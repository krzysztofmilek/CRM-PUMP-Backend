const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt= require("jsonwebtoken");

const UserModel = new mongoose.Schema(
  {
    active: { type: Boolean, require: true },
    admin: { type: Boolean, require: true },
    name: { type: String, require: true },
    password: { type: String, require: true },
    //confirmPassword: { type: String, require: true },
    phone: { type: String, require: true },
    position: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    customers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
      },
    ],
  },
  { timestamps: true }
);


UserModel.pre("save", function (next) {
  const user = this;

  if (!user.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) {
        return next(err);
      }
      user.password = hash;
      return next();
    });
  });
});


UserModel.methods.generateAuthToken = (user) =>{
 const token = jwt.sign({ _id: user._id }, 'secret',{expiresIn: '60'});
 return token;

}
module.exports = mongoose.model("User", UserModel);
