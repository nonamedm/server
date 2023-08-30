"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[189],{2189:function(e,i,r){r.r(i);var a=r(2791),s=r(9434),t=r(7689),c=r(1087),n=r(1770),l=r(3695),d=r(5378),o=r(9778),h=r(4275),m=r(8725),u=r(184);i.default=function(){var e=(0,s.I0)(),i=(0,t.TH)().pathname,r=(0,s.v9)((function(e){return e.currency})),x=(0,s.v9)((function(e){return e.wishlist})).wishlistItems,j=(0,s.v9)((function(e){return e.cart})).cartItems;return(0,u.jsxs)(a.Fragment,{children:[(0,u.jsx)(l.Z,{titleTemplate:"Wishlist",description:"Wishlist page of flone react minimalist eCommerce template."}),(0,u.jsxs)(d.Z,{headerTop:"visible",children:[(0,u.jsx)(o.Z,{pages:[{label:"Home",path:"/"},{label:"Wishlist",path:""+i}]}),(0,u.jsx)("div",{className:"cart-main-area pt-90 pb-100",children:(0,u.jsx)("div",{className:"container",children:x&&x.length>=1?(0,u.jsxs)(a.Fragment,{children:[(0,u.jsx)("h3",{className:"cart-page-title",children:"Your wishlist items"}),(0,u.jsx)("div",{className:"row",children:(0,u.jsx)("div",{className:"col-12",children:(0,u.jsx)("div",{className:"table-content table-responsive cart-table-content",children:(0,u.jsxs)("table",{children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{children:"Image"}),(0,u.jsx)("th",{children:"Product Name"}),(0,u.jsx)("th",{children:"Unit Price"}),(0,u.jsx)("th",{children:"Add To Cart"}),(0,u.jsx)("th",{children:"action"})]})}),(0,u.jsx)("tbody",{children:x.map((function(i,s){var t=(0,n.lk)(i.price,i.discount),l=(i.price*r.currencyRate).toFixed(2),d=(t*r.currencyRate).toFixed(2),o=j.find((function(e){return e.id===i.id}));return(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:"product-thumbnail",children:(0,u.jsx)(c.rU,{to:"/product/"+i.id,children:(0,u.jsx)("img",{className:"img-fluid",src:""+i.image[0],alt:""})})}),(0,u.jsx)("td",{className:"product-name text-center",children:(0,u.jsx)(c.rU,{to:"/product/"+i.id,children:i.name})}),(0,u.jsx)("td",{className:"product-price-cart",children:null!==t?(0,u.jsxs)(a.Fragment,{children:[(0,u.jsx)("span",{className:"amount old",children:r.currencySymbol+l}),(0,u.jsx)("span",{className:"amount",children:r.currencySymbol+d})]}):(0,u.jsx)("span",{className:"amount",children:r.currencySymbol+l})}),(0,u.jsx)("td",{className:"product-wishlist-cart",children:i.affiliateLink?(0,u.jsxs)("a",{href:i.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:[" ","Buy now"," "]}):i.variation&&i.variation.length>=1?(0,u.jsx)(c.rU,{to:"".concat("","/product/").concat(i.id),children:"Select option"}):i.stock&&i.stock>0?(0,u.jsx)("button",{onClick:function(){return e((0,h.Xq)(i))},className:void 0!==o&&o.quantity>0?"active":"",disabled:void 0!==o&&o.quantity>0,title:void 0!==i?"Added to cart":"Add to cart",children:void 0!==o&&o.quantity>0?"Added":"Add to cart"}):(0,u.jsx)("button",{disabled:!0,className:"active",children:"Out of stock"})}),(0,u.jsx)("td",{className:"product-remove",children:(0,u.jsx)("button",{onClick:function(){return e((0,m.ib)(i.id))},children:(0,u.jsx)("i",{className:"fa fa-times"})})})]},s)}))})]})})})}),(0,u.jsx)("div",{className:"row",children:(0,u.jsx)("div",{className:"col-lg-12",children:(0,u.jsxs)("div",{className:"cart-shiping-update-wrapper",children:[(0,u.jsx)("div",{className:"cart-shiping-update",children:(0,u.jsx)(c.rU,{to:"/shop-grid-standard",children:"Continue Shopping"})}),(0,u.jsx)("div",{className:"cart-clear",children:(0,u.jsx)("button",{onClick:function(){return e((0,m.tE)())},children:"Clear Wishlist"})})]})})})]}):(0,u.jsx)("div",{className:"row",children:(0,u.jsx)("div",{className:"col-lg-12",children:(0,u.jsxs)("div",{className:"item-empty-area text-center",children:[(0,u.jsx)("div",{className:"item-empty-area__icon mb-30",children:(0,u.jsx)("i",{className:"pe-7s-like"})}),(0,u.jsxs)("div",{className:"item-empty-area__text",children:["No items found in wishlist ",(0,u.jsx)("br",{})," ",(0,u.jsx)(c.rU,{to:"/shop-grid-standard",children:"Add Items"})]})]})})})})})]})]})}},9778:function(e,i,r){var a=r(2461),s=r(1087),t=r(184);i.Z=function(e){var i=e.pages;return(0,t.jsx)("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)(a.Z,{children:null===i||void 0===i?void 0:i.map((function(e,r){var c=e.path,n=e.label;return r!==i.length-1?(0,t.jsx)(a.Z.Item,{linkProps:{to:c},linkAs:s.rU,children:n},n):(0,t.jsx)(a.Z.Item,{active:!0,children:n},n)}))})})})}},2461:function(e,i,r){r.d(i,{Z:function(){return p}});var a=r(1413),s=r(5987),t=r(1694),c=r.n(t),n=r(2791),l=r(162),d=r(1396),o=r(184),h=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],m=n.forwardRef((function(e,i){var r=e.bsPrefix,t=e.active,n=void 0!==t&&t,m=e.children,u=e.className,x=e.as,j=void 0===x?"li":x,p=e.linkAs,v=void 0===p?d.Z:p,f=e.linkProps,b=void 0===f?{}:f,N=e.href,g=e.title,k=e.target,y=(0,s.Z)(e,h),Z=(0,l.vE)(r,"breadcrumb-item");return(0,o.jsx)(j,(0,a.Z)((0,a.Z)({ref:i},y),{},{className:c()(Z,u,{active:n}),"aria-current":n?"page":void 0,children:n?m:(0,o.jsx)(v,(0,a.Z)((0,a.Z)({},b),{},{href:N,title:g,target:k,children:m}))}))}));m.displayName="BreadcrumbItem";var u=m,x=["bsPrefix","className","listProps","children","label","as"],j=n.forwardRef((function(e,i){var r=e.bsPrefix,t=e.className,n=e.listProps,d=void 0===n?{}:n,h=e.children,m=e.label,u=void 0===m?"breadcrumb":m,j=e.as,p=void 0===j?"nav":j,v=(0,s.Z)(e,x),f=(0,l.vE)(r,"breadcrumb");return(0,o.jsx)(p,(0,a.Z)((0,a.Z)({"aria-label":u,className:t,ref:i},v),{},{children:(0,o.jsx)("ol",(0,a.Z)((0,a.Z)({},d),{},{className:c()(f,null==d?void 0:d.className),children:h}))}))}));j.displayName="Breadcrumb";var p=Object.assign(j,{Item:u})}}]);
//# sourceMappingURL=189.6b51d5ef.chunk.js.map