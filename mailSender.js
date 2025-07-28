
require("dotenv").config();
const nodemailer = require("nodemailer");

async function mailSender(details) {
  if (!details) {
    console.log("No details to send.");
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: process.env.FORWARD_TO,
    subject: "Extracted Info",
    text: `Name: ${details.name}\nEmail: ${details.email}\nPhone: ${details.phone}`,
  });

  console.log("Email forwarded!");
}

module.exports = mailSender;

