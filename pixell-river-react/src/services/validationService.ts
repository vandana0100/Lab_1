// This service handles all the validation for our forms
import { EmployeeFormData, RoleFormData, FormErrors } from '../hooks/useEntryForm';

export class ValidationService {
  
  // Check if an employee form is valid
  static validateEmployeeForm(formData: EmployeeFormData): FormErrors {
    const errors: FormErrors = {};
    
    // Just check if name is empty
    if (!formData.name || formData.name.trim().length === 0) {
      errors.name = 'Name is required';
    }
    
    // Just check if department is empty
    if (!formData.department || formData.department.trim().length === 0) {
      errors.department = 'Department is required';
    }
    
    return errors;
  }
  
  // Check if a role form is valid
  static validateRoleForm(formData: RoleFormData): FormErrors {
    const errors: FormErrors = {};
    
    // Just check if title is empty
    if (!formData.title || formData.title.trim().length === 0) {
      errors.title = 'Title is required';
    }
    
    // Just check if name is empty
    if (!formData.name || formData.name.trim().length === 0) {
      errors.name = 'Name is required';
    }
    
    // Just check if description is empty
    if (!formData.description || formData.description.trim().length === 0) {
      errors.description = 'Description is required';
    }
    
    // Just check if type is empty
    if (!formData.type || formData.type.trim().length === 0) {
      errors.type = 'Role type is required';
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
