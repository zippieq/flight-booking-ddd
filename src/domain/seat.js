// Create a Seat entity
const createSeat = (seatNumber, booking) => {
    return {
      seatNumber,
      booking,
    };
  };
  
  module.exports = {
    createSeat,
  };