"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[275],{1275:function(e,s,a){a.r(s),a.d(s,{default:function(){return u}});var c=a(2791),n=a(7689),l=a(3695),i=a(5378),r=a(9778),d=a(9439),t=a(1243),h=a(184),m=function(e){return console.log(e.data),(0,h.jsxs)("div",{className:"my-project-card",children:[(0,h.jsx)("img",{src:""}),(0,h.jsxs)("div",{className:"prj-cont",children:[(0,h.jsxs)("p",{children:["#",e.data.IDX," | ",e.data.CATEGORY1," > ",e.data.CATEGORY2]}),(0,h.jsx)("h3",{children:e.data.POSITION_NM}),(0,h.jsxs)("h3",{children:["\ube44\uc6a9 : ",e.data.DETAIL_PRICE," \uc6d0"]})]}),0==e.data.APPROVAL_STATUS?(0,h.jsx)("button",{className:"prj-sts-btn",children:"\uc2b9\uc778\ub300\uae30\uc911"}):(0,h.jsx)("button",{className:"prj-sts-btn",children:"\uc2b9\uc778\uc644\ub8cc"}),(0,h.jsx)("button",{className:"prj-more-btn",children:"..."})]})},o=function(){var e=window.sessionStorage,s=(0,c.useState)([]),a=(0,d.Z)(s,2),n=a[0],l=a[1],i=e.getItem("loginId");return(0,c.useEffect)((function(){t.Z.post("http://localhost:8001/myProjectList",{userId:i}).then((function(e){l(e.data)})).catch((function(e){})).then((function(){}))}),[]),(0,h.jsxs)("div",{className:"myproject-form",children:[(0,h.jsx)("div",{className:"myproject-title mb-30",children:(0,h.jsx)("h2",{children:"My Projects"})}),(0,h.jsx)("div",{className:"my-projects",children:n.map((function(e,s){return(0,h.jsx)(m,{data:n[s],i:s},s)}))})]})},j=function(){return(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"single-my-account mb-20",children:(0,h.jsxs)("div",{className:"single-my-account mb-20",children:[(0,h.jsx)("h2",{className:"panel-heading",children:(0,h.jsx)("a",{href:"",children:"My Projects "})}),(0,h.jsx)("p",{className:"panel-second",children:"Overall (0)"}),(0,h.jsx)("p",{className:"panel-second",children:"Waiting for approval (0)"}),(0,h.jsx)("p",{className:"panel-second",children:"Requesting (0)"}),(0,h.jsx)("p",{className:"panel-second",children:"Closing (0)"}),(0,h.jsx)("p",{className:"panel-second",children:"Not approved (0)"})]})}),(0,h.jsx)("div",{className:"single-my-account mb-20",children:(0,h.jsx)("div",{className:"single-my-account mb-20",children:(0,h.jsx)("h2",{className:"panel-heading",children:(0,h.jsx)("a",{href:"",children:"Purchase"})})})}),(0,h.jsx)("div",{className:"single-my-account mb-20",children:(0,h.jsx)("div",{className:"single-my-account mb-20",children:(0,h.jsx)("h2",{className:"panel-heading",children:(0,h.jsx)("a",{href:"",children:"Cash"})})})}),(0,h.jsx)("div",{className:"single-my-account mb-20",children:(0,h.jsx)("div",{className:"single-my-account mb-20",children:(0,h.jsx)("h2",{className:"panel-heading",children:(0,h.jsx)("a",{href:"",children:"Recharge Cash"})})})}),(0,h.jsx)("div",{className:"single-my-account mb-20",children:(0,h.jsx)("div",{className:"single-my-account mb-20",children:(0,h.jsx)("h2",{className:"panel-heading",children:(0,h.jsx)("a",{href:"",children:"Coupon"})})})}),(0,h.jsx)("div",{className:"single-my-account mb-20",children:(0,h.jsx)("div",{className:"single-my-account mb-20",children:(0,h.jsx)("h2",{className:"panel-heading",children:(0,h.jsx)("a",{href:"",children:"Payment details"})})})})]})},x=function(){return(0,h.jsxs)("div",{className:"myaccount-menu-wrap",children:[(0,h.jsx)("div",{className:"mypage-header",children:(0,h.jsx)("h2",{children:"My Page"})}),(0,h.jsx)(j,{})]})},u=function(){var e=(0,n.TH)().pathname;return(0,h.jsxs)(c.Fragment,{children:[(0,h.jsx)(l.Z,{titleTemplate:"My Account",description:"My Account page of flone react minimalist eCommerce template."}),(0,h.jsxs)(i.Z,{headerTop:"visible",children:[(0,h.jsx)(r.Z,{pages:[{label:"Home",path:"/"},{label:"My Account",path:""+e}]}),(0,h.jsx)("div",{className:"contact-area pt-100 pb-100",children:(0,h.jsx)("div",{className:"container",children:(0,h.jsxs)("div",{className:"custom-row-2",children:[(0,h.jsx)("div",{className:"col-12 col-lg-3 col-md-4",children:(0,h.jsx)(x,{})}),(0,h.jsx)("div",{className:"col-12 col-lg-9 col-md-8",children:(0,h.jsx)(o,{})})]})})})]})]})}},9778:function(e,s,a){var c=a(2461),n=a(1087),l=a(184);s.Z=function(e){var s=e.pages;return(0,l.jsx)("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)(c.Z,{children:null===s||void 0===s?void 0:s.map((function(e,a){var i=e.path,r=e.label;return a!==s.length-1?(0,l.jsx)(c.Z.Item,{linkProps:{to:i},linkAs:n.rU,children:r},r):(0,l.jsx)(c.Z.Item,{active:!0,children:r},r)}))})})})}}}]);
//# sourceMappingURL=275.2f03bdba.chunk.js.map