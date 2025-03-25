import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";
import { useSearchParams } from 'react-router-dom';
// import { toast } from "react-toastify";

// Create Context
// eslint-disable-next-line react-refresh/only-export-components
export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status") || "all"; 
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from API when the component mounts
  useEffect(() => {
    fetchTasks(status);
  }, [status]);

  const fetchTasks = async (status) => {
    try {
      const queryParam = status === "all" ? "" : status === "in-progress" ? "in progress" : status;

      const response = await axios.get(`http://localhost:7000/api/v1/tasks?status=${queryParam}`);
         setTasks(response.data);
       } catch (error) {
         console.error('Error fetching tasks:', error);
       }
  };

  // Function to create a new task and refresh the task list
  const addTask = async (taskData) => {
    try {

        const response = await axios.post('http://localhost:7000/api/v1/tasks', taskData);
        if (response.status === 201) {
          toast.success("Task created successfully! 🎉");
          fetchTasks('all');
        }
        } catch (error) {
        console.error('Error saving data:', error);
        toast.error("Failed to create task! ❌");
        }
  };

  const updateTaskStatus = async (taskId, newStatus) => {
    try {
      await axios.put(`http://localhost:7000/api/v1/tasks/${taskId}`, { status: newStatus });
      fetchTasks('all'); // 🔥 Refresh task list after update
    } catch (error) {
      console.error("Error updating task status:", error);
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask , updateTaskStatus}}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
