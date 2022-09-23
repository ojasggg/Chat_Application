const router = require("express").Router();
const Conversation = require("../models/conversation.model");

// New Conversation
router.post("/", async (req, res) => {
  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
  });
  try {
    const savedConversation = await newConversation.save();
    res.status(200).json({ success: true, savedConversation });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});

module.exports = router;
