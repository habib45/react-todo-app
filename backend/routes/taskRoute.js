const express = require('express');
const router = express.Router();
const db = require('../db/connection');
const {getTasks, createTask, updateTaskStatus, getTaskCountByStatus} = require('../controllers/taskController');

router.get('/', getTasks);
router.post('/', createTask);
router.put('/:taskId', updateTaskStatus);
router.get('/count-by-status', getTaskCountByStatus); 

module.exports = router;
