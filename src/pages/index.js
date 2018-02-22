import React from 'react';
import MissionStatementSection from '../components/mission-statement/mission-statement-section';
import AboutSection from '../components/about/about-section';
import SkillSection from '../components/skill/skill-section';
import ProjectSection from '../components/project/project-section';
import SocialSection from '../components/social/social-section';
import ContactSection from '../components/contact/contact-section';

const IndexPage = () => (

  <div>
    <MissionStatementSection />
    <AboutSection />
    <SkillSection />
    <ProjectSection />
    <SocialSection />
    <ContactSection />
  </div>
)

export default IndexPage
