// This service handles all the validation for our forms
import { EmployeeFormData, RoleFormData, FormErrors } from '../hooks/useEntryForm';

export class ValidationService {
  
  // Check if an employee form is valid
  static validateEmployeeForm(formData: EmployeeFormData): FormErrors {
    const errors: FormErrors = {};
    
    // Check if name is empty
    if (!formData.name || formData.name.trim().length === 0) {
      errors.name = 'Name is required';
    } 
    // Check if name is too short
    else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters long';
    }
    // Check if name is too long
    else if (formData.name.trim().length > 50) {
      errors.name = 'Name must be less than 50 characters';
    }
    
    // Check if department is empty
    if (!formData.department || formData.department.trim().length === 0) {
      errors.department = 'Department is required';
    }
    // Check if department is too short
    else if (formData.department.trim().length < 2) {
      errors.department = 'Department must be at least 2 characters long';
    }
    // Check if department is too long
    else if (formData.department.trim().length > 30) {
      errors.department = 'Department must be less than 30 characters';
    }
    
    return errors;
  }
  
  // Check if a role form is valid
  static validateRoleForm(formData: RoleFormData): FormErrors {
    const errors: FormErrors = {};
    
    // Check if title is empty
    if (!formData.title || formData.title.trim().length === 0) {
      errors.title = 'Title is required';
    }
    // Check if title is too short
    else if (formData.title.trim().length < 5) {
      errors.title = 'Title must be at least 5 characters long';
    }
    // Check if title is too long
    else if (formData.title.trim().length > 100) {
      errors.title = 'Title must be less than 100 characters';
    }
    
    // Check if name is empty
    if (!formData.name || formData.name.trim().length === 0) {
      errors.name = 'Name is required';
    }
    // Check if name is too short
    else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters long';
    }
    // Check if name is too long
    else if (formData.name.trim().length > 50) {
      errors.name = 'Name must be less than 50 characters';
    }
    
    // Check if description is empty
    if (!formData.description || formData.description.trim().length === 0) {
      errors.description = 'Description is required';
    }
    // Check if description is too short
    else if (formData.description.trim().length < 10) {
      errors.description = 'Description must be at least 10 characters long';
    }
    // Check if description is too long
    else if (formData.description.trim().length > 500) {
      errors.description = 'Description must be less than 500 characters';
    }
    
    // Check if type is empty
    if (!formData.type || formData.type.trim().length === 0) {
      errors.type = 'Role type is required';
    }
    // Check if type is valid (must be leadership or management)
    else if (formData.type !== 'leadership' && formData.type !== 'management') {
      errors.type = 'Role type must be either leadership or management';
    }
    
    return errors;
  }
  
  // Check if there are any errors
  static hasErrors(errors: FormErrors): boolean {
    return Object.keys(errors).length > 0;
  }
  
  // Get the first error message
  static getFirstError(errors: FormErrors): string {
    const errorKeys = Object.keys(errors);
    return errorKeys.length > 0 ? errors[errorKeys[0]] : '';
  }
  
  // Clear all errors (return empty object)
  static clearErrors(): FormErrors {
    return {};
  }
}
