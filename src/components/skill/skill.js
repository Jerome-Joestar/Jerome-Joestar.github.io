import React from 'react';

const Skill = ({ skill, text }) => (
  <div className="container-item-center skill-content">
    <i className={`skill devicon-${skill}-plain`}></i>
    <h4 className="skill-name">{text}</h4>
  </div>
)

export default Skill;
