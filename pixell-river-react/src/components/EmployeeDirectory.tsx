import React, { useState, useEffect, useMemo } from "react";
import EmployeeList from "./EmployeeList";
import SearchBar from "./SearchBar";

interface EmployeeData {
  [department: string]: string[];
}

const EmployeeDirectory: React.FC = () => {
  const [data, setData] = useState<EmployeeData>({});
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/employees.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(() => console.error("Failed to load employees"));
  }, []);

  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) {
      return data;
    }

    const filtered: EmployeeData = {};
    const searchLower = searchTerm.toLowerCase();

    Object.entries(data).forEach(([department, employees]) => {
      // Check if department name matches search term
      const departmentMatches = department.toLowerCase().includes(searchLower);
      
      // Filter employees by name
      const matchingEmployees = employees.filter(employee =>
        employee.toLowerCase().includes(searchLower)
      );

      // Include department if it matches or has matching employees
      if (departmentMatches || matchingEmployees.length > 0) {
        filtered[department] = departmentMatches ? employees : matchingEmployees;
      }
    });

    return filtered;
  }, [data, searchTerm]);

  const hasResults = Object.keys(filteredData).length > 0;
  const totalEmployees = Object.values(filteredData).reduce((sum, employees) => sum + employees.length, 0);

  return (
    <div className="employee-directory">
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      
      {searchTerm && (
        <div className="search-results-info">
          {hasResults ? (
            <p>
              Found {totalEmployees} employee{totalEmployees !== 1 ? 's' : ''} 
              in {Object.keys(filteredData).length} department{Object.keys(filteredData).length !== 1 ? 's' : ''}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          ) : (
            <p>No employees found matching "{searchTerm}"</p>
          )}
        </div>
      )}

      <div className="departments-container">
        {Object.entries(filteredData).map(([dept, names]) => (
          <EmployeeList key={dept} department={dept} employees={names} />
        ))}
      </div>
    </div>
  );
};

export default EmployeeDirectory;
