import { useState } from 'react';
//import axios from 'axios';

const SideBar = () => {
    const [task, setTask] = useState({
        name: '',
        details: '',
        estimateTime: '',
        status: 'open'
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
      };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        //const response = await axios.post('https://api.example.com/tasks', task);
        console.log('Data saved:', task);
        } catch (error) {
        console.error('Error saving data:', error);
        }
    };

    return <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Task Name</label>
          <input 
            type="text" 
            className="form-control" 
            name="name" 
            value={task.name} 
            onChange={handleChange} 
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

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>;
  };
  
export default SideBar;