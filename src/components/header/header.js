import React from 'react';
import Link from 'gatsby-link'
import funkyImage from '../../styles/images/Funky-512.png';

const Header = () => (
  <div className="container">
    <div className="header">
      <img src={funkyImage} className="header-icon layout-margin-right-16 layout-padding-top-20"
           alt="Funky Icon"/>
      <h4 className="header-text">
        Funky Discord
      </h4>
    </div>
  </div>
)

export default Header;

