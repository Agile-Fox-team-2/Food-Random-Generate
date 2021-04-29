const { authentication } = require("../middlewares/auth");
const FoodControllers = require("../controllers/FoodControllers");

const router = require("express").Router();

router.get("/random", authentication, FoodControllers.generateRandomFood);
router.get("/", authentication, FoodControllers.read);
router.post("/", authentication, FoodControllers.add);
router.delete("/:id", authentication, FoodControllers.delete);

module.exports = router;
