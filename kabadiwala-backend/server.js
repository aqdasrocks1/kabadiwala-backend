const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const pickupRoutes = require('./routes/pickupRoutes');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
  res.send('Kabadiwala API is running');
});

app.use('/api/pickup', pickupRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Kabadiwala API running on port ${PORT}`);
});