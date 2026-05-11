const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    let Token = req.headers['token'];
    
    jwt.verify(Token, process.env.JWT_KEY, (err, decoded) => {
        if (err) {
            res.status(401).json({ status: "unauthorized" });
        } else {
            // হেডার এর বদলে সরাসরি req অবজেক্টে ডাটা সেট করুন
            let email = decoded['data'];
            req.email = email; 
            next();
        }
    });
}