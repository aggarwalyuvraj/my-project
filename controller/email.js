const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {

    const { to, subject, text } = req.body;

    const transporter = nodemailer.createTransport({

        service: "gmail",

        auth: {
            user: "youremail@gmail.com",
            pass: "YOUR_APP_PASSWORD"
        }

    });

    try {

        await transporter.sendMail({

            from: "youremail@gmail.com",
            to,
            subject,
            text

        });

        res.json({
            success: true,
            message: "Email Sent Successfully"
        });

    } catch (err) {

        res.json({
            success: false,
            message: err.message
        });

    }

};

module.exports = { sendMail };