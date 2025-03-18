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

const createTask = (req, res) => {
  const { name, details, estimateTime, status } = req.body;
  if (!name || !details || !estimateTime || !status) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  
  Task.createTask(req.body, (err, result) => {
    if (err) {
      console.error('Error creating task:', err);
      return res.status(500).send('Server error');
    }
    res.status(201).json({ message: 'Task created successfully', taskId: result.insertId });
  });
};

module.exports = { getTasks, createTask};