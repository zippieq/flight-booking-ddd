const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flightController');

router.get('/flights', flightController.getAllFlightsController);
router.get('/flights/:id', flightController.getFlightByIdController);

module.exports = router;