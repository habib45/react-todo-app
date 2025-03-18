const db = require('../db/connection');

const Task = {
  getAllTasks: (callback) => {
    const query = 'SELECT * FROM tasks';
    db.query(query, callback);
  }
};

module.exports = Task;