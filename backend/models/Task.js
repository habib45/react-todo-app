const db = require('../db/connection');
const table = 'tasks';
const validateTask = require('../validators/taskValidation');

const Task = {
  getAllTasks: (callback) => {
    const query = "SELECT * FROM ??";
    db.query(query, [table], callback);
  },
  createTask: (taskData, callback) => {
    const query = 'INSERT INTO tasks (name, details, estimate_time, status) VALUES (?, ?, ?, ?)';
    const values = [taskData.name, taskData.details, taskData.estimateTime, taskData.status];
    db.query(query, values, callback);
  },

};

module.exports = Task;