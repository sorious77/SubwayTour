import styled from "styled-components";
import { useState, useEffect } from "react";
import { getStations } from "../Firebase";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  margin: 1vh 0;
`;

const List = ({ stations }) => {
  return (
    <Container>{stations ? <div>Loading...</div> : <div>hi</div>}</Container>
  );
};

export default List;
