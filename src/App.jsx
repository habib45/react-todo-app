import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TopBar from "./components/Topbar";
import SideBar from "./components/Sidebar";
import TaskListPage from "./pages/TaskList";
import 'bootstrap/dist/css/bootstrap.css';

const PageLayout = () => {
  return (
    <div className='row bdColor'>
      <TopBar/>
      <div className='row p-5'>
      <div className='container d-flex'>
        <div className='col-md-7 border border-light p-2'>
          <TaskListPage/>
        </div>
        <div className='col-md-5 border border-light p-2'>
          <SideBar/>
        </div>
      </div>
      </div>
    </div>
  );
};
export default PageLayout;