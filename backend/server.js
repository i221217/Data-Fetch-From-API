const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

// API route
app.get('/posts', async (req, res) => {
  try {
    const response = await axios.get('https://dummy-json.mock.beeceptor.com/posts');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log('Backend server running on http://localhost:${PORT}');
});