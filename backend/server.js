const express = require("express");
const connectDB = require("./config/db.js");
const app = express();
const port = 4000 || process.env.PORT;
const bodyParser = require("body-parser");

//connect Database
connectDB();

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

//Routes Import
const user = require("./routes/userRoute");
app.use("/api/v1/", user);

app.listen(port, () => {
  console.log(`Server is working on http://localhost:${port}`);
});
