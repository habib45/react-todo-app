var express = require('express');
const router = express.Router();
const db = require('../db/connection');
const {getTasks} = require('../controllers/taskController');

/* GET task list. */
router.get('/', getTasks);

module.exports = router;
