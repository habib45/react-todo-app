const express = require('express');
const { getUsers } = require('../controllers/userController');

const router = express.Router();

// API endpoint to get user list
router.get('/', getUsers);

module.exports = router;
