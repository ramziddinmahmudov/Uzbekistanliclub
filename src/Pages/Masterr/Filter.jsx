// components/FilterPanel.js
import React from 'react';
import "./Masterr.css"

const FilterPanel = () => {
  return (
    <div className="filter-panel">
      <h2>Field of activity</h2>
      <ul>
        <li><input type="checkbox" /> All</li>
        <li><input type="checkbox" /> Technologies</li>
        <li><input type="checkbox" /> Banking and Finance</li>
      </ul>
    </div>
  );
};

export default FilterPanel;
