const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(bodyParser.json())

const userRouter = require('./routes/users')
const loginRouter = require('./routes/login')

app.use("/user", userRouter)
app.use("/login", loginRouter)

mongoose.connect("mongodb://127.0.0.1:27017/assignment9", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
}) .then(() => console.log('Connected to MongoDB'))
.catch(err => console.log('Could not connect to MongoDB', err));
app.get("/", (req, res) => {
    res.send("Welcome to Assignment 8 - INFO6150.");
  });
app.listen(8000, () => {
    console.log("Server started at port 8000");
  });


