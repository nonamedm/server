"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[579],{3201:function(t,n,e){var i=e(2791),r=function(t){return t&&"function"!==typeof t?function(n){t.current=n}:t};n.Z=function(t,n){return(0,i.useMemo)((function(){return function(t,n){var e=r(t),i=r(n);return function(t){e&&e(t),i&&i(t)}}(t,n)}),[t,n])}},3070:function(t,n,e){var i=e(7357),r=!1,o=!1;try{var u={get passive(){return r=!0},get once(){return o=r=!0}};i.Z&&(window.addEventListener("test",u,u),window.removeEventListener("test",u,!0))}catch(a){}n.ZP=function(t,n,e,i){if(i&&"boolean"!==typeof i&&!o){var u=i.once,a=i.capture,s=e;!o&&u&&(s=e.__once||function t(i){this.removeEventListener(n,t,a),e.call(this,i)},e.__once=s),t.addEventListener(n,s,r?i:a)}t.addEventListener(n,e,i)}},7357:function(t,n){n.Z=!("undefined"===typeof window||!window.document||!window.document.createElement)},5427:function(t,n,e){e.d(n,{Z:function(){return c}});var i=e(8376);function r(t,n){return function(t){var n=(0,i.Z)(t);return n&&n.defaultView||window}(t).getComputedStyle(t,n)}var o=/([A-Z])/g;var u=/^ms-/;function a(t){return function(t){return t.replace(o,"-$1").toLowerCase()}(t).replace(u,"-ms-")}var s=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var c=function(t,n){var e="",i="";if("string"===typeof n)return t.style.getPropertyValue(a(n))||r(t).getPropertyValue(a(n));Object.keys(n).forEach((function(r){var o=n[r];o||0===o?!function(t){return!(!t||!s.test(t))}(r)?e+=a(r)+": "+o+";":i+=r+"("+o+") ":t.style.removeProperty(a(r))})),i&&(e+="transform: "+i+";"),t.style.cssText+=";"+e}},2899:function(t,n,e){var i=e(3070),r=e(6382);n.Z=function(t,n,e,o){return(0,i.ZP)(t,n,e,o),function(){(0,r.Z)(t,n,e,o)}}},8376:function(t,n,e){function i(t){return t&&t.ownerDocument||document}e.d(n,{Z:function(){return i}})},6382:function(t,n){n.Z=function(t,n,e,i){var r=i&&"boolean"!==typeof i?i.capture:i;t.removeEventListener(n,e,r),e.__once&&t.removeEventListener(n,e.__once,r)}},3690:function(t,n,e){e.d(n,{Z:function(){return u}});var i=e(5427),r=e(2899);function o(t,n,e){void 0===e&&(e=5);var i=!1,o=setTimeout((function(){i||function(t,n,e,i){if(void 0===e&&(e=!1),void 0===i&&(i=!0),t){var r=document.createEvent("HTMLEvents");r.initEvent(n,e,i),t.dispatchEvent(r)}}(t,"transitionend",!0)}),n+e),u=(0,r.Z)(t,"transitionend",(function(){i=!0}),{once:!0});return function(){clearTimeout(o),u()}}function u(t,n,e,u){null==e&&(e=function(t){var n=(0,i.Z)(t,"transitionDuration")||"",e=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*e}(t)||0);var a=o(t,e,u),s=(0,r.Z)(t,"transitionend",n);return function(){a(),s()}}},4083:function(t,n,e){e.d(n,{Z:function(){return l}});var i=e(1413),r=e(5987),o=e(2791),u=e(5090),a=e(3201),s=e(4164);var c=e(184),f=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children","childRef"],l=o.forwardRef((function(t,n){var e=t.onEnter,l=t.onEntering,p=t.onEntered,d=t.onExit,E=t.onExiting,h=t.onExited,v=t.addEndListener,x=t.children,m=t.childRef,b=(0,r.Z)(t,f),C=(0,o.useRef)(null),Z=(0,a.Z)(C,m),g=function(t){var n;Z((n=t)&&"setState"in n?s.findDOMNode(n):null!=n?n:null)},k=function(t){return function(n){t&&C.current&&t(C.current,n)}},y=(0,o.useCallback)(k(e),[e]),S=(0,o.useCallback)(k(l),[l]),O=(0,o.useCallback)(k(p),[p]),T=(0,o.useCallback)(k(d),[d]),w=(0,o.useCallback)(k(E),[E]),L=(0,o.useCallback)(k(h),[h]),N=(0,o.useCallback)(k(v),[v]);return(0,c.jsx)(u.ZP,(0,i.Z)((0,i.Z)({ref:n},b),{},{onEnter:y,onEntered:O,onEntering:S,onExit:T,onExited:L,onExiting:w,addEndListener:N,nodeRef:C,children:"function"===typeof x?function(t,n){return x(t,(0,i.Z)((0,i.Z)({},n),{},{ref:g}))}:o.cloneElement(x,{ref:g})}))}))},1380:function(t,n,e){e.d(n,{Z:function(){return u}});var i=e(5427),r=e(3690);function o(t,n){var e=(0,i.Z)(t,n)||"",r=-1===e.indexOf("ms")?1e3:1;return parseFloat(e)*r}function u(t,n){var e=o(t,"transitionDuration"),i=o(t,"transitionDelay"),u=(0,r.Z)(t,(function(e){e.target===t&&(u(),n(e))}),e+i)}},7202:function(t,n,e){function i(t){t.offsetHeight}e.d(n,{Z:function(){return i}})},5090:function(t,n,e){e.d(n,{cn:function(){return p},d0:function(){return l},Wj:function(){return f},Ix:function(){return d},ZP:function(){return v}});var i=e(3366),r=e(9611);var o=e(2791),u=e(4164),a=!1,s=o.createContext(null),c="unmounted",f="exited",l="entering",p="entered",d="exiting",E=function(t){var n,e;function E(n,e){var i;i=t.call(this,n,e)||this;var r,o=e&&!e.isMounting?n.enter:n.appear;return i.appearStatus=null,n.in?o?(r=f,i.appearStatus=l):r=p:r=n.unmountOnExit||n.mountOnEnter?c:f,i.state={status:r},i.nextCallback=null,i}e=t,(n=E).prototype=Object.create(e.prototype),n.prototype.constructor=n,(0,r.Z)(n,e),E.getDerivedStateFromProps=function(t,n){return t.in&&n.status===c?{status:f}:null};var h=E.prototype;return h.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},h.componentDidUpdate=function(t){var n=null;if(t!==this.props){var e=this.state.status;this.props.in?e!==l&&e!==p&&(n=l):e!==l&&e!==p||(n=d)}this.updateStatus(!1,n)},h.componentWillUnmount=function(){this.cancelNextCallback()},h.getTimeouts=function(){var t,n,e,i=this.props.timeout;return t=n=e=i,null!=i&&"number"!==typeof i&&(t=i.exit,n=i.enter,e=void 0!==i.appear?i.appear:n),{exit:t,enter:n,appear:e}},h.updateStatus=function(t,n){if(void 0===t&&(t=!1),null!==n)if(this.cancelNextCallback(),n===l){if(this.props.unmountOnExit||this.props.mountOnEnter){var e=this.props.nodeRef?this.props.nodeRef.current:u.findDOMNode(this);e&&function(t){t.scrollTop}(e)}this.performEnter(t)}else this.performExit();else this.props.unmountOnExit&&this.state.status===f&&this.setState({status:c})},h.performEnter=function(t){var n=this,e=this.props.enter,i=this.context?this.context.isMounting:t,r=this.props.nodeRef?[i]:[u.findDOMNode(this),i],o=r[0],s=r[1],c=this.getTimeouts(),f=i?c.appear:c.enter;!t&&!e||a?this.safeSetState({status:p},(function(){n.props.onEntered(o)})):(this.props.onEnter(o,s),this.safeSetState({status:l},(function(){n.props.onEntering(o,s),n.onTransitionEnd(f,(function(){n.safeSetState({status:p},(function(){n.props.onEntered(o,s)}))}))})))},h.performExit=function(){var t=this,n=this.props.exit,e=this.getTimeouts(),i=this.props.nodeRef?void 0:u.findDOMNode(this);n&&!a?(this.props.onExit(i),this.safeSetState({status:d},(function(){t.props.onExiting(i),t.onTransitionEnd(e.exit,(function(){t.safeSetState({status:f},(function(){t.props.onExited(i)}))}))}))):this.safeSetState({status:f},(function(){t.props.onExited(i)}))},h.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},h.safeSetState=function(t,n){n=this.setNextCallback(n),this.setState(t,n)},h.setNextCallback=function(t){var n=this,e=!0;return this.nextCallback=function(i){e&&(e=!1,n.nextCallback=null,t(i))},this.nextCallback.cancel=function(){e=!1},this.nextCallback},h.onTransitionEnd=function(t,n){this.setNextCallback(n);var e=this.props.nodeRef?this.props.nodeRef.current:u.findDOMNode(this),i=null==t&&!this.props.addEndListener;if(e&&!i){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[e,this.nextCallback],o=r[0],a=r[1];this.props.addEndListener(o,a)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},h.render=function(){var t=this.state.status;if(t===c)return null;var n=this.props,e=n.children,r=(n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef,(0,i.Z)(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return o.createElement(s.Provider,{value:null},"function"===typeof e?e(t,r):o.cloneElement(o.Children.only(e),r))},E}(o.Component);function h(){}E.contextType=s,E.propTypes={},E.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:h,onEntering:h,onEntered:h,onExit:h,onExiting:h,onExited:h},E.UNMOUNTED=c,E.EXITED=f,E.ENTERING=l,E.ENTERED=p,E.EXITING=d;var v=E}}]);
//# sourceMappingURL=579.61e58d6c.chunk.js.map