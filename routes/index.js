const router = require("express").Router();
const userRoutes = require("./user");
const foodRoutes = require("./food");
const { mg } = require("../helpers/mailgun");

router.get("/", (req, res) => {
	res.send("Hello world");
});
router.use("/", userRoutes);
router.use("/foods", foodRoutes);

module.exports = router;
