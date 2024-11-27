require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();
const mega = require("megajs");
// const multer = require("multer");
// const upload = multer({ dest: "uploads/" });
const multer = require("multer");
const path = require("path");

const storage = new mega.Storage({
  email: "parthmkalma@gmail.com", // Replace with MEGA email
  password: "abcabc@123", // Replace with MEGA password
});
// Initialize multer for a single file
const upload = multer({ storage: storage });

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
// // });
// app.post("/add-appliance", async (req, res) => {
//   const { applianceName, monthlyRent, notes ,} = req.body;

//   if (!applianceName || !monthlyRent) {
//     return res
//       .status(400)
//       .send("Appliance name and monthly rent are required.");
//   }

//   // Save the appliance data to the database
//   const appliance = new Appliance({
//     name: applianceName,
//     monthlyRent,
//     notes,
//     // Add other fields like images or user info if necessary
//   });

//   try {
//     await appliance.save();
//     res.status(201).send("Appliance added successfully.");
//   } catch (error) {
//     console.error("Error saving appliance:", error);
//     res.status(500).send("Failed to save appliance.");
//   }
// });
app.post("/dataStore", upload.single("photo"), async (req, res) => {
  const { applianceName, monthlyRent, notes, userName, userEmail } = req.body;
  const imagePath = req.file.path; // Get the path of the uploaded file

  if (!applianceName || !monthlyRent || !userName || !userEmail) {
    return res
      .status(400)
      .send(
        "Appliance name, monthly rent, user name, and user email are required."
      );
  }

  const appliance = new Appliance({
    applianceName,
    monthlyRent,
    notes,
    userName,
    userEmail,
    images: imagePath, // Store the path of the uploaded image
  });
  console.log(appliance);
  try {
    await appliance.save();
    res.status(201).send("Appliance added successfully.");
  } catch (error) {
    console.error("Error saving appliance:", error);
    res.status(500).send("Failed to save appliance.");
  }
});
app.post("/rent", async (req, res) => {
  const {
    applianceId,
    applianceName,
    monthlyRent,
    notes,
    userName,
    userEmail,
    currentLoginName,
    currentLoginEmail,
  } = req.body;

  // Validate required fields
  if (
    !applianceId ||
    !applianceName ||
    !monthlyRent ||
    !userName ||
    !userEmail ||
    !currentLoginName ||
    !currentLoginEmail
  ) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // Simulate saving to the database
  const rentalEntry = {
    applianceId,
    applianceName,
    monthlyRent,
    notes,
    owner: {
      name: userName,
      email: userEmail,
    },
    renter: {
      name: currentLoginName,
      email: currentLoginEmail,
    },
    rentedAt: new Date().toISOString(),
  };

  console.log("New Rental Entry:", rentalEntry);

  // Email configuration
  const transporter = nodemailer.createTransport({
    service: "gmail", // Use a supported email service
    auth: {
      user: "rentalappliances.project@gmail.com", // Replace with your email
      pass: "rfob otuh rnje uizg", // Replace with your email password or app-specific password
    },
  });

  // Compose the email
  const mailOptions = {
    from: "your-email@example.com", // Sender email
    to: userEmail, // Owner's email
    subject: `Interest in Your Appliance Listing: ${applianceName}`,
    html: `
      <h3>Hello ${userName},</h3>
      <p>${currentLoginName} (${currentLoginEmail}) is interested in renting your appliance <strong>${applianceName}</strong>.</p>
      <p>Here are the details:</p>
      <ul>
        <li><strong>Appliance Name:</strong> ${applianceName}</li>
        <li><strong>Monthly Rent:</strong> $${monthlyRent}</li>
        <li><strong>Renter Name:</strong> ${currentLoginName}</li>
        <li><strong>Renter Email:</strong> ${currentLoginEmail}</li>
      </ul>
      <p>You can contact the renter to proceed further.</p>
      <p>Thank you for using our service!</p>
    `,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully to:", userEmail);

    // Respond with success
    res.status(200).json({
      message: "Appliance rented successfully, email sent to the owner.",
      rental: rentalEntry,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      message: "Appliance rented, but failed to send email to the owner.",
      error: error.message,
    });
  }
});


// Upload endpoint
app.post("/uploaddd", upload.single("file"), (req, res) => {
  const filePath = req.file.path;
  const fileName = req.file.originalname;

  storage.on("ready", () => {
    const uploadStream = storage.upload(fileName);
    fs.createReadStream(filePath).pipe(uploadStream);

    uploadStream.on("complete", () => {
      fs.unlinkSync(filePath); // Remove the local file after upload
      const file = storage.root.children[fileName];
      file.link((err, link) => {
        if (err) {
          res.status(500).json({ error: "Error generating link" });
        } else {
          res.json({ message: "File uploaded successfully", link });
        }
      });
    });

    uploadStream.on("error", (err) => {
      console.error("Error uploading file:", err);
      res.status(500).json({ error: "Upload failed" });
    });
  });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
