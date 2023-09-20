const nodemailer = require('nodemailer');
require('dotenv').config();

const sendMail = async (req, res) => {
    try {
        const { email, subject, message } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            },
            tls: {
                rejectUnauthorized: false // Add this line to bypass SSL certificate validation
            }
        });

        const mailOptions = {
            from: process.env.SMTP_USER,
            to: email,
            subject: subject,
            text: message,
            html: message
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                res.status(500).json({ status: false, message: 'Error sending email' });
            } else {
                console.log('Email sent successfully');
                console.log('Email sent: ' + info.response);
                res.status(200).json({ status: true, message: 'Verification code sent successfully' });
            }
        });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ status: false, message: 'Error sending email' });
    }
}

const contactMail = async (req, res) => {
    try {
        const { email, subject, message } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            },
            tls: {
                rejectUnauthorized: false // Add this line to bypass SSL certificate validation
            }
        });

        const mailOptions = {
            from: email,
            to: process.env.SMTP_USER,
            subject: subject,
            text: message,
            html: message
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                res.status(500).json({ status: false, message: 'Error sending email' });
            } else {
                console.log('Email sent successfully');
                console.log('Email sent: ' + info.response);
                res.status(200).json({ status: true, message: 'Verification code sent successfully' });
            }
        });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ status: false, message: 'Error sending email' });
    }
}

module.exports = { sendMail, contactMail }
