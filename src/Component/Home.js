import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  margin: 1vh 0;
`;

const Home = () => {
  return (
    <Container>
      <div>HomePage</div>
    </Container>
  );
};

export default Home;
