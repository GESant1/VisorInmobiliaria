/*! For license information please see 32fdf7edb206c7b87daf7cdfcc8714ca.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[61384],{26426:(e,n,t)=>{t.d(n,{a:()=>u,b:()=>f,c:()=>o,d:()=>i,e:()=>a,f:()=>c,g:()=>v,i:()=>l,m:()=>r,t:()=>s,u:()=>d});const i=(e,n)=>{let t,i="idle";const o=(...o)=>new Promise((a=>{switch(i){case"flushed":i="idle",t?(clearTimeout(t),a(e(...o))):a(null);break;case"invoked":clearTimeout(t),i="idle",a(e(...o));break;case"cancelled":clearTimeout(t),i="idle",a(null);break;default:t&&clearTimeout(t),i="pending",t=setTimeout((()=>(i="idle",a(e(...o)))),n)}}));return o.flush=function(...e){return i="flushed",o(...e)},o.invoke=function(...e){return i="invoked",o(...e)},o.cancel=function(...e){return i="cancelled",o(...e)},o.getStatus=function(){return i},o},o=(e,n)=>{let t;return(...i)=>new Promise((o=>{t||(t=setTimeout((()=>{clearTimeout(t),t=void 0,o(e(...i))}),n))}))};function a(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function l(e){return null!=e}async function r(e,n){return await Promise.all([e,s(n)]),e}function s(e){return new Promise((n=>setTimeout(n,e)))}const u=(e,n)=>Object.fromEntries((e||[]).map((e=>{const{key:t,data:i}=n(e);return[t,i]}))),c=(e,n)=>e.length===n.length&&e.reduce(((e,t)=>e&&n.indexOf(t)>-1),!0);function d(e,n){const t=[],i={};return e.forEach((e=>{const o=n(e);null==i[o]&&(i[o]=e,t.push(e))})),t}function f(e){const n={boolean:{},number:{},string:{}},t=[];return e.filter((e=>{let i=typeof e;return i in n?!n[i].hasOwnProperty(e)&&(n[i][e]=!0):!(t.indexOf(e)>=0)&&t.push(e)}))}const v=(e,n)=>[...Array(Math.ceil(e.length/n))].map(((t,i)=>e.slice(n*i,n+n*i)))},62727:(e,n,t)=>{t.d(n,{a:()=>l,g:()=>u});var i=t(18869),o=t(81068),a=t(28384);function l(e){var n,t,a;const l=null!==(n=(0,i.c)(e,"[lang]"))&&void 0!==n?n:null===(a=null===(t=e.shadowRoot)||void 0===t?void 0:t.ownerDocument)||void 0===a?void 0:a.documentElement,r=((null==l?void 0:l.lang)||(null===navigator||void 0===navigator?void 0:navigator.language)||"en").toLowerCase();return o.l.has(r)?o.l.get(r):o.l.has(r.slice(0,2))?o.l.get(r.slice(0,2)):"en"}const r={};function s(e,n){const t=`${e}${n}`;return r[t]||(r[t]=function(e,n){return new Promise(((t,i)=>{fetch((0,a.a)(`../arcgis-app-assets/i18n/${e}.i18n.${n}.json`)).then((e=>{e.ok?t(e.json()):i()}),(()=>i()))}))}(e,n)),r[t]}async function u(e,n){const t=n||e.tagName.toLowerCase(),a=l(e),r=function(e){var n,t,a;const l=null!==(n=(0,i.c)(e,"[lang]"))&&void 0!==n?n:null===(a=null===(t=e.shadowRoot)||void 0===t?void 0:t.ownerDocument)||void 0===a?void 0:a.documentElement,r=((null==l?void 0:l.lang)||(null===navigator||void 0===navigator?void 0:navigator.language)||"en").toLowerCase();return o.l.has(r)?o.l.get(r):o.l.has(r.slice(0,2))?r:"en"}(e);let u;try{u=await s(t,a)}catch(e){console.warn(`no locale for ${t} (${a}) loading default locale en.`),u=await s(t,"en")}return[u,a,r]}},22338:(e,n,t)=>{t.d(n,{g:()=>l,p:()=>r});var i=t(66716),o=t(72637),a=t(34077);const l=(e,n)=>async function(e,n){return new Promise(((t,l)=>{(0,i.l)(["esri/popup/FieldInfo"]).then((async([i])=>{var l,r,s;const u=[],c=new Map(null===(l=null==n?void 0:n.fieldInfos)||void 0===l?void 0:l.map((e=>[e.fieldName,e]))),d=await(0,a.d)(e);(null==d?void 0:d.size)&&(c.forEach((e=>{d.has(e.fieldName)&&(u.push(e),d.delete(e.fieldName))})),d.forEach((e=>{if(-1===["geometry"].indexOf(e.type)){const n=new i;n.fieldName=e.name,n.label=e.alias,n.visible=!1,u.push(n)}})),d.clear()),(null==n?void 0:n.expressionInfos)&&(null===(r=n.expressionInfos)||void 0===r||r.forEach((e=>{const n=`${o.f.expression}${e.name}`;if(c.has(n))u.push(c.get(n));else{const e=new i;e.fieldName=n,e.visible=!1,u.push(e)}}))),null===(s=null==n?void 0:n.fieldInfos)||void 0===s||s.forEach((e=>{-1!==e.fieldName.indexOf(o.f.relationship)&&u.push(e)})),t(u)}),(e=>{l(e)}))}))}(e,n),r=async(e,n,t)=>{var i,l;e.closePopup();let r=null;const u=(0,a.c)(n);if(u!==o.s.scene||(null==n?void 0:n.associatedLayer))return r=await s(e,n,t,u),r?("dockEnabled"in e.popup&&(e.popup.dockEnabled=!0),e.openPopup({features:[r],location:(null===(l=null===(i=r.geometry)||void 0===i?void 0:i.extent)||void 0===l?void 0:l.center)||r.geometry}),r):void 0},s=async(e,n,t,l)=>{var r,s,d,f,v,g,p,m,y,h,w;try{let b,k=null;if(l===o.s.ogcFeature){k=await e.whenLayerView(n);const[t]=await(0,i.l)(["esri/core/reactiveUtils"]);await t.whenOnce((()=>!k.updating))}else if(l===o.s.stream){k=await e.whenLayerView(n);const[t]=await(0,i.l)(["esri/core/reactiveUtils"]);await t.whenOnce((()=>!k.updating))}else k=n;if(l===o.s.imageryTile){const t=e.allLayerViews.find((e=>e.layer.id===n.id)),i=await t.fetchPopupFeatures(n.fullExtent.center);return null==i?void 0:i[0]}if(l===o.s.mapImage&&n.layer.version>=10.5&&!(null===(s=null===(r=n.layer.capabilities)||void 0===r?void 0:r.operations)||void 0===s?void 0:s.supportsQuery)&&(null===(f=null===(d=n.layer.capabilities)||void 0===d?void 0:d.operations)||void 0===f?void 0:f.supportsIdentify)){const t=await(0,a.f)(n,e);return t&&(t.sourceLayer=n),t}const x="isTable"in n&&n.isTable,E=k.createQuery();x||(E.geometry=e.center,E.distance=e.resolution),E.outFields=["*"];const F=await k.queryFeatures(E,{signal:t.signal});if(0===(null===(v=null==F?void 0:F.features)||void 0===v?void 0:v.length)){const i=k.createQuery();i.geometry=e.extent,i.outFields=["*"];const a=await k.queryFeatures(i,{signal:t.signal});if((null===(g=null==a?void 0:a.features)||void 0===g?void 0:g.length)>0)b=await c(a,e,n);else{const i=k.createQuery();i.where=k.definitionExpression||"1=1",i.outFields=["*"],((null===(m=null===(p=n.sourceJSON)||void 0===p?void 0:p.advancedQueryCapabilities)||void 0===m?void 0:m.supportsPagination)||l===o.s.ogcFeature)&&(i.start=0,i.num=1),i.outSpatialReference=e.spatialReference,b=null===(h=null===(y=await k.queryFeatures(i,{signal:t.signal}))||void 0===y?void 0:y.features)||void 0===h?void 0:h[0]}}else b=null===(w=null==F?void 0:F.features)||void 0===w?void 0:w[0];return b&&l===o.s.imagery&&(b=await u(n,b)),b}catch(e){console.log(e)}},u=async(e,n)=>{var t;const i=e.createQuery();i.outFields=["*"].concat(e.rasterFields.map((e=>e.name)).filter((e=>e.startsWith("Raster.")))),i.geometry=n.geometry,i.outSpatialReference=n.geometry.spatialReference;const o=await e.queryVisibleRasters(i,{returnTopmostRaster:!0,returnDomainValues:!0});return null!==(t=null==o?void 0:o[0])&&void 0!==t?t:n},c=async(e,n,t)=>{const o=await(0,a.h)(t);if("point"===o){let t=null;for(let i=0;i<e.features.length;i++){const o=e.features[i].geometry.distance(n.center);(0===i||(null==t?void 0:t[1])>o)&&(t=[e.features[i],o])}return t[0]}if("polyline"===o){let t=null;const[o]=await(0,i.l)(["esri/geometry/geometryEngine"]);for(let i=0;i<e.features.length;i++){const a=o.nearestVertex(e.features[i].geometry,n.center).distance;(0===i||(null==t?void 0:t[1])>a)&&(t=[e.features[i],a])}return t[0]}if("polygon"===o||"imagery"===(0,a.c)(t)){let t=null;for(let i=0;i<e.features.length;i++){const o=e.features[i].geometry.centroid.distance(n.center);(0===i||(null==t?void 0:t[1])>o)&&(t=[e.features[i],o])}return t[0]}return e.features[0]}}}]);