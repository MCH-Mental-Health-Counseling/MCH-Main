const ChatHistory = require("../chatbot/models/chatHistory");

// Signup route
module.exports = (app) => {
  app.post("/api/message", async (req, res) => {
    const { userId, message, from } = req.body;

    try {
      // Create new message
      msg = new ChatHistory({ userId, message, from });
      // Save user to database
      await msg.save();

      // Return success message
      res.status(201).json({ message: "Message added successfully" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get("/api/message/:id", async (req, res) => {
    try {
      ChatHistory.find({ userId: req.params.id })
        .sort("createdAt")
        .then((data) => {
          if (data) res.status(200).json({ messages: data });
          else {
            res.status(404).json(`Item from user id ${req.params.id} not found.`)
        }
        });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal server error" });
    }
  });
};
