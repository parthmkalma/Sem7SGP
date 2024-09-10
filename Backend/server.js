require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());

let otpStore = {};

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
app.get("/",(req, res) => {
  res.send("Welcome to OTP Verification Server");
})
app.post("/generate-otp", (req, res) => {
  console.log("Request received for OTP generation");

  const { email } = req.body;
  if (!email) {
    return res.status(400).send("Email is required");
  }

  const otp = crypto.randomInt(100000, 999999).toString();

  otpStore[email.toLowerCase()] = otp;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your OTP for Login",
    text: `Your OTP is ${otp}. It is valid for 5 minutes.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending OTP: ", error);
      return res.status(500).send("Error sending OTP");
    }
    console.log("Email sent: " + info.response);
    res.status(200).send("OTP sent successfully");
  });
});

app.post("/verify-otp", (req, res) => {
  console.log("Request received for OTP verification");

  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).send("Email and OTP are required");
  }

  const storedOtp = otpStore[email.toLowerCase()];
  console.log(`Stored OTP: ${storedOtp}, Provided OTP: ${otp}`);

 if (storedOtp === otp) {
   delete otpStore[email.toLowerCase()];
   console.log("OTP verified successfully");
   res.json({ message: "OTP verified successfully" });
 } else {
   console.log("Invalid OTP");  
   res.json({ message: "Invalid OTP" });
 }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
