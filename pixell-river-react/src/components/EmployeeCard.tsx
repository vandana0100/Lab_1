import React from "react";

interface EmployeeCardProps {
  name: string;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ name }) => {
  return React.createElement(
    "li",
    {
      className: "employee",
      "aria-label": `Employee ${name}`
    },
    name
  );
};

export default EmployeeCard;
