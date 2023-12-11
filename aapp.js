const express = require('express');
const collection = require('./mongo');
const bcrypt = require('bcrypt');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', cors(), (req, res) => {});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'saimmalik1809@gmail.com',
    pass: 'wguftgzvptstrhpb',
  },
});

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000);
}

let userOtpMap = {}; // Map to store user email and corresponding OTP

app.post('/send-verification-email', (req, res) => {
  const { email } = req.body;
  const otp = generateOTP();

  // Send email
  const mailOptions = {
    from: 'saimmalik1809@gmail.com',
    to: email,
    subject: 'Verification Code',
    text: `Your verification code is: ${otp}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Error sending email');
    }

    console.log('Email sent: ' + info.response);
    userOtpMap[email] = otp;

    // Respond with the user's email and a success message
    res.status(200).json({ email, message: 'Verification email sent successfully' });
  });
});

app.post('/verify-otp-and-register', (req, res) => {
  const { email, password, otp } = req.body;

  if (userOtpMap[email] && userOtpMap[email].toString() === otp.toString()) {
    console.log("Login")

    res.status(200).send('User registered successfully');
  } else {
    res.status(401).send('Invalid OTP');
  }
});


app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await collection.findOne({ email: email });

    if (user) {
      // Compare the provided password with the stored password hash
      const isPasswordMatch = await bcrypt.compare(password, user.password);

      if (isPasswordMatch) {
        res.json('exist');
      } else {
        res.json('wrongpassword');
      }
    } else {
      res.json('notexist');
      console.log("User Logged In");
    }
  } catch (e) {
    console.error(e);
    res.json('fail');
  }
});

app.post('/signup', async (req, res) => {
  const { firstname, surname, email, password } = req.body;

  try {
    // Check if the email already exists
    const check = await collection.findOne({ email: email });

    if (check) {
      res.json('exist');
    } else {
      // Hash the password before storing it
      const hashedPassword = await bcrypt.hash(password, 10);

      // Store the hashed password in the database
      await collection.insertMany({
        firstname: firstname,
        surname: surname,
        email: email,
        password: hashedPassword,
      });

      res.json('notexist');
      console.log("User Registered");
    }
  } catch (e) {
    console.error(e);
    res.json('fail');
  }
});

app.listen(8000, () => {
  console.log('port connected');
});
