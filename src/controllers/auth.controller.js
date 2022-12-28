const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/users');

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await user.save();

    // Generate a JSON web token
    const options = {
      expiresIn: "1d",
    };
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, options);

    // Send the response
    res.json({
      success: true,
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    // Check if the user exists
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Check if the password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(
400).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    // Generate a JSON web token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET,{
      expiresIn: "1d",
    });

    // Send the response
    res.json({
      success: true,
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
