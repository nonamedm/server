"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[590],{9590:function(e,t,s){s.r(t),s.d(t,{default:function(){return p}});var r=s(9439),a=s(2791),i=s(6443),n=s(9434),c=s(7689),o=s(3433),l=function(e,t,s){if(e&&t&&s){if("category"===t)return e.filter((function(e){return e.filter((function(e){return e===s}))[0]}));if("filterSort"===t){var r=(0,o.Z)(e);if("default"===s)return r;if("priceHighToLow"===s)return console.log(e),r.sort((function(e,t){return t.price-e.price}));if("priceLowToHigh"===s)return r.sort((function(e,t){return e.price-t.price}))}}return e},u=s(3695),d=s(5378),h=s(9778),f=s(7960),m=s(335),g=s(4427),x=s(184),p=function(){var e=(0,a.useState)("grid four-column"),t=(0,r.Z)(e,2),s=t[0],o=t[1],p=(0,a.useState)(""),j=(0,r.Z)(p,2),v=j[0],N=j[1],b=(0,a.useState)(""),S=(0,r.Z)(b,2),C=S[0],P=S[1],Z=(0,a.useState)(""),w=(0,r.Z)(Z,2),k=w[0],y=w[1],H=(0,a.useState)(""),L=(0,r.Z)(H,2),T=L[0],F=L[1],q=(0,a.useState)(0),M=(0,r.Z)(q,2),_=M[0],A=M[1],D=(0,a.useState)(1),E=(0,r.Z)(D,2),O=E[0],R=E[1],X=(0,a.useState)([]),z=(0,r.Z)(X,2),B=z[0],G=z[1],I=(0,a.useState)([]),J=(0,r.Z)(I,2),K=J[0],Q=J[1],U=(0,n.v9)((function(e){return e.request})).requests,V=(0,c.TH)().pathname;return(0,a.useEffect)((function(){var e=l(U,v,C),t=l(e,k,T);Q(e=t),G(e.slice(_,_+16))}),[_,U,v,C,k,T]),(0,x.jsxs)(a.Fragment,{children:[(0,x.jsx)(u.Z,{titleTemplate:"Shop Page",description:"Shop page of flone react minimalist eCommerce template."}),(0,x.jsxs)(d.Z,{headerTop:"visible",children:[(0,x.jsx)(h.Z,{pages:[{label:"Home",path:"/"},{label:"Shop",path:""+V}]}),(0,x.jsx)("div",{className:"shop-area pt-95 pb-100",children:(0,x.jsx)("div",{className:"container",children:(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"col-lg-3",children:(0,x.jsx)(f.Z,{requests:U,getSortParams:function(e,t){N(e),P(t)},sideSpaceClass:"mr-30"})}),(0,x.jsxs)("div",{className:"col-lg-9",children:[(0,x.jsx)(m.Z,{getLayout:function(e){o(e)},getFilterSortParams:function(e,t){y(e),F(t)},productCount:U.length,sortedProductCount:B.length}),(0,x.jsx)(g.Z,{layout:s,requests:B}),(0,x.jsx)("div",{className:"pro-pagination-style text-center mt-30",children:(0,x.jsx)(i.Z,{totalRecords:K.length,pageLimit:16,pageNeighbours:2,setOffset:A,currentPage:O,setCurrentPage:R,pageContainerClass:"mb-0 mt-0",pagePrevText:"\xab",pageNextText:"\xbb"})})]})]})})})]})]})}},7960:function(e,t,s){s.d(t,{Z:function(){return l}});var r=s(8182),a=s(1770),i=s(184),n=function(){return(0,i.jsxs)("div",{className:"sidebar-widget",children:[(0,i.jsx)("h4",{className:"pro-sidebar-title",children:"Search "}),(0,i.jsx)("div",{className:"pro-sidebar-search mb-50 mt-25",children:(0,i.jsxs)("form",{className:"pro-sidebar-search-form",action:"#",children:[(0,i.jsx)("input",{type:"text",placeholder:"Search here..."}),(0,i.jsx)("button",{children:(0,i.jsx)("i",{className:"pe-7s-search"})})]})})]})},c=function(e){var t=e.categories,s=e.getSortParams;return(0,i.jsxs)("div",{className:"sidebar-widget",children:[(0,i.jsx)("h4",{className:"pro-sidebar-title",children:"Categories "}),(0,i.jsx)("div",{className:"sidebar-widget-list mt-30",children:t?(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{className:"sidebar-widget-list-left",children:(0,i.jsxs)("button",{onClick:function(e){s("category",""),(0,a.H7)(e)},children:[(0,i.jsx)("span",{className:"checkmark"})," All Categories"]})})}),t.map((function(e,t){return(0,i.jsx)("li",{children:(0,i.jsx)("div",{className:"sidebar-widget-list-left",children:(0,i.jsxs)("button",{onClick:function(t){s("category",e),(0,a.H7)(t)},children:[" ",(0,i.jsx)("span",{className:"checkmark"})," ",e," "]})})},t)}))]}):"No categories found"})]})},o=function(e){var t=e.tags,s=e.getSortParams;return(0,i.jsxs)("div",{className:"sidebar-widget mt-50",children:[(0,i.jsx)("h4",{className:"pro-sidebar-title",children:"Tag "}),(0,i.jsx)("div",{className:"sidebar-widget-tag mt-25",children:t?(0,i.jsx)("ul",{children:t.map((function(e,t){return(0,i.jsx)("li",{children:(0,i.jsx)("button",{onClick:function(t){s("tag",e),(0,a.H7)(t)},children:e})},t)}))}):"No tags found"})]})},l=function(e){var t=e.products,s=e.getSortParams,l=e.sideSpaceClass,u=(0,a.uX)(t),d=((0,a.mF)(t),(0,a.l9)(t),(0,a.ku)(t));return(0,i.jsxs)("div",{className:(0,r.Z)("sidebar-style",l),children:[(0,i.jsx)(n,{}),(0,i.jsx)(c,{categories:u,getSortParams:s}),(0,i.jsx)(o,{tags:d,getSortParams:s})]})}},335:function(e,t,s){s.d(t,{Z:function(){return c}});var r=s(2791),a=s(1770),i=s(184),n=function(e){var t=e.getLayout,s=e.getFilterSortParams,r=e.productCount,n=e.sortedProductCount;return(0,i.jsxs)("div",{className:"shop-top-bar mb-35",children:[(0,i.jsxs)("div",{className:"select-shoing-wrap",children:[(0,i.jsx)("div",{className:"shop-select",children:(0,i.jsxs)("select",{onChange:function(e){return s("filterSort",e.target.value)},children:[(0,i.jsx)("option",{value:"default",children:"Default"}),(0,i.jsx)("option",{value:"priceHighToLow",children:"Price - High to Low"}),(0,i.jsx)("option",{value:"priceLowToHigh",children:"Price - Low to High"})]})}),(0,i.jsxs)("p",{children:["Showing ",n," of ",r," result"]})]}),(0,i.jsxs)("div",{className:"shop-tab",children:[(0,i.jsx)("button",{onClick:function(e){t("grid two-column"),(0,a.cM)(e)},children:(0,i.jsx)("i",{className:"fa fa-th-large"})}),(0,i.jsx)("button",{className:"active",onClick:function(e){t("grid four-column"),(0,a.cM)(e)},children:(0,i.jsx)("i",{className:"fa fa-th"})}),(0,i.jsx)("button",{onClick:function(e){t("list"),(0,a.cM)(e)},children:(0,i.jsx)("i",{className:"fa fa-list-ul"})})]})]})},c=function(e){var t=e.getLayout,s=e.getFilterSortParams,a=e.productCount,c=e.sortedProductCount;return(0,i.jsx)(r.Fragment,{children:(0,i.jsx)(n,{getLayout:t,getFilterSortParams:s,productCount:a,sortedProductCount:c})})}}}]);
//# sourceMappingURL=590.45f76b27.chunk.js.map