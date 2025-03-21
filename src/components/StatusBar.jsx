const StatusBar = () => {
    return <div className='row p-2'> 
        <div className="col-md-12 d-flex">
          <div className="col-md-2 me-1 bg-secondary rounded-pill p-3 text-white">
            <span className="border border-light rounded-circle p-2">12</span> &nbsp;
            Open
          </div>
          <div className="col-md-2 me-1 bg-secondary rounded-pill p-3 text-white">
            <span className="border border-light rounded-circle p-2">12</span> &nbsp;
            In Progress
          </div>
          <div className="col-md-2 me-1 bg-secondary rounded-pill p-3 text-white">
            <span className="border border-light rounded-circle p-2 text-white">12</span> &nbsp;
            Complete
          </div>
          <button type="button" className="btn btn-outline-secondary text-green ms-auto">+ Add new task</button>
        </div>
    </div>
  };
  
export default StatusBar;