import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="d-none d-md-block col-md-3 bg-info">COL1</div>
        <div className="col-12 col-md-6 bg-success">COL2</div>
        <div className="d-none d-md-block col-md-3 bg-danger">COL3</div>
      </div>
    </div>
  );
}

export default App;
