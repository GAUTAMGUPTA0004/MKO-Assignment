require("dotenv").config();
const imaps = require("imap-simple");
const simpleParser = require("mailparser").simpleParser;
const extractDetails = require("./mailExtract");

async function mailInforead() {
  const config = {
    imap: {
      user: process.env.GMAIL_USER,
      password: process.env.GMAIL_PASS,
      host: "imap.gmail.com",
      port: 993,
     tls: true,
    tlsOptions: { rejectUnauthorized: false },
    authTimeout: 10000
    },
  };

  const connection = await imaps.connect({ imap: config.imap });
  await connection.openBox("INBOX");

  const messages = await connection.search(["UNSEEN"], { bodies: [""], markSeen: true });
  if (messages.length === 0) {
    console.log("No unread emails found.");
    return null;
  }

  const raw = messages[0].parts[0].body;
  const parsed = await simpleParser(raw);
  const text = parsed.text;

  
const details = extractDetails(text);
  console.log("Extracted:", details);
  return details;
}

module.exports = mailInforead;
