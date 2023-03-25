const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");

const app = express();

app.use(bodyParser.json());

const userRouter = require("./routes/user");

app.use("/user", userRouter);

mongoose.connect(
  "mongodb://127.0.0.1:27017/webdesign_assignment8?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false",
  { family: 4 },
  () => {
    console.log("connected to db, starting application");
    app.listen(3000);
    console.log("application started");

    // const user = new User({
    //   fullName: "Nishi Patel",
    //   email: "nishi@gmail.com",
    //   password: "Nishu@123",
    // });

   
  }
);
