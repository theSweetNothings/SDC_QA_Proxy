(self.webpackChunkclarkfecsource=self.webpackChunkclarkfecsource||[]).push([[489],{741:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(7294),a=n(586),o=n(9163),l=n(1384);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var l,u=e[Symbol.iterator]();!(r=(l=u.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(){var e,t,n=(e=["\n  align-self: center;\n  width: 60%;\n"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return f=function(){return n},n}o.ZP.input(f());const s=function(e){var t=e.handleClose,n=e.handleUpload,o=u((0,r.useState)([]),2),f=o[0],s=o[1],m=u((0,r.useState)(""),2),y=m[0],b=m[1],h=u((0,r.useState)([]),2);return h[0],h[1],r.createElement(l.vO,{name:"photos-background"},r.createElement(l.hz,null,r.createElement(l.Ye,null,r.createElement(l.YV,{onClick:t,name:"photos-close-btn"},"X")),r.createElement("h2",null,"Upload photo"),r.createElement("br",null),f.length<5&&r.createElement(l.Yr,{onSubmit:function(e){e.preventDefault(),s((function(e){return[].concat(function(e){if(Array.isArray(e))return i(e)}(t=e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||c(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[y]);var t})),b("")}},r.createElement(l.Az,null,"Photo URL:",r.createElement(l.SP,{type:"text",value:y,onChange:function(e){if(f.length<5){var t=e.target.value;b(t)}}})),r.createElement("br",null),r.createElement(l.Fy,{type:"submit",value:"Save"})),r.createElement(l.es,null,f&&f.map((function(e){return r.createElement(l.Ee,{key:(0,a.Z)(),src:e})}))),r.createElement(l.Sn,{onClick:function(){return n(f)}},"Upload Photos")))}}}]);