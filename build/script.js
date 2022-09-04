!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);class o{constructor(){this.btnBlock=document.createElement("div"),this.colorPicker=document.createElement("input"),this.clear=document.createElement("div"),this.scale=localStorage.getItem("scale")||1,this.color=localStorage.getItem("color")||"#ffffff",this.btnBlock.addEventListener("click",e=>{this.onScaleChange(e)}),this.colorPicker.addEventListener("input",e=>{this.onColorChange(e)}),this.clear.addEventListener("click",()=>{this.reset()})}render(){this.injectStyle(),this.setBgColor(),this.onScaleChange();let e=document.createElement("input"),t=document.createElement("input"),n=document.createElement("div");n.append(this.btnBlock,this.colorPicker,this.clear),this.clear.innerHTML="&times",this.clear.classList.add("clear"),e.classList.add("scale_btn"),t.classList.add("scale_btn"),this.btnBlock.classList.add("scale"),this.colorPicker.classList.add("color"),e.setAttribute("type","button"),t.setAttribute("type","button"),e.setAttribute("value","1x"),t.setAttribute("value","1.5x"),this.colorPicker.setAttribute("type","color"),this.colorPicker.setAttribute("value","#ffffff"),this.btnBlock.append(e,t),n.classList.add("panel"),document.querySelector("body").append(n)}onScaleChange(e){const t=document.querySelector("body");e&&(this.scale=+e.target.value.replace(/x/g,""));const n=e=>{e.childNodes.forEach(e=>{if("#text"===e.nodeName&&e.nodeValue.replace(/\s+/g,"").length>0)if(e.parentNode.getAttribute("data-fz"))e.parentNode.style.fontSize=e.parentNode.getAttribute("data-fz")*this.scale+"px";else{let t=window.getComputedStyle(e.parentNode,null).fontSize;e.parentNode.setAttribute("data-fz",+t.replace(/px/g,"")),e.parentNode.style.fontSize=e.parentNode.getAttribute("data-fz")*this.scale+"px"}else n(e)})};n(t),localStorage.setItem("scale",this.scale)}onColorChange(e){document.querySelector("body").style.backgroundColor=e.target.value,localStorage.setItem("color",e.target.value)}setBgColor(){document.querySelector("body").style.backgroundColor=this.color,this.colorPicker.value=this.color}injectStyle(){const e=document.createElement("style");e.innerHTML="\n    .panel {\n      display: flex;\n      justify-content: space-around;\n      align-items: center;\n      position: fixed;\n      top: 10px;\n      right: 0;\n      border: 1px solid rgba(0,0,0, .2);\n      box-shadow: 0 0 20px rgba(0,0,0, .5);\n      width: 300px;\n      height: 60px;\n      background-color: #fff;\n  \n  }\n  \n  .scale {\n      display: flex;\n      justify-content: space-around;\n      align-items: center;\n      width: 100px;\n      height: 40px;\n  }\n\n  .scale_btn {\n    display: block;\n    width: 40px;\n    height: 40px;\n    border: 1px solid rgba(0,0,0, .2);\n    border-radius: 4px;\n    font-size: 18px;\n}\n  \n  .color {\n      width: 40px;\n      height: 40px;\n  }\n  .clear {\n    font-size: 20px;\n    cursor: pointer;\n  }\n    ",document.querySelector("head").appendChild(e)}reset(){localStorage.clear(),this.scale=1,this.color="#ffffff",this.setBgColor(),this.onScaleChange()}}window.addEventListener("DOMContentLoaded",()=>{(new o).render()})}]);