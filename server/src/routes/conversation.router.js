const router = require("express").Router();
const Conversation = require("../models/conversation.model");

// New Conversation
router.post("/", async (req, res) => {
  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
  });
  try {
    const savedConversation = await newConversation.save();
    return res.status(200).json({ success: true, savedConversation });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
});

// Find Conversation using anyone userId

router.get("/:userId", async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: { $in: [req.params.userId] },
    });
    if (conversation.length !== 0) {
      return res.status(200).json({ success: true, conversation });
    }
    return res
      .status(500)
      .json({ success: false, message: "No Conversation Found" });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
});

// Find using both userIds

router.get("/:firstUserId/:secondUserId", async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: {
        $all: [req.params.firstUserId, req.params.secondUserId],
      },
    });
    if (conversation.length !== 0) {
      return res.status(200).json({ success: true, conversation });
    }
    return res
      .status(500)
      .json({ success: false, message: "No Conversation Found" });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
});

module.exports = router;
