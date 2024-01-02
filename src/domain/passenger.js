// Create a Passenger entity
const createPassenger = (name, contactInfo, passengerId) => {
    return {
      name,
      contactInfo,
      passengerId,
    };
  };
  
  module.exports = {
    createPassenger,
  };