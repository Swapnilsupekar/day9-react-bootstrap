import "./App.css";

function App() {
  let list = [
    "Mumbai",
    "Delhi",
    "Kolkata",
    "Chennai",
    "Mumbai",
    "Delhi",
    "Kolkata",
    "Chennai",
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="d-none d-md-block col-md-3 ">COL1</div>

        {/** Can I Add Children Here */}
        <div className="col-12 col-md-6 ">
          {list.map((item, index) => (
            <div
              key={index}
              className="d-flex justify-content-center align-items-center text-light mb-2 bg-secondary"
              style={{ height: "150px", fontSize: "2rem" }}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="d-none d-md-block col-md-3 ">COL3</div>
      </div>
    </div>
  );
}

export default App;
