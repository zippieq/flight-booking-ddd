// Create a Flight entity
const createFlight = (flightNumber, departureCity, arrivalCity, departureTime, availableSeats) => {
    return {
      flightNumber,
      departureCity,
      arrivalCity,
      departureTime,
      availableSeats,
    };
  };
  
  module.exports = {
    createFlight,
  };