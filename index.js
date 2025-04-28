const express = require('express');
const axios = require('axios');
const app = express();

const PORT = process.env.PORT || 3000;

const API_KEY = process.env.STAMPED_API_KEY;
const STORE_URL = process.env.STAMPED_STORE_URL;

app.get('/api/reviews', async (req, res) => {
  try {
    const stampedUrl = `https://stamped.io/api/widget/reviews?storeUrl=${STORE_URL}&apiKey=${API_KEY}&limit=100`;
    const response = await axios.get(stampedUrl);

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching reviews:', error.message);
    res.status(500).send('Error fetching reviews');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
