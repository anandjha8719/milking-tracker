import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import History from "./components/History";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ width: "100vw", marginTop: "60px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
