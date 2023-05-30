require("dotenv").config();

// Db connection
const mongoose = require("mongoose");

module.exports = () => {
   mongoose
     .connect(
       process.env.MONGO_URI,
       { useNewUrlParser: true, useUnifiedTopology: true }
     )
     .catch((e) => console.log("error de conexión", e));
    };