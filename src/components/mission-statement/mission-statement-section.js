import React from 'react';

const MissionStatementSection = () => (
  <section>
    <div className="container body-container">
      <div className="mission-container">
        <h3>
          Here is the mission statement.
        </h3>
        <p>
          Trying to determine a mission statement is super hard when you want it to sound cool and meaningful.
        </p>
        <p>
          Providing beautiful solutions to technical issues.
        </p>
        <div>
          <a href="https://docs.google.com/document/d/128r7KhH7D0bYKmQNuzY9DFC0KMQfTLhZgJVTplE6jnA/export?format=pdf"
             className="mission-button button button-secondary card-1 card layout-margin-right-12">Download Cover Letter</a>
          <a href="https://docs.google.com/document/d/1AmKS-EKP1tfPgs2YqhxzN5sr98eMyVu6ghXAx6Q8FoI/export?format=pdf"
             className="mission-button button button-secondary card-1 card">Download Resume</a>
        </div>
      </div>
    </div>
  </section>
)

export default MissionStatementSection;
