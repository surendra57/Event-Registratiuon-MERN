const User = require("../model/userModel");

exports.registerUser = async (req, res, next) => {
  try {
    const { name, email, phoneNumber, registrationType } = req.body;

    const user = await User.create({
      name,
      email,
      phoneNumber,
      registrationType,
    });

    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
  }
};
