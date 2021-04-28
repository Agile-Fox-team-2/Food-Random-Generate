const router = require("express").Router();
const userRoutes = require("./user");

router.get("/", (req, res) => {
	res.send("Hello world");
});
router.use("/", userRoutes);

module.exports = router;
