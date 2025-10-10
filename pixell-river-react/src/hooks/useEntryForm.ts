// This file defines the types we need for our useEntryForm hook

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
