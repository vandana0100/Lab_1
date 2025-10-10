// This service checks if we can create new employees and roles
import { EmployeeFormData, RoleFormData } from '../hooks/useEntryForm';

// What we return when checking if something is valid
export interface ValidationResult {
  isValid: boolean;
  errorMessage: string;
}

export class ValidStaffService {
  
  // Check if we can create a new employee
  static validateNewEmployee(employeeData: EmployeeFormData): ValidationResult {
    // Check if the name is long enough
    if (!employeeData.name || employeeData.name.trim().length < 3) {
      return {
        isValid: false,
        errorMessage: 'Employee name must be at least 3 characters long'
      };
    }
    
    // Check if the department is long enough
    if (!employeeData.department || employeeData.department.trim().length < 3) {
      return {
        isValid: false,
        errorMessage: 'Department name must be at least 3 characters long'
      };
    }
    
    // If we get here, everything is good
    return {
      isValid: true,
      errorMessage: ''
    };
  }
  
  // Check if we can create a new role
  static validateNewRole(roleData: RoleFormData): ValidationResult {
    // Check if the title is long enough
    if (!roleData.title || roleData.title.trim().length < 3) {
      return {
        isValid: false,
        errorMessage: 'Role title must be at least 3 characters long'
      };
    }
    
    // Check if the name is long enough
    if (!roleData.name || roleData.name.trim().length < 3) {
      return {
        isValid: false,
        errorMessage: 'Person name must be at least 3 characters long'
      };
    }
    
    // Check if the description is long enough
    if (!roleData.description || roleData.description.trim().length < 3) {
      return {
        isValid: false,
        errorMessage: 'Description must be at least 3 characters long'
      };
    }
    
    // Check if the role type is valid
    if (!roleData.type || (roleData.type !== 'leadership' && roleData.type !== 'management')) {
      return {
        isValid: false,
        errorMessage: 'Role type must be either leadership or management'
      };
    }
    
    // TODO: Check if this role is already filled
    // For now, we'll assume all roles can be created
    // Later we'll add logic to check if the role already exists
    
    // If we get here, everything is good
    return {
      isValid: true,
      errorMessage: ''
    };
  }
  
  // Helper function to check if a role is already filled
  static isRoleAlreadyFilled(roleTitle: string): boolean {
    // For now, we'll return false (role is not filled)
    // Later we'll add logic to check against existing roles
    return false;
  }
  
  // Helper function to get all existing role titles
  static getExistingRoleTitles(): string[] {
    // For now, we'll return an empty array
    // Later we'll get this from our data
    return [];
  }
}
