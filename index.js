const express = require('express');
const axios = require('axios');
const app = express();

const PORT = process.env.PORT || 3000;

// Your public key and store domain
const PUBLIC_API_KEY = process.env.STAMPED_PUBLIC_KEY || 'pubkey-egr7k97yFLvwh313dE2vrTVivBmGg4';
const STORE_URL = 'wildernessrvmattress.com';

app.get('/api/reviews', async (req, res) => {
  try {
    const stampedUrl = `https://stamped.io/api/widget/reviews?apiKey=${PUBLIC_API_KEY}&storeUrl=${STORE_URL}&limit=100`;

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
