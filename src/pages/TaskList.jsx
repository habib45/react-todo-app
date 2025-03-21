import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  
  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:7000/api/v1/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);
  

  return <div> 
<div className="card-header">
          {/* <div className="card-tools">
            <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
              <i className="fas fa-minus"></i>
            </button>
            <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
              <i className="fas fa-times"></i>
            </button>
          </div> */}
        </div>
        <div className="card-body p-0">
          <table className="table table-striped projects">
              <thead>
                  <tr>
                      <th> #</th>
                      <th>Task Name</th>
                      <th>Task Progress</th>
                      <th className="text-center"> Status</th>
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody>
              {tasks.map((t) => (
                  <tr  key={t.id}>
                      <td>{t.id}</td>
                      <td>
                          <a><strong>{t.name}</strong></a>
                          <br/>
                          <small>
                          {t.details}
                          </small>
                      </td>
                     
                      <td className="project_progress">
                          <div className="progress progress-sm">
                              <div className="progress-bar bg-green" role="progressbar" aria-valuenow="57" aria-valuemin="0" aria-valuemax="100">
                              </div>
                          </div>
                          <small>
                          {t.estimate_time} Hours
                          </small>
                      </td>
                      <td className="project-state">
                          <span className="badge text-black">{t.status}</span>
                      </td>
                      <td className="project-actions text-right">
                          <a className="btn btn-info btn-sm me-1" href="#">
                              <i className="fas fa-pencil-alt"></i>
                              Edit
                          </a>
                          <a className="btn btn-danger btn-sm" href="#">
                              <i className="fas fa-trash"></i>
                              Delete
                          </a>
                      </td>
                  </tr>
                   ))}
              </tbody>
          </table>
        </div>
  </div>;
  };
  
export default TaskList;