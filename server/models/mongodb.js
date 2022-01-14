const mongoose = require("mongoose");
require("dotenv").config()

mongoose
  .connect(process.env.MONGODB_ATLAS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("db running"))
  .catch((err) => console.log(err));

  //connect("mongodb://localhost/mern"