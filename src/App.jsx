import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tos from "./pages/Tos";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tos" element={<Tos />} />
      </Routes>
    </Router>
  );
}

export default App;
