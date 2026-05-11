# 🚀 Professional Task Manager REST API

A secure and scalable Task Management REST API built with Node.js, Express.js, and MongoDB.

This project focuses on industry-standard backend architecture, authentication, security, and efficient data handling. It reflects both academic research and professional backend development practices.

---

## ✨ Features

### 🔐 Secure Authentication
- JWT-based Authentication System
- Secure Login & Registration
- Password Hashing with Bcrypt

### 📧 OTP Verification System
- Email Verification
- Password Recovery using OTP
- Real-time OTP Validation

### 📊 Advanced Pagination
- Efficient handling of large datasets
- Memory-optimized paginated responses

### 🛡️ Multi-Layer Security
- Helmet Security Headers
- CORS Protection
- XSS Protection
- Rate Limiting against brute-force attacks

### 📝 Task Management
- Create Tasks
- Update Tasks
- Delete Tasks
- Filter Tasks
- Paginated Task Listing

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

# 📂 Project Structure

```bash
Task-Manager-API/
│
├── controllers/
├── middleware/
├── models/
├── routes/
├── utility/
├── app.js
├── package.json
└── .env
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone The Repository

```bash
git clone https://github.com/shahincse2/Task-Manager-API.git
cd Task-Manager-API
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Environment Variables Setup

Create a `.env` file in the root directory and add the following:

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

Server running at:

```bash
http://localhost:5000
```

---

# 📮 API Endpoints

## 🔑 Authentication

| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | `/api/v1/Registration` | Register New User |
| POST | `/api/v1/Login` | Login & Generate JWT |

---

## 📝 Tasks

| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | `/api/v1/createTask` | Create New Task |
| GET | `/api/v1/listAllTasks/:pageNo` | Get All Tasks With Pagination |
| POST | `/api/v1/updateTask/:id` | Update Task |
| GET | `/api/v1/deleteTask/:id` | Delete Task |

---

## 🔄 Password Recovery

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/api/v1/RecoverVerifyEmail/:email` | Send OTP |
| GET | `/api/v1/RecoverVerifyOtp/:email/:otp` | Verify OTP |

---

# 🧪 API Testing With Postman

Import the following file into Postman:

```bash
Task Manager API.postman_collection.json
```

All API routes are pre-configured for easy testing.

---

# 🔒 Security Features

- JWT Authentication
- Password Hashing
- Rate Limiting
- XSS Protection
- Secure HTTP Headers
- CORS Security
- Environment Variable Protection

---

# 📈 Future Improvements

- Role-Based Access Control (RBAC)
- Refresh Token Authentication
- Docker Support
- Unit & Integration Testing
- Swagger Documentation
- Redis Caching
- CI/CD Pipeline

---

# 👨‍💻 Author

## Shahin Alam

- M.Sc. Engineering Student in CSE
- Flutter Developer
- Backend Developer
- Research Enthusiast

---

# 📜 License

This project is licensed under the MIT License.

---

# ⭐ Support

If you like this project, don't forget to give it a ⭐ on GitHub.

---

© 2026 Shahin Alam. All Rights Reserved.