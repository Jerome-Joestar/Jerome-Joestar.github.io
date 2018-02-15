import React from 'react';
import Skill from './skill';

const SkillSection = () => (
  <section>
    <h1 className="section-title">Skills</h1>
    <div className="container body-container skill-container">
      <Skill skill={'html'} text={'HTML'}/>
      <Skill skill={'css'} text={'CSS'}/>
      <Skill skill={'js'} text={'JavaScript'}/>
      <Skill skill={'sass'} text={'Sass'}/>
      <Skill skill={'react'} text={'React'}/>
      <Skill skill={'angular'} text={'Angular'}/>
      <Skill skill={'git'} text={'Git'}/>
      <Skill skill={'typescript'} text={'TypeScript'}/>
      <Skill skill={'nodejs'} text={'NodeJS'}/>
    </div>
  </section>
)

export default SkillSection;
