import React from "react";
import EmployeeCard from "./EmployeeCard";

interface EmployeeListProps {
  department: string;
  employees: string[];
}

const EmployeeList: React.FC<EmployeeListProps> = ({ department, employees }) => (
  <section className="department">
    <h4>{department}</h4>
    <ul>
      {employees.map((name, idx) => (
        <EmployeeCard key={idx} name={name} />
      ))}
    </ul>
  </section>
);

export default EmployeeList;
