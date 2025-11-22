import Feedback from "../models/feedback.model.js";

// USER create feedback
export const createFeedback = async (req, res) => {
  try {
    console.log("REQ USER =", req.user);
    console.log("BODY =", req.body);
    const { subject, category, message } = req.body;

    const feedback = await Feedback.create({
      user: null,
      subject,
      category,
      message
    });

    res.json({ message: "Feedback terkirim", feedback });
  } catch (err) {
    res.status(500).json({ message: "Error server" });
  }
};

// USER get own feedback
export const getFeedbackByUser = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ message: "Error server" });
  }
};


// ADMIN get all feedback
export const adminGetAllFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().populate("user", "username email").sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ message: "Error server" });
  }
};

// ADMIN reply feedback
export const adminReplyFeedback = async (req, res) => {
  try {
    const { reply } = req.body;

    const feedback = await Feedback.findByIdAndUpdate(
      req.params.id,
      { reply, status: "replied" },
      { new: true }
    );

    res.json({ message: "Reply terkirim", feedback });
  } catch (err) {
    res.status(500).json({ message: "Error server" });
  }
};
