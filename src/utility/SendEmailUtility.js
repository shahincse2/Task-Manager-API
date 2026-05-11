const nodemailer = require('nodemailer');

const SendEmailUtility = async (EmailTo, EmailText, EmailSubject) => {
    try {
        let transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
}
        });

        let mailOptions = {
            from: '"Task Manager Project" <test@taskmanager.com>',
            to: EmailTo,
            subject: EmailSubject,
            text: EmailText
        };

        return await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error("Email Error: ", error);
        throw error;
    }
}

module.exports = SendEmailUtility;