const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // এটি ইমপোর্ট করুন

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    firstName: { type: String }, // এই ফিল্ডগুলো কি আছে?
    lastName: { type: String },
    mobile: { type: String }
}, { timestamps: true, versionKey: false });


// ডাটাবেজে সেভ হওয়ার ঠিক আগে পাসওয়ার্ড হ্যাশ করার ফাংশন
userSchema.pre('save', async function () {
    // যদি পাসওয়ার্ড পরিবর্তিত না হয়, তবে কিছু করার দরকার নেই
    if (!this.isModified('password')) return;
    
    // পাসওয়ার্ড হ্যাশ করা হচ্ছে
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    } catch (error) {
        throw new Error(error);
    }
});

const UsersModel = mongoose.model('users', userSchema);
module.exports = UsersModel;