const jwt = require("jsonwebtoken");

const generateToken = (res, userId) => {
 const token = jwt.sign({ userId }, process.env.JWT_TOKEN_SECRET, {
   expiresIn: "90d",
 });

 res.cookie("jwt", token);
};

module.exports = generateToken;