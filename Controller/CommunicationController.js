const Communication = require('../Module/CommunicationModule');

// Controller to send a communication message (POST request)
exports.sendMessage = async (req, res) => {
  try {
    const { sender, receiver, message } = req.body;

    const communication = new Communication({
      sender,
      receiver,
      message,
    });

    await communication.save();

    res.status(201).json({ message: 'Communication message sent successfully' });
  } catch (error) {
    console.error('Error sending communication message:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
};

// Controller to get communication messages for a specific user (GET request)
exports.getMessages = async (req, res) => {
  try {
    const { userId } = req.params;

    const messages = await Communication.find({ $or: [{ sender: userId }, { receiver: userId }] })
      .populate('sender', 'username') // Assuming User model has a 'username' field
      .populate('receiver', 'username');

    res.status(200).json(messages);
  } catch (error) {
    console.error('Error fetching communication messages:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
};
