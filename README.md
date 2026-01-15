# AutoMail API 📧

## What is this?
This is a backend-only service designed to automate email sending. Instead of clicking buttons on a frontend, this API lets you send emails immediately or schedule them for the future using simple HTTP requests.

It's built for developers who want to handle email logic via API calls, free from UI constraints.

## Tech Stack
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB (via Mongoose)
* **Email Engine:** Nodemailer
* **Scheduling:** (Coming soon...)

## Why build this?
I needed a custom, lightweight email service for **Baya**, a real-time polling app I'm building. Instead of relying on rigid third-party tools, I decided to architect a dedicated backend microservice to handle transactional emails and scheduling exactly how I need them.

## How to Run locally

1.  **Clone and Install:**
    ```bash
    npm install
    ```

2.  **Environment Variables:**
    Create a `.env` file in the root and add:
    ```text
    PORT=3000
    MONGO_URI=your_mongodb_connection_string
    EMAIL_USER=your_email@gmail.com
    EMAIL_PASS=your_app_password
    ```

3.  **Start Server:**
    ```bash
    npm start
    ```

## Roadmap
- [x] Project Setup & Database Connection
- [x] Email Schema Design
- [ ] Email Sending Logic (Nodemailer)
- [ ] Scheduling Logic (Cron jobs)
- [ ] API Endpoints