import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Tos from "./components/Tos";

export default function App() {
  return (
    <Router>
      <nav style={{ display: "flex", gap: "20px", padding: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/tos">Terms of Service</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tos" element={<Tos />} />
      </Routes>
    </Router>
  );
}
