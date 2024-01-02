const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.post('/bookings', bookingController.bookSeatController);
router.get('/bookings/:passengerId', bookingController.getPassengerBookingsController);

module.exports = router;