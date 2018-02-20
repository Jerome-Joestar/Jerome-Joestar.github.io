import React from 'react';
import Project from './project';
import milkCalc from '../../styles/images/milk-calc-screen.png';
import angularFlickr from '../../styles/images/angular-flicker-screen.jpg';
import maintenance from '../../styles/images/maintenance.png';


const ProjectSection = () => (
  <section>
    <h1 className="section-title">Projects</h1>
    <div className="container body-container project-container">
      <Project image={milkCalc}
               link={'https://milk-intake-calculator.herokuapp.com'}
               description={'A React based project built to assist mothers of newborns in determining proper ' +
               'feeding amounts/schedules.'}/>
      <Project image={angularFlickr}
               link={'https://angular-flickr-gallery.herokuapp.com/'}
               description={'An Angular based project that pulls my images from Flickr galleries through a node ' +
               'backend then displays them on the frontend.'}/>
      <Project image={maintenance}
               link={'https://react-music-assistant.herokuapp.com/'}
               description={'A React app that was built to assist music learners with learning to play by ear. Still ' +
               'in development!'}/>
    </div>
  </section>
)

export default ProjectSection;
