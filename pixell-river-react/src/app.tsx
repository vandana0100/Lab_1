import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EmployeeList from "./components/EmployeeList";


interface EmployeeData {
  [department: string]: string[];
}

const App: React.FC = () => {
  const [data, setData] = useState<EmployeeData>({});

  useEffect(() => {
    fetch("/employees.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(() => console.error("Failed to load employees"));
  }, []);

  return (
    <>
      <header>
        <Navbar />
        <h1>Pixell River Financial</h1>
        <p>Welcome to the Employee and Organization Directory</p>
      </header>
      <main>
        <h2>Employee Directory</h2>
        {Object.entries(data).map(([dept, names]) => (
          <EmployeeList key={dept} department={dept} employees={names} />
        ))}
      </main>
      <Footer />
    </>
  );
};

export default App;
