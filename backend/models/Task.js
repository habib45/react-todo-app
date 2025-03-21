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

  updateTaskStatus: (taskData, callback) => {
    const query = "UPDATE tasks SET status = ? WHERE id = ?";
    const values = [taskData.status, taskData.taskId];
    db.query(query, values, callback);
  },

  getTaskCountByStatus: (callback) => {  
    const query = 'SELECT status, COUNT(*) as count FROM tasks GROUP BY status';
    db.query(query, callback);
  },

};

module.exports = Task;