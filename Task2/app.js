const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the marketplace application.' });
});

const PORT = process.env.PORT || 6969;
app.listen(PORT, () => {
    console.log('Server is running on port 6969');
});