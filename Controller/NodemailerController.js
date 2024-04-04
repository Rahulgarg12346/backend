const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");

const sendMail = async (req, res) => {
  try {
    const { name, email: userEmail } = req.body; // Rename email variable to userEmail

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'hunugupta1@gmail.com',
        pass: 'wjmlzrkqpjxprmvu'
      }
    });

    // Create a Mailgen instance
    const mailGenerator = new Mailgen({
      theme: "salted",
      product: {
        name: "Your App",
        link: "https://yourapp.com/"
      }
    });

    // Generate an email body
    const emailContent = {
      body: {
        name: name || "User", // Use provided name or default to "User"
        intro: "School management system",
        action: {
          instructions: "To express my regret, please click the link below:",
          button: {
            color: "#FF3838",
            text: "School",
            link: "http://localhost:5000"
          }
        },
        outro: "If you have any further concerns or questions, feel free to reply to this email. I appreciate your understanding."
      }
    };

    // Generate the HTML content
    const emailBody = mailGenerator.generate(emailContent);

    // Send mail with the defined transport object
    let info = await transporter.sendMail({
      from: '"Your App" <yourapp@gmail.com>',
      to: userEmail || "sujalgoyaltechies@gmail.com", 
      subject: " Your App",
      text: "School management system",
      html: emailBody,
    });

    console.log("Message sent: %s", info.messageId);
    res.json(info);
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = sendMail;