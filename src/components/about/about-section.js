import React from 'react';
import About from './about';

const AboutSection = () => (
  <section>
    <h1 className="section-title">About Me</h1>
    <div className="container body-container about-hobbies">
      <About hobby={'snowboarding'} />
      <About hobby={'photography'} />
      <About hobby={'bass'} />
    </div>




  </section>
)

export default AboutSection;
