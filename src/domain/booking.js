// Create a Booking entity
const createBooking = (passenger, flight, seatNumber, bookingStatus) => {
    return {
      passenger,
      flight,
      seatNumber,
      bookingStatus,
    };
  };

  module.exports = {
    createBooking,
  };