import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createTransport } from 'nodemailer';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const transporter = createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// Email API Route
app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_USER,
    subject: `New message from ${name}`,
    html: `
      <p><strong>${name}</strong> wrote:</p>
      <p>${message}</p>
      <p>Email: ${email}</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
