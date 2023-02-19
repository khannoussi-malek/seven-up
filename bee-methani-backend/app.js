const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require('./routes/userRoutes')

const cors = require('cors')
const app = express();

mongoose.connect("mongodb+srv://beemethani123:beemethani123@cluster0.ivf6xsc.mongodb.net/?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    app.listen(80, () => {
      console.log("Listening to port 80");
    });
  })
  .catch((err) => console.log(err));


app.use(express.json());
app.use('/users/',userRoutes)
app.use(cors("*"))


