import logo from "./logo.svg";
import imgMountain from "./images/mountain.jpg";

import "./App.css";

/**
 * IMAGE can be a URL
 * Image can be download and part of your project. as a file.
 */
function App() {
  const imageUrl = "https://picsum.photos/200/300";

  return (
    <div>
      <h1>Image As URL</h1>
      {/** IMAGE AS URL */}
      <img src="https://picsum.photos/200/300" alt="" />
      <img src={imageUrl} alt="" />

      {/** Image as file */}
      <h1>Image As Downloaded File</h1>
      <img src={imgMountain} alt="" />
    </div>
  );
}

export default App;
