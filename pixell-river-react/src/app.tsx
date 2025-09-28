import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EmployeeDirectory from "./components/EmployeeDirectory";
import Organization from "./components/Organization";

const App: React.FC = () => {
  return (
    <Router>
      <div id="app">
        <header>
          <Navbar />
          <h1>Pixell River Financial</h1>
          <p>Welcome to the Employee and Organization Directory</p>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/employees" replace />} />
            <Route path="/employees" element={<EmployeeDirectory />} />
            <Route path="/organization" element={<Organization />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
