# Email Processing 

This Node.js application automates the process of reading unread emails from a Gmail account, extracting key information (name, email, and phone number) from the email body, and forwarding these details to a specified email address.

---

## Dependencies Used

The project relies on the following npm packages:

* **dotenv**: To manage environment variables for sensitive information like login credentials.
* **Nodemailer**: For sending emails from your Node.js application.
* **imap-simple**: A simplified wrapper for the `node-imap` library to connect to and interact with an IMAP server.
* **mailparser**: For parsing raw email content into a structured format.

---

## Setup Process

Follow these steps to set up and configure the project on your local machine.

### 1. Clone the Repository
First, clone the project repository to your local machine (or simply download and unzip the files).

```bash
git clone <your-repository-url>
cd <repository-directory>


2. Install Dependencies
Navigate to the project's root directory in your terminal and run the following command to install the necessary packages:

``Bash

npm install


3. Configure Environment Variables
You need to create a .env file in the root of the project directory. This file will store your email credentials and the forwarding address.

Create a file named .env and add the following variables:

GMAIL_USER=your-email@gmail.com
GMAIL_PASS=your-gmail-app-password
FORWARD_TO=forwarding-address@example.com
Important Notes:

GMAIL_USER: The Gmail address the application will use to read and send emails.

GMAIL_PASS: Do not use your regular Gmail password. You must enable 2-Factor Authentication for your Google account and generate an "App Password" to use here.

FORWARD_TO: The email address where the extracted information will be sent.

4. Instructions to Run the Solution
Once you have completed the setup process, you can run the application with the following command in your terminal:

``Bash

node index.js

The script will check for unread emails, process the first one it finds, log the extracted details to the console, and forward them to the specified email address. If no unread emails are found, it will log a message and exit.
