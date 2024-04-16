import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Knowledges from "./Kowledges.jsx";
import Contact from "./Contact.jsx";
import Me from"./Me.jsx"
import Proyects from "./Proyects.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/knowledges" element={<Knowledges />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/me" element={<Me/>} />
        <Route path="/proyects" element={<Proyects/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
