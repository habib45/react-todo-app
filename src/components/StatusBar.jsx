import React, { useState, useEffect } from 'react';
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from 'axios';
import Button from 'react-bootstrap/Button';


const StatusBar = ({ toggleForm }) => {

  const [status, setStatus] = useState([]);
  const formatStatus = (status) => status.replace(/\s+/g, "-");

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
      <Link to="/?status=all" className="col-md-2 me-1 bg-secondary rounded-pill p-3 text-white"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <span className="border border-light rounded-circle p-2">
          {status.reduce((totalCalories, statu) => totalCalories + statu.count, 0)}
        </span> &nbsp;
        All
      </Link>

      {status.map((t, index) => (
        <Link to={`/?status=${formatStatus(t.status)}`}
          key={index}
          className="col-md-2 me-1 bg-secondary rounded-pill p-3 text-white"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <span className="border border-light rounded-circle p-2">{t.count}</span> &nbsp;
          {t.status.toUpperCase()}
        </Link>
      ))}

      <Button type="button" 
      onClick={toggleForm}
      className="btn btn-x-small btn-success text-green ms-auto taskAddButton"
      >+ Add new task</Button>
    </div>
  </div>
};

export default StatusBar;