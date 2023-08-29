"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[332],{1306:function(e,n,t){t.d(n,{$F:function(){return i},PB:function(){return a}});var r="data-rr-ui-",o="rrUi";function a(e){return"".concat(r).concat(e)}function i(e){return"".concat(o).concat(e)}},5666:function(e,n,t){var r=t(9007),o=t(3201),a=t(2791);n.Z=function(e){var n=e.children,t=e.in,i=e.onExited,s=e.mountOnEnter,c=e.unmountOnExit,l=(0,a.useRef)(null),u=(0,a.useRef)(t),d=(0,r.Z)(i);(0,a.useEffect)((function(){t?u.current=!0:d(l.current)}),[t,d]);var f=(0,o.Z)(l,n.ref),v=(0,a.cloneElement)(n,{ref:f});return t?v:c||!u.current&&s?null:v}},3808:function(e,n,t){t.d(n,{Z:function(){return o}});var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function o(e,n){return r(e.querySelectorAll(n))}},2709:function(e,n,t){var r,o=t(1413),a=t(5987),i=t(4942),s=t(1694),c=t.n(s),l=t(2791),u=t(5090),d=t(1380),f=t(7202),v=t(4083),m=t(184),h=["className","children","transitionClasses","onEnter"],p=(r={},(0,i.Z)(r,u.d0,"show"),(0,i.Z)(r,u.cn,"show"),r),g=l.forwardRef((function(e,n){var t=e.className,r=e.children,i=e.transitionClasses,s=void 0===i?{}:i,u=e.onEnter,g=(0,a.Z)(e,h),Z=(0,o.Z)({in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},g),b=(0,l.useCallback)((function(e,n){(0,f.Z)(e),null==u||u(e,n)}),[u]);return(0,m.jsx)(v.Z,(0,o.Z)((0,o.Z)({ref:n,addEndListener:d.Z},Z),{},{onEnter:b,childRef:r.ref,children:function(e,n){return l.cloneElement(r,(0,o.Z)((0,o.Z)({},n),{},{className:c()("fade",t,r.props.className,p[e],s[e])}))}}))}));g.displayName="Fade",n.Z=g},332:function(e,n,t){t.d(n,{Z:function(){return Se}});var r,o=t(9439),a=t(5987),i=t(1413),s=t(1694),c=t.n(s),l=t(3070),u=t(7357),d=t(8376),f=t(6382);function v(e){if((!r&&0!==r||e)&&u.Z){var n=document.createElement("div");n.style.position="absolute",n.style.top="-9999px",n.style.width="50px",n.style.height="50px",n.style.overflow="scroll",document.body.appendChild(n),r=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return r}var m=t(8633),h=t(9007),p=t(3201),g=t(2791);function Z(e){var n=function(e){var n=(0,g.useRef)(e);return n.current=e,n}(e);(0,g.useEffect)((function(){return function(){return n.current()}}),[])}var b=t(3690);function y(e){void 0===e&&(e=(0,d.Z)());try{var n=e.activeElement;return n&&n.nodeName?n:null}catch(t){return e.body}}function E(e,n){return e.contains?e.contains(n):e.compareDocumentPosition?e===n||!!(16&e.compareDocumentPosition(n)):void 0}var x=t(2899),w=t(4164),N=t(5746),k=t(2803),C=t(3433),R=t(4942),O=t(5671),j=t(3144),T=t(5427);var S=(0,t(1306).PB)("modal-open"),F=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.ownerDocument,r=n.handleContainerOverflow,o=void 0===r||r,a=n.isRTL,i=void 0!==a&&a;(0,O.Z)(this,e),this.handleContainerOverflow=o,this.isRTL=i,this.modals=[],this.ownerDocument=t}return(0,j.Z)(e,[{key:"getScrollbarWidth",value:function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,n=e.defaultView;return Math.abs(n.innerWidth-e.documentElement.clientWidth)}(this.ownerDocument)}},{key:"getElement",value:function(){return(this.ownerDocument||document).body}},{key:"setModalAttributes",value:function(e){}},{key:"removeModalAttributes",value:function(e){}},{key:"setContainerStyle",value:function(e){var n={overflow:"hidden"},t=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();e.style=(0,R.Z)({overflow:r.style.overflow},t,r.style[t]),e.scrollBarWidth&&(n[t]="".concat(parseInt((0,T.Z)(r,t)||"0",10)+e.scrollBarWidth,"px")),r.setAttribute(S,""),(0,T.Z)(r,n)}},{key:"reset",value:function(){var e=this;(0,C.Z)(this.modals).forEach((function(n){return e.remove(n)}))}},{key:"removeContainerStyle",value:function(e){var n=this.getElement();n.removeAttribute(S),Object.assign(n.style,e.style)}},{key:"add",value:function(e){var n=this.modals.indexOf(e);return-1!==n?n:(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),0!==n||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n)}},{key:"remove",value:function(e){var n=this.modals.indexOf(e);-1!==n&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}},{key:"isTopModal",value:function(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}]),e}(),B=F,D=(0,g.createContext)(u.Z?window:void 0);D.Provider;function L(){return(0,g.useContext)(D)}var P=function(e,n){return u.Z?null==e?(n||(0,d.Z)()).body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null};var A=t(9815),M=t(5666),H=t(184);function W(e){var n=e.children,t=e.in,r=e.onExited,a=e.onEntered,i=e.transition,s=(0,g.useState)(!t),c=(0,o.Z)(s,2),l=c[0],u=c[1];t&&l&&u(!1);var d=function(e){var n=e.in,t=e.onTransition,r=(0,g.useRef)(null),o=(0,g.useRef)(!0),a=(0,h.Z)(t);return(0,A.Z)((function(){if(r.current){var e=!1;return a({in:n,element:r.current,initial:o.current,isStale:function(){return e}}),function(){e=!0}}}),[n,a]),(0,A.Z)((function(){return o.current=!1,function(){o.current=!0}}),[]),r}({in:!!t,onTransition:function(e){Promise.resolve(i(e)).then((function(){e.isStale()||(e.in?null==a||a(e.element,e.initial):(u(!0),null==r||r(e.element)))}),(function(n){throw e.in||u(!0),n}))}}),f=(0,p.Z)(d,n.ref);return l&&!t?null:(0,g.cloneElement)(n,{ref:f})}function I(e,n,t){return e?(0,H.jsx)(e,Object.assign({},t)):n?(0,H.jsx)(W,Object.assign({},t,{transition:n})):(0,H.jsx)(M.Z,Object.assign({},t))}var K,U=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function V(e){var n=L(),t=e||function(e){return K||(K=new B({ownerDocument:null==e?void 0:e.document})),K}(n),r=(0,g.useRef)({dialog:null,backdrop:null});return Object.assign(r.current,{add:function(){return t.add(r.current)},remove:function(){return t.remove(r.current)},isTopModal:function(){return t.isTopModal(r.current)},setDialogRef:(0,g.useCallback)((function(e){r.current.dialog=e}),[]),setBackdropRef:(0,g.useCallback)((function(e){r.current.backdrop=e}),[])})}var z=(0,g.forwardRef)((function(e,n){var t=e.show,r=void 0!==t&&t,a=e.role,i=void 0===a?"dialog":a,s=e.className,c=e.style,l=e.children,d=e.backdrop,f=void 0===d||d,v=e.keyboard,m=void 0===v||v,p=e.onBackdropClick,b=e.onEscapeKeyDown,C=e.transition,R=e.runTransition,O=e.backdropTransition,j=e.runBackdropTransition,T=e.autoFocus,S=void 0===T||T,F=e.enforceFocus,B=void 0===F||F,D=e.restoreFocus,A=void 0===D||D,M=e.restoreFocusOptions,W=e.renderDialog,K=e.renderBackdrop,z=void 0===K?function(e){return(0,H.jsx)("div",Object.assign({},e))}:K,_=e.manager,$=e.container,q=e.onShow,G=e.onHide,J=void 0===G?function(){}:G,Q=e.onExit,X=e.onExited,Y=e.onExiting,ee=e.onEnter,ne=e.onEntering,te=e.onEntered,re=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,U),oe=L(),ae=function(e,n){var t=L(),r=(0,g.useState)((function(){return P(e,null==t?void 0:t.document)})),a=(0,o.Z)(r,2),i=a[0],s=a[1];if(!i){var c=P(e);c&&s(c)}return(0,g.useEffect)((function(){n&&i&&n(i)}),[n,i]),(0,g.useEffect)((function(){var n=P(e);n!==i&&s(n)}),[e,i]),i}($),ie=V(_),se=(0,N.Z)(),ce=(0,k.Z)(r),le=(0,g.useState)(!r),ue=(0,o.Z)(le,2),de=ue[0],fe=ue[1],ve=(0,g.useRef)(null);(0,g.useImperativeHandle)(n,(function(){return ie}),[ie]),u.Z&&!ce&&r&&(ve.current=y(null==oe?void 0:oe.document)),r&&de&&fe(!1);var me=(0,h.Z)((function(){if(ie.add(),ye.current=(0,x.Z)(document,"keydown",Ze),be.current=(0,x.Z)(document,"focus",(function(){return setTimeout(pe)}),!0),q&&q(),S){var e,n,t=y(null!=(e=null==(n=ie.dialog)?void 0:n.ownerDocument)?e:null==oe?void 0:oe.document);ie.dialog&&t&&!E(ie.dialog,t)&&(ve.current=t,ie.dialog.focus())}})),he=(0,h.Z)((function(){var e;(ie.remove(),null==ye.current||ye.current(),null==be.current||be.current(),A)&&(null==(e=ve.current)||null==e.focus||e.focus(M),ve.current=null)}));(0,g.useEffect)((function(){r&&ae&&me()}),[r,ae,me]),(0,g.useEffect)((function(){de&&he()}),[de,he]),Z((function(){he()}));var pe=(0,h.Z)((function(){if(B&&se()&&ie.isTopModal()){var e=y(null==oe?void 0:oe.document);ie.dialog&&e&&!E(ie.dialog,e)&&ie.dialog.focus()}})),ge=(0,h.Z)((function(e){e.target===e.currentTarget&&(null==p||p(e),!0===f&&J())})),Ze=(0,h.Z)((function(e){m&&function(e){return"Escape"===e.code||27===e.keyCode}(e)&&ie.isTopModal()&&(null==b||b(e),e.defaultPrevented||J())})),be=(0,g.useRef)(),ye=(0,g.useRef)();if(!ae)return null;var Ee=Object.assign({role:i,ref:ie.setDialogRef,"aria-modal":"dialog"===i||void 0},re,{style:c,className:s,tabIndex:-1}),xe=W?W(Ee):(0,H.jsx)("div",Object.assign({},Ee,{children:g.cloneElement(l,{role:"document"})}));xe=I(C,R,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!r,onExit:Q,onExiting:Y,onExited:function(){fe(!0),null==X||X.apply(void 0,arguments)},onEnter:ee,onEntering:ne,onEntered:te,children:xe});var we=null;return f&&(we=z({ref:ie.setBackdropRef,onClick:ge}),we=I(O,j,{in:!!r,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:we})),(0,H.jsx)(H.Fragment,{children:w.createPortal((0,H.jsxs)(H.Fragment,{children:[we,xe]}),ae)})}));z.displayName="Modal";var _=Object.assign(z,{Manager:B}),$=t(1120);function q(){return q="undefined"!==typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,n,t){var r=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=(0,$.Z)(e)););return e}(e,n);if(r){var o=Object.getOwnPropertyDescriptor(r,n);return o.get?o.get.call(arguments.length<3?e:t):o.value}},q.apply(this,arguments)}var G=t(136),J=t(9388);var Q=t(3808);function X(e,n){return e.replace(new RegExp("(^|\\s)"+n+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var Y,ee=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",ne=".sticky-top",te=".navbar-toggler",re=function(e){(0,G.Z)(t,e);var n=(0,J.Z)(t);function t(){return(0,O.Z)(this,t),n.apply(this,arguments)}return(0,j.Z)(t,[{key:"adjustAndStore",value:function(e,n,t){var r=n.style[e];n.dataset[e]=r,(0,T.Z)(n,(0,R.Z)({},e,"".concat(parseFloat((0,T.Z)(n,e))+t,"px")))}},{key:"restore",value:function(e,n){var t=n.dataset[e];void 0!==t&&(delete n.dataset[e],(0,T.Z)(n,(0,R.Z)({},e,t)))}},{key:"setContainerStyle",value:function(e){var n=this;q((0,$.Z)(t.prototype),"setContainerStyle",this).call(this,e);var r,o,a=this.getElement();if(o="modal-open",(r=a).classList?r.classList.add(o):function(e,n){return e.classList?!!n&&e.classList.contains(n):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+n+" ")}(r,o)||("string"===typeof r.className?r.className=r.className+" "+o:r.setAttribute("class",(r.className&&r.className.baseVal||"")+" "+o)),e.scrollBarWidth){var i=this.isRTL?"paddingLeft":"paddingRight",s=this.isRTL?"marginLeft":"marginRight";(0,Q.Z)(a,ee).forEach((function(t){return n.adjustAndStore(i,t,e.scrollBarWidth)})),(0,Q.Z)(a,ne).forEach((function(t){return n.adjustAndStore(s,t,-e.scrollBarWidth)})),(0,Q.Z)(a,te).forEach((function(t){return n.adjustAndStore(s,t,e.scrollBarWidth)}))}}},{key:"removeContainerStyle",value:function(e){var n=this;q((0,$.Z)(t.prototype),"removeContainerStyle",this).call(this,e);var r,o,a=this.getElement();o="modal-open",(r=a).classList?r.classList.remove(o):"string"===typeof r.className?r.className=X(r.className,o):r.setAttribute("class",X(r.className&&r.className.baseVal||"",o));var i=this.isRTL?"paddingLeft":"paddingRight",s=this.isRTL?"marginLeft":"marginRight";(0,Q.Z)(a,ee).forEach((function(e){return n.restore(i,e)})),(0,Q.Z)(a,ne).forEach((function(e){return n.restore(s,e)})),(0,Q.Z)(a,te).forEach((function(e){return n.restore(s,e)}))}}]),t}(B);var oe=t(2709),ae=t(6028),ie=(0,ae.Z)("modal-body"),se=g.createContext({onHide:function(){}}),ce=t(162),le=["bsPrefix","className","contentClassName","centered","size","fullscreen","children","scrollable"],ue=g.forwardRef((function(e,n){var t=e.bsPrefix,r=e.className,o=e.contentClassName,s=e.centered,l=e.size,u=e.fullscreen,d=e.children,f=e.scrollable,v=(0,a.Z)(e,le);t=(0,ce.vE)(t,"modal");var m="".concat(t,"-dialog"),h="string"===typeof u?"".concat(t,"-fullscreen-").concat(u):"".concat(t,"-fullscreen");return(0,H.jsx)("div",(0,i.Z)((0,i.Z)({},v),{},{ref:n,className:c()(m,r,l&&"".concat(t,"-").concat(l),s&&"".concat(m,"-centered"),f&&"".concat(m,"-scrollable"),u&&h),children:(0,H.jsx)("div",{className:c()("".concat(t,"-content"),o),children:d})}))}));ue.displayName="ModalDialog";var de=ue,fe=(0,ae.Z)("modal-footer"),ve=t(2007),me=t.n(ve),he=["className","variant","aria-label"],pe={"aria-label":me().string,onClick:me().func,variant:me().oneOf(["white"])},ge=g.forwardRef((function(e,n){var t=e.className,r=e.variant,o=e["aria-label"],s=void 0===o?"Close":o,l=(0,a.Z)(e,he);return(0,H.jsx)("button",(0,i.Z)({ref:n,type:"button",className:c()("btn-close",r&&"btn-close-".concat(r),t),"aria-label":s},l))}));ge.displayName="CloseButton",ge.propTypes=pe;var Ze=ge,be=["closeLabel","closeVariant","closeButton","onHide","children"],ye=g.forwardRef((function(e,n){var t=e.closeLabel,r=void 0===t?"Close":t,o=e.closeVariant,s=e.closeButton,c=void 0!==s&&s,l=e.onHide,u=e.children,d=(0,a.Z)(e,be),f=(0,g.useContext)(se),v=(0,h.Z)((function(){null==f||f.onHide(),null==l||l()}));return(0,H.jsxs)("div",(0,i.Z)((0,i.Z)({ref:n},d),{},{children:[u,c&&(0,H.jsx)(Ze,{"aria-label":r,variant:o,onClick:v})]}))})),Ee=["bsPrefix","className","closeLabel","closeButton"],xe=g.forwardRef((function(e,n){var t=e.bsPrefix,r=e.className,o=e.closeLabel,s=void 0===o?"Close":o,l=e.closeButton,u=void 0!==l&&l,d=(0,a.Z)(e,Ee);return t=(0,ce.vE)(t,"modal-header"),(0,H.jsx)(ye,(0,i.Z)((0,i.Z)({ref:n},d),{},{className:c()(r,t),closeLabel:s,closeButton:u}))}));xe.displayName="ModalHeader";var we,Ne=xe,ke=(we="h4",g.forwardRef((function(e,n){return(0,H.jsx)("div",(0,i.Z)((0,i.Z)({},e),{},{ref:n,className:c()(e.className,we)}))}))),Ce=(0,ae.Z)("modal-title",{Component:ke}),Re=["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","aria-describedby","aria-label","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"];function Oe(e){return(0,H.jsx)(oe.Z,(0,i.Z)((0,i.Z)({},e),{},{timeout:null}))}function je(e){return(0,H.jsx)(oe.Z,(0,i.Z)((0,i.Z)({},e),{},{timeout:null}))}var Te=g.forwardRef((function(e,n){var t=e.bsPrefix,r=e.className,s=e.style,y=e.dialogClassName,E=e.contentClassName,x=e.children,w=e.dialogAs,N=void 0===w?de:w,k=e["aria-labelledby"],C=e["aria-describedby"],R=e["aria-label"],O=e.show,j=void 0!==O&&O,T=e.animation,S=void 0===T||T,F=e.backdrop,B=void 0===F||F,D=e.keyboard,L=void 0===D||D,P=e.onEscapeKeyDown,A=e.onShow,M=e.onHide,W=e.container,I=e.autoFocus,K=void 0===I||I,U=e.enforceFocus,V=void 0===U||U,z=e.restoreFocus,$=void 0===z||z,q=e.restoreFocusOptions,G=e.onEntered,J=e.onExit,Q=e.onExiting,X=e.onEnter,ee=e.onEntering,ne=e.onExited,te=e.backdropClassName,oe=e.manager,ae=(0,a.Z)(e,Re),ie=(0,g.useState)({}),le=(0,o.Z)(ie,2),ue=le[0],fe=le[1],ve=(0,g.useState)(!1),me=(0,o.Z)(ve,2),he=me[0],pe=me[1],ge=(0,g.useRef)(!1),Ze=(0,g.useRef)(!1),be=(0,g.useRef)(null),ye=(0,m.Z)(),Ee=(0,o.Z)(ye,2),xe=Ee[0],we=Ee[1],Ne=(0,p.Z)(n,we),ke=(0,h.Z)(M),Ce=(0,ce.SC)();t=(0,ce.vE)(t,"modal");var Te=(0,g.useMemo)((function(){return{onHide:ke}}),[ke]);function Se(){return oe||(e={isRTL:Ce},Y||(Y=new re(e)),Y);var e}function Fe(e){if(u.Z){var n=Se().getScrollbarWidth()>0,t=e.scrollHeight>(0,d.Z)(e).documentElement.clientHeight;fe({paddingRight:n&&!t?v():void 0,paddingLeft:!n&&t?v():void 0})}}var Be=(0,h.Z)((function(){xe&&Fe(xe.dialog)}));Z((function(){(0,f.Z)(window,"resize",Be),null==be.current||be.current()}));var De=function(){ge.current=!0},Le=function(e){ge.current&&xe&&e.target===xe.dialog&&(Ze.current=!0),ge.current=!1},Pe=function(){pe(!0),be.current=(0,b.Z)(xe.dialog,(function(){pe(!1)}))},Ae=function(e){"static"!==B?Ze.current||e.target!==e.currentTarget?Ze.current=!1:null==M||M():function(e){e.target===e.currentTarget&&Pe()}(e)},Me=(0,g.useCallback)((function(e){return(0,H.jsx)("div",(0,i.Z)((0,i.Z)({},e),{},{className:c()("".concat(t,"-backdrop"),te,!S&&"show")}))}),[S,te,t]),He=(0,i.Z)((0,i.Z)({},s),ue);He.display="block";return(0,H.jsx)(se.Provider,{value:Te,children:(0,H.jsx)(_,{show:j,ref:Ne,backdrop:B,container:W,keyboard:!0,autoFocus:K,enforceFocus:V,restoreFocus:$,restoreFocusOptions:q,onEscapeKeyDown:function(e){L?null==P||P(e):(e.preventDefault(),"static"===B&&Pe())},onShow:A,onHide:M,onEnter:function(e,n){e&&Fe(e),null==X||X(e,n)},onEntering:function(e,n){null==ee||ee(e,n),(0,l.ZP)(window,"resize",Be)},onEntered:G,onExit:function(e){null==be.current||be.current(),null==J||J(e)},onExiting:Q,onExited:function(e){e&&(e.style.display=""),null==ne||ne(e),(0,f.Z)(window,"resize",Be)},manager:Se(),transition:S?Oe:void 0,backdropTransition:S?je:void 0,renderBackdrop:Me,renderDialog:function(e){return(0,H.jsx)("div",(0,i.Z)((0,i.Z)({role:"dialog"},e),{},{style:He,className:c()(r,t,he&&"".concat(t,"-static"),!S&&"show"),onClick:B?Ae:void 0,onMouseUp:Le,"aria-label":R,"aria-labelledby":k,"aria-describedby":C,children:(0,H.jsx)(N,(0,i.Z)((0,i.Z)({},ae),{},{onMouseDown:De,className:y,contentClassName:E,children:x}))}))}})})}));Te.displayName="Modal";var Se=Object.assign(Te,{Body:ie,Header:Ne,Title:Ce,Footer:fe,Dialog:de,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150})},6028:function(e,n,t){t.d(n,{Z:function(){return v}});var r=t(1413),o=t(5987),a=t(1694),i=t.n(a),s=/-(.)/g;var c=t(2791),l=t(162),u=t(184),d=["className","bsPrefix","as"],f=function(e){return e[0].toUpperCase()+(n=e,n.replace(s,(function(e,n){return n.toUpperCase()}))).slice(1);var n};function v(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.displayName,a=void 0===t?f(e):t,s=n.Component,v=n.defaultProps,m=c.forwardRef((function(n,t){var a=n.className,c=n.bsPrefix,f=n.as,m=void 0===f?s||"div":f,h=(0,o.Z)(n,d),p=(0,r.Z)((0,r.Z)({},v),h),g=(0,l.vE)(c,e);return(0,u.jsx)(m,(0,r.Z)({ref:t,className:i()(a,g)},p))}));return m.displayName=a,m}}}]);
//# sourceMappingURL=332.cb41b45a.chunk.js.map