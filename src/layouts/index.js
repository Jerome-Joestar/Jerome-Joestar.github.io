import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import '../styles/styles.scss';

import Header from '../components/header/header';

const TemplateWrapper = ({ children }) => (
  <div className="content">
    <Helmet
      title="Funky Discord"
      meta={[
        { name: 'description', content: 'Portfolio site for Marcus Parker' },
        { name: 'author', content: 'Marcus Parker' },
        { name: 'keywords', content: 'funky, discord, Marcus, Parker, front end, developer' },
        { name: 'charSet', content: 'utf-8' }
      ]}
    >
      <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css" />
    </Helmet>
    <Header />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
