const User = require("../Model/userModel");
const generateToken = require("../utils/generateToken");
// register new user
// route /api/users 
//access public

const registerUser = async (req,res) => {
 const { firstName, lastName, email, password, profileImage } =req.body;

 const userExists = await User.findOne({ email });
 if (userExists) {
   return res.status(400).json({ message: "User already exists" });
}
const newUser = await User.create({
  name: `${firstName} ${lastName}`,
  email,
  password,
  profileImage,
});
if (newUser) {
  generateToken(res, newUser._id);
  return res.status(201).json({
    _id: newUser._id,
    name: newUser.name,
    email: newUser.email,
    profileImage: newUser.profileImage,
  });
} else {
  return res.status(400).json({ message: "Invalid User Data" });
}

};

// Login  user
// route Post /api/users/auth
// access Public

const authUser = async (req, res) => {
  const { email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (!userExists) {
    return res.json({ message: "User does not exist" });
  }

  if (userExists && (await userExists.matchedPassword(password))) {
    generateToken(res, userExists._id);
    return res.status(201).json({
      _id: userExists._id,
      name: userExists.name,
      email: userExists.email,
      profileImage: userExists.profileImage,
      role: userExists.role,
    });
  } else {
    return res.status(401).json({ message: "Invalid Email or Passsword" });
  }
};

// Logout  user
// route Post /api/users/logout
// access Private

const logoutUser = async (req, res) => {
  res.cookie("jwt", "");
  return res.status(200).json({ message: "User Logged Out" });
};

module.exports = { registerUser, authUser, logoutUser };
