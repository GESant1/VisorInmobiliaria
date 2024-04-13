/*! For license information please see 5a493f18586ba1c3c51d151c7fe227ab.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[37713],{37713:(t,e,n)=>{n.r(e),n.d(e,{arcgis_calcite_block_options:()=>i});var r=n(28384),o=n(81068);n(66716),n(18869);const i=class{constructor(t){(0,r.r)(this,t),this.deleteComponent=(0,r.c)(this,"deleteComponent",7),this.duplicateComponent=(0,r.c)(this,"duplicateComponent",7),this.renameComponent=(0,r.c)(this,"renameComponent",7),this.guid=void 0,this.intlOptions=void 0,this.intlDelete=void 0,this.intlDuplicate=void 0,this.intlRename=void 0,this.calciteBlockOptions=void 0}async setFocus(){this.dropdownActionBtn.setFocus()}delete(){this.deleteComponent.emit(this.guid)}duplicate(){this.duplicateComponent.emit(this.guid)}rename(){this.renameComponent.emit(this.guid)}render(){const t=(0,r.h)("calcite-dropdown-item",{onClick:t=>{t.stopPropagation(),this.delete()},onKeyDown:t=>{t.stopPropagation()," "!==t.key&&"Enter"!==t.key||this.delete()}},this.intlDelete),e=(0,r.h)("calcite-dropdown-item",{onClick:t=>{t.stopPropagation(),this.duplicate()},onKeyDown:t=>{t.stopPropagation()," "!==t.key&&"Enter"!==t.key||this.duplicate()}},this.intlDuplicate),n=(0,r.h)("calcite-dropdown-item",{onClick:t=>{t.stopPropagation(),this.rename()},onKeyDown:t=>{t.stopPropagation()," "!==t.key&&"Enter"!==t.key||this.rename()}},this.intlRename);return(0,r.h)(r.H,{title:this.intlOptions,onClick:t=>{t.stopPropagation()}},(0,r.h)("calcite-dropdown",{dir:(0,o.g)(this.hostElement),placement:"bottom-end",scale:"s",overlayPositioning:"fixed"},(0,r.h)("calcite-action",{ref:t=>this.dropdownActionBtn=t,slot:"trigger",scale:"m",text:this.intlOptions},(0,r.h)("calcite-icon",{scale:"s",icon:"ellipsis"})),(0,r.h)("calcite-dropdown-group",null,this.calciteBlockOptions.hasDelete?t:null,this.calciteBlockOptions.hasDuplicate?e:null,this.calciteBlockOptions.hasRename?n:null)))}get hostElement(){return(0,r.d)(this)}};i.style=":host{display:flex;height:100%;justify-content:stretch}calcite-action{height:100%}"},81068:(t,e,n)=>{n.d(e,{C:()=>s,a:()=>u,f:()=>c,g:()=>a,l:()=>i});var r=n(66716),o=n(18869);const i=new Map([["ar","ar"],["bg","bg"],["bs","bs"],["ca","ca"],["cs","cs"],["da","da"],["de","de"],["el","el"],["en","en"],["es","es"],["et","et"],["fi","fi"],["fr","fr"],["he","he"],["hr","hr"],["hu","hu"],["id","id"],["it","it"],["ja","ja"],["ko","ko"],["lt","lt"],["lv","lv"],["nb","nb"],["nl","nl"],["pl","pl"],["pt-br","pt-BR"],["pt-pt","pt-PT"],["ro","ro"],["ru","ru"],["sk","sk"],["sl","sl"],["sr","sr"],["sv","sv"],["th","th"],["tr","tr"],["uk","uk"],["vi","vi"],["zh-cn","zh-CN"],["zh-hk","zh-HK"],["zh-tw","zh-TW"]]);function a(t){return function(t,e,n){const r=(0,o.c)(t,"[dir]");return r?r.getAttribute("dir"):"ltr"}(t)}const s={rtl:"arcgis--rtl"};async function c(t,e){const{api:n,type:o,places:i}=e||{};if(4===n){const[e]=await(0,r.l)(["esri/intl"]),n=e.convertNumberFormatToIntlOptions({places:i,style:o,digitSeparator:!0});return e.formatNumber(t,Object.assign(Object.assign({},n),{style:o}))}const[a]=await(0,r.l)(["dojo/number"]);return a.format(t,{type:o,places:i,pattern:null==e?void 0:e.pattern})}const l={};function u(t){const e=document.documentElement.lang;return l[e]||(l[e]=new Intl.DateTimeFormat(document.documentElement.lang,{year:"numeric",month:"short",day:"numeric"})),l[e].format(t)}},66716:(t,e,n)=>{n.d(e,{a:()=>r,c:()=>i,e:()=>a,g:()=>o,l:()=>s});var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function o(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function i(t,e,n){return t(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}var a=i((function(t,e){!function(t){var e={Promise:"undefined"!=typeof window?window.Promise:void 0},n="4.24",r="next";function o(t){if(t.toLowerCase()===r)return r;var e=t&&t.match(/^(\d)\.(\d+)/);return e&&{major:parseInt(e[1],10),minor:parseInt(e[2],10)}}function i(t){return void 0===t&&(t=n),"https://js.arcgis.com/".concat(t,"/")}function a(t){return!t||o(t)?function(t){void 0===t&&(t=n);var e=i(t),a=o(t);if(a!==r&&3===a.major){var s=a.minor<=10?"js/":"";return"".concat(e).concat(s,"esri/css/esri.css")}return"".concat(e,"esri/themes/light/main.css")}(t):t}function s(t,e){var n=a(t),r=function(t){return document.querySelector('link[href*="'.concat(t,'"]'))}(n);return r||function(t,e){if(e){var n=document.querySelector(e);n.parentNode.insertBefore(t,n)}else document.head.appendChild(t)}(r=function(t){var e=document.createElement("link");return e.rel="stylesheet",e.href=t,e}(n),e),r}var c={};function l(t,e,n){var r;n&&(r=function(t,e){var n=function(r){e(r.error||new Error("There was an error attempting to load ".concat(t.src))),t.removeEventListener("error",n,!1)};return t.addEventListener("error",n,!1),n}(t,n));var o=function(){e(t),t.removeEventListener("load",o,!1),r&&t.removeEventListener("error",r,!1)};t.addEventListener("load",o,!1)}function u(){return document.querySelector("script[data-esri-loader]")}function d(){var t=window.require;return t&&t.on}function p(t){void 0===t&&(t={});var n={};[c,t].forEach((function(t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])}));var r=n.version,o=n.url||i(r);return new e.Promise((function(t,e){var i=u();if(i){var a=i.getAttribute("src");a!==o?e(new Error("The ArcGIS API for JavaScript is already loaded (".concat(a,")."))):d()?t(i):l(i,t,e)}else if(d())e(new Error("The ArcGIS API for JavaScript is already loaded."));else{var c=n.css;c&&s(!0===c?r:c,n.insertCssBefore),l(i=function(t){var e=document.createElement("script");return e.type="text/javascript",e.src=t,e.setAttribute("data-esri-loader","loading"),e}(o),(function(){i.setAttribute("data-esri-loader","loaded"),t(i)}),e),document.body.appendChild(i)}}))}function h(t){return new e.Promise((function(e,n){var r=window.require.on("error",n);window.require(t,(function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];r.remove(),e(t)}))}))}t.utils=e,t.loadModules=function(t,e){if(void 0===e&&(e={}),d())return h(t);var n=u(),r=n&&n.getAttribute("src");return!e.url&&r&&(e.url=r),p(e).then((function(){return h(t)}))},t.getScript=u,t.isLoaded=d,t.loadScript=p,t.setDefaultOptions=function(t){void 0===t&&(t={}),c=t},t.loadCss=s,Object.defineProperty(t,"__esModule",{value:!0})}(e)}));const s=async(t,e)=>(await a.loadModules(t,e)).map((t=>t.__esModule&&t.default?t.default:t))}}]);