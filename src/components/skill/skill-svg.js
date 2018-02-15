import React from 'react';
const {PropTypes} = React;

const SkillSvg = props => (
  <svg viewBox="0 0 128 128">
    <path d={icons[props.icon]}></path>
  </svg>
);

export default SkillSvg;
