
# 👤 Next CleanWhale Auth

This is the frontend of a full-stack authentication system built with Next.js (App Router) and NextAuth.js. The application provides a secure and user-friendly way to handle authentication using JWT-based sessions, with full support for form validation, protected routes, and session handling.

## Features

- 🔐 Authentication powered by NextAuth.js
  - ✅ Uses a custom Credentials Provider to authenticate users
  - ✅ JWT-based session management with 30-minute expiration.
  - ✅ Session data includes user ID, email, and access token.
- 🧠 Client-side form validation
  - ✅ All inputs are validated using Zod and React Hook Form.
  - ✅ Passwords are required to be strong and properly structured.
- 🚫 Route protection
  - ✅ Authenticated users are redirected away from /login and /signup.
  - ✅ Unauthenticated users cannot access the main (/) route.
  - ✅ Middleware guards ensure proper access flow.
- 💄 Clean UI structure
  - ✅ Feedback is provided for invalid credentials or failed sign-ins.


## 🛠️ Tech Stack

⚡ Next.js – React-based framework for server-side rendering & static site generation

🎨 Tailwind CSS – Utility-first styling for fast UI development

💡 ShadCN – Pre-styled UI components for a modern look

✅ React Hook Form – Form handling and validation

🛡️ Zod – Schema validation for form inputs

🔒 NextAuth.js – Authentication via Credentials Provider (JWT-based)

🔥 react-hot-toast – User-friendly toast notifications

📦 Axios – Promise-based HTTP client for signup and custom API requests
## Installation
Clone the project, go to frontend directory and install the dependencies
```bash
  $ git clone https://github.com/ATErcan/clean-whale-task.git

  $ cd frontend

  $ npm install
```
Create a .env file by following the Environment Variables section. Run the development server with the command below
```bash
  $ npm run dev
```
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_URL`

API_URL is the backend url. It depends on what port you're running your backend server.

`AUTH_SECRET`

Generate a AUTH_SECRET variable. You can generate it by running the following command.
```bash
  $ npx auth secret
```

## Authors

- [@ATErcan](https://www.github.com/ATErcan)
Ahmet Talha Ercan

All codes in this project are written by me.

## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ahmet-talha-ercan/)
