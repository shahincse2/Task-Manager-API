const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/UsersController');
const TasksController = require('../controllers/TasksController');
const AuthVerifyMiddleware = require('../middlewares/AuthVerifyMiddleware');

// =============================================================================
// ইউজার রুটস (User Management)
// =============================================================================
router.post("/Registration", UsersController.registration);
router.post("/Login", UsersController.login);
router.get("/ProfileDetails", AuthVerifyMiddleware, UsersController.profileDetails);
router.patch("/ProfileUpdate", AuthVerifyMiddleware, UsersController.profileUpdate); // POST -> PATCH

// পাসওয়ার্ড রিকভারি
router.get("/verifyEmail/:email", UsersController.verifyEmail);
router.get("/verifyOtp/:email/:otp", UsersController.verifyOtp);
router.post("/resetPassword", UsersController.resetPassword);

// =============================================================================
// টাস্ক রুটস (Task Management - RESTful Standard)
// =============================================================================

// ১. টাস্ক তৈরি করা
router.post("/createTask", AuthVerifyMiddleware, TasksController.createTask);

// ২. টাস্ক ডিলিট করা (GET -> DELETE)
router.delete("/deleteTask/:id", AuthVerifyMiddleware, TasksController.deleteTask);

// ৩. টাস্ক স্ট্যাটাস আপডেট করা (GET -> PATCH)
router.patch("/updateTaskStatus/:id/:status", AuthVerifyMiddleware, TasksController.updateTaskStatus);

// ৪. স্ট্যাটাস অনুযায়ী টাস্ক দেখা
router.get("/listTaskByStatus/:status", AuthVerifyMiddleware, TasksController.listTaskByStatus);

// ৫. টাস্কের স্ট্যাটাস কাউন্ট করা
router.get("/taskStatusCount", AuthVerifyMiddleware, TasksController.taskStatusCount);

// ৬. পেজিনেশন সহ সব টাস্ক দেখা
router.get("/listAllTasks/:pageNo", AuthVerifyMiddleware, TasksController.listAllTasks);

// ৭. টাস্ক সার্চ করা
router.get("/searchTask/:keyword", AuthVerifyMiddleware, TasksController.searchTask);

module.exports = router;
