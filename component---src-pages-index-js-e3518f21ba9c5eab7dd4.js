webpackJsonp([35783957827783],{96:function(e,t,n){"use strict";function a(e){return e}function r(e,t,n){function r(e,t){var n=y.hasOwnProperty(t)?y[t]:null;M.hasOwnProperty(t)&&i("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&i("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function c(e,n){if(n){i("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),i(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var a=e.prototype,c=a.__reactAutoBindPairs;n.hasOwnProperty(s)&&_.mixins(e,n.mixins);for(var l in n)if(n.hasOwnProperty(l)&&l!==s){var o=n[l],u=a.hasOwnProperty(l);if(r(u,l),_.hasOwnProperty(l))_[l](e,o);else{var f=y.hasOwnProperty(l),m="function"==typeof o,h=m&&!f&&!u&&n.autobind!==!1;if(h)c.push(l,o),a[l]=o;else if(u){var E=y[l];i(f&&("DEFINE_MANY_MERGED"===E||"DEFINE_MANY"===E),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",E,l),"DEFINE_MANY_MERGED"===E?a[l]=d(a[l],o):"DEFINE_MANY"===E&&(a[l]=p(a[l],o))}else a[l]=o}}}else;}function u(e,t){if(t)for(var n in t){var a=t[n];if(t.hasOwnProperty(n)){var r=n in _;i(!r,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var c=n in e;if(c){var l=v.hasOwnProperty(n)?v[n]:null;return i("DEFINE_MANY_MERGED"===l,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),void(e[n]=d(e[n],a))}e[n]=a}}}function f(e,t){i(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in t)t.hasOwnProperty(n)&&(i(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function d(e,t){return function(){var n=e.apply(this,arguments),a=t.apply(this,arguments);if(null==n)return a;if(null==a)return n;var r={};return f(r,n),f(r,a),r}}function p(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function m(e,t){var n=t.bind(e);return n}function h(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var a=t[n],r=t[n+1];e[a]=m(e,r)}}function E(e){var t=a(function(e,a,r){this.__reactAutoBindPairs.length&&h(this),this.props=e,this.context=a,this.refs=o,this.updater=r||n,this.state=null;var c=this.getInitialState?this.getInitialState():null;i("object"==typeof c&&!Array.isArray(c),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=c});t.prototype=new b,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],g.forEach(c.bind(null,t)),c(t,x),c(t,e),c(t,N),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),i(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var r in y)t.prototype[r]||(t.prototype[r]=null);return t}var g=[],y={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},v={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},_={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)c(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=l({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=l({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=d(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=l({},e.propTypes,t)},statics:function(e,t){u(e,t)},autobind:function(){}},x={componentDidMount:function(){this.__isMounted=!0}},N={componentWillUnmount:function(){this.__isMounted=!1}},M={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},b=function(){};return l(b.prototype,e.prototype,M),E}var c,l=n(5),o=n(34),i=n(1),s="mixins";c={},e.exports=r},5:function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function a(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var a=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==a.join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}var r=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;e.exports=a()?Object.assign:function(e,t){for(var a,o,i=n(e),s=1;s<arguments.length;s++){a=Object(arguments[s]);for(var u in a)c.call(a,u)&&(i[u]=a[u]);if(r){o=r(a);for(var f=0;f<o.length;f++)l.call(a,o[f])&&(i[o[f]]=a[o[f]])}}return i}},198:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(2),c=a(r),l=function(){return c.default.createElement("section",null,c.default.createElement("h1",{className:"section-title"},"Contact"))};t.default=l,e.exports=t.default},200:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(2),c=a(r),l=function(){return c.default.createElement("section",null,c.default.createElement("div",{className:"mission-container"},c.default.createElement("h3",null,"Here is the mission statement."),c.default.createElement("p",null,"Trying to determine a mission statement is super hard when you want it to sound cool and meaningful."),c.default.createElement("p",null,"Providing beautiful solutions to technical issues."),c.default.createElement("div",null,c.default.createElement("a",{href:"https://docs.google.com/document/d/1AmKS-EKP1tfPgs2YqhxzN5sr98eMyVu6ghXAx6Q8FoI/export?format=pdf",className:"mission-button button card-1 card"},"Download Resume"))))};t.default=l,e.exports=t.default},201:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(2),c=a(r),l=n(202),o=a(l),i=n(435),s=a(i),u=n(433),f=a(u),d=n(434),p=a(d),m=function(){return c.default.createElement("section",null,c.default.createElement("h1",{className:"section-title"},"Projects"),c.default.createElement("div",{className:"container body-container project-container"},c.default.createElement(o.default,{image:s.default,link:"https://milk-intake-calculator.herokuapp.com",description:"A React based project built to assist mothers of newborns in determining proper feeding amounts/schedules."}),c.default.createElement(o.default,{image:f.default,link:"https://angular-flickr-gallery.herokuapp.com/",description:"An Angular based project that pulls my images from Flickr galleries through a node backend then displays them on the frontend."}),c.default.createElement(o.default,{image:p.default,link:"https://react-music-assistant.herokuapp.com/",description:"A React app that was built to assist music learners with learning to play by ear. Still in development!"})))};t.default=m,e.exports=t.default},202:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(2),c=a(r),l=function(e){var t=e.image,n=e.link,a=e.description;return c.default.createElement("div",{className:"container-item-center project-card"},c.default.createElement("div",{className:"project-animation-wrapper"},c.default.createElement("a",{href:n,target:"blank"},c.default.createElement("div",{className:"front card card-2"},c.default.createElement("img",{src:t,alt:"Project Image"})),c.default.createElement("div",{className:"back card card-2"},c.default.createElement("p",{className:"project-description layout-padding-16"},a)))))};t.default=l,e.exports=t.default},203:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(2),c=a(r),l=n(204),o=a(l),i=function(){return c.default.createElement("section",null,c.default.createElement("h1",{className:"section-title"},"Skills"),c.default.createElement("div",{className:"container body-container skill-container"},c.default.createElement(o.default,{skill:"html5",text:"HTML"}),c.default.createElement(o.default,{skill:"css3",text:"CSS"}),c.default.createElement(o.default,{skill:"javascript",text:"JavaScript"}),c.default.createElement(o.default,{skill:"sass",text:"Sass"}),c.default.createElement(o.default,{skill:"react",text:"React"}),c.default.createElement(o.default,{skill:"angularjs",text:"Angular"}),c.default.createElement(o.default,{skill:"git",text:"Git"}),c.default.createElement(o.default,{skill:"typescript",text:"TypeScript"}),c.default.createElement(o.default,{skill:"nodejs",text:"NodeJS"})))};t.default=i,e.exports=t.default},204:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(2),c=a(r),l=function(e){var t=e.skill,n=e.text;return c.default.createElement("div",{className:"container-item-center skill-content"},c.default.createElement("i",{className:"skill devicon-"+t+"-plain"}),c.default.createElement("h4",{className:"skill-name"},n))};t.default=l,e.exports=t.default},205:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(2),c=a(r),l=n(206),o=a(l),i=function(){return c.default.createElement("section",null,c.default.createElement("h1",{className:"section-title"},"Social"),c.default.createElement("div",{className:"container body-container social-container"},c.default.createElement(o.default,{social:"github"}),c.default.createElement(o.default,{social:"linkedin"}),c.default.createElement(o.default,{social:"flickr"}),c.default.createElement(o.default,{social:"facebook"}),c.default.createElement(o.default,{social:"instagram"}),c.default.createElement(o.default,{social:"twitter"})))};t.default=i,e.exports=t.default},206:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(2),c=a(r),l={github:{title:"Github",icon:function(){return c.default.createElement("svg",{x:"0px",y:"0px",width:"32px",height:"32px",viewBox:"0 0 568.034 568.034"},c.default.createElement("g",null,c.default.createElement("g",null,c.default.createElement("path",{d:"M550.99,0H17.051C8.948,0,2.381,6.567,2.381,14.67v538.694c0,8.104,6.567,14.67,14.67,14.67h177.498v-0.129    c8.011-0.092,14.149-4.577,14.431-12.166c0.728-19.725,0.214-39.492,0.214-58.562c-14.296,0.667-27.944,2.473-41.438,1.695    c-29.762-1.714-52.632-14.413-64.493-43.556c-7.026-17.265-17.613-32.032-34.101-41.886c-3.079-1.842-5.771-4.554-8.127-7.308    c-3.079-3.592-2.503-7.282,2.362-8.268c4.908-0.998,10.27-1.695,15.11-0.79c19.009,3.568,32.154,15.49,42.216,31.347    c19.896,31.371,50.521,40.974,84.976,26.487c1.921-0.808,4.363-2.766,4.725-4.553c2.778-13.887,7.968-26.549,18.427-37.65    c-11.628-2.154-22.399-3.739-32.962-6.188c-30.417-7.038-57.742-19.7-77.724-44.848c-16.303-20.514-23.758-44.528-27.185-70.086    c-5.367-40.031-0.563-77.503,26.928-109.493c1.389-1.616,2.142-4.927,1.524-6.94c-6.885-22.497-5.833-44.805,0.991-67.051    c3.581-11.683,4.578-12.265,16.5-10.637c0.729,0.098,1.438,0.281,2.161,0.404c23.898,3.954,44.468,15.526,64.731,27.95    c2.724,1.671,6.873,2.711,9.866,1.983c48.397-11.744,96.702-11.695,145.093,0.043c2.809,0.679,6.561-0.288,9.247-1.695    c11.016-5.759,21.561-12.454,32.718-17.914c12.98-6.346,26.652-11.12,41.371-10.857c2.576,0.049,6.561,2.509,7.423,4.786    c8.856,23.464,10.723,47.375,3.666,71.794c-0.753,2.607,0.367,6.322,1.769,8.892c6.965,12.779,16.689,24.572,21.096,38.127    c13.434,41.316,8.538,82.229-9.749,121.06c-16.757,35.594-47.834,53.63-84.621,62.933c-12.424,3.14-25.153,5.049-38.556,7.681    c17.564,18.348,20.318,40.74,20.006,64.192c-0.324,24.192-0.238,48.391-0.251,72.589c-0.006,11.72,5.11,18.195,14.039,18.574    c-0.006,0.037,188.723,0.037,188.723,0.037V14.67C565.653,6.567,559.087,0,550.99,0z"}))))},href:"https://github.com/Jerome-Joestar",description:"Though this is not necessarily a social media site I do believe that through the projects that people create, one can also see into the interests of the creator."},linkedin:{title:"LinkedIn",icon:function(){return c.default.createElement("svg",{x:"0px",y:"0px",width:"32px",height:"32px",viewBox:"0 0 430.117 430.118"},c.default.createElement("g",null,c.default.createElement("path",{id:"LinkedIn__x28_alt_x29_",d:"M398.355,0H31.782C14.229,0,0.002,13.793,0.002,30.817v368.471   c0,17.025,14.232,30.83,31.78,30.83h366.573c17.549,0,31.76-13.814,31.76-30.83V30.817C430.115,13.798,415.904,0,398.355,0z    M130.4,360.038H65.413V165.845H130.4V360.038z M97.913,139.315h-0.437c-21.793,0-35.92-14.904-35.92-33.563   c0-19.035,14.542-33.535,36.767-33.535c22.227,0,35.899,14.496,36.331,33.535C134.654,124.415,120.555,139.315,97.913,139.315z    M364.659,360.038h-64.966V256.138c0-26.107-9.413-43.921-32.907-43.921c-17.973,0-28.642,12.018-33.327,23.621   c-1.736,4.144-2.166,9.94-2.166,15.728v108.468h-64.954c0,0,0.85-175.979,0-194.192h64.964v27.531   c8.624-13.229,24.035-32.1,58.534-32.1c42.76,0,74.822,27.739,74.822,87.414V360.038z M230.883,193.99   c0.111-0.182,0.266-0.401,0.42-0.614v0.614H230.883z"})))},href:"https://www.linkedin.com/pub/marcus-parker/83/b19/129",description:"Here you are able to see all of the professonal aspects of my career including both previous experiences and my current occupational status."},flickr:{title:"Flickr",icon:function(){return c.default.createElement("svg",{x:"0px",y:"0px",width:"32px",height:"32px",viewBox:"0 0 94 94"},c.default.createElement("g",null,c.default.createElement("path",{d:"M94,89c0,2.761-2.238,5-5,5H5c-2.762,0-5-2.239-5-5V5c0-2.761,2.238-5,5-5h84c2.762,0,5,2.239,5,5V89z M68.52,28.309   c-9.781,0-17.711,8.269-17.711,18.468c0,10.202,7.93,18.469,17.711,18.469c9.78,0,17.711-8.268,17.711-18.469   C86.229,36.578,78.3,28.309,68.52,28.309z M24.985,28.309c-9.508,0-17.215,8.369-17.215,18.692s7.707,18.69,17.215,18.69   C34.491,65.691,42.2,57.323,42.2,47S34.491,28.309,24.985,28.309z"})))},href:"https://www.flickr.com/photos/155189476@N05/albums",description:"Come check out my most recent hobby, photography! I am very new to this, yet I am already enjoying it so much. Check it out!"},facebook:{title:"Facebook",icon:function(){return c.default.createElement("svg",{x:"0px",y:"0px",width:"32px",height:"32px",viewBox:"0 0 60.734 60.733"},c.default.createElement("g",null,c.default.createElement("path",{d:"M57.378,0.001H3.352C1.502,0.001,0,1.5,0,3.353v54.026c0,1.853,1.502,3.354,3.352,3.354h29.086V37.214h-7.914v-9.167h7.914   v-6.76c0-7.843,4.789-12.116,11.787-12.116c3.355,0,6.232,0.251,7.071,0.36v8.198l-4.854,0.002c-3.805,0-4.539,1.809-4.539,4.462   v5.851h9.078l-1.187,9.166h-7.892v23.52h15.475c1.852,0,3.355-1.503,3.355-3.351V3.351C60.731,1.5,59.23,0.001,57.378,0.001z"})))},href:"https://www.facebook.com/marcus.parker.14",description:"This is the godfather of all social media, and a great way to tell what I am planning. I will admit I may be switching this account out for a Twitter which seems to be more popular."},instagram:{title:"Instagram",icon:function(){return c.default.createElement("svg",{x:"0px",y:"0px",width:"32px",height:"32px",viewBox:"0 0 438.536 438.536"},c.default.createElement("g",null,c.default.createElement("path",{d:"M421.981,16.562C410.941,5.519,397.711,0,382.298,0H56.248C40.83,0,27.604,5.521,16.561,16.562   C5.52,27.6,0.001,40.828,0.001,56.243V382.29c0,15.413,5.518,28.644,16.56,39.683c11.043,11.04,24.272,16.563,39.687,16.563   h326.046c15.41,0,28.644-5.523,39.684-16.563c11.043-11.039,16.557-24.27,16.557-39.683V56.243   C438.534,40.825,433.021,27.604,421.981,16.562z M157.462,158.025c17.224-16.652,37.924-24.982,62.097-24.982   c24.36,0,45.153,8.33,62.381,24.982c17.228,16.655,25.837,36.785,25.837,60.386c0,23.598-8.609,43.729-25.837,60.379   c-17.228,16.659-38.014,24.988-62.381,24.988c-24.172,0-44.87-8.336-62.097-24.988c-17.228-16.652-25.841-36.781-25.841-60.379   C131.621,194.81,140.234,174.681,157.462,158.025z M388.865,370.589c0,4.945-1.718,9.083-5.141,12.416   c-3.433,3.33-7.519,4.996-12.282,4.996h-305.2c-4.948,0-9.091-1.666-12.419-4.996c-3.333-3.326-4.998-7.471-4.998-12.416V185.575   H89.08c-3.805,11.993-5.708,24.462-5.708,37.402c0,36.553,13.322,67.715,39.969,93.511c26.65,25.786,58.721,38.685,96.217,38.685   c24.744,0,47.583-5.903,68.527-17.703c20.937-11.807,37.486-27.839,49.676-48.112c12.183-20.272,18.274-42.4,18.274-66.38   c0-12.94-1.91-25.406-5.715-37.402h38.547v185.014H388.865z M388.865,115.626c0,5.52-1.903,10.184-5.716,13.99   c-3.805,3.809-8.466,5.711-13.989,5.711h-49.676c-5.517,0-10.185-1.903-13.99-5.711c-3.806-3.806-5.708-8.47-5.708-13.99V68.522   c0-5.33,1.902-9.945,5.708-13.848c3.806-3.901,8.474-5.854,13.99-5.854h49.676c5.523,0,10.185,1.952,13.989,5.854   c3.812,3.903,5.716,8.518,5.716,13.848V115.626z"})))},href:"https://instagram.com/mark_park.exe/",description:"Here you can see what I am up through a more visual story. Normally I show photos from trips I take, or freaking amazing food that I am eating!"},twitter:{title:"Twitter",icon:function(){return c.default.createElement("svg",{x:"0px",y:"0px",width:"32px",height:"32px",viewBox:"0 0 510 510"},c.default.createElement("g",null,c.default.createElement("g",null,c.default.createElement("path",{d:"M459,0H51C22.95,0,0,22.95,0,51v408c0,28.05,22.95,51,51,51h408c28.05,0,51-22.95,51-51V51C510,22.95,487.05,0,459,0z     M400.35,186.15c-2.55,117.3-76.5,198.9-188.7,204C165.75,392.7,132.6,377.4,102,359.55c33.15,5.101,76.5-7.649,99.45-28.05    c-33.15-2.55-53.55-20.4-63.75-48.45c10.2,2.55,20.4,0,28.05,0c-30.6-10.2-51-28.05-53.55-68.85c7.65,5.1,17.85,7.65,28.05,7.65    c-22.95-12.75-38.25-61.2-20.4-91.8c33.15,35.7,73.95,66.3,140.25,71.4c-17.85-71.4,79.051-109.65,117.301-61.2    c17.85-2.55,30.6-10.2,43.35-15.3c-5.1,17.85-15.3,28.05-28.05,38.25c12.75-2.55,25.5-5.1,35.7-10.2    C425.85,165.75,413.1,175.95,400.35,186.15z"}))))},href:"https://twitter.com/markpark_exe",description:"My Twitter, I don"}},o=function(e){var t=e.social;return c.default.createElement("div",{className:"container-item-left social-content"},c.default.createElement("a",{href:l[t].href,target:"_blank"},c.default.createElement("h4",null,l[t].icon(),l[t].title),c.default.createElement("p",null,l[t].description)))};t.default=o,e.exports=t.default},209:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(2),c=a(r),l=n(200),o=a(l),i=n(203),s=a(i),u=n(201),f=a(u),d=n(205),p=a(d),m=n(198),h=a(m),E=function(){return c.default.createElement("div",null,c.default.createElement(o.default,null),c.default.createElement(s.default,null),c.default.createElement(f.default,null),c.default.createElement(p.default,null),c.default.createElement(h.default,null))};t.default=E,e.exports=t.default},433:function(e,t,n){e.exports=n.p+"static/angular-flicker-screen.37eee7ae.jpg"},434:function(e,t,n){e.exports=n.p+"static/maintenance.2e860f88.png"},435:function(e,t,n){e.exports=n.p+"static/milk-calc-screen.196ad22e.png"}});
//# sourceMappingURL=component---src-pages-index-js-e3518f21ba9c5eab7dd4.js.map