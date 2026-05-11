---

### README.md Content

```markdown
# 🚀 Professional Task Manager REST API

একটি শক্তিশালী এবং সিকিউর টাস্ক ম্যানেজমেন্ট ব্যাকএন্ড এপিআই, যা **Node.js**, **Express.js** এবং **MongoDB** দিয়ে তৈরি করা হয়েছে। এই প্রজেক্টটি মূলত একটি প্রফেশনাল স্ট্যান্ডার্ড মেইনটেইন করে তৈরি করা হয়েছে যাতে যে কেউ সহজে এপিআই ইন্টিগ্রেশন শিখতে পারে।

## ✨ মূল ফিচারসমূহ (Key Features)
* **JWT Authentication:** জেসন ওয়েব টোকেন ব্যবহার করে সিকিউর লগইন সিস্টেম।
* **Task CRUD:** টাস্ক তৈরি, পড়া, আপডেট এবং ডিলিট করার সুবিধা।
* **Pagination:** অনেকগুলো টাস্ক একসাথে লোড না করে পেজ অনুযায়ী দেখার সিস্টেম।
* **OTP Verification:** ইমেইলের মাধ্যমে পাসওয়ার্ড রিকভারি এবং ওটিপি ভেরিফিকেশন।
* **Security:** Helmet, CORS, XSS-Clean এবং Rate Limiting ব্যবহার করে ডাটাবেজ ও সার্ভার সুরক্ষিত করা হয়েছে।
* **Password Hashing:** `bcrypt` ব্যবহার করে পাসওয়ার্ড এনক্রিপশন।

## 🛠️ টেকনোলজি স্ট্যাক (Tech Stack)
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Email:** Nodemailer (Tested with Mailtrap)
* **Security:** JWT, Bcrypt, Express-Rate-Limit

## ⚙️ সেটআপ গাইড (Step-by-Step Installation)

আপনার লোকাল সার্ভারে প্রজেক্টটি রান করতে নিচের ধাপগুলো অনুসরণ করুন:

### ১. রিপোজিটরি ক্লোন করুন
```bash
git clone [https://github.com/shahincse2/Task-Manager-API.git](https://github.com/shahincse2/Task-Manager-API.git)
cd Task-Manager-API

```

### ২. ডিপেন্ডেন্সি ইনস্টল করুন

```bash
npm install

```

### ৩. এনভায়রনমেন্ট ভেরিয়েবল সেটআপ (.env)

প্রজেক্টের রুট ডিরেক্টরিতে একটি `.env` ফাইল তৈরি করুন এবং আপনার তথ্যগুলো বসান ( `.env.example` ফাইলটি ফলো করতে পারেন):

```env
PORT=5000
DATABASE=mongodb://127.0.0.1:27017/TaskManager
JWT_KEY=your_secret_key_here
EMAIL_HOST=sandbox.smtp.mailtrap.io
EMAIL_PORT=2525
EMAIL_USER=your_mailtrap_user
EMAIL_PASS=your_mailtrap_password

```

### ৪. প্রজেক্ট রান করুন

```bash
npm start

```

## 📮 এপিআই টেস্টিং (API Testing)

এই রিপোজিটরিতে একটি ফাইল আছে যার নাম **`collection-for-task-manager.json`**।

1. আপনার **Postman** অ্যাপটি ওপেন করুন।
2. **Import** বাটনে ক্লিক করুন।
3. এই ফাইলটি ড্র্যাগ অ্যান্ড ড্রপ করুন।
4. এখন আপনি সহজেই সব রাউট (যেমন: Registration, Login, Create Task) টেস্ট করতে পারবেন।

## 📍 প্রধান এপিআই এন্ডপয়েন্ট (Major Endpoints)

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/api/v1/Registration` | নতুন ইউজার রেজিস্ট্রেশন |
| POST | `/api/v1/Login` | লগইন করে টোকেন সংগ্রহ |
| POST | `/api/v1/createTask` | নতুন টাস্ক তৈরি (Auth Required) |
| GET | `/api/v1/listAllTasks/:pageNo` | পেজিনেশন সহ সব টাস্ক দেখা |
| GET | `/api/v1/taskStatusCount` | কোন স্ট্যাটাসে কয়টি টাস্ক আছে দেখা |

---

## 👨‍💻 কন্ট্রিবিউশন

আপনি যদি এই প্রজেক্টে কোনো পরিবর্তন বা উন্নতি করতে চান, তবে নির্দ্বিধায় **Pull Request** ওপেন করতে পারেন।

**Developed by [Shahin Alam**](https://github.com/shahincse2) *M.Sc. Engineering in CSE Student & Researcher*

```