import "./index.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import Pages
import { Homepage, Floors } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"/floors/:id"} element={<Floors />} />
      </Routes>
    </Router>
  );
}

export default App;
