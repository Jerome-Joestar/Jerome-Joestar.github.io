import React from 'react';
import Social from './social';

const SocialSection = () => (
    <section>
        <h1 className="section-title">Social</h1>
        <div className="container body-container social-container">
            <Social social={'github'}/>
            <Social social={'linkedin'}/>
            <Social social={'flickr'}/>
            <Social social={'facebook'}/>
            <Social social={'instagram'}/>
            <Social social={'twitter'}/>
        </div>
    </section>
)

export default SocialSection;
