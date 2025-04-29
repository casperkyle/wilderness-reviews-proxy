const express = require('express');
const axios = require('axios');
const app = express();

const PORT = process.env.PORT || 3000;

const PUBLIC_API_KEY = process.env.STAMPED_PUBLIC_KEY;
const PRIVATE_API_KEY = process.env.STAMPED_PRIVATE_KEY;

app.get('/api/reviews', async (req, res) => {
  try {
    const stampedUrl = 'https://stamped.io/api/v2/reviews';

    const response = await axios({
      method: 'get',
      url: stampedUrl,
      auth: {
        username: PUBLIC_API_KEY,
        password: PRIVATE_API_KEY,
      },
      params: {
        limit: 100,
        sort: 'date:desc',
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('❌ Error fetching reviews:', error.response?.data || error.message);
    res.status(500).send('Error fetching reviews');
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
