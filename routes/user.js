const UserControllers = require("../controllers/UserControllers");

const router = require("express").Router();

router.post("/signin", UserControllers.signIn);
// router.get("/signout", UserControllers.signOut);
router.post("/register", UserControllers.register);
router.post("/googleregister", UserControllers.googleRegister);
router.post("/googlesignin", UserControllers.googleSignIn);

module.exports = router;
