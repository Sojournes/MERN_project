const Restaurant = require("../models/restaurant");

module.exports.postAddRestaurant = async (req, res, next) => {
  const { image, name, location } = req.body;
  try {
    let newRestaurant = await Restaurant.create({
      image,
      name,
      location,
    });
    res.status(200).json({
      message: "Restaurant added successfully",
      newRestaurant,
    });
  } catch (error) {
    res.status(400).json({ error: "Error adding restaurant" });
  }
};

module.exports.getRestaurants = async (req, res, next) => {
  try {
    let restaurantsList = await Restaurant.find();
    res.status(200).json({
      message: "Restaurants fetched successfully",
      restaurantsList,
    });
  } catch (error) {
    res.status(400).json({ error: "Error fetching restaurants" });
  }
};
