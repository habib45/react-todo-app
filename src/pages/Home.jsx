import React, {useState} from "react";
import TaskProvider from "./TaskContext";
import TaskList from "./TaskList";
import StatusBar from "../components/StatusBar";
import TaskCreate from "../components/TaskCreate";

const Home = () => {
    const [showForm, setShowForm] = useState(false);
    const toggleForm = () => {
      setShowForm((prev) => !prev);
      console.log(showForm);
      const addButton = document.querySelector(".taskAddButton");
      const elem = document.querySelector(".taskListTable");
      if(showForm){
        
        elem.classList.replace("col-md-7", "col-md-12");        
        // addButton.classList.replace("btn-danger", "btn-success");
        addButton.innerText ="+ Add new task";
        addButton.classList.remove("btn-danger");
        addButton.classList.add("btn-success");
      }else{
        elem.classList.replace("col-md-12", "col-md-7");
        // addButton.classList.replace("btn-success", "btn-danger");
        addButton.classList.remove("btn-success");
        addButton.classList.add("btn-danger");
        addButton.innerText ="X Close";
      }
    };


//   const changeClass = () => {

//     const elem = document.querySelector(".taskListTable");
//           elem.classList.replace("col-md-7", "col-md-12");

// };

    return <>
        <div className='container bdColor'>
            <StatusBar toggleForm={toggleForm} />
        </div>
        <div className='container d-flex mt-2'>

            <TaskProvider>
                <TaskList />
                {showForm && <TaskCreate />} 
            </TaskProvider>
        </div>
    </>;
};

export default Home;