import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 1rem;
  text-align: center;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  margin-bottom: 1rem;

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
  }

  th {
    background-color: #006769;
    color: white;
  }
`;

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedHistory =
      JSON.parse(localStorage.getItem("milkingHistory")) || [];
    setHistory(savedHistory);
  }, []);

  return (
    <Container>
      <h1>Milking History</h1>
      <Table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Total Time</th>
            <th>Milk (liters)</th>
          </tr>
        </thead>
        <tbody>
          {history.map((session, index) => (
            <tr key={index}>
              <td>{session.date}</td>
              <td>{session.startTime}</td>
              <td>{session.endTime}</td>
              <td>
                {new Date(session.duration * 1000).toISOString().substr(11, 8)}
              </td>
              <td>{session.milk}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Link to="/">Back to Home</Link>
    </Container>
  );
};

export default History;
