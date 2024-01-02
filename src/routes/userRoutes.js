const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/users', userController.createUserController);
router.get('/users/:id', userController.getUserByIdController);

module.exports = router;