const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const User = require('../Module/UserModule');

exports.signup = async (req, res) => {
  try {
    const { Name, Number, Emailid, Password, token = uuidv4() } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(Password, 10);

    // Create the user with hashed password
    const newUser = await User.create({
      Name,
      Number,
      Emailid,
      Password: hashedPassword,
      token
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error in signup route:", error);

    // Send a more informative error response
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
};

exports.login = async (req, res) => {
    try {
      const { Emailid, Password } = req.body;
  
      // Find the user by email
      const user = await User.findOne({ Emailid });
  
      // Check if user and password match
      if (user && await bcrypt.compare(Password, user.Password)) {
        // Passwords match, user is authenticated
        res.status(200).json({ message: "Login successful", user });
      } else {  
        // Incorrect email or password
        res.status(401).json({ error: "Unauthorized" });
      }
    } catch (error) {
      console.error("Error in login route:", error);
      res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
  };
