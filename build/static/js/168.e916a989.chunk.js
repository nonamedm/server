"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[168],{8168:function(e,s,t){t.r(s),t.d(s,{default:function(){return C}});var a=t(9439),r=t(2791),i=t(6443),c=t(9434),l=t(7689),n=t(1770),o=t(3695),d=t(5378),u=t(9778),h=t(8182),m=t(184),x=function(){return(0,m.jsxs)("div",{className:"sidebar-widget",children:[(0,m.jsx)("h4",{className:"pro-sidebar-title",children:"Search "}),(0,m.jsx)("div",{className:"pro-sidebar-search mb-50 mt-25",children:(0,m.jsxs)("form",{className:"pro-sidebar-search-form",action:"#",children:[(0,m.jsx)("input",{type:"text",placeholder:"Search here..."}),(0,m.jsx)("button",{children:(0,m.jsx)("i",{className:"pe-7s-search"})})]})})]})},j=function(e){var s=e.categories,t=e.getSortParams;return(0,m.jsxs)("div",{className:"sidebar-widget",children:[(0,m.jsx)("h4",{className:"pro-sidebar-title",children:"Categories "}),(0,m.jsx)("div",{className:"sidebar-widget-list mt-30",children:s?(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:(0,m.jsx)("div",{className:"sidebar-widget-list-left",children:(0,m.jsxs)("button",{onClick:function(e){t("category",""),(0,n.H7)(e)},children:[(0,m.jsx)("span",{className:"checkmark"})," All Categories"]})})}),s.map((function(e,s){return(0,m.jsx)("li",{children:(0,m.jsx)("div",{className:"sidebar-widget-list-left",children:(0,m.jsxs)("button",{onClick:function(s){t("category",e),(0,n.H7)(s)},children:[" ",(0,m.jsx)("span",{className:"checkmark"})," ",e," "]})})},s)}))]}):"No categories found"})]})},g=function(e){var s=e.colors,t=e.getSortParams;return(0,m.jsxs)("div",{className:"sidebar-widget mt-50",children:[(0,m.jsx)("h4",{className:"pro-sidebar-title",children:"Color "}),(0,m.jsx)("div",{className:"sidebar-widget-list mt-20",children:s?(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:(0,m.jsx)("div",{className:"sidebar-widget-list-left",children:(0,m.jsxs)("button",{onClick:function(e){t("color",""),(0,n.H7)(e)},children:[(0,m.jsx)("span",{className:"checkmark"})," All Colors"," "]})})}),s.map((function(e,s){return(0,m.jsx)("li",{children:(0,m.jsx)("div",{className:"sidebar-widget-list-left",children:(0,m.jsxs)("button",{onClick:function(s){t("color",e),(0,n.H7)(s)},children:[(0,m.jsx)("span",{className:"checkmark"})," ",e," "]})})},s)}))]}):"No colors found"})]})},p=function(e){var s=e.sizes,t=e.getSortParams;return(0,m.jsxs)("div",{className:"sidebar-widget mt-40",children:[(0,m.jsx)("h4",{className:"pro-sidebar-title",children:"Size "}),(0,m.jsx)("div",{className:"sidebar-widget-list mt-20",children:s?(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:(0,m.jsx)("div",{className:"sidebar-widget-list-left",children:(0,m.jsxs)("button",{onClick:function(e){t("size",""),(0,n.H7)(e)},children:[(0,m.jsx)("span",{className:"checkmark"})," All Sizes"," "]})})}),s.map((function(e,s){return(0,m.jsx)("li",{children:(0,m.jsx)("div",{className:"sidebar-widget-list-left",children:(0,m.jsxs)("button",{className:"text-uppercase",onClick:function(s){t("size",e),(0,n.H7)(s)},children:[" ",(0,m.jsx)("span",{className:"checkmark"}),e," "]})})},s)}))]}):"No sizes found"})]})},f=function(e){var s=e.tags,t=e.getSortParams;return(0,m.jsxs)("div",{className:"sidebar-widget mt-50",children:[(0,m.jsx)("h4",{className:"pro-sidebar-title",children:"Tag "}),(0,m.jsx)("div",{className:"sidebar-widget-tag mt-25",children:s?(0,m.jsx)("ul",{children:s.map((function(e,s){return(0,m.jsx)("li",{children:(0,m.jsx)("button",{onClick:function(s){t("tag",e),(0,n.H7)(s)},children:e})},s)}))}):"No tags found"})]})},N=function(e){var s=e.products,t=e.getSortParams,a=e.sideSpaceClass,r=(0,n.uX)(s),i=(0,n.mF)(s),c=(0,n.l9)(s),l=(0,n.ku)(s);return(0,m.jsxs)("div",{className:(0,h.Z)("sidebar-style",a),children:[(0,m.jsx)(x,{}),(0,m.jsx)(j,{categories:r,getSortParams:t}),(0,m.jsx)(g,{colors:i,getSortParams:t}),(0,m.jsx)(p,{sizes:c,getSortParams:t}),(0,m.jsx)(f,{tags:l,getSortParams:t})]})},b=function(e){var s=e.getLayout,t=e.getFilterSortParams,a=e.productCount,r=e.sortedProductCount;return(0,m.jsxs)("div",{className:"shop-top-bar mb-35",children:[(0,m.jsxs)("div",{className:"select-shoing-wrap",children:[(0,m.jsx)("div",{className:"shop-select",children:(0,m.jsxs)("select",{onChange:function(e){return t("filterSort",e.target.value)},children:[(0,m.jsx)("option",{value:"default",children:"Default"}),(0,m.jsx)("option",{value:"priceHighToLow",children:"Price - High to Low"}),(0,m.jsx)("option",{value:"priceLowToHigh",children:"Price - Low to High"})]})}),(0,m.jsxs)("p",{children:["Showing ",r," of ",a," result"]})]}),(0,m.jsxs)("div",{className:"shop-tab",children:[(0,m.jsx)("button",{onClick:function(e){s("grid two-column"),(0,n.cM)(e)},children:(0,m.jsx)("i",{className:"fa fa-th-large"})}),(0,m.jsx)("button",{className:"active",onClick:function(e){s("grid four-column"),(0,n.cM)(e)},children:(0,m.jsx)("i",{className:"fa fa-th"})}),(0,m.jsx)("button",{onClick:function(e){s("list"),(0,n.cM)(e)},children:(0,m.jsx)("i",{className:"fa fa-list-ul"})})]})]})},v=function(e){var s=e.getLayout,t=e.getFilterSortParams,a=e.productCount,i=e.sortedProductCount;return(0,m.jsx)(r.Fragment,{children:(0,m.jsx)(b,{getLayout:s,getFilterSortParams:t,productCount:a,sortedProductCount:i})})},S=t(4427),C=function(){var e=(0,r.useState)("grid four-column"),s=(0,a.Z)(e,2),t=s[0],h=s[1],x=(0,r.useState)(""),j=(0,a.Z)(x,2),g=j[0],p=j[1],f=(0,r.useState)(""),b=(0,a.Z)(f,2),C=b[0],k=b[1],w=(0,r.useState)(""),P=(0,a.Z)(w,2),Z=P[0],H=P[1],L=(0,r.useState)(""),y=(0,a.Z)(L,2),T=y[0],z=y[1],F=(0,r.useState)(0),A=(0,a.Z)(F,2),M=A[0],B=A[1],_=(0,r.useState)(1),D=(0,a.Z)(_,2),E=D[0],O=D[1],R=(0,r.useState)([]),X=(0,a.Z)(R,2),q=X[0],G=X[1],I=(0,r.useState)([]),J=(0,a.Z)(I,2),K=J[0],Q=J[1],U=(0,c.v9)((function(e){return e.product})).products,V=(0,l.TH)().pathname;return(0,r.useEffect)((function(){var e=(0,n.LB)(U,g,C),s=(0,n.LB)(e,Z,T);Q(e=s),G(e.slice(M,M+16))}),[M,U,g,C,Z,T]),(0,m.jsxs)(r.Fragment,{children:[(0,m.jsx)(o.Z,{titleTemplate:"Shop Page",description:"Shop page of flone react minimalist eCommerce template."}),(0,m.jsxs)(d.Z,{headerTop:"visible",children:[(0,m.jsx)(u.Z,{pages:[{label:"Home",path:"/"},{label:"Shop",path:""+V}]}),(0,m.jsx)("div",{className:"shop-area pt-95 pb-100",children:(0,m.jsx)("div",{className:"container",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-lg-3",children:(0,m.jsx)(N,{products:U,getSortParams:function(e,s){p(e),k(s)},sideSpaceClass:"mr-30"})}),(0,m.jsxs)("div",{className:"col-lg-9",children:[(0,m.jsx)(v,{getLayout:function(e){h(e)},getFilterSortParams:function(e,s){H(e),z(s)},productCount:U.length,sortedProductCount:q.length}),(0,m.jsx)(S.Z,{layout:t,products:q}),(0,m.jsx)("div",{className:"pro-pagination-style text-center mt-30",children:(0,m.jsx)(i.Z,{totalRecords:K.length,pageLimit:16,pageNeighbours:2,setOffset:B,currentPage:E,setCurrentPage:O,pageContainerClass:"mb-0 mt-0",pagePrevText:"\xab",pageNextText:"\xbb"})})]})]})})})]})]})}}}]);
//# sourceMappingURL=168.e916a989.chunk.js.map