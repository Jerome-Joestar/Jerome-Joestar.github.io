import React from 'react';

const Project = ({ image, description }) => (
    <div className="container-item-center card card-2 project-card">
        <p className="project-description layout-padding-16">{ description }</p>
    </div>
)

export default Project;
