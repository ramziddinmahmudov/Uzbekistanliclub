// App.js
import React, { useState } from 'react';
import MasterResidents from './Masterr';
import SearchBar from './Search';
import "./Masterr.css"

const App = () => {
  return (
    <div className="app">
      <h1>Master Residents</h1>
      <SearchBar />
      <div className="content">
        <MasterResidents />
      </div>
    </div>
  );
};

export default App;
