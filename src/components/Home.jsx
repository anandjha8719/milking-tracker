import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 1rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.5rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 1rem;
`;

const Home = () => {
  return (
    <Container>
      <Button>Start Milking</Button>
      <Link to="/history">View Milking History</Link>
    </Container>
  );
};

export default Home;
