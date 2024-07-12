const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

const secretKey = process.env.REACT_APP_INTASEND_SECRET_KEY;
const isTestMode = true; //set false for live environment

app.post('/create-payment', async (req, res) => {
  try {
    const { amount, currency, email } = req.body;

    const response = await axios.post(
      'https://payment.intasend.com/api/v1/checkout/',
      {
        amount,
        currency,
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${secretKey}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
