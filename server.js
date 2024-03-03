const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const CarRouter = require("./Routes/carRoutes");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const UserRouter = require("./Routes/userRoutes");
mongoose.set("strictQuery",false);

const app =  express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));  
app.use(express.json());
app.use(express.urlencoded({extended: true}));
dotenv.config();
app.use(cookieParser());
mongoose.connect(process.env.MONGO_URL).then(console.log("MONGO Connected"));
const PORT = process.env.PORT || 4000;


app.use("/api/cars", CarRouter);
app.use("/api/users", UserRouter )

app.listen(PORT, () => {
 console.log(`Server is running on ${PORT}`); 
});