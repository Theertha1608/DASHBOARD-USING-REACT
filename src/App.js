import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Support from "./pages/Support";
import Plugins from "./pages/Plugins";
import Help from "./pages/Help";

function App() {
  return (
    <Router>
      <div className="grid-container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/support" element={<Support />} />
          <Route path="/plugins" element={<Plugins />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
