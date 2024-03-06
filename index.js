const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(
  session({
    secret: 'myLongAndSecureSecretKey',
    resave: false,
    saveUninitialized: false,
  })
);

mongoose.connect('mongodb://127.0.0.1:27017/fitness_tracker_app');
mongoose.connection.once('open', () => console.log('Connected to MongoDB'));

// Assuming UserModel is your model, adjust this line accordingly
const UserModel = require('./models/User');

app.use('/api/auth', authRoutes);

// Define your endpoint for fetching users
app.get('/api/users', async (req, res) => {
  try {
    const users = await UserModel.find({}, { _id: 0, __v: 0 }); // Exclude _id and __v from the response
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
