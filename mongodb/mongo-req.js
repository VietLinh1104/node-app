const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch'); // Import fetch module for making HTTP requests
const mongoose = require('mongoose');

const router = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/data-user');

// Define MongoDB Schema
const UserSchema = new mongoose.Schema({
  username: String,
  password: String
});

// Create a model from the defined Schema
const User = mongoose.model('User', UserSchema, 'users');

// Use bodyParser to parse JSON data from the client
router.use(bodyParser.json());

// Handle POST requests to '/api/login/push-req'
router.post('/api/database/req', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // Send request to Flask server
    const flaskResponse = await fetch('http://127.0.0.1:8000/api/database/req', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });


    // Check Flask server response
    if (flaskResponse.ok) {
      const data = await flaskResponse.json();
      console.log('Server response:', data);
      res.status(200).json({ success: true, message: 'Data sent to Flask and MongoDB successfully' });
    } else {
      console.error('Error:', flaskResponse.statusText);
      res.status(flaskResponse.status).json({ success: false, message: 'Error sending data to Flask, but data saved to MongoDB' });
    }
  } catch (error) {
    console.error('Error submitting data:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

module.exports = router;
