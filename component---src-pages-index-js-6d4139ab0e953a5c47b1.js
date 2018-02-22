webpackJsonp([35783957827783],{91:function(e,t,a){"use strict";function n(e){return e}function l(e,t,a){function l(e,t){var a=v.hasOwnProperty(t)?v[t]:null;x.hasOwnProperty(t)&&i("OVERRIDE_BASE"===a,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&i("DEFINE_MANY"===a||"DEFINE_MANY_MERGED"===a,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function c(e,a){if(a){i("function"!=typeof a,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),i(!t(a),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var n=e.prototype,c=n.__reactAutoBindPairs;a.hasOwnProperty(s)&&b.mixins(e,a.mixins);for(var o in a)if(a.hasOwnProperty(o)&&o!==s){var r=a[o],u=n.hasOwnProperty(o);if(l(u,o),b.hasOwnProperty(o))b[o](e,r);else{var d=v.hasOwnProperty(o),p="function"==typeof r,h=p&&!d&&!u&&a.autobind!==!1;if(h)c.push(o,r),n[o]=r;else if(u){var E=v[o];i(d&&("DEFINE_MANY_MERGED"===E||"DEFINE_MANY"===E),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",E,o),"DEFINE_MANY_MERGED"===E?n[o]=f(n[o],r):"DEFINE_MANY"===E&&(n[o]=m(n[o],r))}else n[o]=r}}}else;}function u(e,t){if(t)for(var a in t){var n=t[a];if(t.hasOwnProperty(a)){var l=a in b;i(!l,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',a);var c=a in e;if(c){var o=y.hasOwnProperty(a)?y[a]:null;return i("DEFINE_MANY_MERGED"===o,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",a),void(e[a]=f(e[a],n))}e[a]=n}}}function d(e,t){i(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var a in t)t.hasOwnProperty(a)&&(i(void 0===e[a],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",a),e[a]=t[a]);return e}function f(e,t){return function(){var a=e.apply(this,arguments),n=t.apply(this,arguments);if(null==a)return n;if(null==n)return a;var l={};return d(l,a),d(l,n),l}}function m(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function p(e,t){var a=t.bind(e);return a}function h(e){for(var t=e.__reactAutoBindPairs,a=0;a<t.length;a+=2){var n=t[a],l=t[a+1];e[n]=p(e,l)}}function E(e){var t=n(function(e,n,l){this.__reactAutoBindPairs.length&&h(this),this.props=e,this.context=n,this.refs=r,this.updater=l||a,this.state=null;var c=this.getInitialState?this.getInitialState():null;i("object"==typeof c&&!Array.isArray(c),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=c});t.prototype=new w,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],g.forEach(c.bind(null,t)),c(t,_),c(t,e),c(t,N),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),i(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var l in v)t.prototype[l]||(t.prototype[l]=null);return t}var g=[],v={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},y={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},b={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var a=0;a<t.length;a++)c(e,t[a])},childContextTypes:function(e,t){e.childContextTypes=o({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=o({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=f(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=o({},e.propTypes,t)},statics:function(e,t){u(e,t)},autobind:function(){}},_={componentDidMount:function(){this.__isMounted=!0}},N={componentWillUnmount:function(){this.__isMounted=!1}},x={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},w=function(){};return o(w.prototype,e.prototype,x),E}var c,o=a(5),r=a(32),i=a(1),s="mixins";c={},e.exports=l},5:function(e,t){"use strict";function a(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function n(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;var n=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==n.join(""))return!1;var l={};return"abcdefghijklmnopqrst".split("").forEach(function(e){l[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},l)).join("")}catch(e){return!1}}var l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=n()?Object.assign:function(e,t){for(var n,r,i=a(e),s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var u in n)c.call(n,u)&&(i[u]=n[u]);if(l){r=l(n);for(var d=0;d<r.length;d++)o.call(n,r[d])&&(i[r[d]]=n[r[d]])}}return i}},196:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),c=n(l),o=a(197),r=n(o),i=function(){return c.default.createElement("section",null,c.default.createElement("h1",{className:"section-title"},"About Me"),c.default.createElement("div",{className:"container body-container about-hobbies"},c.default.createElement(r.default,{hobby:"snowboarding"}),c.default.createElement(r.default,{hobby:"photography"}),c.default.createElement(r.default,{hobby:"bass"})))};t.default=i,e.exports=t.default},197:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),c=n(l),o={snowboarding:{title:"Snowboarding",description:"I've only hit the slopes a few of times but I am definitely hooked on snowboarding. It is both a great\n    workout and an excellent way to play (or face plant) in the snow. I'm slowly working my way towards hitting the \n    half pipe, after I learn how to properly brake...",icon:function(){return c.default.createElement("svg",{className:"about-svg",viewBox:"0 0 511.312 511.312"},c.default.createElement("path",{className:"about-svg-path",d:"m484.99 363.39c-0.853-0.619-84.992-63.808-179.07-157.87-72.938-72.96-157.35-178.41-159-180.35-33.536-33.557-88.171-33.557-121.75 0-33.558 33.579-33.558 88.192 1.13 122.73 0.832 0.64 84.736 64.32 178.84 158.4 72.96 72.96 157.65 177.94 159.25 179.84 16.789 16.789 38.827 25.173 60.885 25.173 22.059 0 44.075-8.384 60.885-25.173 33.538-33.579 33.538-88.192-1.172-122.75zm-273.51-198.25c-2.859 9.088-9.515 19.328-18.261 28.075-8.747 8.747-18.987 15.424-28.075 18.261-6.592 2.048-12.032 1.984-14.229-0.235-2.176-2.176-2.261-7.744-0.213-14.208 2.859-9.088 9.515-19.328 18.261-28.075s18.987-15.424 28.075-18.261c3.115-0.981 6.016-1.472 8.427-1.472 2.603 0 4.651 0.576 5.781 1.707 2.218 2.219 2.282 7.659 0.234 14.208zm149.42 149.44c-2.859 9.088-9.515 19.328-18.261 28.075-8.747 8.747-19.008 15.424-28.075 18.261-6.464 2.048-12.053 1.92-14.208-0.235-2.176-2.176-2.283-7.744-0.235-14.208 2.859-9.088 9.515-19.328 18.261-28.075 8.747-8.747 19.008-15.424 28.075-18.261 3.115-0.981 5.995-1.451 8.427-1.451 2.603 0 4.672 0.555 5.781 1.685 2.177 2.177 2.262 7.745 0.235 14.209z"}))}},photography:{title:"Photography",description:"Since purchasing my first Nikon DSLR camera, one of my favorite activities has become annoying my \n    friends on trips with stopping to snap a picture everywhere. I have a focus on landscape photography, check out my \n    Flickr to see my work!",icon:function(){return c.default.createElement("svg",{className:"about-svg",viewBox:"0 0 60 60"},c.default.createElement("path",{className:"about-svg-path",d:"m30 20.5c-6.617 0-12 5.383-12 12s5.383 12 12 12 12-5.383 12-12-5.383-12-12-12z"}),c.default.createElement("path",{className:"about-svg-path",d:"m55.201 15.5h-8.524l-4-10h-25.354l-4 10h-1.323v-5h-6v5h-1.201c-2.647 0-4.799 2.152-4.799 4.799v29.368c0 2.665 2.168 4.833 4.833 4.833h50.334c2.665 0 4.833-2.168 4.833-4.833v-29.368c0-2.647-2.152-4.799-4.799-4.799zm-45.201 0h-2v-3h2v3zm20 35c-9.925 0-18-8.075-18-18s8.075-18 18-18 18 8.075 18 18-8.075 18-18 18zm22-23c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"}))}},bass:{title:"Bass",description:"Attempting to mimic Flea's bassline in Tell Me Baby (and yes I am a die-hard RHCP fan) has lead\n     me down the path of wanting to become a great bass player. From funky slap to heavy metal I'm hoping I can play it \n     all someday.",icon:function(){return c.default.createElement("svg",{className:"about-svg",viewBox:"0 0 66.208 66.208"},c.default.createElement("path",{className:"about-svg-path",d:"m65.51 1.579c-0.637-0.153-1.202-0.419-1.641-0.675-0.596-0.348-1.345-0.235-1.85 0.236-1.782 1.66-3.946 2.753-5.529 3.408-0.719 0.298-1.161 1.058-0.996 1.818 0.263 1.212-0.708 2.259-1.054 2.587l-0.126 0.116-30.11 27.876c-0.268 0.25-1.043 0.866-1.866 0.043-1.038-1.038-1.224-4.378 3.486-9.089 0-0.062 1.266-0.809 0.457-1.619-0.809-0.809-3.175 0.353-4.773 1.951-4.71 4.711-4.677 8.106-7.097 10.459-2.967 2.884-8.28 2.386-11.994 6.101 0 0-6.911 6.01 2.634 15.555 7.167 7.167 11.373 5.729 14.582 2.519 4.234-4.234 2.238-8.29 3.586-9.638 2.269-2.27 4.657-1.763 6.956-4.611 1.273-1.577 0.131-3.05-1.005-1.914-0.939 0.939-3.422 2.135-4.75 0.807-1.106-1.106-0.712-2.557 1.934-5.496l30.095-30.095c1.256-1.256 2.5-1.67 3.41-1.776 0.827-0.097 1.507-0.638 1.828-1.407 0.855-2.046 2.778-4.161 4.231-5.567 0.526-0.508 0.303-1.419-0.408-1.589zm-49.636 55.162c-0.587 0.587-1.54 0.587-2.127 0l-5.64-5.64c-0.587-0.587-0.587-1.54 0-2.127s1.54-0.587 2.127 0l5.64 5.64c0.588 0.587 0.588 1.54 0 2.127z"}))}}},r=function(e){var t=e.hobby;return c.default.createElement("div",{className:"container-item-center about-item"},o[t].icon(),c.default.createElement("h3",null,o[t].title),c.default.createElement("p",{className:"about-description"},o[t].description))};t.default=r,e.exports=t.default},198:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),c=n(l),o=function(){return c.default.createElement("section",null,c.default.createElement("h1",{className:"section-title"},"Contact"))};t.default=o,e.exports=t.default},200:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),c=n(l),o=function(){return c.default.createElement("section",null,c.default.createElement("div",{className:"container body-container"},c.default.createElement("div",{className:"mission-container"},c.default.createElement("h3",null,"Here is the mission statement."),c.default.createElement("p",null,"Trying to determine a mission statement is super hard when you want it to sound cool and meaningful."),c.default.createElement("p",null,"Providing beautiful solutions to technical issues."),c.default.createElement("div",null,c.default.createElement("a",{href:"//docs.google.com/document/d/128r7KhH7D0bYKmQNuzY9DFC0KMQfTLhZgJVTplE6jnA/export?format=pdf",className:"mission-button button button-secondary card-1 card layout-margin-right-12 layout-margin-bottom-12"},"Download Cover Letter"),c.default.createElement("a",{href:"//docs.google.com/document/d/1AmKS-EKP1tfPgs2YqhxzN5sr98eMyVu6ghXAx6Q8FoI/export?format=pdf",className:"mission-button button button-secondary card-1 card"},"Download Resume"))),c.default.createElement("div",{className:"mission-svg-container"},c.default.createElement("svg",{className:"mission-svg",version:"1.1",viewBox:"0 0 56.787 56.787",xmlns:"http://www.w3.org/2000/svg"},c.default.createElement("g",null,c.default.createElement("path",{d:"m20.875 23.107c-0.178 0.011-0.756 0.508-0.756 0.508 0.311 0.134 0.935-0.519 0.756-0.508zm0.078-0.102l-0.046 0.028c0.016-6e-3 0.031-0.012 0.045-0.018 0-4e-3 1e-3 -6e-3 1e-3 -0.01zm21.41-22.245c3.207 0 5.807 2.6 5.807 5.807s-2.6 5.807-5.807 5.807-5.807-2.6-5.807-5.807 2.6-5.807 5.807-5.807zm-34.86 24.897h1.556v-0.748h-1.556c-0.424 0-0.73-0.084-0.842-0.23-0.085-0.112-0.048-0.258-0.048-0.258l0.019-4.516h-0.748v4.357c-0.033 0.152-0.075 0.517 0.171 0.853 0.262 0.359 0.751 0.542 1.448 0.542zm49.185 10.612l-0.211-1.712c-0.834-6.688-0.867-6.943-0.545-18.729 0.01-0.413-0.312-0.756-0.728-0.768-0.392-0.026-0.756 0.314-0.769 0.727-0.324 11.896-0.289 12.161 0.557 18.952l0.212 1.715c0.217 1.643 0.026 2.781-0.533 3.219-0.651 0.502-1.79 0.056-1.868 0.024-5.501-1.692-12.354 1.804-12.644 1.949-0.367 0.188-0.511 0.641-0.321 1.008 0.133 0.257 0.395 0.401 0.665 0.401 0.115 0 0.231-0.024 0.343-0.084 0.045-0.021 3.104-1.576 6.576-2.096v11.645h-3.107c-0.633 0-1.146 0.512-1.146 1.145 0 0.631 0.513 1.145 1.146 1.145h8.826c0.633 0 1.146-0.514 1.146-1.145 0-0.633-0.514-1.145-1.146-1.145h-2.863v-11.771c0.689 0.047 1.369 0.154 2.021 0.354 0.08 0.032 1.935 0.794 3.281-0.24 1.031-0.792 1.406-2.341 1.108-4.594zm-3.556-3.395c-0.129-4.919-1.741-9.636-1.868-14.534-0.187-7.134-11.119-7.296-11.207-0.337-4.184 0.712-8.363 1.09-12.617 0.89-3.861-0.181-3.873 5.8-0.039 5.979 4.468 0.209 8.9-0.215 13.301-0.937 0.452 2.618 0.987 5.223 1.157 7.871-9.104 3.18-14.15 10.885-15.438 20.677-9e-3 0.067-0.011 0.139-0.017 0.209v-21.68h5.741v-5.125h-20.59c0.012-0.065 0.017-0.141 0.021-0.235 2e-3 -0.056 5e-3 -0.118 9e-3 -0.188 0.026-0.433 0.102-0.581 0.526-0.663 0.107-0.02 0.242-0.026 0.378-0.024v0.36h5.526c0.161 0.03 0.321 0.053 0.47 0.053 0.232 0 0.432-0.053 0.55-0.212 0.062-0.083 0.062-0.198 0.061-0.309 0-0.107-1e-3 -0.217 0.051-0.282 0.08-0.097 0.234-0.162 0.343-0.172-0.115 0.222-0.187 0.458-0.187 0.708h6.259c0-1.204-1.402-2.18-3.129-2.18-0.54 0-1.037 0.103-1.479 0.27 0.103 1.031-0.867 0.931-1.242 0.855-0.044 0.055-0.082 0.113-0.12 0.171-0.017-4e-3 -0.031-0.014-0.05-0.015-0.167-8e-3 -0.408 0.093-0.535 0.247-0.095 0.116-0.093 0.266-0.093 0.398 1e-3 0.081 1e-3 0.165-0.024 0.198-0.066 0.089-0.196 0.118-0.345 0.126v-0.862h-6.055v0.457c-0.161-1e-3 -0.311 0.013-0.413 0.033-0.537 0.103-0.645 0.35-0.674 0.83-4e-3 0.072-6e-3 0.136-9e-3 0.192-4e-3 0.109-8e-3 0.185-0.023 0.243h-11.371v5.125h3.125v24.858h23.278v-2.489c0.379 3.83 6.916 3.48 7.492-0.904 0.996-7.575 5.414-12.633 12.842-14.307 3.088 0.47 6.499-1.285 6.395-5.295zm-44.688-23.86l0.941 13.417-2.485 0.174-0.941-13.416 2.485-0.175z"}))))))};t.default=o,e.exports=t.default},201:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),c=n(l),o=a(202),r=n(o),i=a(426),s=n(i),u=a(424),d=n(u),f=a(425),m=n(f),p=function(){return c.default.createElement("section",null,c.default.createElement("h1",{className:"section-title"},"Projects"),c.default.createElement("div",{className:"container body-container project-container"},c.default.createElement(r.default,{image:s.default,link:"https://milk-intake-calculator.herokuapp.com",description:"A React based project built to assist mothers of newborns in determining proper feeding amounts/schedules."}),c.default.createElement(r.default,{image:d.default,link:"https://angular-flickr-gallery.herokuapp.com/",description:"An Angular based project that pulls my images from Flickr galleries through a node backend then displays them on the frontend."}),c.default.createElement(r.default,{image:m.default,link:"https://react-music-assistant.herokuapp.com/",description:"A React app that was built to assist music learners with learning to play by ear. Still in development!"})))};t.default=p,e.exports=t.default},202:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),c=n(l),o=function(e){var t=e.image,a=e.link,n=e.description;return c.default.createElement("div",{className:"container-item-center project-card"},c.default.createElement("div",{className:"project-animation-wrapper"},c.default.createElement("a",{href:a,target:"blank"},c.default.createElement("div",{className:"front card card-2"},c.default.createElement("img",{src:t,alt:"Project Image"})),c.default.createElement("div",{className:"back card card-2"},c.default.createElement("p",{className:"project-description layout-padding-16"},n)))))};t.default=o,e.exports=t.default},203:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),c=n(l),o=a(204),r=n(o),i=function(){return c.default.createElement("section",null,c.default.createElement("h1",{className:"section-title"},"Skills"),c.default.createElement("div",{className:"container body-container skill-container"},c.default.createElement(r.default,{skill:"html5",text:"HTML"}),c.default.createElement(r.default,{skill:"css3",text:"CSS"}),c.default.createElement(r.default,{skill:"javascript",text:"JavaScript"}),c.default.createElement(r.default,{skill:"sass",text:"Sass"}),c.default.createElement(r.default,{skill:"react",text:"React"}),c.default.createElement(r.default,{skill:"angularjs",text:"Angular"}),c.default.createElement(r.default,{skill:"git",text:"Git"}),c.default.createElement(r.default,{skill:"typescript",text:"TypeScript"}),c.default.createElement(r.default,{skill:"nodejs",text:"NodeJS"})))};t.default=i,e.exports=t.default},204:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),c=n(l),o=function(e){var t=e.skill,a=e.text;return c.default.createElement("div",{className:"container-item-center skill-content"},c.default.createElement("i",{className:"skill devicon-"+t+"-plain"}),c.default.createElement("h4",{className:"skill-name"},a))};t.default=o,e.exports=t.default},205:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),c=n(l),o=a(206),r=n(o),i=function(){return c.default.createElement("section",null,c.default.createElement("h1",{className:"section-title"},"Social"),c.default.createElement("div",{className:"container body-container social-container"},c.default.createElement(r.default,{social:"github"}),c.default.createElement(r.default,{social:"linkedin"}),c.default.createElement(r.default,{social:"flickr"}),c.default.createElement(r.default,{social:"facebook"}),c.default.createElement(r.default,{social:"instagram"}),c.default.createElement(r.default,{social:"twitter"})))};t.default=i,e.exports=t.default},206:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),c=n(l),o={github:{title:"Github",icon:function(){return c.default.createElement("svg",{x:"0px",y:"0px",width:"32px",height:"32px",viewBox:"0 0 568.034 568.034"},c.default.createElement("g",null,c.default.createElement("g",null,c.default.createElement("path",{d:"M550.99,0H17.051C8.948,0,2.381,6.567,2.381,14.67v538.694c0,8.104,6.567,14.67,14.67,14.67h177.498v-0.129    c8.011-0.092,14.149-4.577,14.431-12.166c0.728-19.725,0.214-39.492,0.214-58.562c-14.296,0.667-27.944,2.473-41.438,1.695    c-29.762-1.714-52.632-14.413-64.493-43.556c-7.026-17.265-17.613-32.032-34.101-41.886c-3.079-1.842-5.771-4.554-8.127-7.308    c-3.079-3.592-2.503-7.282,2.362-8.268c4.908-0.998,10.27-1.695,15.11-0.79c19.009,3.568,32.154,15.49,42.216,31.347    c19.896,31.371,50.521,40.974,84.976,26.487c1.921-0.808,4.363-2.766,4.725-4.553c2.778-13.887,7.968-26.549,18.427-37.65    c-11.628-2.154-22.399-3.739-32.962-6.188c-30.417-7.038-57.742-19.7-77.724-44.848c-16.303-20.514-23.758-44.528-27.185-70.086    c-5.367-40.031-0.563-77.503,26.928-109.493c1.389-1.616,2.142-4.927,1.524-6.94c-6.885-22.497-5.833-44.805,0.991-67.051    c3.581-11.683,4.578-12.265,16.5-10.637c0.729,0.098,1.438,0.281,2.161,0.404c23.898,3.954,44.468,15.526,64.731,27.95    c2.724,1.671,6.873,2.711,9.866,1.983c48.397-11.744,96.702-11.695,145.093,0.043c2.809,0.679,6.561-0.288,9.247-1.695    c11.016-5.759,21.561-12.454,32.718-17.914c12.98-6.346,26.652-11.12,41.371-10.857c2.576,0.049,6.561,2.509,7.423,4.786    c8.856,23.464,10.723,47.375,3.666,71.794c-0.753,2.607,0.367,6.322,1.769,8.892c6.965,12.779,16.689,24.572,21.096,38.127    c13.434,41.316,8.538,82.229-9.749,121.06c-16.757,35.594-47.834,53.63-84.621,62.933c-12.424,3.14-25.153,5.049-38.556,7.681    c17.564,18.348,20.318,40.74,20.006,64.192c-0.324,24.192-0.238,48.391-0.251,72.589c-0.006,11.72,5.11,18.195,14.039,18.574    c-0.006,0.037,188.723,0.037,188.723,0.037V14.67C565.653,6.567,559.087,0,550.99,0z"}))))},href:"https://github.com/Jerome-Joestar",description:"Though this is not necessarily a social media site I do believe that through the projects that people create, one can also see into the interests of the creator."},linkedin:{title:"LinkedIn",icon:function(){return c.default.createElement("svg",{x:"0px",y:"0px",width:"32px",height:"32px",viewBox:"0 0 430.117 430.118"},c.default.createElement("g",null,c.default.createElement("path",{id:"LinkedIn__x28_alt_x29_",d:"M398.355,0H31.782C14.229,0,0.002,13.793,0.002,30.817v368.471   c0,17.025,14.232,30.83,31.78,30.83h366.573c17.549,0,31.76-13.814,31.76-30.83V30.817C430.115,13.798,415.904,0,398.355,0z    M130.4,360.038H65.413V165.845H130.4V360.038z M97.913,139.315h-0.437c-21.793,0-35.92-14.904-35.92-33.563   c0-19.035,14.542-33.535,36.767-33.535c22.227,0,35.899,14.496,36.331,33.535C134.654,124.415,120.555,139.315,97.913,139.315z    M364.659,360.038h-64.966V256.138c0-26.107-9.413-43.921-32.907-43.921c-17.973,0-28.642,12.018-33.327,23.621   c-1.736,4.144-2.166,9.94-2.166,15.728v108.468h-64.954c0,0,0.85-175.979,0-194.192h64.964v27.531   c8.624-13.229,24.035-32.1,58.534-32.1c42.76,0,74.822,27.739,74.822,87.414V360.038z M230.883,193.99   c0.111-0.182,0.266-0.401,0.42-0.614v0.614H230.883z"})))},href:"https://www.linkedin.com/pub/marcus-parker/83/b19/129",description:"Here you are able to see all of the professonal aspects of my career including both previous experiences and my current occupational status."},flickr:{title:"Flickr",icon:function(){return c.default.createElement("svg",{x:"0px",y:"0px",width:"32px",height:"32px",viewBox:"0 0 94 94"},c.default.createElement("g",null,c.default.createElement("path",{d:"M94,89c0,2.761-2.238,5-5,5H5c-2.762,0-5-2.239-5-5V5c0-2.761,2.238-5,5-5h84c2.762,0,5,2.239,5,5V89z M68.52,28.309   c-9.781,0-17.711,8.269-17.711,18.468c0,10.202,7.93,18.469,17.711,18.469c9.78,0,17.711-8.268,17.711-18.469   C86.229,36.578,78.3,28.309,68.52,28.309z M24.985,28.309c-9.508,0-17.215,8.369-17.215,18.692s7.707,18.69,17.215,18.69   C34.491,65.691,42.2,57.323,42.2,47S34.491,28.309,24.985,28.309z"})))},href:"https://www.flickr.com/photos/155189476@N05/albums",description:"Come check out my most recent hobby, photography! I am very new to this, yet I am already enjoying it so much. Check it out!"},facebook:{title:"Facebook",icon:function(){return c.default.createElement("svg",{x:"0px",y:"0px",width:"32px",height:"32px",viewBox:"0 0 60.734 60.733"},c.default.createElement("g",null,c.default.createElement("path",{d:"M57.378,0.001H3.352C1.502,0.001,0,1.5,0,3.353v54.026c0,1.853,1.502,3.354,3.352,3.354h29.086V37.214h-7.914v-9.167h7.914   v-6.76c0-7.843,4.789-12.116,11.787-12.116c3.355,0,6.232,0.251,7.071,0.36v8.198l-4.854,0.002c-3.805,0-4.539,1.809-4.539,4.462   v5.851h9.078l-1.187,9.166h-7.892v23.52h15.475c1.852,0,3.355-1.503,3.355-3.351V3.351C60.731,1.5,59.23,0.001,57.378,0.001z"})))},href:"https://www.facebook.com/marcus.parker.14",description:"This is the godfather of all social media, and a great way to tell what I am planning. I will admit I may be switching this account out for a Twitter which seems to be more popular."},instagram:{title:"Instagram",icon:function(){return c.default.createElement("svg",{x:"0px",y:"0px",width:"32px",height:"32px",viewBox:"0 0 438.536 438.536"},c.default.createElement("g",null,c.default.createElement("path",{d:"M421.981,16.562C410.941,5.519,397.711,0,382.298,0H56.248C40.83,0,27.604,5.521,16.561,16.562   C5.52,27.6,0.001,40.828,0.001,56.243V382.29c0,15.413,5.518,28.644,16.56,39.683c11.043,11.04,24.272,16.563,39.687,16.563   h326.046c15.41,0,28.644-5.523,39.684-16.563c11.043-11.039,16.557-24.27,16.557-39.683V56.243   C438.534,40.825,433.021,27.604,421.981,16.562z M157.462,158.025c17.224-16.652,37.924-24.982,62.097-24.982   c24.36,0,45.153,8.33,62.381,24.982c17.228,16.655,25.837,36.785,25.837,60.386c0,23.598-8.609,43.729-25.837,60.379   c-17.228,16.659-38.014,24.988-62.381,24.988c-24.172,0-44.87-8.336-62.097-24.988c-17.228-16.652-25.841-36.781-25.841-60.379   C131.621,194.81,140.234,174.681,157.462,158.025z M388.865,370.589c0,4.945-1.718,9.083-5.141,12.416   c-3.433,3.33-7.519,4.996-12.282,4.996h-305.2c-4.948,0-9.091-1.666-12.419-4.996c-3.333-3.326-4.998-7.471-4.998-12.416V185.575   H89.08c-3.805,11.993-5.708,24.462-5.708,37.402c0,36.553,13.322,67.715,39.969,93.511c26.65,25.786,58.721,38.685,96.217,38.685   c24.744,0,47.583-5.903,68.527-17.703c20.937-11.807,37.486-27.839,49.676-48.112c12.183-20.272,18.274-42.4,18.274-66.38   c0-12.94-1.91-25.406-5.715-37.402h38.547v185.014H388.865z M388.865,115.626c0,5.52-1.903,10.184-5.716,13.99   c-3.805,3.809-8.466,5.711-13.989,5.711h-49.676c-5.517,0-10.185-1.903-13.99-5.711c-3.806-3.806-5.708-8.47-5.708-13.99V68.522   c0-5.33,1.902-9.945,5.708-13.848c3.806-3.901,8.474-5.854,13.99-5.854h49.676c5.523,0,10.185,1.952,13.989,5.854   c3.812,3.903,5.716,8.518,5.716,13.848V115.626z"})))},href:"https://instagram.com/mark_park.exe/",description:"Here you can see what I am up through a more visual story. Normally I show photos from trips I take, or freaking amazing food that I am eating!"},twitter:{title:"Twitter",icon:function(){return c.default.createElement("svg",{x:"0px",y:"0px",width:"32px",height:"32px",viewBox:"0 0 510 510"},c.default.createElement("g",null,c.default.createElement("g",null,c.default.createElement("path",{d:"M459,0H51C22.95,0,0,22.95,0,51v408c0,28.05,22.95,51,51,51h408c28.05,0,51-22.95,51-51V51C510,22.95,487.05,0,459,0z     M400.35,186.15c-2.55,117.3-76.5,198.9-188.7,204C165.75,392.7,132.6,377.4,102,359.55c33.15,5.101,76.5-7.649,99.45-28.05    c-33.15-2.55-53.55-20.4-63.75-48.45c10.2,2.55,20.4,0,28.05,0c-30.6-10.2-51-28.05-53.55-68.85c7.65,5.1,17.85,7.65,28.05,7.65    c-22.95-12.75-38.25-61.2-20.4-91.8c33.15,35.7,73.95,66.3,140.25,71.4c-17.85-71.4,79.051-109.65,117.301-61.2    c17.85-2.55,30.6-10.2,43.35-15.3c-5.1,17.85-15.3,28.05-28.05,38.25c12.75-2.55,25.5-5.1,35.7-10.2    C425.85,165.75,413.1,175.95,400.35,186.15z"}))))},href:"https://twitter.com/markpark_exe",description:"My Twitter, I don"}},r=function(e){var t=e.social;return c.default.createElement("div",{className:"container-item-left social-content"},c.default.createElement("a",{href:o[t].href,target:"_blank"},c.default.createElement("h4",null,o[t].icon(),o[t].title),c.default.createElement("p",null,o[t].description)))};t.default=r,e.exports=t.default},209:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),c=n(l),o=a(200),r=n(o),i=a(196),s=n(i),u=a(203),d=n(u),f=a(201),m=n(f),p=a(205),h=n(p),E=a(198),g=n(E),v=function(){return c.default.createElement("div",null,c.default.createElement(r.default,null),c.default.createElement(s.default,null),c.default.createElement(d.default,null),c.default.createElement(m.default,null),c.default.createElement(h.default,null),c.default.createElement(g.default,null))};t.default=v,e.exports=t.default},424:function(e,t,a){e.exports=a.p+"static/angular-flicker-screen.37eee7ae.jpg"},425:function(e,t,a){e.exports=a.p+"static/maintenance.2e860f88.png"},426:function(e,t,a){e.exports=a.p+"static/milk-calc-screen.196ad22e.png"}});
//# sourceMappingURL=component---src-pages-index-js-6d4139ab0e953a5c47b1.js.map