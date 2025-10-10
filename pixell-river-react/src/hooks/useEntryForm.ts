// This file defines the types we need for our useEntryForm hook
import { useState } from 'react';
import { ValidationService } from '../services/validationService';

// What data an Employee form needs
export interface EmployeeFormData {
  name: string;
  department: string;
}

// What data a Role form needs
export interface RoleFormData {
  title: string;
  name: string;
  description: string;
  type: 'leadership' | 'management';
}

// This can be either employee data or role data
export type FormData = EmployeeFormData | RoleFormData;

// For storing error messages
export interface FormErrors {
  [key: string]: string;
}

// What our hook will give back to components
export interface UseEntryFormReturn {
  formData: FormData;
  errors: FormErrors;
  isLoading: boolean;
  updateField: (field: string, value: string) => void;
  validateForm: () => boolean;
  resetForm: () => void;
  setLoading: (loading: boolean) => void;
}

// This is our custom hook - it's like a special function that components can use
export const useEntryForm = (initialData: FormData): UseEntryFormReturn => {
  // Keep track of what the user has typed in the form
  const [formData, setFormData] = useState<FormData>(initialData);
  
  // Keep track of any error messages to show the user
  const [errors, setErrors] = useState<FormErrors>({});
  
  // Keep track of whether we're waiting for something (like saving)
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // When user types in a field, update that field and clear any error
  const updateField = (field: string, value: string): void => {
    // Update the form with the new value
    setFormData(prevData => ({
      ...prevData,
      [field]: value
    }));
    
    // If there was an error for this field, clear it when user starts typing
    if (errors[field]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [field]: ''
      }));
    }
  };

  // Check if the form has any problems
  const validateForm = (): boolean => {
    let validationErrors: FormErrors = {};
    
    // Figure out if this is an employee form or a role form
    if ('department' in formData) {
      // This is an employee form - check name and department
      validationErrors = ValidationService.validateEmployeeForm(formData as EmployeeFormData);
    } else if ('title' in formData) {
      // This is a role form - check title, name, description, and type
      validationErrors = ValidationService.validateRoleForm(formData as RoleFormData);
    }
    
    // Save any errors we found
    setErrors(validationErrors);
    
    // If there are no errors, the form is good to go
    return !ValidationService.hasErrors(validationErrors);
  };

  // Clear the form and start over
  const resetForm = (): void => {
    setFormData(initialData);
    setErrors({});
    setIsLoading(false);
  };

  // Show or hide a loading spinner
  const setLoading = (loading: boolean): void => {
    setIsLoading(loading);
  };

  // Give the component everything it needs to work with the form
  return {
    formData,        // The current form data
    errors,          // Any error messages
    isLoading,       // Whether we're loading
    updateField,     // Function to change a field
    validateForm,    // Function to check if form is valid
    resetForm,       // Function to clear the form
    setLoading       // Function to show/hide loading
  };
};
