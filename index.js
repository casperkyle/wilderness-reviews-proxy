const express = require('express');
const axios = require('axios');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/api/reviews', async (req, res) => {
  try {
    const stampedUrl = 'https://stamped.io/api/v2/97592/dashboard/reviews';

    const response = await axios.get(stampedUrl);

    res.status(200).json(response.data);
  } catch (error) {
    console.error('❌ Error fetching reviews:', error.response?.data || error.message);
    res.status(500).send('Error fetching reviews');
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
