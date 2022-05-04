import { useEffect, useState } from "react";
import { fireStore } from "./Firebase";

function App() {
  const [subwayStation, setSubwayStation] = useState("");

  const handleOnClick = () => {
    console.log("hi");
    setSubwayStation("new Station");
  };

  useEffect(() => {
    console.log(fireStore);
  });

  return (
    <div className="App">
      <button onClick={handleOnClick}>클릭</button>
      <div>{subwayStation}</div>
      {fireStore._databaseId.projectId}
    </div>
  );
}

export default App;
