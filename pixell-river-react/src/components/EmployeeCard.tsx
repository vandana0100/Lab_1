import React from "react";

interface EmployeeCardProps {
  name: string;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ name }) => (
  <li className="employee" aria-label={`Employee ${name}`}>
    {name}
  </li>
);

export default EmployeeCard;
