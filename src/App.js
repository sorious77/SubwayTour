import InitStation from "./InitStation";

function App() {
  const handleInitStation = async () => {
    const stations = InitStation();

    console.log(stations);
  };

  return (
    <div className="App">
      <button onClick={handleInitStation}>초기화</button>
    </div>
  );
}

export default App;
