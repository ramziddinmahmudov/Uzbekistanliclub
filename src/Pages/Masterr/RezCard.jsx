// components/ResidentCard.js
import React from 'react';
import "./Masterr.css"

const ResidentCard = ({ resident }) => {
  return (
    <div className="resident-card">
      <img src={resident.img} alt="" />
      <h3>{resident.name}</h3>
      <p>{resident.role}</p>
    </div>
  );
};

export default ResidentCard;
