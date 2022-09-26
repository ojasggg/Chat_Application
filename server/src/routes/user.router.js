const router = require("express").Router();

// Importing controllers
const {
  getSingleUser,
  getUsers,
  deleteUser,
} = require("../controllers/user.controller");

router.get("/single/:_id", getSingleUser);
router.get("/all", getUsers);
router.delete("/delete/:_id", deleteUser);

module.exports = router;
