import React, { useState, useEffect, useContext } from 'react';
import { TaskContext } from '../pages/TaskContext';

const TaskCreate = () => {
  const { addTask, updateTask, editingTask } = useContext(TaskContext);
  const [task, setTask] = useState({
    name: '',
    details: '',
    estimateTime: '',
    status: 'open'
  });

  // When editingTask changes, populate the form
  useEffect(() => {
    if (editingTask) {
      setTask(editingTask);
    }
  }, [editingTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingTask) {
      await updateTask(1, task); // Update task
    } else {
      await addTask(task); // Add new task
    }
    setTask({ name: '', details: '', estimateTime: '', status: 'open' });
  };

  return <div className='col-md-5 border border-light p-4'>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Task Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={task.name}
          onChange={handleChange}
          placeholder="Task Name Or Title"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Task Details</label>
        <textarea
          className="form-control"
          name="details"
          value={task.details}
          onChange={handleChange}
          placeholder="Task Details"
          required
        ></textarea>
      </div>

      <div className="mb-3">
        <label className="form-label">Estimate Time</label>
        <input
          type="text"
          className="form-control"
          name="estimateTime"
          value={task.estimateTime}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Status</label>
        <select
          className="form-select"
          name="status"
          value={task.status}
          onChange={handleChange}
        >
          <option value="open">Open</option>
          <option value="in progress">In Progress</option>
          <option value="complete">Complete</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">{editingTask ? "Update" : "Submit"}</button>
      {/* <button type="submit" className="btn btn-primary">Submit</button> */}
    </form>

  </div>;
};

export default TaskCreate;