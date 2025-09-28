import React, { useState, useEffect } from "react";

interface Role {
  id: string;
  title: string;
  name: string;
  description: string;
}

interface OrganizationData {
  leadership: Role[];
  management: Role[];
}

const RoleCard: React.FC<{ role: Role }> = ({ role }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="role-card">
      <div 
        className="role-header" 
        onClick={() => setIsExpanded(!isExpanded)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsExpanded(!isExpanded);
          }
        }}
        aria-expanded={isExpanded}
        aria-controls={`role-description-${role.id}`}
      >
        <div className="role-info">
          <h4>{role.title}</h4>
          <p className="role-name">{role.name}</p>
        </div>
        <div className={`expand-icon ${isExpanded ? 'expanded' : ''}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6,9 12,15 18,9"></polyline>
          </svg>
        </div>
      </div>
      {isExpanded && (
        <div 
          id={`role-description-${role.id}`}
          className="role-description"
          role="region"
          aria-labelledby={`role-title-${role.id}`}
        >
          <p>{role.description}</p>
        </div>
      )}
    </div>
  );
};

const Organization: React.FC = () => {
  const [data, setData] = useState<OrganizationData>({ leadership: [], management: [] });

  useEffect(() => {
    fetch("/organization.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(() => console.error("Failed to load organization data"));
  }, []);

  return (
    <div className="organization-page">
      <section className="leadership-section">
        <h2>Leadership Team</h2>
        <div className="roles-grid">
          {data.leadership.map((role) => (
            <RoleCard key={role.id} role={role} />
          ))}
        </div>
      </section>
      
      <section className="management-section">
        <h2>Management Team</h2>
        <div className="roles-grid">
          {data.management.map((role) => (
            <RoleCard key={role.id} role={role} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Organization;
