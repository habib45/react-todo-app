const Joi = require('joi');

// Define validation schema
const taskSchema = Joi.object({
  name: Joi.string().min(3).max(255).required(),
  details: Joi.string().max(500).optional(),
  estimateTime: Joi.number().positive().precision(2).allow(null),
  status: Joi.string().valid('open','pending', 'in_progress', 'completed').required(),
});

// Function to validate task input
const validateTask = (taskData) => {
  return taskSchema.validate(taskData);
};

module.exports = validateTask;