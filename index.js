const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const fs = require("fs");

const userRouter = require('./routers/userRouters');
const customerRouter = require('./routers/customerRouters');
const plainRouter = require('./routers/plainRouters');
const uploadRouter = require('./routers/uploadRouters');
const tempRouter = require('./routers/tempRouters');
const actionRouter = require('./routers/actionRouters');
const moment = require('moment');
moment.locale();   




app.use(express.urlencoded({ extended: false }));
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

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
app.use('/', uploadRouter);
app.use('/temp', tempRouter);
app.use('/action', actionRouter);

/* const getTime = moment().format('YYYYMMDDHHmmss');
console.log(getTime) */
//fs.readFile('localhost:8080/public/import/importCustomerFile/20230522152000_1.docx')

app.listen(8080, function () {
    console.log("SERWER NODE.JS LISTENING ON PORT 8080");
}
)













