const Task = require('../models/Task');

const getTasks = (req, res) => {
  const { status } = req.query; // Get 'status' from query params
    Task.getAllTasks(status,(err, results) => {
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

const updateTaskStatus = (req, res) => {
  const { taskId } = req.params;
  const { status } = req.body;
  const taskData = { status, taskId }; 

  if (!status) {
    return res.status(400).json({ error: "Status is required" });
  }

  Task.updateTaskStatus(taskData, (err, result) => {
    if (err) {
      console.error("Error updating task status:", err);
      return res.status(500).send("Server error");
    }
    res.json({ message: "Task status updated successfully" });
  });
};

const getTaskCountByStatus = (req, res) => {
  Task.getTaskCountByStatus((err, results) => {
    if (err) {
      console.error("Error fetching task counts:", err);
      return res.status(500).send("Server error");
    }
    res.json(results);
  });
};

module.exports = { getTasks, createTask, updateTaskStatus, getTaskCountByStatus};