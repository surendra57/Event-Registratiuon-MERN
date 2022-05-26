const mongoose = require("mongoose");
const DB_URL = "mongodb://127.0.0.1:27017/eventUsers";

const connectDB = () => {
  mongoose
    .connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server :${data.connection.host}`);
    });
};

module.exports = connectDB;
