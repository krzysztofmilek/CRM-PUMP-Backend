const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const userRouter = require('./routers/userRouters');
const customerRouter = require('./routers/customerRouters');
const cookieParser = require("cookie-parser");
const authHelper = require('./middlewares/authHelper');

mongoose.connect('mongodb://127.0.0.1:27017/crm_mern');

app.set('view engine', 'jade')
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use("/", /* authHelper, */ userRouter); 
app.use("/customer",/* authHelper,  */customerRouter); 



app.listen(8080, function () {
    console.log("SERWER DZIAŁA");
}
)