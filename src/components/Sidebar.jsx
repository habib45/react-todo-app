import { useState } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";

const SideBar = () => {
    const [task, setTask] = useState({
        name: '',
        details: '',
        estimateTime: '',
        status: 'open'
      });
    
      const handleChange = (e) => {
        console.log(e.target);
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
      };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await axios.post('http://localhost:7000/api/v1/tasks', task);
        console.log('Data saved:', task);
        console.log('Data saved:', response);
        if (response.status === 201) {
          toast.success("Task created successfully! 🎉");
          setTask({ name: '', details: '', estimateTime: '', status: 'open' });
        }
        } catch (error) {
        console.error('Error saving data:', error);
        toast.error("Failed to create task! ❌");
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

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>;
  };
  
export default SideBar;