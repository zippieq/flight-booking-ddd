// src/app.js
const express = require('express');
const app = express();
const flightRoutes = require('./routes/flightRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(express.json());

// Add middleware, if necessary

// Use routes
app.use('/api', flightRoutes);
app.use('/api', bookingRoutes);
app.use('/api', userRoutes);

module.exports = app;