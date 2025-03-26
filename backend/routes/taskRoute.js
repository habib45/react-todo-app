const express = require('express');
const router = express.Router();
const db = require('../db/connection');
const { getTasks, createTask, updateTask, updateTaskStatus, getTaskCountByStatus, deleteTask } = require('../controllers/taskController');

router.get('/', getTasks);
router.post('/', createTask);
router.put('/:taskId', updateTaskStatus);
router.delete('/:taskId', deleteTask);
router.put('/update/:taskId', updateTask);
router.get('/count-by-status', getTaskCountByStatus);

module.exports = router;
