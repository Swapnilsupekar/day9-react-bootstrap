import "./App.css";

function App() {
  let list = [
    "https://picsum.photos/300/301",
    "https://picsum.photos/300/302",
    "https://picsum.photos/300/303",
    "https://picsum.photos/300/304",
    "https://picsum.photos/300/305",
    "https://picsum.photos/300/306",
    "https://picsum.photos/300/307",
    "https://picsum.photos/300/308",
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
              style={{ height: "250px", fontSize: "2rem" }}
            >
              <img
                src={item}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>

        <div className="d-none d-md-block col-md-3 ">COL3</div>
      </div>
    </div>
  );
}

export default App;
