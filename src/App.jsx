import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import React, { useState } from "react";
import TopBar from "./components/Topbar";
import SideBar from "./components/Sidebar";
import StatusBar from "./components/StatusBar";
import TaskListPage from "./pages/TaskList";

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
      
        <div className='col-md-7 border border-light p-2'>
          <TaskListPage/>
        </div>
        <div className='col-md-5 border border-light p-4'>
        {/* {showForm && <SideBar />} */}
          <SideBar/>
        </div>
      </div>
      </div>
    </div>
  );
};
export default PageLayout;