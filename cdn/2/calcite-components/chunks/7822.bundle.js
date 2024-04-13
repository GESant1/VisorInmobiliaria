/*! For license information please see 7822.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[7822],{7822:(i,e,t)=>{t.r(e),t.d(e,{calcite_accordion:()=>s,calcite_accordion_item:()=>m});var c=t(8641),n=t(5527),o=t(8082),a=t(2322),r=t(8274);const s=class{constructor(i){(0,c.r)(this,i),this.calciteInternalAccordionChange=(0,c.c)(this,"calciteInternalAccordionChange",6),this.mutationObserver=(0,n.c)("mutation",(()=>this.updateAccordionItems())),this.appearance="solid",this.iconPosition="end",this.iconType="chevron",this.scale="m",this.selectionMode="multiple"}handlePropsChange(){this.updateAccordionItems()}connectedCallback(){this.mutationObserver?.observe(this.el,{childList:!0}),this.updateAccordionItems()}disconnectedCallback(){this.mutationObserver?.disconnect()}render(){const i="transparent"===this.appearance;return(0,c.h)("div",{class:{"accordion--transparent":i,accordion:!i}},(0,c.h)("slot",null))}updateActiveItemOnChange(i){this.calciteInternalAccordionChange.emit({requestedAccordionItem:i.detail.requestedAccordionItem}),i.stopPropagation()}updateAccordionItems(){this.el.querySelectorAll("calcite-accordion-item").forEach((i=>{i.iconPosition=this.iconPosition,i.iconType=this.iconType,i.scale=this.scale})),document.dispatchEvent(new CustomEvent("calciteInternalAccordionItemsSync"))}get el(){return(0,c.a)(this)}static get watchers(){return{iconPosition:["handlePropsChange"],iconType:["handlePropsChange"],scale:["handlePropsChange"],selectionMode:["handlePropsChange"]}}};s.style=":host([scale=s]){--calcite-accordion-item-spacing-unit:0.25rem;--calcite-accordion-icon-margin:0.5rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){--calcite-accordion-item-spacing-unit:0.5rem;--calcite-accordion-icon-margin:0.75rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){--calcite-accordion-item-spacing-unit:0.75rem;--calcite-accordion-icon-margin:1rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host{position:relative;display:block;max-inline-size:100%;line-height:1.5rem;--calcite-accordion-item-border:var(--calcite-ui-border-2);--calcite-accordion-item-background:var(--calcite-ui-foreground-1)}.accordion--transparent{--calcite-accordion-item-border:transparent;--calcite-accordion-item-background:transparent}.accordion{border-width:1px;border-block-end-width:0px;border-style:solid;border-color:var(--calcite-ui-border-2)}:host([hidden]){display:none}[hidden]{display:none}";const d="actions-start",l="actions-end",h="section",p="section-toggle",m=class{constructor(i){(0,c.r)(this,i),this.calciteInternalAccordionItemSelect=(0,c.c)(this,"calciteInternalAccordionItemSelect",6),this.calciteInternalAccordionItemClose=(0,c.c)(this,"calciteInternalAccordionItemClose",6),this.itemHeaderClickHandler=()=>this.emitRequestedItem(),this.expanded=!1,this.heading=void 0,this.description=void 0,this.iconStart=void 0,this.iconEnd=void 0,this.iconFlipRtl=void 0,this.iconPosition=void 0,this.iconType=void 0,this.accordionParent=void 0,this.scale=void 0}connectedCallback(){(0,o.c)(this)}disconnectedCallback(){(0,o.d)(this)}renderActionsStart(){const{el:i}=this;return(0,a.e)(i,d)?(0,c.h)("div",{class:"actions-start"},(0,c.h)("slot",{name:d})):null}renderActionsEnd(){const{el:i}=this;return(0,a.e)(i,l)?(0,c.h)("div",{class:"actions-end"},(0,c.h)("slot",{name:l})):null}render(){const{iconFlipRtl:i}=this,e=(0,a.g)(this.el),t=this.iconStart?(0,c.h)("calcite-icon",{class:"icon--start",flipRtl:"both"===i||"start"===i,icon:this.iconStart,key:"icon-start",scale:"l"===this.scale?"m":"s"}):null,n=this.iconEnd?(0,c.h)("calcite-icon",{class:"icon--end",flipRtl:"both"===i||"end"===i,icon:this.iconEnd,key:"icon-end",scale:"l"===this.scale?"m":"s"}):null,{description:o}=this;return(0,c.h)(c.H,null,(0,c.h)("div",{class:{[`icon-position--${this.iconPosition}`]:!0,[`icon-type--${this.iconType}`]:!0}},(0,c.h)("div",{class:{header:!0,[r.C.rtl]:"rtl"===e}},this.renderActionsStart(),(0,c.h)("div",{"aria-controls":h,"aria-expanded":(0,a.t)(this.expanded),class:"header-content",id:p,onClick:this.itemHeaderClickHandler,role:"button",tabindex:"0"},(0,c.h)("div",{class:"header-container"},t,(0,c.h)("div",{class:"header-text"},(0,c.h)("span",{class:"heading"},this.heading),o?(0,c.h)("span",{class:"description"},o):null),n),(0,c.h)("calcite-icon",{class:"expand-icon",icon:"chevron"===this.iconType?"chevronDown":"caret"===this.iconType?"caretDown":this.expanded?"minus":"plus",scale:"l"===this.scale?"m":"s"})),this.renderActionsEnd()),(0,c.h)("section",{"aria-labelledby":p,class:"content",id:h},(0,c.h)("slot",null))))}keyDownHandler(i){if(i.target===this.el)switch(i.key){case" ":case"Enter":this.emitRequestedItem(),i.preventDefault()}}updateActiveItemOnChange(i){const[e]=i.composedPath(),t=(0,a.c)(this.el,"calcite-accordion");e===t&&(this.determineActiveItem(t.selectionMode,i.detail.requestedAccordionItem),i.stopPropagation())}accordionItemSyncHandler(i){const[e]=i.composedPath(),t=this.el;if(t.parentElement===e)return;const c=(0,a.c)(t,"calcite-accordion");e===c&&(t.iconPosition=c.iconPosition,t.iconType=c.iconType,t.scale=c.scale,i.stopPropagation())}determineActiveItem(i,e){switch(i){case"multiple":this.el===e&&(this.expanded=!this.expanded);break;case"single":this.expanded=this.el===e&&!this.expanded;break;case"single-persist":this.expanded=this.el===e}}emitRequestedItem(){this.calciteInternalAccordionItemSelect.emit({requestedAccordionItem:this.el})}get el(){return(0,c.a)(this)}};m.style=".icon-position--end,.icon-position--start{--calcite-accordion-item-icon-rotation:calc(90deg * -1);--calcite-accordion-item-active-icon-rotation:0deg;--calcite-accordion-item-icon-rotation-rtl:90deg;--calcite-accordion-item-active-icon-rotation-rtl:0deg}.icon-position--start{--calcite-accordion-item-flex-direction:row-reverse;--calcite-accordion-item-icon-spacing-start:0;--calcite-accordion-item-icon-spacing-end:var(--calcite-accordion-icon-margin)}.icon-position--end{--calcite-accordion-item-flex-direction:row;--calcite-accordion-item-icon-spacing-start:var(--calcite-accordion-icon-margin);--calcite-accordion-item-icon-spacing-end:0}.icon-position--end:not(.icon-type--plus-minus){--calcite-accordion-item-icon-rotation:0deg;--calcite-accordion-item-active-icon-rotation:180deg;--calcite-accordion-item-icon-rotation-rtl:0deg;--calcite-accordion-item-active-icon-rotation-rtl:calc(180deg * -1)}:host{position:relative;display:flex;flex-direction:column;color:var(--calcite-ui-text-3);text-decoration-line:none;background-color:var(--calcite-accordion-item-background, var(--calcite-ui-foreground-1))}:host .header-content{outline-color:transparent}:host(:focus) .header-content{outline:2px solid transparent;outline-offset:2px;outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([expanded]){color:var(--calcite-ui-text-1)}:host([expanded]) .content{display:block;color:var(--calcite-ui-text-1)}:host([expanded]) .header{border-block-end-color:transparent}:host .header{display:flex;align-items:stretch}:host .icon{position:relative;margin:0px;display:inline-flex;color:var(--calcite-ui-text-3);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline-end:var(--calcite-accordion-item-icon-spacing-start);margin-inline-start:var(--calcite-accordion-item-icon-spacing-end)}.icon--start{display:flex;align-items:center;margin-inline-end:var(--calcite-accordion-icon-margin)}.icon--end{display:flex;align-items:center;margin-inline-end:var(--calcite-accordion-icon-margin);margin-inline-start:var(--calcite-accordion-icon-margin)}.header-container{inline-size:100%}.content{padding:var(--calcite-accordion-item-padding)}:host .content,:host .header{border-block-end:1px solid var(--calcite-accordion-item-border, var(--calcite-ui-border-2))}:host .header *{display:inline-flex;align-items:center;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);word-wrap:break-word;word-break:break-word}:host .content{display:none;padding-block-start:0px;color:var(--calcite-ui-text-3);text-align:initial}:host .expand-icon{color:var(--calcite-ui-text-3);margin-inline-start:var(--calcite-accordion-item-icon-spacing-start);margin-inline-end:var(--calcite-accordion-item-icon-spacing-end);transform:rotate(var(--calcite-accordion-item-icon-rotation))}.calcite--rtl .expand-icon{transform:rotate(var(--calcite-accordion-item-icon-rotation-rtl))}:host([expanded]) .expand-icon{color:var(--calcite-ui-text-1);transform:rotate(var(--calcite-accordion-item-active-icon-rotation))}:host([expanded]) .calcite--rtl .expand-icon{transform:rotate(var(--calcite-accordion-item-active-icon-rotation-rtl))}:host .header-text{margin-block:0px;flex-grow:1;flex-direction:column;padding-block:0px;text-align:initial;margin-inline-end:auto}:host .heading,:host .description{display:flex;inline-size:100%}:host .heading{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2)}:host .description{margin-block-start:0.25rem;color:var(--calcite-ui-text-3)}:host(:focus) .heading,:host(:hover) .heading{color:var(--calcite-ui-text-1)}:host(:focus) .icon,:host(:hover) .icon{color:var(--calcite-ui-text-1)}:host(:focus) .expand-icon,:host(:hover) .expand-icon{color:var(--calcite-ui-text-1)}:host(:focus) .description,:host(:hover) .description{color:var(--calcite-ui-text-2)}:host(:focus) .heading,:host(:active) .heading,:host([expanded]) .heading{color:var(--calcite-ui-text-1)}:host(:focus) .icon,:host(:active) .icon,:host([expanded]) .icon{color:var(--calcite-ui-text-1)}:host(:focus) .expand-icon,:host(:active) .expand-icon,:host([expanded]) .expand-icon{color:var(--calcite-ui-text-1)}:host(:focus) .description,:host(:active) .description,:host([expanded]) .description{color:var(--calcite-ui-text-2)}.header-content{flex-grow:1;cursor:pointer;padding:var(--calcite-accordion-item-padding);flex-direction:var(--calcite-accordion-item-flex-direction)}.actions-start,.actions-end{display:flex;align-items:center}@media (forced-colors: active){:host([expanded]) .header{border-block-end:none}:host([expanded]) .heading{font-weight:bolder}:host(:hover) .heading,:host(:focus) .heading{text-decoration:underline}}:host([hidden]){display:none}[hidden]{display:none}"},8082:(i,e,t)=>{t.d(e,{c:()=>s,d:()=>d});var c=t(8641),n=t(5527);const o=new Set;let a;const r={childList:!0};function s(i){a||(a=(0,n.c)("mutation",l)),a.observe(i.el,r)}function d(i){o.delete(i.el),l(a.takeRecords()),a.disconnect();for(const[i]of o.entries())a.observe(i,r)}function l(i){i.forEach((({target:i})=>{(0,c.f)(i)}))}},5527:(i,e,t)=>{function c(i,e,t){const c=function(i){class e extends window.MutationObserver{constructor(i){super(i),this.observedEntry=[],this.callback=i}observe(i,e){return this.observedEntry.push({target:i,options:e}),super.observe(i,e)}unobserve(i){const e=this.observedEntry.filter((e=>e.target!==i));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),e.forEach((i=>this.observe(i.target,i.options)))}}return"intersection"===i?window.IntersectionObserver:"mutation"===i?e:window.ResizeObserver}(i);return new c(e,t)}t.d(e,{c:()=>c})}}]);