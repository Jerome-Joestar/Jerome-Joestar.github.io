import React from 'react';

const Project = ({ image, link, description }) => (
  <div className="container-item-center project-card">
    <div className="project-animation-wrapper">
      <a href={link} target="blank">
        <div className="front card card-2">
          <img src={image} alt="Project Image"/>
        </div>
        <div className="back card card-2">
          <p className="project-description layout-padding-16">{description}</p>
        </div>
      </a>
    </div>
  </div>
)

export default Project;
