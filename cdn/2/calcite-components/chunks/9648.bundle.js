/*! For license information please see 9648.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[9648],{5611:(e,t,i)=>{function n(){const e=navigator.userAgentData;return e?.brands?e.brands.map((({brand:e,version:t})=>`${e}/${t}`)).join(" "):navigator.userAgent}i.d(t,{g:()=>n})},9648:(e,t,i)=>{i.r(t),i.d(t,{calcite_table_cell:()=>d,calcite_table_header:()=>h});var n=i(8641),s=i(3844),a=i(339),l=i(9336),o=i(4879),c=i(2322),r=i(8274);const d=class{constructor(e){(0,n.r)(this,e),this.updateScreenReaderContentsText=()=>{this.contentsText=this.el.textContent},this.onContainerBlur=()=>{this.focused=!1},this.onContainerFocus=()=>{this.focused=!0},this.alignment="start",this.colSpan=void 0,this.rowSpan=void 0,this.disabled=void 0,this.numberCell=void 0,this.parentRowIsSelected=void 0,this.parentRowPositionLocalized=void 0,this.parentRowType=void 0,this.positionInRow=void 0,this.readCellContentsToAT=void 0,this.scale="m",this.selectionCell=void 0,this.messages=void 0,this.messageOverrides=void 0,this.contentsText="",this.defaultMessages=void 0,this.focused=!1,this.selectionText="",this.effectiveLocale=""}onSelectedChange(){this.updateScreenReaderSelectionText()}onMessagesChange(){}effectiveLocaleChange(){(0,a.u)(this,this.effectiveLocale)}async componentWillLoad(){(0,s.s)(this),await(0,a.s)(this),this.updateScreenReaderContentsText(),this.updateScreenReaderSelectionText()}componentDidLoad(){(0,s.a)(this)}connectedCallback(){(0,o.c)(this),(0,a.c)(this),(0,l.c)(this)}componentDidRender(){(0,l.u)(this)}disconnectedCallback(){(0,o.d)(this),(0,a.d)(this),(0,l.d)(this)}async setFocus(){await(0,s.c)(this),this.containerEl.focus()}updateScreenReaderSelectionText(){const e=`${this.messages?.row} ${this.parentRowPositionLocalized} ${this.messages?.selected} ${this.messages?.keyboardDeselect}`,t=`${this.messages?.row} ${this.parentRowPositionLocalized} ${this.messages?.unselected} ${this.messages?.keyboardSelect}`;this.selectionText=this.parentRowIsSelected?e:t}render(){const e=(0,c.g)(this.el);return(0,n.h)(n.H,null,(0,n.h)("td",{"aria-disabled":this.disabled,class:{"footer-cell":"foot"===this.parentRowType,"number-cell":this.numberCell,"selection-cell":this.selectionCell,"selected-cell":this.parentRowIsSelected,[r.C.rtl]:"rtl"===e},colSpan:this.colSpan,onBlur:this.onContainerBlur,onFocus:this.onContainerFocus,role:"gridcell",rowSpan:this.rowSpan,tabIndex:this.disabled?-1:0,ref:e=>this.containerEl=e},(this.selectionCell||this.readCellContentsToAT)&&this.focused&&(0,n.h)("span",{"aria-hidden":!0,"aria-live":"polite",class:"assistive-text"},this.selectionCell&&this.selectionText,this.readCellContentsToAT&&!this.selectionCell&&this.contentsText),(0,n.h)("slot",{onSlotchange:this.updateScreenReaderContentsText})))}static get assetsDirs(){return["assets"]}get el(){return(0,n.a)(this)}static get watchers(){return{parentRowIsSelected:["onSelectedChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};d.style=":host{--calcite-internal-table-cell-background-internal:var(--calcite-table-cell-background, transparent);--calcite-internal-table-cell-border-color-internal:var(--calcite-table-cell-border-color, transparent);display:contents}:host([alignment=center]) td{text-align:center}:host([alignment=end]) td{text-align:end}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}td{white-space:normal;text-align:start;vertical-align:middle;color:var(--calcite-ui-text-1);outline-color:transparent;background:var(--calcite-internal-table-cell-background);border-inline-end:1px solid var(--calcite-ui-border-3);font-size:var(--calcite-internal-table-cell-font-size);padding:var(--calcite-internal-table-cell-padding)}td:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.number-cell{background-color:var(--calcite-ui-foreground-2)}.footer-cell{background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);border-block-start:1px solid var(--calcite-ui-border-3)}.number-cell,.selection-cell{border-inline-end:1px solid var(--calcite-ui-border-3);inline-size:2rem;min-inline-size:2rem}.selection-cell{cursor:pointer;color:var(--calcite-ui-text-3);inset-inline-start:2rem}.selected-cell:not(.number-cell):not(.footer-cell){--calcite-table-cell-background:var(--calcite-ui-foreground-current);background:var(--calcite-ui-foreground-current)}.selection-cell.selected-cell{box-shadow:inset 0.25rem 0 0 0 var(--calcite-ui-brand);color:var(--calcite-ui-brand)}.selection-cell.selected-cell calcite-icon{color:var(--calcite-ui-brand)}.calcite--rtl.selection-cell.selected-cell{box-shadow:inset -0.25rem 0 0 0 var(--calcite-ui-brand)}.selection-cell{vertical-align:middle}.selection-cell ::slotted(calcite-icon){pointer-events:none;margin-block-start:0.25rem}";const h=class{constructor(e){(0,n.r)(this,e),this.alignment="start",this.colSpan=void 0,this.description=void 0,this.heading=void 0,this.rowSpan=void 0,this.numberCell=!1,this.parentRowPosition=void 0,this.parentRowType=void 0,this.positionInRow=void 0,this.scale=void 0,this.selectedRowCount=void 0,this.selectedRowCountLocalized=void 0,this.selectionCell=!1,this.selectionMode=void 0,this.bodyRowCount=void 0,this.messages=void 0,this.messageOverrides=void 0,this.defaultMessages=void 0,this.screenReaderText="",this.effectiveLocale=""}onSelectedChange(){this.updateScreenReaderText()}onMessagesChange(){}async componentWillLoad(){(0,s.s)(this),await(0,a.s)(this),this.updateScreenReaderText()}componentDidLoad(){(0,s.a)(this)}connectedCallback(){(0,o.c)(this),(0,a.c)(this)}disconnectedCallback(){(0,o.d)(this),(0,a.d)(this)}effectiveLocaleChange(){(0,a.u)(this,this.effectiveLocale)}async setFocus(){await(0,s.c)(this),this.containerEl.focus()}updateScreenReaderText(){let e="";const t=`${this.selectedRowCountLocalized} ${this.messages?.selected}`;e=this.numberCell?this.messages?.rowNumber:"single"===this.selectionMode?`${this.messages?.selectionColumn}. ${t}`:this.bodyRowCount===this.selectedRowCount?`${this.messages?.selectionColumn}. ${this.messages?.all} ${t} ${this.messages?.keyboardDeselectAll}`:`${this.messages?.selectionColumn}. ${t} ${this.messages?.keyboardSelectAll}`,this.screenReaderText=e}render(){const e=this.rowSpan?"rowgroup":this.colSpan?"colgroup":"body"===this.parentRowType?"row":"col",t=this.selectedRowCount===this.bodyRowCount,i=t?"check-square-f":"check-square";return(0,n.h)(n.H,null,(0,n.h)("th",{"aria-colindex":"body"!==this.parentRowType?this.positionInRow:"",class:{"body-row":"body"===this.parentRowType,"footer-row":"foot"===this.parentRowType,"number-cell":this.numberCell,"selection-cell":this.selectionCell,"cell--multiple-selection":"multiple"===this.selectionMode},colSpan:this.colSpan,role:"columnheader",rowSpan:this.rowSpan,scope:e,tabIndex:0,ref:e=>this.containerEl=e},this.heading&&(0,n.h)("div",{class:"heading"},this.heading),this.description&&(0,n.h)("div",{class:"description"},this.description),this.selectionCell&&"multiple"===this.selectionMode&&(0,n.h)("calcite-icon",{class:{active:t},icon:i,scale:"l"===this.scale?"m":"s"}),(this.selectionCell||this.numberCell)&&(0,n.h)("span",{"aria-hidden":!0,"aria-live":"polite",class:"assistive-text"},this.screenReaderText)))}static get assetsDirs(){return["assets"]}get el(){return(0,n.a)(this)}static get watchers(){return{selectedRowCount:["onSelectedChange"],selectedRowCountLocalized:["onSelectedChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};h.style=":host{--calcite-internal-table-header-background:var(--calcite-table-header-background, var(--calcite-ui-foreground-2));--calcite-internal-table-header-border-color:var(--calcite-table-border-color, var(--calcite-ui-border-3));display:contents}:host([alignment=center]) th{text-align:center}:host([alignment=end]) th{text-align:end}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}th{white-space:normal;text-align:start;vertical-align:top;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);outline-color:transparent;font-size:var(--calcite-internal-table-cell-font-size);border-inline-end:1px solid var(--calcite-internal-table-header-border-color);border-block-end:1px solid var(--calcite-internal-table-header-border-color);padding-block:calc(var(--calcite-internal-table-cell-padding) * 1.5);padding-inline:var(--calcite-internal-table-cell-padding);background-color:var(--calcite-internal-table-header-background)}th:focus-within{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}th.body-row,th.footer-row{vertical-align:middle;border-block-end:0}th.footer-row{border-block-start:1px solid var(--calcite-internal-table-header-border-color)}.cell--multiple-selection{cursor:pointer;vertical-align:middle;color:var(--calcite-ui-text-3)}.number-cell,.selection-cell{color:var(--calcite-ui-text-2);inline-size:2rem;min-inline-size:2rem}.selection-cell calcite-icon.active{color:var(--calcite-ui-brand)}.number-cell calcite-icon,.selection-cell calcite-icon{margin-inline-start:auto;margin-inline-end:auto;vertical-align:middle}.heading{color:var(--calcite-ui-text-1)}.description{color:var(--calcite-ui-text-3);font-size:var(--calcite-internal-table-cell-font-size-secondary)}"},9336:(e,t,i)=>{i.d(t,{c:()=>p,d:()=>v,u:()=>h});var n=i(5611);const s=/firefox/i.test((0,n.g)()),a=s?new WeakMap:null;function l(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function o(e){const t=e.target;if(s&&!a.get(t))return;const{disabled:i}=t;i&&e.preventDefault()}const c=["mousedown","mouseup","click"];function r(e){if(s&&!a.get(e.target))return;const{disabled:t}=e.target;t&&(e.stopImmediatePropagation(),e.preventDefault())}const d={capture:!0};function h(e,t=!1){if(e.disabled)return e.el.setAttribute("tabindex","-1"),e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void u(e);g(e),"function"==typeof t?e.el.setAttribute("tabindex",t.call(e)?"0":"-1"):!0===t?e.el.setAttribute("tabindex","0"):!1===t&&e.el.removeAttribute("tabindex"),e.el.removeAttribute("aria-disabled")}function u(e){var t;e.el.click=l,(t=s?b(e):e.el)&&(t.addEventListener("pointerdown",o,d),c.forEach((e=>t.addEventListener(e,r,d))))}function b(e){return a.get(e.el)}function g(e){var t;delete e.el.click,(t=s?b(e):e.el)&&(t.removeEventListener("pointerdown",o,d),c.forEach((e=>t.removeEventListener(e,r,d))))}function p(e){if(!e.disabled||!s)return;const t=e.el.parentElement||e.el;a.set(e.el,t),u(e)}function v(e){s&&(a.delete(e.el),g(e))}},3844:(e,t,i)=>{i.d(t,{a:()=>o,b:()=>c,c:()=>r,s:()=>l});var n=i(8641);const s=new WeakMap,a=new WeakMap;function l(e){a.set(e,new Promise((t=>s.set(e,t))))}function o(e){s.get(e)()}function c(e){return a.get(e)}async function r(e){return await c(e),(0,n.f)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}},339:(e,t,i)=>{i.d(t,{c:()=>h,d:()=>u,s:()=>c,u:()=>d});var n=i(8641),s=i(4879);const a={};function l(){throw new Error("could not fetch component message bundle")}function o(e){e.messages={...e.defaultMessages,...e.messageOverrides}}async function c(e){e.defaultMessages=await r(e,e.effectiveLocale),o(e)}async function r(e,t){const{el:i}=e,o=i.tagName.toLowerCase().replace("calcite-","");return async function(e,t){const i=`${t}_${e}`;return a[i]||(a[i]=fetch((0,n.g)(`./assets/${t}/t9n/messages_${e}.json`)).then((e=>(e.ok||l(),e.json()))).catch((()=>l()))),a[i]}((0,s.g)(t,"t9n"),o)}async function d(e,t){e.defaultMessages=await r(e,t),o(e)}function h(e){e.onMessagesChange=b}function u(e){e.onMessagesChange=void 0}function b(){o(this)}}}]);