require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // Parses JSON data

app.post("/send-email", async (req, res) => {
    const { name, email, message } = req.body;

    // Nodemailer Transporter
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL, // Your email
            pass: process.env.PASSWORD, // Your email password or App Password
        },
    });

    let mailOptions = {
        from: email,
        to: process.env.EMAIL, // Your email to receive messages
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Email sending failed!", error });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
