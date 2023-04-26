const express = require("express");
const app = express();
const cors = require("cors")

const mongoose = require("mongoose");


const userRouter = require('./routers/userRouters');
const customerRouter = require('./routers/customerRouters');


mongoose.connect('mongodb://127.0.0.1:27017/crm_mern');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", userRouter); 
app.use("/customer", customerRouter); 



app.listen(8080, function () {
    console.log("SERWER DZIAŁA");
}
)