# 🐳 CleanWhale Auth – Full-Stack Authentication System

This is a full-stack authentication project built with **Next.js** (frontend) and **Express.js** (backend). It features secure JWT-based login/signup functionality, robust validation, session handling, and route protection on both the client and server.

The project is organized into two main parts:

- 📦 [`/frontend`](./frontend) – Next.js app using `NextAuth.js` for authentication
- 🔧 [`/backend`](./backend) – Express.js API with MongoDB, JWT, rate limiting, and password hashing

---

## 🧠 Project Approach & Trade-offs

This project implements a secure and modular full-stack authentication system using a custom `CredentialsProvider` in `NextAuth.js` for login and an Express.js backend with MongoDB.

### 🔐 Authentication Strategy

- Chose **JWT-based auth** instead of cookie sessions to keep it stateless and frontend-friendly.
- Tokens are stored and managed by NextAuth.js and sent in authorization headers.
- Passwords are hashed with **argon2** for modern, secure hashing.

### 🛡️ Security Considerations

- Implemented rate limiting (`express-rate-limit`) to protect against brute-force attacks.
- All input is validated using `Zod` on the frontend and `validator` on the backend.
- Password strength is enforced using `zxcvbn`.
- CORS is configured to accept requests only from the frontend origin during development.

### ⚖️ Trade-offs

- No refresh token implementation: JWTs expire in 30 minutes and require re-login. This simplifies token management but doesn't support silent session renewal.
- No email verification or OAuth flows: The focus was on core credential-based auth for simplicity and clarity.
- CSRF protection was not added since JWTs are used in `Authorization` headers, making CSRF attacks infeasible.

The architecture focuses on **clarity**, **security**, and **ease of testing locally**, while remaining flexible for future expansion.

---

## 🚀 Getting Started

To set up the project locally, refer to the individual README files inside each directory:

- [Frontend README →](./frontend/README.md)
- [Backend README →](./backend/README.md)

Each section includes installation instructions, environment variable configuration, and usage details.

---

## 👤 Author

- [Ahmet Talha Ercan (ATErcan)](https://www.github.com/ATErcan)