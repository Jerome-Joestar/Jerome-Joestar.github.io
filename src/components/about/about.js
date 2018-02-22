import React from 'react';

const hobbyList = {
  'snowboarding': {
    'title': 'Snowboarding',
    'description': `I've only hit the slopes a few of times but I am definitely hooked on snowboarding. It is both a great
    workout and an excellent way to play (or face plant) in the snow. I'm slowly working my way towards hitting the 
    half pipe, after I learn how to properly brake...`,
    'icon': () => {
      return (<svg className="about-svg" viewBox="0 0 511.312 511.312">
          <path className="about-svg-path" d="m484.99 363.39c-0.853-0.619-84.992-63.808-179.07-157.87-72.938-72.96-157.35-178.41-159-180.35-33.536-33.557-88.171-33.557-121.75 0-33.558 33.579-33.558 88.192 1.13 122.73 0.832 0.64 84.736 64.32 178.84 158.4 72.96 72.96 157.65 177.94 159.25 179.84 16.789 16.789 38.827 25.173 60.885 25.173 22.059 0 44.075-8.384 60.885-25.173 33.538-33.579 33.538-88.192-1.172-122.75zm-273.51-198.25c-2.859 9.088-9.515 19.328-18.261 28.075-8.747 8.747-18.987 15.424-28.075 18.261-6.592 2.048-12.032 1.984-14.229-0.235-2.176-2.176-2.261-7.744-0.213-14.208 2.859-9.088 9.515-19.328 18.261-28.075s18.987-15.424 28.075-18.261c3.115-0.981 6.016-1.472 8.427-1.472 2.603 0 4.651 0.576 5.781 1.707 2.218 2.219 2.282 7.659 0.234 14.208zm149.42 149.44c-2.859 9.088-9.515 19.328-18.261 28.075-8.747 8.747-19.008 15.424-28.075 18.261-6.464 2.048-12.053 1.92-14.208-0.235-2.176-2.176-2.283-7.744-0.235-14.208 2.859-9.088 9.515-19.328 18.261-28.075 8.747-8.747 19.008-15.424 28.075-18.261 3.115-0.981 5.995-1.451 8.427-1.451 2.603 0 4.672 0.555 5.781 1.685 2.177 2.177 2.262 7.745 0.235 14.209z"/>
        </svg>
      )
    },
  },
  'photography': {
    'title': 'Photography',
    'description': `Since purchasing my first Nikon DSLR camera, one of my favorite activities has become annoying my 
    friends on trips with stopping to snap a picture everywhere. I have a focus on landscape photography, check out my 
    Flickr to see my work!`,
    'icon': () => {
      return (<svg className="about-svg" viewBox="0 0 60 60">
        <path className="about-svg-path" d="m30 20.5c-6.617 0-12 5.383-12 12s5.383 12 12 12 12-5.383 12-12-5.383-12-12-12z"/>
        <path className="about-svg-path" d="m55.201 15.5h-8.524l-4-10h-25.354l-4 10h-1.323v-5h-6v5h-1.201c-2.647 0-4.799 2.152-4.799 4.799v29.368c0 2.665 2.168 4.833 4.833 4.833h50.334c2.665 0 4.833-2.168 4.833-4.833v-29.368c0-2.647-2.152-4.799-4.799-4.799zm-45.201 0h-2v-3h2v3zm20 35c-9.925 0-18-8.075-18-18s8.075-18 18-18 18 8.075 18 18-8.075 18-18 18zm22-23c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"/>
      </svg>)
    },
  },
  'bass': {
    'title': 'Bass',
    'description': `Attempting to mimic Flea's bassline in Tell Me Baby (and yes I am a die-hard RHCP fan) has lead
     me down the path of wanting to become a great bass player. From funky slap to heavy metal I'm hoping I can play it 
     all someday.`,
    'icon': () => {
      return (<svg className="about-svg" viewBox="0 0 66.208 66.208">
        <path className="about-svg-path" d="m65.51 1.579c-0.637-0.153-1.202-0.419-1.641-0.675-0.596-0.348-1.345-0.235-1.85 0.236-1.782 1.66-3.946 2.753-5.529 3.408-0.719 0.298-1.161 1.058-0.996 1.818 0.263 1.212-0.708 2.259-1.054 2.587l-0.126 0.116-30.11 27.876c-0.268 0.25-1.043 0.866-1.866 0.043-1.038-1.038-1.224-4.378 3.486-9.089 0-0.062 1.266-0.809 0.457-1.619-0.809-0.809-3.175 0.353-4.773 1.951-4.71 4.711-4.677 8.106-7.097 10.459-2.967 2.884-8.28 2.386-11.994 6.101 0 0-6.911 6.01 2.634 15.555 7.167 7.167 11.373 5.729 14.582 2.519 4.234-4.234 2.238-8.29 3.586-9.638 2.269-2.27 4.657-1.763 6.956-4.611 1.273-1.577 0.131-3.05-1.005-1.914-0.939 0.939-3.422 2.135-4.75 0.807-1.106-1.106-0.712-2.557 1.934-5.496l30.095-30.095c1.256-1.256 2.5-1.67 3.41-1.776 0.827-0.097 1.507-0.638 1.828-1.407 0.855-2.046 2.778-4.161 4.231-5.567 0.526-0.508 0.303-1.419-0.408-1.589zm-49.636 55.162c-0.587 0.587-1.54 0.587-2.127 0l-5.64-5.64c-0.587-0.587-0.587-1.54 0-2.127s1.54-0.587 2.127 0l5.64 5.64c0.588 0.587 0.588 1.54 0 2.127z"/>
      </svg>)
    },
  },
}

const About = ({ hobby }) => (
  <div className="container-item-center about-item">
    {hobbyList[hobby].icon()}
    <h3>{hobbyList[hobby].title}</h3>
    <p className="about-description">{hobbyList[hobby].description}</p>
  </div>
)

export default About;


