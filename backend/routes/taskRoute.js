const express = require('express');
const router = express.Router();
const db = require('../db/connection');
const {getTasks, createTask} = require('../controllers/taskController');

router.get('/', getTasks);
router.post('/', createTask);

module.exports = router;
