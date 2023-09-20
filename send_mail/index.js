require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mailRoutes = require('./app/routes/mailRoute');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use the routes
app.use('/mail', mailRoutes);


// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});