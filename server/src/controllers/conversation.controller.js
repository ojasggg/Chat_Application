const Conversation = require("../models/conversation.model");

const createConversation = async (req, res) => {
  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
  });
  try {
    const savedConversation = await newConversation.save();
    return res.status(200).json({ success: true, savedConversation });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};

const getSingleIdConversation = async (req, res) => {
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
};

const getBothIdConversation = async (req, res) => {
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
};

module.exports = {
  createConversation,
  getSingleIdConversation,
  getBothIdConversation,
};
