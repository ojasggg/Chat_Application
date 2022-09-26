const router = require("express").Router();

// Message controller
const {
  postMessage,
  getMessages,
  getAllMessages,
} = require("../controllers/message.controller");

router.post("/", postMessage);
router.get("/get/:conversationId", getMessages);
router.get("/get-all", getAllMessages);

module.exports = router;
