import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import React, { useState } from "react";
import TopBar from "./components/Topbar";
import TaskCreate from "./components/TaskCreate";
import StatusBar from "./components/StatusBar";
import TaskList from "./pages/TaskList";
import TaskProvider from "./pages/TaskContext";

import 'bootstrap/dist/css/bootstrap.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PageLayout = () => {
  // const [showForm, setShowForm] = useState(true);
  return (
    <div className='row bdColor'>
      <ToastContainer position="top-right" autoClose={3000} />
      <TopBar/>
      <div className='row p-5'>
      <StatusBar/>
      <div className='container d-flex'>
      <TaskProvider>
        <TaskList />
        <TaskCreate/>
      </TaskProvider>
      </div>
      </div>
    </div>
  );
};
export default PageLayout;