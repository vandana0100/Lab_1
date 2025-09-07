import React from "react";

interface EmployeeCardProps {
  name: string;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ name }) => {
  return <li>{name}</li>;
};

export default EmployeeCard;
