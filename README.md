AI-powered exam-oriented notes generation platform using MERN Stack, Firebase Google Authentication, JWT-based backend auth, and Stripe integration.
# EXAMNOTESAI
# 📘 ExamNotes AI

ExamNotes AI is a full-stack MERN application that allows students to generate AI-powered exam-oriented notes, project notes, charts, graphs, and downloadable PDFs.

It includes secure Google Authentication (Firebase), JWT-based backend authentication, and credit-based usage management.

---

## 🚀 Features

- 🔐 Google Authentication (Firebase)
- 🛡 JWT-based Backend Authentication
- 🍪 Secure HTTP-only Cookie Session
- 📘 AI-generated Exam Notes
- 📂 Project Documentation Generator
- 📊 Charts & Graph Creation
- ⬇️ Clean PDF Download
- 🎁 50 Free Credits for New Users
- 💳 Stripe Payment Integration (for credit upgrades)

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- Redux Toolkit
- Axios
- Framer Motion
- Firebase Authentication

### Backend
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- JWT
- Cookie-Parser
- CORS

### Authentication Flow
1. User signs in using Google (Firebase)
2. Firebase returns user data
3. Backend creates/fetches user from MongoDB
4. JWT token generated
5. HTTP-only cookie stored
6. Protected routes validated via middleware

---

## 📂 Project Structure

