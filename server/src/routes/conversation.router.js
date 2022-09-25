const {
  createConversation,
  getSingleIdConversation,
  getBothIdConversation,
} = require("../controllers/conversation.controller");

const router = require("express").Router();

// New Conversation
router.post("/", createConversation);

// Find Conversation using anyone userId

router.get("/:userId", getSingleIdConversation);

// Find using both userIds

router.get("/:firstUserId/:secondUserId", getBothIdConversation);

module.exports = router;
