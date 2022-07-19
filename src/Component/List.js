import styled from "styled-components";
import Post from "./Post";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  margin: 1vh 0;
`;

const List = ({ stations }) => {
  const id = "";

  return (
    <Container>
      <Link to={`/post/${id}`}>View</Link>
    </Container>
  );
};

export default List;
