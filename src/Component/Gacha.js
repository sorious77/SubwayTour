import { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import styled from "styled-components";
import InitStation from "../InitStation";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  margin: 1vh 0;
  flex-direction: column;
`;

const Gacha = ({ stations, updateStation }) => {
  const [gacha, setGacha] = useState(null);

  const doGacha = () => {
    if (stations.length == 0) {
      alert("Click Update Button First");
      return;
    }

    const notVisitedStations = stations.filter((station) => !station.visited);

    const max = notVisitedStations.length - 1;

    const randomIdx = Math.floor(Math.random() * max);

    setGacha(notVisitedStations[randomIdx]);
  };

  const handleInitStation = async () => {
    // const stations = await InitStation();
    alert("구현 중입니다");
  };

  return (
    <Container>
      {stations && (
        <>
          <ButtonGroup>
            <Button onClick={doGacha} variant="outline-primary">
              Gacha
            </Button>
            <Button onClick={updateStation} variant="outline-primary">
              Update
            </Button>
          </ButtonGroup>
          {gacha && (
            <>
              <h1>{gacha.station_nm}</h1>
              <h3>{gacha.station_nm_eng}</h3>
            </>
          )}
        </>
      )}
    </Container>
  );
};

export default Gacha;

// <Button onClick={handleInitStation}>초기화</Button>;
