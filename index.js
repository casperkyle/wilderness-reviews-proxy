const express = require('express');
const axios = require('axios');
const app = express();

const PORT = process.env.PORT || 3000;

const PUBLIC_API_KEY = process.env.STAMPED_PUBLIC_KEY;
const PRIVATE_API_KEY = process.env.STAMPED_PRIVATE_KEY;

app.get('/api/reviews', async (req, res) => {
  try {
    const stampedUrl = 'https://api.stamped.io/v2/reviews';

    const response = await axios.get(stampedUrl, {
      auth: {
        username: PUBLIC_API_KEY,
        password: PRIVATE_API_KEY,
      },
      params: {
        limit: 100,         // How many reviews you want
        sort: 'date:desc',  // Newest first
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching reviews:', error.message);
    res.status(500).send('Error fetching reviews');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
