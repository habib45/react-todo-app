const Task = require('../models/Task');

const getTasks = (req, res) => {
    Task.getAllTasks((err, results) => {
    if (err) {
      console.error('Error fetching task:', err);
      res.status(500).send('Server error');
      return;
    }
    res.json(results);
  });
};

module.exports = { getTasks };