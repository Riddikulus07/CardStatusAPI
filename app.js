const express = require('express');
const connectDB = require('./config/dbconfig');
const { loadData } = require('./config/data'); // Import loadData function
const cardStatusRoutes = require('./routes/cardRoutes');

const app = express();
const port = 3001;

connectDB();

app.use(express.json());

app.use('/', cardStatusRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    // Load data when the server starts
    loadData(); // Call loadData function
  });