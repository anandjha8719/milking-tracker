import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import History from "./components/History";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
