require('dotenv').config(); // সবার উপরে এটি থাকতে হবে

const express = require('express');
const router = require('./src/routes/api');
const app = new express();

// Security Middleware
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

// Database Library
const mongoose = require('mongoose');

// Security Middleware Implementation
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

// Body Parser Implementation (Express-এর ইনবিল্ট ভার্সন ব্যবহার করা ভালো)
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Request Rate Limit
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);

// MongoDB Database Connection
// .env ফাইল থেকে URI নিয়ে আসা হচ্ছে
const URI = process.env.DATABASE; 
const OPTION = { user: '', pass: '', autoIndex: true };

mongoose.connect(URI, OPTION)
    .then(() => {
        console.log("Database Connected Successfully!");
    })
    .catch((err) => {
        console.log("Database Connection Failed: ", err.message);
    });

// Routing Implementation
app.use("/api/v1", router);

// Undefined Route
app.use("*", (req, res) => {
    res.status(404).json({ status: "fail", data: "Not Found" });
});

// Global Error Handler
app.use((err, req, res, next) => {
    res.status(500).json({ status: "error", message: err.message });
});

module.exports = app;