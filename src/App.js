import { useState } from "react";
import { Auth } from "./Auth";
import Route from "./Route";
import "bootstrap/dist/css/bootstrap.min.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import styled from "styled-components";
import { getStations } from "./Firebase";

const Container = styled.div`
  height: 100%;
`;

const App = () => {
  const [user, setUser] = useState(null);
  const [stations, setStations] = useState([]);

  const updateStation = async () => {
    const stations = await getStations();

    setStations(stations);
  };

  return (
    <Container className="App">
      <Route
        user={user}
        setUser={setUser}
        stations={stations}
        updateStation={updateStation}
      />
      <Auth setUser={setUser} />
    </Container>
  );
};

export default App;
