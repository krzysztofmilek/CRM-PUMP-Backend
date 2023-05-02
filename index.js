const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require('./routers/userRouters');
const customerRouter = require('./routers/customerRouters');
const plainRouter = require('./routers/plainRouters');
const cookieParser = require("cookie-parser");


mongoose.connect('mongodb://127.0.0.1:27017/crm_mern');

app.set('view engine', 'jade')
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use("/",  userRouter); 
app.use("/customer",customerRouter); 
app.use("/plain", plainRouter);



app.listen(8080, function () {
    console.log("SERWER DZIAŁA");
}
)