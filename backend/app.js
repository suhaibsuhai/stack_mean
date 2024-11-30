const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const itemRoutes = require('./routes/item.routes');

const app = express();

// MongoDB Configuration: Directly Embedded Connection String
const DB_URL = 'mongodb://mongodb-mean:VlfHGlmF1A2kN1GSM5gJCufbE4SOt4G4NlxATrRrFhlyH12bQIrWeSU59bym3BQmaRIQr5BVRFUeACDbaUFajw==@mongodb-mean.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&replicaSet=globaldb&maxIdleTimeMS=120000';

// Connect to MongoDB
mongoose
  .connect(DB_URL)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection failed:', err));

// Middleware
app.use(cors());
app.use(express.json()); // Parse incoming JSON data

// Set up routes
app.use('/api/items', itemRoutes);

// Define a simple home route
app.get('/', (req, res) => {
  res.send('Welcome to the MERN CRUD API!');
});

// Set the port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
