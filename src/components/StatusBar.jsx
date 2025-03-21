import React, {useState, useEffect } from 'react';
import axios from 'axios';

const StatusBar = () => {

  const [status, setStatus] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
         const response = await axios.get('http://localhost:7000/api/v1/tasks/count-by-status');
         setStatus(response.data);
       } catch (error) {
         console.error('Error fetching tasks:', error);
       }
  };

    return <div className='row p-2'> 
        <div className="col-md-12 d-flex">
        <div className="col-md-2 me-1 bg-secondary rounded-pill p-3 text-white">
          <span className="border border-light rounded-circle p-2">
          { status.reduce((totalCalories, statu) => totalCalories + statu.count, 0)}
            </span> &nbsp;
          All 
        </div>
        {status.map((t,index) => (
          <div key={index} className="col-md-2 me-1 bg-secondary rounded-pill p-3 text-white">
          <span className="border border-light rounded-circle p-2">{t.count}</span> &nbsp;
          {t.status.toUpperCase()}
        </div>
        ))}
        
          <button type="button" className="btn btn-outline-secondary text-green ms-auto">+ Add new task</button>
        </div>
    </div>
  };
  
export default StatusBar;