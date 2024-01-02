const createUser = (name, contactInfo) => {
    // Implement logic to create a user and store in the database
    // Example: return UserModel.create({ name, contactInfo });
  };
  
  const getUserById = (userId) => {
    // Implement logic to fetch a specific user by ID from the database
    // Example: return UserModel.findById(userId);
  };
  
  module.exports = {
    createUser,
    getUserById,
  };