const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// GET /api/comments
app.get('/api/comments', async (req, res) => {
  const limit = req.query.limit || 10; // Default limit is 10 if not provided in query parameter

  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?_limit=${limit}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET /api/posts
app.get('/api/posts', async (req, res) => {
  const limit = req.query.limit || 10; // Default limit is 10 if not provided in query parameter

  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
