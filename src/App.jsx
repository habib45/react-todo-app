import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TopBar from "./components/Topbar";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import Tasks from "./pages/Tasks";
import 'bootstrap/dist/css/bootstrap.css';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const PageLayout = () => {

  return (
    <>
      <div className='bdColor'>
        <TopBar />
        <ToastContainer position="top-right" autoClose={3000} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<Home />} />
          <Route path="/open" element={<Home />} />
          <Route path="/in-progress" element={<Home />} />
          <Route path="/complete" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="*" element={<NotFound />} /> {/* Handle unknown routes */}
        </Routes>
      </div>
    </>
  );
};
export default PageLayout;