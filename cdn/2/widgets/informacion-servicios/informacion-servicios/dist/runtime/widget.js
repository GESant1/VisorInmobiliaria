System.register(["jimu-core","jimu-core/react","jimu-ui"],(function(e,t){var n={},o={},a={};return{setters:[function(e){n.React=e.React},function(e){o.useState=e.useState},function(e){a.Scrollable=e.Scrollable}],execute:function(){e((()=>{var e={4214:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var o=n(8081),a=n.n(o),r=n(3645),i=n.n(r)()(a());i.push([e.id,".botonesServicios button{padding:10px 20px;font-size:16px;background-color:#4CAF50;color:white;border:none;border-radius:5px;cursor:pointer;transition:background-color 0.3s ease}.botonesServicios{display:flex;justify-content:space-around;margin-bottom:20px}.botonesServicios button:hover{background-color:#45a049}\n",""]);const c=i},3645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);o&&i[u[0]]||(void 0!==r&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=r),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),t.push(u))}},t}},8081:e=>{"use strict";e.exports=function(e){return e[1]}},3379:e=>{"use strict";var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var r={},i=[],c=0;c<e.length;c++){var l=e[c],s=o.base?l[0]+o.base:l[0],u=r[s]||0,p="".concat(s," ").concat(u);r[s]=u+1;var d=n(p),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==d)t[d].references++,t[d].updater(m);else{var h=a(m,o);o.byIndex=c,t.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var r=o(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var c=n(r[i]);t[c].references--}for(var l=o(e,a),s=0;s<r.length;s++){var u=n(r[s]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}r=l}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},9216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},3565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},7795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,a&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},4589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},8891:e=>{"use strict";e.exports=n},1315:e=>{"use strict";e.exports=o},726:e=>{"use strict";e.exports=a}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="",r.nc=void 0;var i={};return r.p=window.jimuConfig.baseUrl,(()=>{"use strict";r.r(i),r.d(i,{__set_webpack_public_path__:()=>R,default:()=>y});var e=r(8891),t=r(3379),n=r.n(t),o=r(7795),a=r.n(o),c=r(569),l=r.n(c),s=r(3565),u=r.n(s),p=r(9216),d=r.n(p),m=r(4589),h=r.n(m),f=r(4214),v={};v.styleTagTransform=h(),v.setAttributes=u(),v.insert=l().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=d(),n()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;const b=({titulo:t,foto:n,descripcion:o,titulo1:a,foto1:r,descripcion1:i,titulo2:c,foto2:l,descripcion2:s,titulo3:u,foto3:p,descripcion3:d})=>e.React.createElement("div",null,e.React.createElement("h3",null,t),e.React.createElement("p",null,e.React.createElement("strong",null),n),e.React.createElement("p",null,e.React.createElement("strong",null," Descripción: "),o),e.React.createElement("h3",null,a),e.React.createElement("p",null,e.React.createElement("strong",null),r),e.React.createElement("p",null,e.React.createElement("strong",null,"Descripción:"),i),e.React.createElement("h3",null,c),e.React.createElement("p",null,e.React.createElement("strong",null),l),e.React.createElement("p",null,e.React.createElement("strong",null),s),e.React.createElement("h3",null,u),e.React.createElement("p",null,e.React.createElement("strong",null),p),e.React.createElement("p",null,e.React.createElement("strong",null," "),d));var g=r(1315),E=r(726);const y=t=>{const[n,o]=(0,g.useState)("sinServicio"),[a,r]=(0,g.useState)(!1);let i;return console.log("Boton Pulsado",n),"sinServicio"===n&&(i=e.React.createElement("div",{className:"sinServicio"},e.React.createElement("h3",null," Seleccione un servicio "))),"alquiler"===n&&(i=e.React.createElement(b,{titulo:"Piso en alquiler en Nou Moles",foto:e.React.createElement("img",{src:"https://th.bing.com/th/id/OIP.rcwpd8cMFv1qaxDGGwMbaAHaEc?w=310&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7",style:{maxWidth:"200px",height:"auto"}}),descripcion:"246 m2 - 4 habitaciones - 2 baños",titulo1:"Piso en alquiler en La Roqueta",foto1:e.React.createElement("img",{src:"https://th.bing.com/th/id/OIP.HbdmLv-YGWYpUFkVf9mEXwHaE8?w=276&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",style:{maxWidth:"200px",height:"auto"}}),descripcion1:"148 m2 - 3 habitaciones dobles - 2 baños - 1 balcón",titulo2:"Piso en alquiler en Nou Moles",foto2:e.React.createElement("img",{src:"https://th.bing.com/th/id/OIP.3QlWeJ5zjc3FKy2ZbRonVAHaEK?w=328&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",style:{maxWidth:"200px",height:"auto"}}),descripcion2:"Descripción: 246 m2 - 4 habitaciones - 2 baños - 1 Un estudio/despacho",titulo3:"Piso en alquiler en Marques de dos aguas",foto3:e.React.createElement("img",{src:"https://th.bing.com/th/id/OIP.4SkdshIrUULXABTj74kBxgHaFr?w=223&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",style:{maxWidth:"200px",height:"auto"}}),descripcion3:"Descripción: 166 m2 - 5 habitaciones - 2 baños - 1 salón comedor"})),"vivienda"===n&&(i=e.React.createElement(b,{titulo:"Piso en venta en Jaume Roig",foto:e.React.createElement("img",{src:"https://es.giacomini.com/sites/giacomini.espana/files/styles/image_gallery_800x800/public/gallery/images/Proyecto%20Giacomini%20Proyectos%20Giacomini%20V%C3%ADa%20Agora%20Vallecas%201.jpg?itok=X89WkVDV",style:{maxWidth:"200px",height:"auto"}}),descripcion:"297 m2 - 5 habitaciones - 3 baños completos.",titulo1:"Piso en venta en El Pla del Remei",foto1:e.React.createElement("img",{src:"https://www.realia.es/uploads/promociones/madrid/Residencial%20El%20Bercial/Nuevas%20julio%202021/pisos-nuevos-el-bercial-getafe-obra-nueva-bajos-con-jardin.jpg",style:{maxWidth:"200px",height:"auto"}}),descripcion1:"100 m2 - 1 habitación - 1 baño completo - 1 Terraza interior - Cocina americana",titulo2:"Piso en venta en Marxalenes",foto2:e.React.createElement("img",{src:"https://novoveralresidencial.com/wp-content/uploads/2023/03/detalle-terraza_alta_01.jpg",style:{maxWidth:"200px",height:"auto"}}),descripcion2:"90 m2 - 2 habitaciones - 1 baño - 1 salón-comedor",titulo3:"",foto3:"",descripcion3:""})),"compartir"===n&&(i=e.React.createElement(b,{titulo:"Habitación en alquiler en Benicalap ",foto:e.React.createElement("img",{src:"https://th.bing.com/th/id/OIP.6jU3Gfa23m6JQpDS_yXvLQHaE6?w=279&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7",style:{maxWidth:"200px",height:"auto"}}),descripcion:" 9 m2 - 1 habitación - 1 baño independiente - Incluye servicios",titulo1:"Habitación en alquiler en Russafa",foto1:e.React.createElement("img",{src:"https://th.bing.com/th/id/OIP.W-zPwubZX1PxJbgTFKxaOgHaE7?w=268&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",style:{maxWidth:"200px",height:"auto"}}),descripcion1:" 16m2 - 1 habitación - Baño a compartir - Incluye mobiliario",titulo2:"",foto2:"",descripcion2:"",titulo3:"",foto3:"",descripcion3:""})),e.React.createElement("div",{className:"informacionServicios"},e.React.createElement("div",null,e.React.createElement("h3",null," Seleccione un servicio ")),e.React.createElement("div",{className:"botonesServicios"},e.React.createElement("button",{onClick:function(){r("alquiler"===n&&!a),o("alquiler")}},"Alquiler"),e.React.createElement("button",{onClick:function(){r("vivienda"===n&&!a),o("vivienda")}},"Vivienda"),e.React.createElement("button",{onClick:function(){r("compartir"===n&&!a),o("compartir")}},"Compartir")),e.React.createElement("div",null,a&&i),e.React.createElement(E.Scrollable,null,""))};function R(e){r.p=e}})(),i})())}}}));