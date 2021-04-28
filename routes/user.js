const UserControllers = require("../controllers/UserControllers");

const router = require("express").Router();

router.get("/signin", UserControllers.signIn);
router.get("/signout", UserControllers.signOut);
router.get("/register", UserControllers.register);

module.exports = router;
