import React, { useState, useMemo } from 'react';
import FilterBar from '../components/FilterBar';
import ProjectCard from '../components/ProjectCard';
import { projects, categories } from '../data/projects';
import './HomePage.css';

const HomePage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return projects;
    }
    return projects.filter(project => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="homepage">
      <FilterBar 
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        categories={categories}
      />
      
      <main className="projects-container">
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <h3>No projects found</h3>
            <p>Try selecting a different category or check back later for new projects.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default HomePage;
