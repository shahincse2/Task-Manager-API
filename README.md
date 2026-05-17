# 🚀 Professional Task Manager REST API

A secure and scalable Task Management REST API built with Node.js, Express.js, and MongoDB.

This project follows RESTful API principles with secure authentication, OTP verification, task management, pagination, and multi-layer security implementation.

---

## ✨ Features

- 🔐 JWT Authentication System
- 📧 OTP Email Verification & Password Recovery
- 🛡️ Multi-Layer Security
- 📊 Pagination Support
- 📝 Complete Task CRUD Operations
- 🔎 Task Search Functionality
- 📈 Task Status Analytics

---

# 🛠️ Tech Stack

| Technology | Purpose |
|------------|----------|
| Node.js | Runtime Environment |
| Express.js | Backend Framework |
| MongoDB | Database |
| Mongoose | ODM |
| JWT | Authentication |
| Bcrypt | Password Hashing |
| Nodemailer | Email Service |
| Mailtrap | Email Testing |

---

# 🔒 Security Features

- Helmet Security Headers
- CORS Protection
- XSS Protection
- Express Rate Limiting
- JWT Authentication
- Password Hashing using Bcrypt

---

# 📂 Project Structure

```bash
Task-Manager-API/
│
├── controllers/
├── middlewares/
├── models/
├── routes/
├── utility/
├── app.js
├── package.json
└── .env
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/shahincse2/Task-Manager-API.git
cd Task-Manager-API
```

---

## 2️⃣ Install Dependencies

```
npm install express mongoose dotenv bcrypt jsonwebtoken nodemailer cors helmet express-rate-limit xss-clean
```

```
npm install --save-dev nodemon
```

```bash
npm install
```


---

## 3️⃣ Setup Environment Variables

Create a `.env` file in the root directory.

```env
PORT=5000

DATABASE=your_mongodb_uri

JWT_KEY=your_secret_key

EMAIL_HOST=smtp.mailtrap.io
EMAIL_PORT=2525
EMAIL_USER=your_mailtrap_user_id
EMAIL_PASS=your_mailtrap_password
```

---

## 4️⃣ Run The Server

```bash
npm start
```

Server running on:

```bash
http://localhost:5000
```

---

# 📮 API Endpoints

## 🔑 Authentication & User Routes

| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | `/register` | Register New User |
| POST | `/login` | Login & Generate JWT |
| GET | `/profile` | Get User Profile |
| PATCH | `/profile` | Update User Profile |

---

## 🔄 Password Recovery Routes

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/recover-email/:email` | Send OTP To Email |
| GET | `/recover-otp/:email/:otp` | Verify OTP |
| POST | `/reset-password` | Reset Password |

---

## 📝 Task Management Routes

| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | `/tasks` | Create New Task |
| GET | `/tasks/:pageNo` | Get All Tasks With Pagination |
| GET | `/tasks/status/:status` | Get Tasks By Status |
| GET | `/tasks/search/:keyword` | Search Tasks |
| GET | `/tasks-status-count` | Get Task Status Count |
| PATCH | `/tasks/:id/:status` | Update Task Status |
| DELETE | `/tasks/:id` | Delete Task |

---

# 🧪 API Testing With Postman

Import the following file into Postman:

```bash
Task Manager API.postman_collection.json
```

All API routes are pre-configured for testing.

---

# 📈 Future Improvements

- Role-Based Access Control (RBAC)
- Refresh Token Authentication
- Docker Support
- Swagger API Documentation
- Redis Caching
- Unit & Integration Testing
- CI/CD Pipeline

---

# 👨‍💻 Author

## Md. Shahin Alam

- 🎓 M.Sc. Engineering Student in CSE
- 📱 Flutter Developer
- 💻 Backend Developer
- 🔬 Research Enthusiast

---

# 📜 License

This project is licensed under the MIT License.

---

# ⭐ Support

If you like this project, give it a ⭐ on GitHub.

---

© 2026 Md. Shahin Alam. All Rights Reserved.
