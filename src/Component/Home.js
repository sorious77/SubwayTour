import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  margin: 1vh 0;
  flex-direction: column;
`;

const Home = ({ user }) => {
  console.log(user);

  return (
    <Container>
      <img src="/Home.png" />
      {user && <h3>Hello {user.displayName}!</h3>}
    </Container>
  );
};

export default Home;
