
# 🛠️ CleanWhale Auth – Backend

This is the backend of a full-stack authentication system built with Express.js and MongoDB. It serves as a secure and scalable API for handling user authentication using JWT-based session management, strong password hashing, and input validation.

## Features

- 🔐 Authentication
  - ✅ Signup and login endpoints (/auth/signup, /auth/local)
  - ✅ JWT-based token generation with 30-minute expiration
  - ✅ Strong password hashing using Argon2
- 🧠 Input validation
  - ✅ Server-side validation using validator and custom rules
  - ✅ Password strength checking with zxcvbn
- 🔐 Security Best Practices
  - ✅ Rate limiting to prevent brute-force attacks
  - ✅ CORS protection restricted to allowed frontend origin
  - ✅ Environment-based config using dotenv
  


## 🛠️ Tech Stack

⚙️ Express.js – Minimalist web framework for Node.js

🌐 MongoDB + Mongoose – NoSQL database with object modeling

🔐 argon2 – Secure password hashing algorithm

🪪 jsonwebtoken – Token-based authentication

🧠 validator – Input sanitization and validation

🧠 zxcvbn – Password strength scoring

🧱 express-rate-limit – Protects against brute-force attacks

🌍 cors – Controls cross-origin access

🧪 dotenv – Loads environment variables from .env
## Installation
Clone the project, go to backend directory and install the dependencies
```bash
  $ git clone https://github.com/ATErcan/clean-whale-task.git

  $ cd backend

  $ npm install
```
Create a .env file by following the Environment Variables section. Run the development server with the command below
```bash
  $ nodemon app

  or
  
  $ node app.js
```
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_URI`

Go to MongoDB create a cluster and a database, get your DB_URI to connect your backend app to your database.

`CLIENT_URL`

CLIENT_URL is the frontend domain. It's necessary for CORS.
```bash
  $ npx auth secret
```

`JWT_SECRET`

Generate a JWT_SECRET key.

`JWT_MAX_AGE`

Decide on the time that jwt token will expire, default 30 minutes

## 🗂️ API Reference

| Method | Route         | Description                    |
|--------|---------------|--------------------------------|
| POST   | `/auth/signup` | Registers a new user returns JWT + user           |
| POST   | `/auth/local`  | Logs in and returns JWT + user |

## Authors

- [@ATErcan](https://www.github.com/ATErcan)
Ahmet Talha Ercan

All codes in this project are written by me.

## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ahmet-talha-ercan/)

