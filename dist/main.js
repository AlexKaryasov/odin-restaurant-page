!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const o=document.querySelector("#content"),r=()=>{let e=document.createElement("div");e.classList.add("about-content-name-logo");let t=document.createElement("div");t.classList.add("about-content-name");let n=document.createElement("h1");n.textContent="Welcome to the Coffee Fake Samara",t.appendChild(n);let r=document.createElement("p");r.textContent="We're proud to be your host!",t.appendChild(r),e.appendChild(t),o.appendChild(e)},c=()=>{let e=document.createElement("div");e.classList.add("about-content-correspondent-info");let t=document.createElement("h2");t.textContent="Come and join us!",e.appendChild(t);let n=document.createElement("p");n.textContent="We have just opened our cafe here in Samara",e.appendChild(n),n=document.createElement("p"),n.textContent="We are ready to offer plenty of goods for you! Check out our Menu section",e.appendChild(n),n=document.createElement("p"),n.textContent="And now our doors are opened from 9 a.m to 9 p.m. You can find us in Contacts section",e.appendChild(n),o.appendChild(e)};var a=()=>(r(),c(),o);let d=document.querySelector("#content");const l=[];function i(e,t,n){this.name=e,this.description=t,this.price=n}l.push(new i("Cappuccino","Good Old Cappuccino",180)),l.push(new i("Frappuccino","An Icy One",200)),l.push(new i("Peppuccino","Coffee for your Perrot",80)),l.push(new i("Rissuiano","Party Like A Russian!",18e3));const u=(e,t)=>{let n=document.createElement("div");n.classList.add("menu-content-item");let o=document.createElement("div");o.classList.add("menu-content-item-name");let r=document.createElement("h4");r.textContent=t.name,o.appendChild(r);let c=document.createElement("p");c.textContent=t.description,o.appendChild(c),n.appendChild(o);let a=document.createElement("div");a.classList.add("menu-content-item-price"),a.innerHTML=t.price,n.appendChild(a),e.appendChild(n)};var p=()=>{let e=document.createElement("div");return e.classList.add("menu-content-grid-container"),l.forEach(t=>u(e,t)),d.appendChild(e),d};let s=document.querySelector("#content");var m=()=>s;a(),document.querySelectorAll(".tabs__link").forEach(e=>{e.addEventListener("click",e=>{f(e)})});const f=e=>{let t=document.querySelector("#content");for(;t.hasChildNodes();)console.log("Remove last child"),t.removeChild(t.lastChild);switch(e.target.innerHTML){case"Who we are?":a();break;case"Menu":p();break;case"Contacts":m()}}}]);