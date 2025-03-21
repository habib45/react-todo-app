import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";

// Create Context
// eslint-disable-next-line react-refresh/only-export-components
export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from API when the component mounts
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
         const response = await axios.get('http://localhost:7000/api/v1/tasks');
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
          fetchTasks();
        }
        } catch (error) {
        console.error('Error saving data:', error);
        toast.error("Failed to create task! ❌");
        }
  };

  const updateTaskStatus = async (taskId, newStatus) => {
    try {
      await axios.put(`http://localhost:7000/api/v1/tasks/${taskId}`, { status: newStatus });
      fetchTasks(); // 🔥 Refresh task list after update
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
