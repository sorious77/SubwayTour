import { ButtonGroup, Button } from "react-bootstrap";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  margin: 1vh 0;
`;
const Board = () => {
  const navigate = useNavigate();

  const handleWriteBtn = () => {
    navigate("/write");
  };

  return (
    <Container>
      <Button onClick={handleWriteBtn} variant="outline-primary">
        Write
      </Button>
    </Container>
  );
};

export default Board;
