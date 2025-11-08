import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import HomePage from "./components/HomePage";
import Tos from "./components/Tos";
import "./styles.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} >
        <Route index element={<HomePage />} />
      </Route>
      <Route path='/tos' element={<Tos />} />
    </Routes>
  </BrowserRouter>
);
