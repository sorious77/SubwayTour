import {useState} from "react";

function App() {
const [subwayStation, setSubwayStation] = useState("");

const handleOnClick = () => {
  console.log("hi")
  setSubwayStation("new Station");
}

  return (
    <div className="App">
      <button onClick={handleOnClick}>클릭</button>
      <div>{subwayStation}</div>
    </div>
  );
}

export default App;
