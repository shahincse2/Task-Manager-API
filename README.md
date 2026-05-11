🚀 Professional Task Manager REST API

এটি একটি ইন্ডাস্ট্রি-স্ট্যান্ডার্ড ব্যাকএন্ড অ্যাপ্লিকেশন যা মূলত টাস্ক ম্যানেজমেন্টের জন্য তৈরি। এতে সিকিউরিটি, ডেটা ইন্টিগ্রিটি এবং স্কেলেবিলিটির ওপর সর্বোচ্চ গুরুত্ব দেওয়া হয়েছে। এটি আমার একাডেমিক রিসার্চ ও প্রফেশনাল ডেভেলপমেন্টের একটি সমন্বিত প্রতিফলন।

✨ মূল ফিচারসমূহ (Key Features)

🔐 Secure Authentication: JWT ব্যবহার করে শক্তিশালী লগইন ও রেজিস্ট্রেশন সিস্টেম।

📧 OTP Verification: ইমেইল ভেরিফিকেশন এবং পাসওয়ার্ড রিকভারির জন্য রিয়েল-টাইম OTP সিস্টেম।

📊 Advanced Pagination: বড় ডেটাসেট হ্যান্ডেল করার জন্য মেমোরি-এফিশিয়েন্ট পেজিনেশন।

🛡️ Multi-Layer Security: * Helmet (HTTP হেডার সিকিউরিটি)

CORS (ক্রস-অরিজিন রিসোর্স শেয়ারিং)

XSS-Clean (ক্রস-সাইট স্ক্রিপ্টিং প্রোটেকশন)

Express-Rate-Limit (ব্রুট-ফোর্স অ্যাটাক প্রতিরোধ)

📝 Task CRUD: প্রফেশনাল টাস্ক ক্রিয়েশন, আপডেট, ফিল্টারিং এবং ডিলিট করার ক্ষমতা।

🛠️ টেকনোলজি স্ট্যাক (Tech Stack)

Runtime: Node.js

Framework: Express.js

Database: MongoDB with Mongoose ODM

Security: Bcrypt (Hashing), JWT (Auth)

Mail Service: Nodemailer (Tested with Mailtrap)

⚙️ কুইক সেটআপ (Setup Guide)

১. রিপোজিটরি ক্লোন করুন:

git clone https://github.com/shahincse2/Task-Manager-API.git
cd Task-Manager-API


২. ডিপেন্ডেন্সি ইনস্টল করুন:

npm install


৩. এনভায়রনমেন্ট সেটআপ (.env):

আপনার মেইন ডিরেক্টরিতে একটি .env ফাইল তৈরি করুন এবং নিচের ফরম্যাটে আপনার ডেটা দিন:

PORT=5000
DATABASE=your_mongodb_uri
JWT_KEY=your_secret_key
EMAIL_HOST=smtp.mailtrap.io
EMAIL_PORT=2525
EMAIL_USER=your_mailtrap_user_id
EMAIL_PASS=your_mailtrap_password


৪. সার্ভার রান করুন:

npm start


📮 এপিআই এন্ডপয়েন্টস (Major Endpoints)

ক্যাটাগরি

মেথড

এন্ডপয়েন্ট

বর্ণনা

Auth

POST

/api/v1/Registration

নতুন ইউজার রেজিস্ট্রেশন

Auth

POST

/api/v1/Login

লগইন ও টোকেন জেনারেট

Tasks

POST

/api/v1/createTask

নতুন টাস্ক তৈরি (Protected)

Tasks

GET

/api/v1/listAllTasks/:pageNo

পেজিনেশন সহ সব টাস্ক দেখা

Recovery

GET

/api/v1/RecoverVerifyEmail/:email

ওটিপি সেন্ড করা

Recovery

GET

/api/v1/RecoverVerifyOtp/:email/:otp

ওটিপি ভেরিফিকেশন

🧪 টেস্টিং উইথ পোস্টম্যান (Postman)

সহজে টেস্ট করার জন্য এই রিপোজিটরিতে থাকা Task Manager API.postman_collection.json ফাইলটি পোস্টম্যানে ইমপোর্ট করে নিন। এতে সব এপিআই রাউট আগে থেকেই কনফিগার করা আছে।

👨‍💻 আমার সম্পর্কে (About Me)

শাহীন আলম M.Sc. Engineering in CSE Student | Flutter Developer | Researcher

© 2026 Shahin Alam. Licensed under the MIT License.