const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter Your Name"],
      mixLength: [30, "Name cannot excced 30 Characters"],
      minlength: [4, "Name should have more than 4 Characters"],
    },

    email: {
      type: String,
      required: [true, "Please Enter Your Email"],
      unique: true,
      validate: [validator.isEmail, "Please Enter a valid Email"],
    },
    phoneNumber: {
      type: Number,
      required: [true, "Please Enter Your Phone Number"],
      mixLength: [10, "Phone Number cannot excced 10 Characters"],
      minlength: [4, "Phone Number should have more than 4 Characters"],
    },

    registrationType: {
      type: String,
      required: [true, "Please Select the Registration Type"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
