const FoodGeneratorControllers = require("../controllers/FoodGeneratorControllers");

const router = require("express").Router();

router.get("/foods", FoodGeneratorControllers.generateRandomFood);

module.exports = router;
