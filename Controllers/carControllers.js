const Car = require("../Model/car");
//POST
const createCar = async (req, res) => { 
  const{ Brand, Model, Features, Color, ImgUrl, Price, postedBy } = req.body;
 try {
  const car = await Car.create({
    Brand,
    Model,
    Features,
    Color,
    ImgUrl,
    Price,
    postedBy: req.user,
    // postedBy: req.user._id  modifier par Saif 
  });
 return res.json(car);
 } catch (error) {
  console.log(error);
 }
 };
//GET
 const getCars= async(req,res)=>{
  try {
  const cars= await Car.find();
  return res.json(cars);
  } catch (error) {
   console.log(error);
   
  }
 };

 //PUT by id
const updateCar = async (req, res) => {
 try {
   const updatedCar = await Car.findByIdAndUpdate(req.params.id ,req.body);
   return res.json(updatedCar);
 } catch (error) {
   console.log(error);
 }
};
//DELETE by id
const deleteCar = async (req, res) => {
 try {
   const deletedCar = await Car.findByIdAndDelete(req.params.id);
   return  res.json(deletedCar);
 } catch (error) {
   console.log(error);
 }
};


module.exports = { createCar, getCars,updateCar, deleteCar };

