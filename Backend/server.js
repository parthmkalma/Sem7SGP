require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();
// const multer = require("multer");
// const upload = multer({ dest: "uploads/" });

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

const generateToken = (email) => {
  return jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access Denied. No token provided." });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token." });
    }
    req.email = decoded.email;
    next();
  });
};

app.get("/", (req, res) => {
  res.send("Welcome to OTP Verification Server");
});

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

    // Generate a JWT token
    const token = generateToken(email);
    console.log("OTP verified successfully");
    res.json({ message: "OTP verified successfully", token });
  } else {
    console.log("Invalid OTP");
    res.json({ message: "Invalid OTP" });
  }
});

// Route that requires authentication
// app.get("/protected", verifyToken, (req, res) => {
//   res.json({ message: "This is a protected route", email: req.email });
// });
app.post("/add-appliance", async (req, res) => {
  const { applianceName, monthlyRent, notes } = req.body;

  if (!applianceName || !monthlyRent) {
    return res
      .status(400)
      .send("Appliance name and monthly rent are required.");
  }

  // Save the appliance data to the database
  const appliance = new Appliance({
    name: applianceName,
    monthlyRent,
    notes,
    // Add other fields like images or user info if necessary
  });

  try {
    await appliance.save();
    res.status(201).send("Appliance added successfully.");
  } catch (error) {
    console.error("Error saving appliance:", error);
    res.status(500).send("Failed to save appliance.");
  }
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
