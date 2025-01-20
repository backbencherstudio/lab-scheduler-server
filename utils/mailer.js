// mailer.js
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "clemsongclab@gmail.com",
    pass: "viif wdtx kslm ztbb",
  },
});

module.exports = transporter;
