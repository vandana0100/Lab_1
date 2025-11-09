// This repository handles all the role data operations
import type { RoleFormData } from '../hooks/useEntryForm';

// Simple role data structure
export interface Role {
  id: string;
  title: string;
  name: string;
  description: string;
  type: 'leadership' | 'management';
}

export class RoleRepository {
  // TODO: swap the in-memory array for real API calls later
  // Store roles in memory (like a simple database)
  private static roles: Role[] = [
    // We'll start with some sample data
    { id: '1', title: 'CEO', name: 'Sarah Mitchell', description: 'Chief Executive Officer', type: 'leadership' },
    { id: '2', title: 'CFO', name: 'Michael Chen', description: 'Chief Financial Officer', type: 'leadership' },
    { id: '3', title: 'HR Director', name: 'David Thompson', description: 'Human Resources Director', type: 'management' }
  ];

  // Quick helper to practice calling the backend
  static async fetchAllRolesFromApi(): Promise<Role[]> {
    try {
      const response = await fetch("/api/roles");
      if (!response.ok) {
        throw new Error("Bad response");
      }
      const data = await response.json();
      // TODO: update once backend returns actual role objects
      return data?.roles ?? this.roles;
    } catch (error) {
      console.warn("TODO: handle role API error better later", error);
      return this.roles;
    }
  }

  // Get all roles
  static getAllRoles(): Role[] {
    return this.roles;
  }

  // Get roles by type (leadership or management)
  static getRolesByType(type: 'leadership' | 'management'): Role[] {
    return this.roles.filter(role => role.type === type);
  }

  // Get all unique role titles
  static getAllRoleTitles(): string[] {
    const titles = this.roles.map(role => role.title);
    return [...new Set(titles)]; // Remove duplicates
  }

  // Add a new role
  static addRole(roleData: RoleFormData): Role {
    const newRole: Role = {
      id: Date.now().toString(), // Simple ID generation
      title: roleData.title,
      name: roleData.name,
      description: roleData.description,
      type: roleData.type
    };
    
    this.roles.push(newRole);
    return newRole;
  }

  // Update an existing role
  static updateRole(id: string, roleData: RoleFormData): Role | null {
    const roleIndex = this.roles.findIndex(role => role.id === id);
    
    if (roleIndex === -1) {
      return null; // Role not found
    }
    
    this.roles[roleIndex] = {
      ...this.roles[roleIndex],
      title: roleData.title,
      name: roleData.name,
      description: roleData.description,
      type: roleData.type
    };
    
    return this.roles[roleIndex];
  }

  // Delete a role
  static deleteRole(id: string): boolean {
    const roleIndex = this.roles.findIndex(role => role.id === id);
    
    if (roleIndex === -1) {
      return false; // Role not found
    }
    
    this.roles.splice(roleIndex, 1);
    return true;
  }

  // Get role by ID
  static getRoleById(id: string): Role | null {
    return this.roles.find(role => role.id === id) || null;
  }

  // Check if role is already filled (has a person assigned)
  static isRoleFilled(roleTitle: string): boolean {
    return this.roles.some(role => 
      role.title.toLowerCase() === roleTitle.toLowerCase() && 
      role.name.trim() !== ''
    );
  }

  // Check if role exists
  static roleExists(title: string): boolean {
    return this.roles.some(role => 
      role.title.toLowerCase() === title.toLowerCase()
    );
  }

  // Get available (unfilled) roles
  static getAvailableRoles(): Role[] {
    return this.roles.filter(role => role.name.trim() === '');
  }
}
