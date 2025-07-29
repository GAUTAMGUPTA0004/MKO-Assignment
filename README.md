📧 Email Processing – Node.js Application
This Node.js application automates the process of reading unread emails from a Gmail account, extracting key information (Name, Email, and Phone Number) from the email body, and forwarding these details to a specified email address.

📦 Dependencies Used
The project uses the following npm packages:

dotenv: Manages environment variables (e.g., credentials).

nodemailer: Sends emails from your Node.js application.

imap-simple: Simplifies connecting to and interacting with Gmail's IMAP server.

mailparser: Parses raw email content into structured text.

⚙️ Setup Process
1. Clone the Repository
``bash
git clone <https://github.com/GAUTAMGUPTA0004/MKO-Assignment>

cd <MKO-Assignment>


3. Install Dependencies
Install required packages by running:

``bash
npm install


3. Configure Environment Variables
Create a .env file in the root directory of your project and add the following configuration:

.env

GMAIL_USER=your-email@gmail.com
GMAIL_PASS=your-gmail-app-password
FORWARD_TO=forwarding-address@example.com


Important Notes:
GMAIL_USER: Gmail address used to read and send emails.

GMAIL_PASS: App password, not your normal Gmail password.

You must enable 2-Step Verification on your Google account.

Generate an App Password from your Google account settings.

FORWARD_TO: The email address to which extracted data will be forwarded.

▶️ Running the Application
After completing the setup, start the application using:

``bash
node index.js
