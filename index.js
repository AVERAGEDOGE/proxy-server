// Import necessary libraries
const express = require('express');
const cors = require('cors');
const request = require('request');  // To make HTTP requests

// Create an Express app
const app = express();

// Enable CORS to allow your front-end (GitHub Pages) to communicate with this server
app.use(cors());

// Define a proxy endpoint
app.get('/proxy', (req, res) => {
  const url = req.query.url;  // Get the URL from the query string
  
  // If no URL is provided, send an error message
  if (!url) {
    return res.status(400).send('URL is required');
  }

  // Make an HTTP request to the provided URL
  request(url, (error, response, body) => {
    if (error) {
      // Handle any errors that occur during the request
      return res.status(500).send('Error fetching the page');
    }

    // Send the response body back to the client (your front-end)
    res.send(body);
  });
});

// Set the port to the one provided by Railway, or default to 3000 for local testing
const PORT = process.env.PORT || 3000;  
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
