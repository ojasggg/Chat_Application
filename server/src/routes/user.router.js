const router = require("express").Router();

// Importing controllers
const { getSingleUser, getUsers } = require("../controllers/user.controller");

router.get("/single/:_id", getSingleUser);
router.get("/all", getUsers);

module.exports = router;
