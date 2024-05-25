import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import classicalMusic from "../assets/scott.mp3";
import music2 from "../assets/After.mp3";
import music3 from "../assets/Moon.mp3";
import Popup from "./popup.jsx";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 1rem;
  margin-top: 3rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.5rem;
  background-color: #006769;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 2rem;
  outline: none;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Timer = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
`;
const Home = () => {
  const [isMilking, setIsMilking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const audioTracks = [classicalMusic, music2, music3];
  const audioRef = useRef(new Audio());

  useEffect(() => {
    const playRandomTrack = () => {
      const randomIndex = Math.floor(Math.random() * audioTracks.length);
      audioRef.current.src = audioTracks[randomIndex];
      audioRef.current.play();
    };

    if (isMilking && !isPaused) {
      const id = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setIntervalId(id);
      playRandomTrack();

      audioRef.current.onended = playRandomTrack;
    } else if (isPaused) {
      clearInterval(intervalId);
      audioRef.current.pause();
    } else {
      clearInterval(intervalId);
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    return () => clearInterval(intervalId);
  }, [isMilking, isPaused]);

  const handleStartPause = () => {
    if (isMilking) {
      if (isPaused) {
        setIsPaused(false);
      } else {
        setIsPaused(true);
      }
    } else {
      setIsMilking(true);
    }
  };

  const handleStop = () => {
    setIsMilking(false);
    setIsPaused(false);
    setTime(0);
    setShowPopup(true);
    audioRef.current.onended = null;
  };

  const handleSave = (milkQuantity) => {
    const session = {
      date: new Date().toLocaleDateString(),
      startTime: new Date().toLocaleTimeString(),
      endTime: new Date(
        new Date().getTime() + time * 1000
      ).toLocaleTimeString(),
      duration: time,
      milk: milkQuantity,
    };
    const history = JSON.parse(localStorage.getItem("milkingHistory")) || [];
    history.push(session);
    localStorage.setItem("milkingHistory", JSON.stringify(history));
  };

  return (
    <Container>
      <Timer>{new Date(time * 1000).toISOString().substr(11, 8)}</Timer>
      <Button onClick={handleStartPause}>
        {isMilking ? (isPaused ? "Resume" : "Pause") : "Start Milking"}
      </Button>
      {isMilking && <Button onClick={handleStop}>Stop</Button>}
      <Link to="/history" style={{ color: "#006769" }}>
        View Milking History
      </Link>
      {showPopup ? (
        <Popup
          isVisible={showPopup}
          onClose={() => setShowPopup(false)}
          onSave={handleSave}
        />
      ) : null}
    </Container>
  );
};

export default Home;
