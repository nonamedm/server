"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[266],{3266:function(e,s,c){c.r(s),c.d(s,{default:function(){return N}});var a=c(9439),l=c(2791),n=c(7689),d=c(3695),i=c(5378),t=c(9778),r=c(1243),o=c(184),m=function(e){return console.log(e.data),(0,o.jsxs)("div",{className:"my-project-card",children:[(0,o.jsx)("img",{src:""}),(0,o.jsxs)("div",{className:"prj-cont",children:[(0,o.jsxs)("p",{children:["#",e.data.IDX," | ",e.data.CATEGORY1," > ",e.data.CATEGORY2]}),(0,o.jsx)("h3",{children:e.data.POSITION_NM}),(0,o.jsxs)("h3",{children:["\ube44\uc6a9 : ",e.data.DETAIL_PRICE," \uc6d0"]})]}),0==e.data.APPROVAL_STATUS?(0,o.jsx)("button",{className:"prj-sts-btn",children:"\uc2b9\uc778\ub300\uae30\uc911"}):(0,o.jsx)("button",{className:"prj-sts-btn",children:"\uc2b9\uc778\uc644\ub8cc"}),(0,o.jsx)("button",{className:"prj-more-btn",children:"..."})]})},j=function(e){var s=window.sessionStorage,c=(0,l.useState)([]),n=(0,a.Z)(c,2),d=n[0],i=n[1],t=s.getItem("loginId");return(0,l.useEffect)((function(){r.Z.post("/myProjectList",{userId:t}).then((function(e){i(e.data)})).catch((function(e){})).then((function(){}))}),[]),(0,o.jsxs)("div",{className:"myproject-form",children:[(0,o.jsx)("div",{className:"myproject-title mb-30",children:(0,o.jsx)("h2",{children:"My Projects"})}),(0,o.jsx)("div",{className:"my-projects",children:d.length>0?d.map((function(e,s){return(0,o.jsx)(m,{data:d[s],i:s},s)})):(0,o.jsxs)("div",{className:"my-project-card",children:[(0,o.jsxs)("div",{className:"prj-cont-empty",children:[(0,o.jsx)("p",{}),(0,o.jsx)("h3",{children:"\ub4f1\ub85d\ub41c \ud504\ub85c\uc81d\ud2b8\uac00 \uc5c6\uc2b5\ub2c8\ub2e4"}),(0,o.jsx)("h3",{children:"\uc758\ub8b0\ud558\uace0 \uc2f6\uc740 \ud504\ub85c\uc81d\ud2b8\ub97c \ub4f1\ub85d\ud574\uc8fc\uc138\uc694!"})]}),(0,o.jsx)("button",{className:"prj-sts-btn",onClick:function(){e.openModal()},children:"\ud504\ub85c\uc81d\ud2b8 \uc758\ub8b0\ud558\uae30"})]})})]})},h=function(){return(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"single-my-account mb-20",children:(0,o.jsxs)("div",{className:"single-my-account mb-20",children:[(0,o.jsx)("h2",{className:"panel-heading",children:(0,o.jsx)("a",{href:"",children:"My Projects "})}),(0,o.jsx)("p",{className:"panel-second",children:"Overall (0)"}),(0,o.jsx)("p",{className:"panel-second",children:"Waiting for approval (0)"}),(0,o.jsx)("p",{className:"panel-second",children:"Requesting (0)"}),(0,o.jsx)("p",{className:"panel-second",children:"Closing (0)"}),(0,o.jsx)("p",{className:"panel-second",children:"Not approved (0)"})]})}),(0,o.jsx)("div",{className:"single-my-account mb-20",children:(0,o.jsx)("div",{className:"single-my-account mb-20",children:(0,o.jsx)("h2",{className:"panel-heading",children:(0,o.jsx)("a",{href:"",children:"Purchase"})})})}),(0,o.jsx)("div",{className:"single-my-account mb-20",children:(0,o.jsx)("div",{className:"single-my-account mb-20",children:(0,o.jsx)("h2",{className:"panel-heading",children:(0,o.jsx)("a",{href:"",children:"Cash"})})})}),(0,o.jsx)("div",{className:"single-my-account mb-20",children:(0,o.jsx)("div",{className:"single-my-account mb-20",children:(0,o.jsx)("h2",{className:"panel-heading",children:(0,o.jsx)("a",{href:"",children:"Recharge Cash"})})})}),(0,o.jsx)("div",{className:"single-my-account mb-20",children:(0,o.jsx)("div",{className:"single-my-account mb-20",children:(0,o.jsx)("h2",{className:"panel-heading",children:(0,o.jsx)("a",{href:"",children:"Coupon"})})})}),(0,o.jsx)("div",{className:"single-my-account mb-20",children:(0,o.jsx)("div",{className:"single-my-account mb-20",children:(0,o.jsx)("h2",{className:"panel-heading",children:(0,o.jsx)("a",{href:"",children:"Payment details"})})})})]})},x=function(){window.sessionStorage.getItem("loginId");return(0,o.jsx)(h,{})},p=function(){return(0,o.jsxs)("div",{className:"myaccount-menu-wrap",children:[(0,o.jsx)("div",{className:"mypage-header",children:(0,o.jsx)("h2",{children:"My Page"})}),(0,o.jsx)(x,{})]})},u=function(e){var s=(0,l.useState)(""),c=(0,a.Z)(s,2),n=c[0],d=c[1],i=function(){e.closeModal()},t=function(){e.modalNext()},r=function(){e.modalPrev()};return 0==e.modalIndex?(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{className:"project-modal",children:[(0,o.jsxs)("div",{className:"project-modal-header",children:[(0,o.jsx)("h4",{children:"\uae30\ubcf8 \uc815\ubcf4 \uc785\ub825"}),(0,o.jsx)("button",{className:"close-modal",onClick:i,children:"x"})]}),(0,o.jsxs)("div",{className:"project-modal-content",children:[(0,o.jsxs)("label",{className:"round-check",children:[(0,o.jsx)("h4",{children:"\uc678\uc8fc(\ube44\uc0c1\uc8fc)"}),"\ud504\ub9ac\ub79c\uc11c \uc0ac\uc5c5\uc790\uc640 \uacc4\uc57d",(0,o.jsx)("input",{type:"checkbox"}),(0,o.jsx)("span",{className:"checkmark"})]}),(0,o.jsxs)("label",{className:"round-check",children:[(0,o.jsx)("h4",{children:"\uc0c1\uc8fc"}),"\uc815\ud574\uc9c4 \uae30\uac04, \uc7a5\uc18c\uc5d0 \ub530\ub77c \uc791\uc5c5\ud560 \uc778\ub825 \uad6c\uc778",(0,o.jsx)("input",{type:"checkbox"}),(0,o.jsx)("span",{className:"checkmark"})]}),(0,o.jsxs)("div",{className:"project-modal-box",children:[(0,o.jsx)("h4",{className:"project-modal-h4",children:"\uc0ac\uc6a9 \uac00\ub2a5\ud55c \uc608\uc0b0 \ubc94\uc704 \uc120\ud0dd"}),(0,o.jsx)("p",{children:"\uc815\ubd80\uc9c0\uc6d0\uae08\uc77c \uacbd\uc6b0 \ucd1d \uc0ac\uc5c5\ube44 \ubc94\uc704\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694."}),(0,o.jsxs)("div",{style:{display:"flex"},children:[(0,o.jsx)("input",{type:"radio",name:"budget"}),(0,o.jsx)("h4",{style:{margin:"10px"},children:"500\ub9cc\uc6d0 \ubbf8\ub9cc"}),(0,o.jsx)("input",{type:"radio",name:"budget"}),(0,o.jsx)("h4",{style:{margin:"10px"},children:"500\ub9cc\uc6d0 \uc774\uc0c1"})]})]}),(0,o.jsxs)("label",{className:"round-check",children:["\uc815\ubd80\uc9c0\uc6d0\uae08 \uc0ac\uc6a9 \uc2dc, \uccb4\ud06c\ud574\uc8fc\uc138\uc694",(0,o.jsx)("input",{type:"checkbox"}),(0,o.jsx)("span",{className:"checkmark"})]}),(0,o.jsx)("button",{className:"project-modal-next",onClick:t,children:"\ub2e4\uc74c"})]})]}),(0,o.jsx)("div",{className:"modal-back",onClick:i})]}):1==e.modalIndex?(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{className:"project-modal",children:[(0,o.jsxs)("div",{className:"project-modal-header",children:[(0,o.jsx)("h4",{children:"\ud544\uc694\ud55c \uc5c5\ubb34 \uc124\uba85"}),(0,o.jsx)("button",{className:"close-modal",onClick:i,children:"x"})]}),(0,o.jsxs)("div",{className:"project-modal-content",children:[(0,o.jsxs)("div",{className:"project-modal-box",children:[(0,o.jsx)("h4",{className:"project-modal-h4",children:"\ubaa8\uc9d1 \ubd84\uc57c\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694"}),(0,o.jsxs)("div",{className:"project-modal-selectlabel",children:[(0,o.jsxs)("select",{className:"project-modal-select",name:"category1",children:[(0,o.jsx)("option",{value:"",children:"\uc0c1\uc704 \uce74\ud14c\uace0\ub9ac"}),(0,o.jsx)("option",{value:"00",children:"Service A"}),(0,o.jsx)("option",{value:"01",children:"Service B"}),(0,o.jsx)("option",{value:"02",children:"Service C"})]}),(0,o.jsxs)("select",{className:"project-modal-select",name:"category1",children:[(0,o.jsx)("option",{value:"",children:"\ud558\uc704 \uce74\ud14c\uace0\ub9ac"}),(0,o.jsx)("option",{value:"00",children:"Service A"}),(0,o.jsx)("option",{value:"01",children:"Service B"}),(0,o.jsx)("option",{value:"02",children:"Service C"})]})]}),(0,o.jsxs)("div",{className:"project-modal-text",children:[(0,o.jsx)("h4",{className:"project-modal-h4",children:"\ud504\ub9ac\ub79c\uc11c \ud3ec\uc9c0\uc158 \uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."}),(0,o.jsx)("textarea",{className:"project-modal-cont"})]}),(0,o.jsxs)("div",{className:"project-modal-text",children:[(0,o.jsx)("h4",{className:"project-modal-h4",children:"\uac1c\uc778/\uae30\uc5c5 \uc5ec\ubd80\ub97c \uc120\ud0dd\ud574 \uc8fc\uc138\uc694."}),(0,o.jsxs)("div",{style:{display:"flex"},children:[(0,o.jsx)("input",{type:"radio",name:"budget"}),(0,o.jsx)("p",{style:{margin:"10px"},children:"\uac1c\uc778(\ud504\ub9ac\ub79c\uc11c)"}),(0,o.jsx)("input",{type:"radio",name:"budget"}),(0,o.jsx)("p",{style:{margin:"10px"},children:"\uae30\uc5c5(\ubc95\uc778/\uac1c\uc778\uc0ac\uc5c5\uc790/\uc608\ube44\ucc3d\uc5c5\uc790)"})]}),(0,o.jsx)("input",{type:"text",placeholder:"\uac1c\uc778/\uae30\uc5c5\uba85 \uc785\ub825(*\uc0ac\uc774\ud2b8\uc5d0 \ub178\ucd9c\ub418\uc9c0 \uc54a\uc74c)"})]})]}),(0,o.jsx)("button",{className:"project-modal-next",onClick:r,children:"\uc774\uc804"}),(0,o.jsx)("button",{className:"project-modal-next",onClick:t,children:"\ub2e4\uc74c"})]})]}),(0,o.jsx)("div",{className:"modal-back",onClick:i})]}):2==e.modalIndex?(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{className:"project-modal",children:[(0,o.jsxs)("div",{className:"project-modal-header",children:[(0,o.jsx)("h4",{children:"\ud544\uc694\ud55c \uc5c5\ubb34 \uc124\uba85"}),(0,o.jsx)("button",{className:"close-modal",onClick:i,children:"x"})]}),(0,o.jsxs)("div",{className:"project-modal-content",children:[(0,o.jsx)("div",{className:"project-modal-box",children:(0,o.jsxs)("div",{className:"project-modal-text",children:[(0,o.jsx)("h4",{className:"project-modal-h4",children:"\uae30\ud68d \uc0c1\ud0dc\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694."}),(0,o.jsxs)("div",{style:{display:"flex"},children:[(0,o.jsx)("input",{type:"radio",name:"budget"}),(0,o.jsx)("p",{style:{margin:"10px",width:"160px"},children:"\uc544\uc774\ub514\uc5b4\ub9cc \uc788\uc74c"}),(0,o.jsx)("input",{type:"radio",name:"budget"}),(0,o.jsx)("p",{style:{margin:"10px",width:"210px"},children:"\ud544\uc694\ud55c \ub0b4\uc6a9\ub4e4\uc744 \uac04\ub2e8\ud788 \uc815\ub9ac\ud574\ub460"})]}),(0,o.jsxs)("div",{style:{display:"flex"},children:[(0,o.jsx)("input",{type:"radio",name:"budget"}),(0,o.jsx)("p",{style:{margin:"10px",width:"160px"},children:"\uc0c1\uc138\ud55c \uae30\ud68d \ubb38\uc11c\uac00 \uc788\uc74c"}),(0,o.jsx)("input",{type:"radio",name:"budget"}),(0,o.jsx)("p",{style:{margin:"10px",width:"210px"},children:"\ud604\uc7ac \uae30\ud68d \ubb38\uc11c\ub97c \ub9cc\ub4e4\uace0 \uc788\uc74c"})]})]})}),(0,o.jsx)("button",{className:"project-modal-next",onClick:r,children:"\uc774\uc804"}),(0,o.jsx)("button",{className:"project-modal-next",onClick:t,children:"\ub2e4\uc74c"})]})]}),(0,o.jsx)("div",{className:"modal-back",onClick:i})]}):3==e.modalIndex?(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{className:"project-modal",children:[(0,o.jsxs)("div",{className:"project-modal-header",children:[(0,o.jsx)("h4",{children:"\ud544\uc694\ud55c \uc5c5\ubb34 \uc124\uba85"}),(0,o.jsx)("button",{className:"close-modal",onClick:i,children:"x"})]}),(0,o.jsxs)("div",{className:"project-modal-content",children:[(0,o.jsx)("div",{className:"project-modal-box",children:(0,o.jsxs)("div",{className:"project-modal-text",children:[(0,o.jsx)("h4",{className:"project-modal-h4",children:"\ud504\ub85c\uc81d\ud2b8 \ub0b4\uc6a9\uc5d0 \ub300\ud574 \uc0c1\uc138\ud55c \ub0b4\uc6a9\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694."}),(0,o.jsx)("textarea",{className:"project-modal-cont",style:{height:"200px"},placeholder:"\uc608)\r - \uacbd\ub825\r - \ud3ec\ud2b8\ud3f4\ub9ac\uc624\uc124\uba85\r - \uae30\ud0c0"})]})}),(0,o.jsx)("button",{className:"project-modal-next",onClick:r,children:"\uc774\uc804"}),(0,o.jsx)("button",{className:"project-modal-next",onClick:t,children:"\ub2e4\uc74c"})]})]}),(0,o.jsx)("div",{className:"modal-back",onClick:i})]}):(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{className:"project-modal",children:[(0,o.jsxs)("div",{className:"project-modal-header",children:[(0,o.jsx)("h4",{children:"\ud544\uc694\ud55c \uc5c5\ubb34 \uc124\uba85"}),(0,o.jsx)("button",{className:"close-modal",onClick:i,children:"x"})]}),(0,o.jsxs)("div",{className:"project-modal-content",children:[(0,o.jsx)("div",{className:"project-modal-box",children:(0,o.jsxs)("div",{className:"project-modal-text",children:[(0,o.jsx)("h4",{className:"project-modal-h4",children:"\ube44\uc6a9\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694."}),(0,o.jsx)("input",{type:"text",value:n,onChange:function(e){var s=e.target.value.replace(/[^0-9]/g,"");d(s)},placeholder:"\uc22b\uc790\ub9cc \uc785\ub825\ud558\uc138\uc694"})]})}),(0,o.jsx)("button",{className:"project-modal-next",onClick:r,children:"\uc774\uc804"}),(0,o.jsx)("button",{className:"project-modal-next",onClick:t,children:"\uc758\ub8b0\ud558\uae30"})]})]}),(0,o.jsx)("div",{className:"modal-back",onClick:i})]})},N=function(){var e=(0,n.TH)().pathname,s=(0,l.useState)(!1),c=(0,a.Z)(s,2),r=c[0],m=c[1],h=(0,l.useState)(0),x=(0,a.Z)(h,2),N=x[0],v=x[1];return(0,o.jsxs)(l.Fragment,{children:[(0,o.jsx)(d.Z,{titleTemplate:"My Account",description:"My Account page of flone react minimalist eCommerce template."}),(0,o.jsxs)(i.Z,{headerTop:"visible",children:[(0,o.jsx)(t.Z,{pages:[{label:"Home",path:"/"},{label:"My Account",path:""+e}]}),(0,o.jsx)("div",{className:"contact-area pt-100 pb-100",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsxs)("div",{className:"custom-row-2",children:[(0,o.jsx)("div",{className:"col-12 col-lg-3 col-md-4",children:(0,o.jsx)(p,{})}),(0,o.jsx)("div",{className:"col-12 col-lg-9 col-md-8",children:(0,o.jsx)(j,{openModal:function(){m(!0)}})})]})})}),1==r?(0,o.jsx)(u,{closeModal:function(){m(!1)},modalNext:function(){N<4&&v(N+1)},modalPrev:function(){N>0&&v(N-1)},modalIndex:N}):null]})]})}},9778:function(e,s,c){var a=c(2461),l=c(1087),n=c(184);s.Z=function(e){var s=e.pages;return(0,n.jsx)("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)(a.Z,{children:null===s||void 0===s?void 0:s.map((function(e,c){var d=e.path,i=e.label;return c!==s.length-1?(0,n.jsx)(a.Z.Item,{linkProps:{to:d},linkAs:l.rU,children:i},i):(0,n.jsx)(a.Z.Item,{active:!0,children:i},i)}))})})})}}}]);
//# sourceMappingURL=266.df6d066b.chunk.js.map