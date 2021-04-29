const { authentication, authorization } = require("../middlewares/auth");
const FoodControllers = require("../controllers/FoodControllers");

const router = require("express").Router();

router.get("/random", authentication, FoodControllers.generateRandomFood);
router.get("/", authentication, FoodControllers.read);
router.post("/", authentication, FoodControllers.add);
router.delete("/:id", authentication, authorization, FoodControllers.delete);
router.post("/sendfood", authentication, FoodControllers.sendFood);

module.exports = router;
