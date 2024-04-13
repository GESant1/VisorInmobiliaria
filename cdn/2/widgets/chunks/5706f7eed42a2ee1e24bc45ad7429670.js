/*! For license information please see 5706f7eed42a2ee1e24bc45ad7429670.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[93039],{93039:(e,t,i)=>{i.r(t),i.d(t,{calcite_chip:()=>h});var n=i(30396),a=i(39591),o=i(9615),c=i(31964),s=i(29340),l=i(36578),r=i(77041),d=i(39351);const h=class{constructor(e){(0,n.r)(this,e),this.calciteChipClose=(0,n.c)(this,"calciteChipClose",6),this.closeClickHandler=e=>{e.preventDefault(),this.calciteChipClose.emit(),this.closed=!0},this.handleSlotImageChange=e=>{this.hasImage=(0,o.s)(e)},this.mutationObserver=(0,r.c)("mutation",(()=>this.updateHasContent())),this.guid=(0,c.g)(),this.appearance="solid",this.kind="neutral",this.closable=!1,this.icon=void 0,this.iconFlipRtl=!1,this.scale="m",this.value=void 0,this.closed=!1,this.messageOverrides=void 0,this.messages=void 0,this.defaultMessages=void 0,this.effectiveLocale=void 0,this.hasContent=!1,this.hasImage=!1}onMessagesChange(){}effectiveLocaleChange(){(0,d.u)(this,this.effectiveLocale)}connectedCallback(){(0,a.c)(this),(0,l.c)(this),(0,d.c)(this),this.setupTextContentObserver()}componentDidLoad(){(0,s.s)(this)}disconnectedCallback(){(0,a.d)(this),(0,l.d)(this),(0,d.d)(this)}async componentWillLoad(){(0,s.a)(this),await(0,d.s)(this),this.updateHasContent()}async setFocus(){await(0,s.c)(this),this.closeButton?.focus()}updateHasContent(){const e=this.el.textContent.trim().length>0||this.el.childNodes.length>0;this.hasContent=this.el.childNodes.length>0&&"#text"===this.el.childNodes[0]?.nodeName?this.el.textContent?.trim().length>0:e}setupTextContentObserver(){this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0})}renderChipImage(){return(0,n.h)("div",{class:"image-container",key:"image"},(0,n.h)("slot",{name:"image",onSlotchange:this.handleSlotImageChange}))}render(){const e=(0,n.h)("calcite-icon",{class:"chip-icon",flipRtl:this.iconFlipRtl,icon:this.icon,scale:"l"===this.scale?"m":"s"}),t=(0,n.h)("button",{"aria-describedby":this.guid,"aria-label":this.messages.dismissLabel,class:"close",onClick:this.closeClickHandler,ref:e=>this.closeButton=e},(0,n.h)("calcite-icon",{class:"close-icon",icon:"x",scale:"l"===this.scale?"m":"s"}));return(0,n.h)("div",{class:{container:!0,"content--slotted":this.hasContent,"image--slotted":this.hasImage}},this.renderChipImage(),this.icon?e:null,(0,n.h)("span",{class:"title",id:this.guid},(0,n.h)("slot",null)),this.closable?t:null)}static get assetsDirs(){return["assets"]}get el(){return(0,n.g)(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};h.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([scale=s]){block-size:1.5rem;font-size:var(--calcite-font-size--2);--calcite-chip-spacing-unit-l:0.5rem;--calcite-chip-spacing-unit-s:0.25rem}:host([scale=s]) .image-container{block-size:1.25rem;inline-size:1.25rem;padding-inline-start:0.125rem}:host([scale=m]){block-size:2rem;font-size:var(--calcite-font-size--1);--calcite-chip-spacing-unit-l:0.75rem;--calcite-chip-spacing-unit-s:calc(0.75rem / 2)}:host([scale=m]) .image-container{block-size:1.5rem;inline-size:1.5rem;padding-inline-start:0.25rem}:host([scale=l]){block-size:2.75rem;font-size:var(--calcite-font-size-0);--calcite-chip-spacing-unit-l:1rem;--calcite-chip-spacing-unit-s:0.5rem}:host([scale=l]) .image-container{block-size:2rem;inline-size:2rem;padding-inline-start:0.5rem}:host{box-sizing:border-box;display:inline-flex;cursor:default;align-items:center;border-radius:9999px;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-1);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.container{display:inline-flex;block-size:100%;max-inline-size:100%;align-items:center}.title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-block:0}.content--slotted .title{padding-inline:var(--calcite-chip-spacing-unit-l)}:host([closable][icon]) .container:not(.content--slotted) .title{padding-inline:0 var(--calcite-chip-spacing-unit-s)}:host(:not([closable])) .container:not(.content--slotted) .chip-icon{margin-inline:auto}.container:not(.image--slotted) .image-container{display:none}:host([scale=s][closable]) .container:not(.content--slotted) .image-container{margin-inline-end:0.125rem}:host([scale=m][closable]) .container:not(.content--slotted) .image-container{margin-inline-end:0.25rem}:host([scale=l][closable]) .container:not(.content--slotted) .image-container{margin-inline-end:0.5rem}:host([scale=s]:not([closable])) .container:not(.content--slotted){block-size:1.5rem;inline-size:1.5rem}:host([scale=s]:not([closable])) .container:not(.content--slotted) .image-container{padding-inline:0.125rem}:host([scale=m]:not([closable])) .container:not(.content--slotted){block-size:2rem;inline-size:2rem}:host([scale=m]:not([closable])) .container:not(.content--slotted) .image-container{padding-inline:0.25rem}:host([scale=l]:not([closable])) .container:not(.content--slotted){block-size:2.75rem;inline-size:2.75rem}:host([scale=l]:not([closable])) .container:not(.content--slotted) .image-container{padding-inline:calc(0.75rem / 2)}:host([closable]) .content--slotted .title{padding-inline:var(--calcite-chip-spacing-unit-l) var(--calcite-chip-spacing-unit-s)}:host([scale=s]) button{inline-size:1rem;block-size:1rem;margin-inline-end:0.125rem}:host([scale=m]) button{inline-size:1.5rem;block-size:1.5rem;margin-inline-end:0.25rem}:host([scale=l]) button{inline-size:2rem;block-size:2rem;margin-inline-end:0.5rem}button{margin:0px;cursor:pointer;align-items:center;border-style:none;background-color:transparent;color:var(--calcite-ui-text-1);outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;-webkit-appearance:none;display:flex;border-radius:50%;padding-inline:var(--calcite-chip-spacing-unit-s);color:inherit;align-content:center;justify-content:center;--calcite-chip-transparent-hover:var(--calcite-button-transparent-hover);--calcite-chip-transparent-press:var(--calcite-button-transparent-press)}button:hover{background-color:var(--calcite-chip-transparent-hover)}button:focus{background-color:var(--calcite-chip-transparent-hover);outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}button:active{background-color:var(--calcite-chip-transparent-press)}.image-container{display:inline-flex;overflow:hidden}slot[name=image]::slotted(*){display:flex;block-size:100%;inline-size:100%;overflow:hidden;border-radius:50%}.chip-icon{position:relative;margin-block:0px;display:inline-flex;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline-end:0;margin-inline-start:var(--calcite-chip-spacing-unit-l)}:host([kind=neutral]){border-color:transparent;background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}:host([kind=neutral]) button,:host([kind=neutral]) .close-icon{color:var(--calcite-ui-text-3)}:host([kind=neutral]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-text-3))}:host([kind=inverse]){border-color:transparent;background-color:var(--calcite-ui-inverse);color:var(--calcite-ui-text-inverse)}:host([kind=inverse]) button,:host([kind=inverse]) .close-icon{color:var(--calcite-ui-text-inverse)}:host([kind=inverse]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-text-inverse))}:host([kind=brand]){border-color:transparent;background-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-inverse)}:host([kind=brand]) button,:host([kind=brand]) .close-icon{color:var(--calcite-ui-text-inverse)}:host([kind=brand]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-text-inverse))}:host([appearance=outline-fill]),:host([appearance=outline]){background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-1)}:host([appearance=outline-fill]) button,:host([appearance=outline-fill]) .close-icon,:host([appearance=outline]) button,:host([appearance=outline]) .close-icon{color:var(--calcite-ui-text-3)}:host([appearance=outline-fill]) .chip-icon,:host([appearance=outline]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-text-3))}:host([appearance=outline-fill]){background-color:var(--calcite-ui-foreground-1)}:host([appearance=outline]){background-color:transparent}:host([kind=neutral][appearance=outline-fill]),:host([kind=neutral][appearance=outline]){border-color:var(--calcite-ui-border-1)}:host([kind=inverse][appearance=outline-fill]),:host([kind=inverse][appearance=outline]){border-color:var(--calcite-ui-border-inverse)}:host([kind=brand][appearance=outline-fill]),:host([kind=brand][appearance=outline]){border-color:var(--calcite-ui-brand)}:host([kind=brand][appearance=solid]) button,:host([kind=inverse][appearance=solid]) button{outline-color:var(--calcite-ui-text-inverse)}:host([closed]){display:none}"},39591:(e,t,i)=>{i.d(t,{c:()=>l,d:()=>r});var n=i(30396),a=i(77041);const o=new Set;let c;const s={childList:!0};function l(e){c||(c=(0,a.c)("mutation",d)),c.observe(e.el,s)}function r(e){o.delete(e.el),d(c.takeRecords()),c.disconnect();for(const[e]of o.entries())c.observe(e,s)}function d(e){e.forEach((({target:e})=>{(0,n.f)(e)}))}},29340:(e,t,i)=>{i.d(t,{a:()=>o,c:()=>s,s:()=>c});const n=new WeakMap,a=new WeakMap;function o(e){a.set(e,new Promise((t=>n.set(e,t))))}function c(e){n.get(e)()}function s(e){return a.get(e)}},39351:(e,t,i)=>{i.d(t,{c:()=>h,d:()=>u,s:()=>l,u:()=>d});var n=i(30396),a=i(36578);const o={};function c(){throw new Error("could not fetch component message bundle")}function s(e){e.messages={...e.defaultMessages,...e.messageOverrides}}async function l(e){e.defaultMessages=await r(e,e.effectiveLocale),s(e)}async function r(e,t){const{el:i}=e,s=i.tagName.toLowerCase().replace("calcite-","");return async function(e,t){const i=`${t}_${e}`;return o[i]||(o[i]=fetch((0,n.a)(`./assets/${t}/t9n/messages_${e}.json`)).then((e=>(e.ok||c(),e.json()))).catch((()=>c()))),o[i]}((0,a.g)(t,"t9n"),s)}async function d(e,t){e.defaultMessages=await r(e,t),s(e)}function h(e){e.onMessagesChange=p}function u(e){e.onMessagesChange=void 0}function p(){s(this)}}}]);