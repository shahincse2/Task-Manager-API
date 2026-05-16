const UsersModel = require('../models/UsersModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Registration
exports.registration = async (req, res) => {
    try {
        let reqBody = req.body;
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
        let user = await UsersModel.findOne({ email: reqBody.email });

        if (user) {
            let match = await bcrypt.compare(reqBody.password, user.password);

            if (match) {
    let Payload = { exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60), data: user.email };
    let token = jwt.sign(Payload, process.env.JWT_KEY);

    let userData = user.toObject();
    delete userData['password'];

    res.status(200).json({ status: "success", token: token, data: userData });
} else {
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
        let data = await UsersModel.findOne({ email: email }).select('-password');
        res.status(200).json({ status: "success", data: data });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
}

// Profile Update
exports.profileUpdate = async (req, res) => {
    try {
        let email = req.email; 
        let reqBody = req.body;

        let user = await UsersModel.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ status: "fail", data: "User not found" });
        }

        Object.assign(user, reqBody);
        let data = await user.save();
        
        let updatedData = data.toObject();
        delete updatedData['password'];

        res.status(200).json({ status: "success", data: updatedData });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
}

const OTPModel = require('../models/OTPModel');
const SendEmailUtility = require('../utility/SendEmailUtility');

// Recover Verify Email
exports.verifyEmail = async (req, res) => {
    try {
        let email = req.params.email;
        let OTPCode = Math.floor(100000 + Math.random() * 900000).toString(); 
        
        let user = await UsersModel.findOne({ email: email });

        if (user) {
            await OTPModel.updateOne(
                { email: email },
                { $set: { otp: OTPCode, status: 0 } },
                { upsert: true }
            );
            await SendEmailUtility(email, "Your PIN Verification Code is: " + OTPCode, "Task Manager PIN Verification");
            res.status(200).json({ status: "success", data: "OTP has been sent to your email account." });
        } else {
            res.status(404).json({ status: "fail", data: "No registered account to this email" });
        }
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
}

// Recover Verify OTP
exports.verifyOtp = async (req, res) => {
    try {
        let email = req.params.email.trim(); 
        let otp = req.params.otp.trim();
        let status = 0;
        let otpData = await OTPModel.findOne({ email: email, otp: otp });

        console.log("Input Data:", { email, otp });
        console.log("Found from DB:", otpData);

        if (otpData) {
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
exports.resetPassword = async (req, res) => {
    let email = req.body['email'];
    let OTPCode = req.body['OTP'];
    let NewPass = req.body['password'];
    let statusUpdate = 1;

    try {
        let otpUsedCount = await OTPModel.aggregate([
            { $match: { email: email, otp: OTPCode, status: statusUpdate } },
            { $count: "total" }
        ]);

        if (otpUsedCount.length > 0) {
            const salt = await bcrypt.genSalt(10);
            let HashPassword = await bcrypt.hash(NewPass, salt);
            await UsersModel.updateOne({ email: email }, { password: HashPassword });
            await OTPModel.deleteOne({ email: email, otp: OTPCode });

            res.status(200).json({ status: "success", data: "Password has been reset Successfully." });
        } else {
            res.status(400).json({ status: "fail", data: "Invalid Request or OTP Expired" });
        }
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
}