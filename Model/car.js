const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
Brand: { type: String, required: true },
Model: { type: String },
Features: { type: String},
Color: { type: String},
ImgUrl: {type: String},
Price: {type: String},
postedBy: { type: Object },
});
module.exports= mongoose.model("Car", carSchema);