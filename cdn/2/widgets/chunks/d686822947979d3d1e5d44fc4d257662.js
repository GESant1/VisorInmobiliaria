/*! For license information please see d686822947979d3d1e5d44fc4d257662.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[99371],{99371:(t,e,n)=>{n.r(e),n.d(e,{calcite_list_item_group:()=>o});var a=n(30396),i=n(32544),c=n(62621);const o=class{constructor(t){(0,a.r)(this,t),this.disabled=!1,this.heading=void 0,this.visualLevel=null}connectedCallback(){const{el:t}=this;this.visualLevel=(0,c.g)(t,!0)}componentDidRender(){(0,i.u)(this)}render(){const{heading:t,visualLevel:e}=this;return(0,a.h)(a.H,null,(0,a.h)("tr",{class:"container",style:{"--calcite-list-item-spacing-indent-multiplier":`${e}`}},(0,a.h)("td",{class:"heading",colSpan:c.M},t)),(0,a.h)("slot",null))}get el(){return(0,a.g)(this)}};o.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:flex;flex-direction:column;background-color:var(--calcite-ui-foreground-1);--calcite-list-item-spacing-indent:1rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{margin:0px;display:flex;flex:1 1 0%;background-color:var(--calcite-ui-foreground-2);padding:0.75rem;font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size--1);font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-text-2)}.heading{padding-inline-start:calc(var(--calcite-list-item-spacing-indent) * var(--calcite-list-item-spacing-indent-multiplier))}::slotted(calcite-list-item){margin-block-end:1px;--tw-shadow:0 1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}::slotted(calcite-list-item:last-child){--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}"},32544:(t,e,n)=>{function a(){}function i(t,e=!1){if(t.disabled)return t.el.setAttribute("tabindex","-1"),t.el.setAttribute("aria-disabled","true"),t.el.contains(document.activeElement)&&document.activeElement.blur(),void(t.el.click=a);t.el.click=HTMLElement.prototype.click,"function"==typeof e?t.el.setAttribute("tabindex",e.call(t)?"0":"-1"):!0===e?t.el.setAttribute("tabindex","0"):!1===e&&t.el.removeAttribute("tabindex"),t.el.removeAttribute("aria-disabled")}n.d(e,{u:()=>i})},62621:(t,e,n)=>{n.d(e,{C:()=>a,I:()=>o,M:()=>c,S:()=>i,a:()=>s,g:()=>m,u:()=>d});const a={container:"container",containerBorderSelected:"container--border-selected",containerBorderUnselected:"container--border-unselected",contentContainer:"content-container",contentContainerSelectable:"content-container--selectable",contentContainerHasCenterContent:"content-container--has-center-content",nestedContainer:"nested-container",nestedContainerHidden:"nested-container--hidden",content:"content",customContent:"custom-content",actionsStart:"actions-start",contentStart:"content-start",label:"label",description:"description",contentEnd:"content-end",actionsEnd:"actions-end",selectionContainer:"selection-container",openContainer:"open-container"},i={actionsStart:"actions-start",contentStart:"content-start",content:"content",contentEnd:"content-end",actionsEnd:"actions-end"},c=5,o={selectedMultiple:"check-circle-f",selectedSingle:"circle-f",unselected:"blank",closedLTR:"caret-right",closedRTL:"caret-left",open:"caret-down",blank:"blank"},l="calcite-list-item-group",r="calcite-list-item";function s(t){const e=t.target.assignedElements({flatten:!0});return[...e.filter((t=>t?.matches(l))).map((t=>Array.from(t.querySelectorAll(r)))).reduce(((t,e)=>[...t,...e]),[]),...e.filter((t=>t?.matches(r)))]}function d(t){t.forEach((e=>{e.setPosition=t.indexOf(e)+1,e.setSize=t.length}))}function m(t,e=!1){const n=e?"ancestor::calcite-list-item | ancestor::calcite-list-item-group":"ancestor::calcite-list-item";return document.evaluate(n,t,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength}}}]);