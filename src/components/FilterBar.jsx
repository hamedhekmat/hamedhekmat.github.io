import React from 'react';
import './FilterBar.css';

const FilterBar = ({ activeFilter, onFilterChange, categories }) => {
  return (
    <div className="filter-bar">
      <div className="filter-buttons">
        <button
          className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => onFilterChange('all')}
        >
          All Projects
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
            onClick={() => onFilterChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
