import React, { useContext } from 'react';
import { TaskContext } from './TaskContext';

const TaskList = ({ toggleForm }) => {
    const {
         tasks,
         updateTaskStatus,
         setEditingTask,
         deleteTask
         } = useContext(TaskContext);

    const handleStatusChange = (taskId, event) => {
        const newStatus = event.target.value;
        updateTaskStatus(taskId, newStatus); // 🔥 Update status in database
    };

    const editTaskDetails = (task) => {
        toggleForm(true);
        task.estimateTime = task.estimate_time;
        setEditingTask(task);
        const addButton = document.querySelector(".taskAddButton");
        const elem = document.querySelector(".taskListTable");
        elem.classList.replace("col-md-12", "col-md-7");
        addButton.classList.remove("btn-success");
        addButton.classList.add("btn-danger");
        addButton.innerText = "X Close";
    }

    return <div className='col-md-12 taskListTable border border-light p-2'>
        <h1>Task Management</h1>
        <div className="card-header"> </div>
        <div className="card-body p-0">
            {/* <button onClick={changeClass}>CLick</button> */}
            <table className="table table-striped projects">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Task Name</th>
                        <th>Task Progress</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((t) => (
                        <tr key={t.id}>
                            <td>{t.id}</td>
                            <td>
                                <a><strong>{t.name}</strong></a>
                                <br />
                                <small>{t.details}</small>
                            </td>
                            <td className="project_progress">
                                <div className="progress progress-sm">
                                    <div className="progress-bar bg-green" role="progressbar" aria-valuenow="57" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                                <small>{t.estimate_time} Hours</small>
                            </td>
                            <td className="project-state">
                                <span className="badge text-black">{t.status}</span>
                            </td>
                            <td className="project-actions text-right">
                                <select value={t.status} onChange={(event) => handleStatusChange(t.id, event)} className=' me-1'>
                                    <option value="open">Open</option>
                                    <option value="in progress">In Progress</option>
                                    <option value="complete">Complete</option>
                                </select>
                                <button
                                    className="btn btn-info btn-sm me-1"
                                    onClick={() => editTaskDetails(t)}
                                >
                                    Edit
                                </button>
                                <button className="btn btn-danger btn-sm" onClick={()=>deleteTask(t.id)}>
                                    <i className="fas fa-trash"></i>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>;
};

export default TaskList;