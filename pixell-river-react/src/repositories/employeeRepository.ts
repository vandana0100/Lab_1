// This repository handles all the employee data operations
import type { EmployeeFormData } from '../hooks/useEntryForm';

// Simple employee data structure
export interface Employee {
  id: string;
  name: string;
  department: string;
}

export class EmployeeRepository {
  // TODO: replace the in-memory array with API requests once backend is ready
  // Store employees in memory (like a simple database)
  private static employees: Employee[] = [
    // We'll start with some sample data
    { id: '1', name: 'John Doe', department: 'IT' },
    { id: '2', name: 'Jane Smith', department: 'HR' },
    { id: '3', name: 'Bob Johnson', department: 'Finance' }
  ];

  // Temporary helper to start testing API calls without breaking the app
  static async fetchAllEmployeesFromApi(): Promise<Employee[]> {
    try {
      const response = await fetch("/api/employees");
      if (!response.ok) {
        throw new Error("Bad response");
      }
      const data = await response.json();
      // TODO: shape the response once backend sends real data
      return data?.employees ?? this.employees;
    } catch (error) {
      console.warn("TODO: handle API error better later", error);
      return this.employees;
    }
  }

  // Get all employees
  static getAllEmployees(): Employee[] {
    return this.employees;
  }

  // Get employees by department
  static getEmployeesByDepartment(department: string): Employee[] {
    return this.employees.filter(emp => emp.department === department);
  }

  // Get all unique department names
  static getAllDepartments(): string[] {
    const departments = this.employees.map(emp => emp.department);
    return [...new Set(departments)]; // Remove duplicates
  }

  // Add a new employee
  static addEmployee(employeeData: EmployeeFormData): Employee {
    const newEmployee: Employee = {
      id: Date.now().toString(), // Simple ID generation
      name: employeeData.name,
      department: employeeData.department
    };
    
    this.employees.push(newEmployee);
    return newEmployee;
  }

  // Update an existing employee
  static updateEmployee(id: string, employeeData: EmployeeFormData): Employee | null {
    const employeeIndex = this.employees.findIndex(emp => emp.id === id);
    
    if (employeeIndex === -1) {
      return null; // Employee not found
    }
    
    this.employees[employeeIndex] = {
      ...this.employees[employeeIndex],
      name: employeeData.name,
      department: employeeData.department
    };
    
    return this.employees[employeeIndex];
  }

  // Delete an employee
  static deleteEmployee(id: string): boolean {
    const employeeIndex = this.employees.findIndex(emp => emp.id === id);
    
    if (employeeIndex === -1) {
      return false; // Employee not found
    }
    
    this.employees.splice(employeeIndex, 1);
    return true;
  }

  // Get employee by ID
  static getEmployeeById(id: string): Employee | null {
    return this.employees.find(emp => emp.id === id) || null;
  }

  // Check if employee exists
  static employeeExists(name: string, department: string): boolean {
    return this.employees.some(emp => 
      emp.name.toLowerCase() === name.toLowerCase() && 
      emp.department.toLowerCase() === department.toLowerCase()
    );
  }
}
