const UsersModel = require('../models/UsersModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Registration
// Registration - Updated
exports.registration = async (req, res) => {
    try {
        let reqBody = req.body;
        // এখানে আর bcrypt.hash করার দরকার নেই, কারণ মডেলে pre-save হুক আছে
        let data = await UsersModel.create(reqBody);
        res.status(201).json({ status: "success", data: data });
    } catch (e) {
        if (e.code === 11000) {
            res.status(409).json({ status: "fail", data: "Email already exists" });
        } else {
            res.status(400).json({ status: "fail", data: e.toString() });
        }
    }
}

// Login
exports.login = async (req, res) => {
    try {
        let reqBody = req.body;
        // ১. শুধুমাত্র ইমেইল দিয়ে ইউজারকে খুঁজুন
        let user = await UsersModel.findOne({ email: reqBody.email });

        if (user) {
            // ২. bcrypt.compare দিয়ে চেক করুন
            let match = await bcrypt.compare(reqBody.password, user.password);

            if (match) {
    // ৩. পাসওয়ার্ড মিললে টোকেন জেনারেট করুন
    let Payload = { exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60), data: user.email };
    let token = jwt.sign(Payload, process.env.JWT_KEY);

    // পাসওয়ার্ড ফিল্ডটি রেসপন্স থেকে বাদ দেওয়া (Security Best Practice)
    let userData = user.toObject();
    delete userData['password'];

    res.status(200).json({ status: "success", token: token, data: userData });
} else {
                // পাসওয়ার্ড না মিললে এখানে আসবে
                res.status(401).json({ status: "fail", data: "Wrong Password" });
            }
        } else {
            res.status(401).json({ status: "fail", data: "User Not Found" });
        }
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
}

// Profile Details
exports.profileDetails = async (req, res) => {
    try {
        let email = req.email;
        // .select('-password') দিলে পাসওয়ার্ড ছাড়া বাকি সব ডাটা আসবে
        let data = await UsersModel.findOne({ email: email }).select('-password');
        res.status(200).json({ status: "success", data: data });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
}

// Profile Update
exports.profileUpdate = async (req, res) => {
    try {
        let email = req.email; // মিডলওয়্যার থেকে আসছে
        let reqBody = req.body;

        // ১. ইমেইল দিয়ে ইউজারকে খুঁজে বের করুন
        let user = await UsersModel.findOne({ email: email });

        if (!user) {
            return res.status(404).json({ status: "fail", data: "User not found" });
        }

        Object.assign(user, reqBody);
        let data = await user.save();
        res.status(200).json({ status: "success", data: data });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
}

const OTPModel = require('../models/OTPModel'); // নিশ্চিত করুন এই মডেলটি আপনার আছে
const SendEmailUtility = require('../utility/SendEmailUtility'); // ইমেইল পাঠানোর ইউটিলিটি

// Recover Verify Email
exports.RecoverVerifyEmail = async (req, res) => {
    try {
        let email = req.params.email;
        let OTPCode = Math.floor(100000 + Math.random() * 900000).toString(); 
        
        let user = await UsersModel.findOne({ email: email });

        if (user) {
            // ১. ওটিপি ডাটাবেজে সেভ বা আপডেট করা
            await OTPModel.updateOne(
                { email: email },
                { $set: { otp: OTPCode, status: 0 } },
                { upsert: true }
            );
            
            // ২. ইমেইল পাঠানো (এটি এখন আনকমেন্ট করে দিন যদি ইউটিলিটি রেডি থাকে)
            await SendEmailUtility(email, "Your PIN Verification Code is: " + OTPCode, "Task Manager PIN Verification");

            // ৩. রেসপন্সে ওটিপি না পাঠিয়ে শুধু মেসেজ পাঠানো
            res.status(200).json({ status: "success", data: "OTP has been sent to your email account." });
        } else {
            res.status(404).json({ status: "fail", data: "No registered account to this email" });
        }
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
}

// Recover Verify OTP
exports.RecoverVerifyOtp = async (req, res) => {
    try {
        let email = req.params.email.trim(); 
        let otp = req.params.otp.trim();
        let status = 0;

        // শুধু ইমেইল দিয়ে রেকর্ডটি খুঁজে দেখুন স্ট্যাটাস যাই হোক
        let otpData = await OTPModel.findOne({ email: email, otp: otp });

        console.log("Input Data:", { email, otp });
        console.log("Found from DB:", otpData);

        if (otpData) {
            // যদি আগে থেকেই স্ট্যাটাস ১ থাকে, তার মানে এটি অলরেডি ব্যবহৃত হয়েছে
            if(otpData.status === 1){
                return res.status(400).json({ status: "fail", data: "OTP already used" });
            }

            await OTPModel.updateOne({ _id: otpData._id }, { $set: { status: 1 } });
            res.status(200).json({ status: "success", data: "Verification Success" });
        } else {
            res.status(400).json({ status: "fail", data: "Invalid OTP Code or Email" });
        }
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
}

// Recover Reset Password - Best Practice Version
exports.RecoverResetPassword = async (req, res) => {
    let email = req.body['email'];
    let OTPCode = req.body['OTP'];
    let NewPass = req.body['password'];
    let statusUpdate = 1; // মানে ওটিপি ইতিমধ্যে ভেরিফাইড

    try {
        // ১. চেক করা যে ইমেইল এবং ওটিপি ভেরিফাইড অবস্থায় আছে কি না
        let otpUsedCount = await OTPModel.aggregate([
            { $match: { email: email, otp: OTPCode, status: statusUpdate } },
            { $count: "total" }
        ]);

        if (otpUsedCount.length > 0) {
            // ২. নতুন পাসওয়ার্ড হ্যাশ করা (Security)
            const salt = await bcrypt.genSalt(10);
            let HashPassword = await bcrypt.hash(NewPass, salt);
            
            // ৩. ইউজারের পাসওয়ার্ড আপডেট করা
            await UsersModel.updateOne({ email: email }, { password: HashPassword });

            // ৪. কাজ শেষ হওয়ার পর ওটিপি রেকর্ডটি ডিলিট করে দেওয়া (Best Practice)
            await OTPModel.deleteOne({ email: email, otp: OTPCode });

            res.status(200).json({ status: "success", data: "Password has been reset Successfully." });
        } else {
            res.status(400).json({ status: "fail", data: "Invalid Request or OTP Expired" });
        }
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
}