const Message = require("../models/message.model");

const postMessage = async (req, res, next) => {
  const newMessage = new Message(req.body);
  try {
    const savedMessage = await newMessage.save();
    return res
      .status(200)
      .json({ success: true, message: "Message sent", savedMessage });
  } catch (error) {
    next(error);
  }
};

const getMessages = async (req, res, next) => {
  try {
    const messages = await Message.find({
      conversationId: req.params.conversationId,
    });
    return res.status(200).json({ success: true, messages });
  } catch (error) {
    next(error);
  }
};

const getAllMessages = async (req, res, next) => {
  try {
    const messages = await Message.find();
    return res.status(200).json({ success: true, messages });
  } catch (error) {
    next(error);
  }
};

module.exports = { postMessage, getMessages, getAllMessages };
