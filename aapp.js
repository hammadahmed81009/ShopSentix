const express = require('express');
const collection = require('./mongo');
const bcrypt = require('bcrypt');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', cors(), (req, res) => {});

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
    }
  } catch (e) {
    console.error(e);
    res.json('fail');
  }
});

app.listen(8000, () => {
  console.log('port connected');
});
