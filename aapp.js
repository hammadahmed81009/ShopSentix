const express = require('express');
const collection = require('./mongo');
const bcrypt = require('bcrypt');
const cors = require('cors');
const nodemailer = require('nodemailer');
const reviewScrapper = require('./src/backend/scrapper/newScrapper/ReviewScrapper');
const app = express();
const {
  scrapeDarazProducts,
} = require('./src/backend/scrapper/newScrapper/Scrapper');
const { exec } = require('child_process');

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
    res
      .status(200)
      .json({ email, message: 'Verification email sent successfully' });
  });
});

app.post('/verify-otp-and-register', (req, res) => {
  const { email, password, otp } = req.body;

  if (userOtpMap[email] && userOtpMap[email].toString() === otp.toString()) {
    console.log('Login');

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
      console.log('User Logged In');
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
      console.log('User Registered');
    }
  } catch (e) {
    console.error(e);
    res.json('fail');
  }
});

app.post('/search', async (req, res) => {
  const searchQuery = req.body.searchTerm;
  try {
    console.log(searchQuery);
    const rawData = await scrapeDarazProducts(searchQuery);
    console.log('Raw Data:', rawData); // Log to verify the structure

    const productDetails = rawData.values.map((product) => ({
      Title: product.Title,
      URL: product.URL,
      ImageURL: product.ImageURL,
      CurrentPrice: product.CurrentPrice,
      Stars: product.stars,
    }));

    res.json({ products: productDetails });
  } catch (error) {
    console.error('Error during scraping:', error);
    res.status(500).send('Error during scraping');
  }
});

app.post('/scrape-reviews', async (req, res) => {
  const { productUrl } = req.body;
  try {
    console.log('Scrapping Started');
    const reviews = await reviewScrapper.scrapeDarazReviews(productUrl); // Pass productUrl to scraper
    console.log('Scraping Finished');

    // Store the scraped reviews in a variable
    app.locals.reviews = reviews;

    res.status(200).send({ reviews });
  } catch (error) {
    res.status(500).send({ error: 'Failed to start scraping' });
  }
});

const fetch = require('node-fetch');

// Function to calculate the average of predictions
function calculateAveragePredictions(predictions) {
  const averages = Array(predictions[0][1].length).fill(0);

  for (const prediction of predictions) {
    const values = prediction[1];
    for (let i = 0; i < values.length; i++) {
      averages[i] += values[i];
    }
  }

  for (let i = 0; i < averages.length; i++) {
    averages[i] /= predictions.length;
  }

  return averages;
}

app.post('/analyze-reviews', async (req, res) => {
  console.log('ENTERED Analayze Reviews API');
  const { reviews } = req.body;
  const predictions = [];

  try {
    // Process each review
    for (const review of reviews) {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ review }),
      });

      const data = await response.json();
      console.log('Prediction:', data);
      predictions.push(data); // Store the prediction data
    }

    // Calculate average predictions
    const averagePredictions = calculateAveragePredictions(predictions);
    console.log('Average Predictions:', averagePredictions);

    res.status(200).send({ message: 'Reviews analyzed', averagePredictions });
  } catch (error) {
    console.error('Error analyzing reviews:', error);
    res.status(500).send('Error analyzing reviews');
  }
});

const PORT = process.env.PORT || 8000;

app.listen(8000, () => {
  console.log('port connected at 8000');
});
