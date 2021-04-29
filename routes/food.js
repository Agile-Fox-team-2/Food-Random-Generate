const { authentication } = require("../middlewares/auth");
const FoodGeneratorControllers = require("../controllers/FoodGeneratorControllers");

const router = require("express").Router();

router.get(
	"/foods",
	authentication,
	FoodGeneratorControllers.generateRandomFood
);

module.exports = router;
