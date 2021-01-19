import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      {/** First Row  */}
      <div className="row bg-primary">
        <div className="d-none d-md-block col-md-3  bg-info">COL 1</div>
        <div className="col-12 col-md-6 bg-success">COL 2</div>
        <div className="d-none d-md-block col-md-3 bg-danger">COL 3</div>
      </div>
    </div>
  );
}

export default App;
