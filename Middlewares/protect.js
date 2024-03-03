/*const jwt = require("jsonwebtoken");
const User = require("../Model/userModel");

const protect = async (req, res, next) => {
 let token;
 token = req.cookies.jwt;
 
 if (token) {
   try {
     const decoded = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
     req.user = await User.findById(decoded.userId).select(
       "-password -createdAt -updatedAt"
     );
     next();
   } catch (error) {
     res.status(401).json({ message: "Not Authorized,Invalid Token" });
   }
 } else {
   res.status(401).json({ message: "Not Authorized,no token" });
 }
};

module.exports = { protect };*/