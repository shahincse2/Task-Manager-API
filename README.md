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
- MongoDB NoSQL Injection Protection (`express-mongo-sanitize`)
- HTTP Parameter Pollution Protection (`hpp`)
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

### 1️⃣ Prerequisite (ম্যানুয়াল ইনস্টলেশন)
প্রজেক্টটি রান করার আগে আপনার কম্পিউটারে অবশ্যই নিচের সফটওয়্যারগুলো ইনস্টল করা থাকতে হবে:
* **Node.js** (v18 বা তার ওপরের ভার্সন)
* **MongoDB Community Server** (ইনস্টল করার পর সার্ভিসটি চালু রাখুন)
* **MongoDB Compass** (ডাটাবেজ দেখার জন্য)

যদি আপনি উইন্ডোজ ইউজার হন, তবে আলাদাভাবে ওয়েবসাইটে না গিয়ে আপনার **PowerShell (Run as Administrator)** ওপেন করে নিচের কমান্ডগুলো দিয়ে সফটওয়্যারগুলো সরাসরি ইনস্টল করে নিতে পারেন:

```bash
# Install Node.js (LTS)
winget install OpenJS.NodeJS.LTS

```bash
# Install MongoDB Community Server
winget install MongoDB.Server

```bash
# Install MongoDB Compass (GUI)
winget install MongoDB.Compass

*> নোট: ইনস্টলেশন শেষ হলে টার্মিনালটি একবার রিস্টার্ট (বন্ধ করে আবার চালু) করে নিবেন যেন কমান্ডগুলো পিসিতে অ্যাক্টিভেট হয়।*
---

### 2️⃣ Clone Repository & Install Dependencies (অটোমেটিক ইনস্টলেশন)
টার্মিনালে নিচের কমান্ডগুলো দিয়ে প্রজেক্টটি ক্লোন করুন এবং প্রজেক্ট ফোল্ডারে গিয়ে `npm install` রান করুন। এটি `package.json` থেকে প্রয়োজনীয় সব নোড প্যাকেজ অটোমেটিক ইনস্টল করে নেবে:

```bash
git clone [https://github.com/shahincse2/Task-Manager-API.git](https://github.com/shahincse2/Task-Manager-API.git)
cd Task-Manager-API
npm install


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
#### Befor start: উইন্ডোজের services.msc থেকে MongoDB Server টি Start করা আছে কি না দেখে নিন।

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
| POST | `/api/v1/registration` | Register New User |
| POST | `/api/v1/login` | Login & Generate JWT |
| GET | `/api/v1/profileDetails` | Get User Profile |
| PATCH | `/api/v1/profileUpdate` | Update User Profile |

---

## 🔄 Password Recovery Routes

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/api/v1/verifyEmail/:email` | Send OTP To Email |
| GET | `/api/v1/verifyOtp/:email/:otp` | Verify OTP |
| POST | `/api/v1/resetPassword` | Reset Password |

---

## 📝 Task Management Routes

| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | `/api/v1/createTask` | Create New Task |
| GET | `/api/v1/listAllTasks/:pageNo` | Get All Tasks With Pagination |
| GET | `/api/v1/listTaskByStatus/:status` | Get Tasks By Status |
| GET | `/api/v1/searchTask/:keyword` | Search Tasks |
| GET | `/api/v1/taskStatusCount` | Get Task Status Count |
| PATCH | `/api/v1/updateTaskStatus/:id/:status` | Update Task Status |
| DELETE | `/api/v1/deleteTask/:id` | Delete Task |

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
