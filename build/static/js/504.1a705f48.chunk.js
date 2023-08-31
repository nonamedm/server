"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[504],{3695:function(e,n,r){var s=r(6907),c=r(184),t=function(e){var n=e.title,r=e.titleTemplate,t=e.description;return(0,c.jsx)(s.B6,{children:(0,c.jsxs)(s.ql,{children:[(0,c.jsx)("meta",{charSet:"utf-8"}),(0,c.jsxs)("title",{children:[n," | ",r]}),(0,c.jsx)("meta",{name:"description",content:t})]})})};t.defaultProps={title:"RF",titleTemplate:"Product Page",description:"Product page of flone react minimalist eCommerce template."},n.Z=t},1770:function(e,n,r){r.d(n,{H7:function(){return m},LB:function(){return a},Xp:function(){return c},Zf:function(){return j},bh:function(){return i},cM:function(){return f},hI:function(){return l},ku:function(){return u},l9:function(){return x},lk:function(){return t},mF:function(){return h},uX:function(){return d}});var s=r(3433),c=function(e,n,r,s){var c=n?e.filter((function(e){return e.category.filter((function(e){return e===n}))[0]})):e;if(r&&"new"===r){var t=c.filter((function(e){return e.new}));return t.slice(0,s||t.length)}if(r&&"bestSeller"===r)return c.sort((function(e,n){return n.saleCount-e.saleCount})).slice(0,s||c.length);if(r&&"saleItems"===r){var i=c.filter((function(e){return e.discount&&e.discount>0}));return i.slice(0,s||i.length)}return c.slice(0,s||c.length)},t=function(e,n){return n&&n>0?e-e*(n/100):null},i=function(e,n,r,s){var c=e.find((function(e){return e.id===n.id&&(!e.selectedProductColor||e.selectedProductColor===r)&&(!e.selectedProductSize||e.selectedProductSize===s)}));return e.length>=1&&c?n.variation?e.find((function(e){return e.id===n.id&&e.selectedProductColor===r&&e.selectedProductSize===s})).quantity:e.find((function(e){return n.id===e.id})).quantity:0},l=function(e,n,r){return e.stock?e.stock:e.variation.filter((function(e){return e.color===n}))[0].size.filter((function(e){return e.name===r}))[0].stock},a=function(e,n,r){if(e&&n&&r){if("category"===n)return e.filter((function(e){return e.category.filter((function(e){return e===r}))[0]}));if("tag"===n)return e.filter((function(e){return e.tag.filter((function(e){return e===r}))[0]}));if("color"===n)return e.filter((function(e){return e.variation&&e.variation.filter((function(e){return e.color===r}))[0]}));if("size"===n)return e.filter((function(e){return e.variation&&e.variation.filter((function(e){return e.size.filter((function(e){return e.name===r}))[0]}))[0]}));if("filterSort"===n){var c=(0,s.Z)(e);if("default"===r)return c;if("priceHighToLow"===r)return c.sort((function(e,n){return n.price-e.price}));if("priceLowToHigh"===r)return c.sort((function(e,n){return e.price-n.price}))}}return e},o=function(e){return e.filter((function(e,n,r){return n===r.indexOf(e)}))},d=function(e){var n=[];return e&&e.map((function(e){return e.category&&e.category.map((function(e){return n.push(e)}))})),o(n)},u=function(e){var n=[];return e&&e.map((function(e){return e.tag&&e.tag.map((function(e){return n.push(e)}))})),o(n)},h=function(e){var n=[];return e&&e.map((function(e){return e.variation&&e.variation.map((function(e){return n.push(e.color)}))})),o(n)},x=function(e){var n=[];return e&&e.map((function(e){return e.variation&&e.variation.map((function(e){return e.size.map((function(e){return n.push(e.name)}))}))})),o(n)},m=function(e){document.querySelectorAll(".sidebar-widget-list-left button, .sidebar-widget-tag button, .product-filter button").forEach((function(e){e.classList.remove("active")})),e.currentTarget.classList.add("active")},f=function(e){document.querySelectorAll(".shop-tab button").forEach((function(e){e.classList.remove("active")})),e.currentTarget.classList.add("active")},j=function(e){var n=document.querySelector("#product-filter-wrapper");n.classList.toggle("active"),n.style.height?n.style.height=null:n.style.height=n.scrollHeight+"px",e.currentTarget.classList.toggle("active")}},5378:function(e,n,r){r.d(n,{Z:function(){return R}});var s=r(2791),c=r(9439),t=r(8182),i=r(1087),l=r(184),a=function(e){var n=e.imageUrl,r=e.logoClass;return(0,l.jsx)("div",{className:(0,t.Z)(r),children:(0,l.jsx)(i.rU,{to:"/",children:(0,l.jsx)("img",{alt:"",src:""+n})})})},o=r(9230),d=function(e){var n=e.menuWhiteClass,r=e.sidebarMenu,s=(0,o.$G)().t;return(0,l.jsx)("div",{className:(0,t.Z)(r?"sidebar-menu":"main-menu ".concat(n||"")),children:(0,l.jsx)("nav",{children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{onClick:function(){document.querySelector("#offcanvas-mobile-menu").classList.add("active")},children:(0,l.jsx)("i",{className:"pe-7s-menu"})})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"/shop-grid-standard",children:s("all_category")})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"/contact",children:"\uc774\ubca4\ud2b8"})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"/contact",children:"\uc758\ub8b0"})}),(0,l.jsxs)("li",{children:[(0,l.jsxs)(i.rU,{to:"/",children:[s("pages"),r?(0,l.jsx)("span",{children:(0,l.jsx)("i",{className:"fa fa-angle-right"})}):(0,l.jsx)("i",{className:"fa fa-angle-down"})]}),(0,l.jsxs)("ul",{className:"submenu",children:[(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"/cart",children:s("cart")})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"/checkout",children:s("checkout")})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"/wishlist",children:s("wishlist")})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"/compare",children:s("compare")})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"/my-account",children:s("my_page")})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"/login-register",children:s("login_register")})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"/about",children:s("about_us")})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"/contact",children:s("contact_us")})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"/not-found",children:s("404_page")})})]})]}),(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"/contact",children:s("contact_us")})})]})})})},u=r(9434),h=r(1770),x=r(4275),m=function(){var e=(0,u.I0)(),n=(0,u.v9)((function(e){return e.currency})),r=(0,u.v9)((function(e){return e.cart})).cartItems,c=0;return(0,l.jsx)("div",{className:"shopping-cart-content",children:r&&r.length>0?(0,l.jsxs)(s.Fragment,{children:[(0,l.jsx)("ul",{children:r.map((function(r){var s=(0,h.lk)(r.price,r.discount),t=(r.price*n.currencyRate).toFixed(2),a=(s*n.currencyRate).toFixed(2);return c+=null!=s?a*r.quantity:t*r.quantity,(0,l.jsxs)("li",{className:"single-shopping-cart",children:[(0,l.jsx)("div",{className:"shopping-cart-img",children:(0,l.jsx)(i.rU,{to:"/product/"+r.id,children:(0,l.jsx)("img",{alt:"",src:""+r.image[0],className:"img-fluid"})})}),(0,l.jsxs)("div",{className:"shopping-cart-title",children:[(0,l.jsx)("h4",{children:(0,l.jsxs)(i.rU,{to:"/product/"+r.id,children:[" ",r.name," "]})}),(0,l.jsxs)("h6",{children:["Qty: ",r.quantity]}),(0,l.jsx)("span",{children:null!==s?n.currencySymbol+a:n.currencySymbol+t}),r.selectedProductColor&&r.selectedProductSize?(0,l.jsxs)("div",{className:"cart-item-variation",children:[(0,l.jsxs)("span",{children:["Color: ",r.selectedProductColor]}),(0,l.jsxs)("span",{children:["Size: ",r.selectedProductSize]})]}):""]}),(0,l.jsx)("div",{className:"shopping-cart-delete",children:(0,l.jsx)("button",{onClick:function(){return e((0,x.EI)(r.cartItemId))},children:(0,l.jsx)("i",{className:"fa fa-times-circle"})})})]},r.cartItemId)}))}),(0,l.jsx)("div",{className:"shopping-cart-total",children:(0,l.jsxs)("h4",{children:["Total :"," ",(0,l.jsx)("span",{className:"shop-total",children:n.currencySymbol+c.toFixed(2)})]})}),(0,l.jsxs)("div",{className:"shopping-cart-btn btn-hover text-center",children:[(0,l.jsx)(i.rU,{className:"default-btn",to:"/cart",children:"view cart"}),(0,l.jsx)(i.rU,{className:"default-btn",to:"/checkout",children:"checkout"})]})]}):(0,l.jsx)("p",{className:"text-center",children:"No items added to cart"})})},f=function(e){var n=e.iconWhiteClass,r=function(e){e.currentTarget.nextSibling.classList.toggle("active")},s=(0,u.v9)((function(e){return e.compare})).compareItems,c=(0,u.v9)((function(e){return e.wishlist})).wishlistItems,a=(0,u.v9)((function(e){return e.cart})).cartItems,o=window.sessionStorage.getItem("loginName");return(0,l.jsxs)("div",{className:(0,t.Z)("header-right-wrap",n),children:[(0,l.jsxs)("div",{className:"same-style header-search d-none d-lg-block",children:[(0,l.jsx)("button",{className:"search-active",onClick:function(e){return r(e)},children:(0,l.jsx)("i",{className:"pe-7s-search"})}),(0,l.jsx)("div",{className:"search-content",children:(0,l.jsxs)("form",{action:"#",children:[(0,l.jsx)("input",{type:"text",placeholder:"Search"}),(0,l.jsx)("button",{className:"button-search",children:(0,l.jsx)("i",{className:"pe-7s-search"})})]})})]}),(0,l.jsxs)("div",{className:"same-style account-setting d-none d-lg-block",children:[(0,l.jsx)("button",{className:"account-setting-active",onClick:function(e){return r(e)},children:(0,l.jsx)("i",{className:"pe-7s-user-female"})}),(0,l.jsx)("div",{className:"account-dropdown",children:null!=o?(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:o}),(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"/my-account",children:"my account"})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{onClick:function(e){return function(e){var n=window.sessionStorage;n.removeItem("loginId"),n.removeItem("loginName"),window.location.href="/"}()},children:"Log out"})})]}):(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"/login-register",children:"Login"})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"/login-register",children:"Register"})})]})})]}),(0,l.jsx)("div",{className:"same-style header-compare",children:(0,l.jsxs)(i.rU,{to:"/compare",children:[(0,l.jsx)("i",{className:"pe-7s-shuffle"}),(0,l.jsx)("span",{className:"count-style",children:s&&s.length?s.length:0})]})}),(0,l.jsx)("div",{className:"same-style header-wishlist",children:(0,l.jsxs)(i.rU,{to:"/wishlist",children:[(0,l.jsx)("i",{className:"pe-7s-like"}),(0,l.jsx)("span",{className:"count-style",children:c&&c.length?c.length:0})]})}),(0,l.jsxs)("div",{className:"same-style cart-wrap d-none d-lg-block",children:[(0,l.jsxs)("button",{className:"icon-cart",onClick:function(e){return r(e)},children:[(0,l.jsx)("i",{className:"pe-7s-shopbag"}),(0,l.jsx)("span",{className:"count-style",children:a&&a.length?a.length:0})]}),(0,l.jsx)(m,{})]}),(0,l.jsx)("div",{className:"same-style cart-wrap d-block d-lg-none",children:(0,l.jsxs)(i.rU,{className:"icon-cart",to:"/cart",children:[(0,l.jsx)("i",{className:"pe-7s-shopbag"}),(0,l.jsx)("span",{className:"count-style",children:a&&a.length?a.length:0})]})}),(0,l.jsx)("div",{className:"same-style mobile-off-canvas d-block d-lg-none",children:(0,l.jsx)("button",{className:"mobile-aside-button",onClick:function(){document.querySelector("#offcanvas-mobile-menu").classList.add("active")},children:(0,l.jsx)("i",{className:"pe-7s-menu"})})})]})},j=function(){return(0,l.jsx)("div",{className:"offcanvas-mobile-search-area",children:(0,l.jsxs)("form",{action:"#",children:[(0,l.jsx)("input",{type:"search",placeholder:"Search ..."}),(0,l.jsx)("button",{type:"submit",children:(0,l.jsx)("i",{className:"fa fa-search"})})]})})},g=function(){var e=(0,o.$G)().t;return(0,l.jsx)("nav",{className:"offcanvas-navigation",id:"offcanvas-navigation",children:(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{className:"menu-item-has-children",children:[(0,l.jsx)(i.rU,{to:"/",children:e("pages")}),(0,l.jsxs)("ul",{className:"sub-menu",children:[(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"/cart",children:e("cart")})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"/checkout",children:e("checkout")})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"/wishlist",children:e("wishlist")})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"/compare",children:e("compare")})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"/my-account",children:e("my_page")})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"/login-register",children:e("login_register")})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"/about",children:e("about_us")})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"/contact",children:e("contact_us")})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"/not-found",children:e("404_page")})})]})]}),(0,l.jsxs)("li",{className:"menu-item-has-children",children:[(0,l.jsx)(i.rU,{to:"/blog-standard",children:e("blog")}),(0,l.jsxs)("ul",{className:"sub-menu",children:[(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"/blog-standard",children:e("blog_standard")})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"/blog-no-sidebar",children:e("blog_no_sidebar")})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"/blog-right-sidebar",children:e("blog_right_sidebar")})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"/blog-details-standard",children:e("blog_details_standard")})})]})]}),(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"/contact",children:e("contact_us")})})]})})},v=r(147),p=function(){var e=(0,o.$G)().i18n,n=(0,u.I0)(),r=(0,u.v9)((function(e){return e.currency})),s=function(){document.querySelector("#offcanvas-mobile-menu").classList.remove("active")};return(0,l.jsxs)("div",{className:"mobile-menu-middle",children:[(0,l.jsxs)("div",{className:"lang-curr-style",children:[(0,l.jsx)("span",{className:"title mb-2",children:"Choose Language "}),(0,l.jsxs)("select",{value:e.resolvedLanguage,onChange:function(n){var r=n.target.value;e.changeLanguage(r),s()},children:[(0,l.jsx)("option",{value:"ko",children:"Korean"}),(0,l.jsx)("option",{value:"en",children:"English"}),(0,l.jsx)("option",{value:"fn",children:"French"}),(0,l.jsx)("option",{value:"de",children:"Germany"})]})]}),(0,l.jsxs)("div",{className:"lang-curr-style",children:[(0,l.jsx)("span",{className:"title mb-2",children:"Choose Currency"}),(0,l.jsxs)("select",{value:r.currencyName,onChange:function(e){var r=e.target.value;n((0,v.N)(r)),s()},children:[(0,l.jsx)("option",{value:"KRW",children:"KRW"}),(0,l.jsx)("option",{value:"EUR",children:"EUR"}),(0,l.jsx)("option",{value:"EUR",children:"EUR"}),(0,l.jsx)("option",{value:"GBP",children:"GBP"})]})]})]})},b=function(){return(0,l.jsxs)("div",{className:"offcanvas-widget-area",children:[(0,l.jsx)("div",{className:"off-canvas-contact-widget",children:(0,l.jsx)("div",{className:"header-contact-info",children:(0,l.jsxs)("ul",{className:"header-contact-info__list",children:[(0,l.jsxs)("li",{children:[(0,l.jsx)("i",{className:"fa fa-phone"})," ",(0,l.jsx)("a",{href:"tel://12452456012",children:"(1245) 2456 012 "})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("i",{className:"fa fa-envelope"})," ",(0,l.jsx)("a",{href:"mailto:info@yourdomain.com",children:"info@yourdomain.com"})]})]})})}),(0,l.jsxs)("div",{className:"off-canvas-widget-social",children:[(0,l.jsx)("a",{href:"//twitter.com",title:"Twitter",children:(0,l.jsx)("i",{className:"fa fa-twitter"})}),(0,l.jsx)("a",{href:"//instagram.com",title:"Instagram",children:(0,l.jsx)("i",{className:"fa fa-instagram"})}),(0,l.jsx)("a",{href:"//facebook.com",title:"Facebook",children:(0,l.jsx)("i",{className:"fa fa-facebook"})}),(0,l.jsx)("a",{href:"//pinterest.com",title:"Pinterest",children:(0,l.jsx)("i",{className:"fa fa-pinterest"})})]})]})},N=function(){(0,s.useEffect)((function(){for(var r=document.querySelector("#offcanvas-navigation"),s=r.querySelectorAll(".sub-menu"),c=r.querySelectorAll("a"),t=0;t<s.length;t++)s[t].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");for(var i=r.querySelectorAll(".menu-expand"),l=i.length,a=0;a<l;a++)i[a].addEventListener("click",(function(n){e(n)}));for(var o=0;o<c.length;o++)c[o].addEventListener("click",(function(){n()}))}));var e=function(e){e.currentTarget.parentElement.classList.toggle("active")},n=function(){document.querySelector("#offcanvas-mobile-menu").classList.remove("active")};return(0,l.jsxs)("div",{className:"offcanvas-mobile-menu",id:"offcanvas-mobile-menu",children:[(0,l.jsx)("button",{className:"offcanvas-menu-close",id:"mobile-menu-close-trigger",onClick:function(){return n()},children:(0,l.jsx)("i",{className:"pe-7s-close"})}),(0,l.jsx)("div",{className:"offcanvas-wrapper",children:(0,l.jsxs)("div",{className:"offcanvas-inner-content",children:[(0,l.jsx)(j,{}),(0,l.jsx)(g,{}),(0,l.jsx)(p,{}),(0,l.jsx)(b,{})]})})]})},y=function(e){var n=e.currency,r=(0,o.$G)().i18n,s=(0,u.I0)(),c=function(e){var n=e.target.value;r.changeLanguage(n)},t=function(e){var n=e.target.value;s((0,v.N)(n))};return(0,l.jsxs)("div",{className:"language-currency-wrap",children:[(0,l.jsxs)("div",{className:"same-language-currency language-style",children:[(0,l.jsxs)("span",{children:["ko"===r.resolvedLanguage?"Korean":"en"===r.resolvedLanguage?"English":"fn"===r.resolvedLanguage?"French":"de"===r.resolvedLanguage?"Germany":""," ",(0,l.jsx)("i",{className:"fa fa-angle-down"})]}),(0,l.jsx)("div",{className:"lang-car-dropdown",children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)("button",{value:"ko",onClick:function(e){return c(e)},children:"Korean"})}),(0,l.jsx)("li",{children:(0,l.jsx)("button",{value:"en",onClick:function(e){return c(e)},children:"English"})}),(0,l.jsx)("li",{children:(0,l.jsx)("button",{value:"fn",onClick:function(e){return c(e)},children:"French"})}),(0,l.jsx)("li",{children:(0,l.jsx)("button",{value:"de",onClick:function(e){return c(e)},children:"Germany"})})]})})]}),(0,l.jsxs)("div",{className:"same-language-currency use-style",children:[(0,l.jsxs)("span",{children:[n.currencyName," ",(0,l.jsx)("i",{className:"fa fa-angle-down"})]}),(0,l.jsx)("div",{className:"lang-car-dropdown",children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)("button",{value:"KRW",onClick:function(e){return t(e)},children:"KRW"})}),(0,l.jsx)("li",{children:(0,l.jsx)("button",{value:"USD",onClick:function(e){return t(e)},children:"USD"})}),(0,l.jsx)("li",{children:(0,l.jsx)("button",{value:"EUR",onClick:function(e){return t(e)},children:"EUR"})}),(0,l.jsx)("li",{children:(0,l.jsx)("button",{value:"GBP",onClick:function(e){return t(e)},children:"GBP"})})]})})]}),(0,l.jsx)("div",{className:"same-language-currency",children:(0,l.jsx)("p",{children:"Call Us 3965410"})})]})},w=function(e){var n=e.borderStyle,r=(0,u.v9)((function(e){return e.currency}));return(0,l.jsxs)("div",{className:(0,t.Z)("header-top-wap","fluid-border"===n&&"border-bottom"),children:[(0,l.jsx)(y,{currency:r}),(0,l.jsx)("div",{className:"header-offer",children:(0,l.jsxs)("p",{children:["Free delivery on order over"," ",(0,l.jsx)("span",{children:r.currencySymbol+(200*r.currencyRate).toFixed(2)})]})})]})},C=function(e){var n=e.layout,r=(e.top,e.borderStyle),i=e.headerPaddingClass,o=e.headerPositionClass,u=e.headerBgClass,h=(0,s.useState)(0),x=(0,c.Z)(h,2),m=x[0],j=x[1],g=(0,s.useState)(0),v=(0,c.Z)(g,2),p=v[0],b=v[1];(0,s.useEffect)((function(){var e=document.querySelector(".sticky-bar");return b(e.offsetTop),window.addEventListener("scroll",y),function(){window.removeEventListener("scroll",y)}}),[]);var y=function(){j(window.scrollY)};return(0,l.jsxs)("header",{className:(0,t.Z)("header-area clearfix",u,o),children:[(0,l.jsx)("div",{className:(0,t.Z)("header-top-area",i,"d-none","fluid-border"===r&&"border-none"),children:(0,l.jsx)("div",{className:"container-fluid"===n?n:"container",children:(0,l.jsx)(w,{borderStyle:r})})}),(0,l.jsxs)("div",{className:(0,t.Z)(i,"sticky-bar header-res-padding clearfix",m>p&&"stick"),children:[(0,l.jsxs)("div",{className:"container-fluid"===n?n:"container",children:[(0,l.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-4",children:(0,l.jsx)(a,{imageUrl:"/assets/img/logo/logo.png",logoClass:"logo"})}),(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-xl-10 col-lg-10 d-none d-lg-block",children:(0,l.jsx)(d,{})}),(0,l.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8",children:(0,l.jsx)(f,{})})]})]}),(0,l.jsx)(N,{})]})]})},U=function(e){var n=e.footerLogo,r=e.spaceBottomClass,s=e.colorClass;return(0,l.jsxs)("div",{className:(0,t.Z)("copyright",r,s),children:[(0,l.jsx)("div",{className:"footer-logo",children:(0,l.jsx)(i.rU,{to:"/",children:(0,l.jsx)("img",{alt:"",src:""+n})})}),(0,l.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," ",(0,l.jsx)("a",{href:"https://hasthemes.com",rel:"noopener noreferrer",target:"_blank",children:"Flone"}),".",(0,l.jsx)("br",{})," All Rights Reserved"]})]})},k=r(9577),S=function(e){var n,r=e.status,s=e.message,c=e.onValidated;return(0,l.jsxs)("div",{className:"subscribe-form",children:[(0,l.jsxs)("div",{className:"mc-form",children:[(0,l.jsx)("div",{children:(0,l.jsx)("input",{id:"mc-form-email",className:"email",ref:function(e){return n=e},type:"email",placeholder:"Enter your email address..."})}),(0,l.jsx)("div",{className:"clear",children:(0,l.jsx)("button",{className:"button",onClick:function(){n&&n.value.indexOf("@")>-1&&c({EMAIL:n.value}),document.getElementById("mc-form-email").value=""},children:"SUBSCRIBE"})})]}),"sending"===r&&(0,l.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===r&&(0,l.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:s}}),"success"===r&&(0,l.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:s}})]})},L=function(e){var n=e.mailchimpUrl;return(0,l.jsx)("div",{children:(0,l.jsx)(k.Z,{url:n,render:function(e){var n=e.subscribe,r=e.status,s=e.message;return(0,l.jsx)(S,{status:r,message:s,onValidated:function(e){return n(e)}})}})})},_=function(e){var n=e.spaceBottomClass,r=e.spaceLeftClass,s=e.sideMenu,c=e.colorClass,i=e.widgetColorClass;return(0,l.jsxs)("div",{className:(0,t.Z)("footer-widget",n,s?"ml-ntv5":r,i),children:[(0,l.jsx)("div",{className:"footer-title",children:(0,l.jsx)("h3",{children:"SUBSCRIBE"})}),(0,l.jsxs)("div",{className:(0,t.Z)("subscribe-style",c),children:[(0,l.jsx)("p",{children:"Get E-mail updates about our latest shop and special offers."}),(0,l.jsx)(L,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"})]})]})},E=function(e){var n=e.backgroundColorClass,r=e.spaceTopClass,s=e.spaceBottomClass,c=e.spaceLeftClass,a=e.spaceRightClass,o=e.containerClass,d=e.extraFooterClass,u=e.sideMenu;return(0,l.jsx)("footer",{className:(0,t.Z)("footer-area",n,r,s,d,c,a),children:(0,l.jsx)("div",{className:"".concat(o||"container"),children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"".concat(u?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,l.jsx)(U,{footerLogo:"/assets/img/logo/logo.png",spaceBottomClass:"mb-30"})}),(0,l.jsx)("div",{className:"".concat(u?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,l.jsxs)("div",{className:"footer-widget mb-30 ml-30",children:[(0,l.jsx)("div",{className:"footer-title",children:(0,l.jsx)("h3",{children:"ABOUT US"})}),(0,l.jsx)("div",{className:"footer-list",children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"/about",children:"About us"})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"#/",children:"Store location"})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"/contact",children:"Contact"})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"#/",children:"Orders tracking"})})]})})]})}),(0,l.jsx)("div",{className:"".concat(u?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,l.jsxs)("div",{className:"".concat(u?"footer-widget mb-30 ml-95":"footer-widget mb-30 ml-50"),children:[(0,l.jsx)("div",{className:"footer-title",children:(0,l.jsx)("h3",{children:"USEFUL LINKS"})}),(0,l.jsx)("div",{className:"footer-list",children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"#/",children:"Returns"})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"#/",children:"Support Policy"})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"#/",children:"Size guide"})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"#/",children:"FAQs"})})]})})]})}),(0,l.jsx)("div",{className:"".concat(u?"col-xl-3 col-sm-4":"col-lg-2 col-sm-6"),children:(0,l.jsxs)("div",{className:"".concat(u?"footer-widget mb-30 ml-145":"footer-widget mb-30 ml-75"),children:[(0,l.jsx)("div",{className:"footer-title",children:(0,l.jsx)("h3",{children:"FOLLOW US"})}),(0,l.jsx)("div",{className:"footer-list",children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"//www.facebook.com",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"//www.twitter.com",target:"_blank",rel:"noopener noreferrer",children:"Twitter"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"//www.instagram.com",target:"_blank",rel:"noopener noreferrer",children:"Instagram"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"//www.youtube.com",target:"_blank",rel:"noopener noreferrer",children:"Youtube"})})]})})]})}),(0,l.jsx)("div",{className:"".concat(u?"col-xl-3 col-sm-8":"col-lg-4 col-sm-6"),children:(0,l.jsx)(_,{spaceBottomClass:"mb-30",spaceLeftClass:"ml-70",sideMenu:u})})]})})})},I=function(){var e=(0,s.useState)(!1),n=(0,c.Z)(e,2),r=n[0],t=n[1];return(0,s.useEffect)((function(){var e=function(){var e=window.pageYOffset;t(e>300)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[r]),{stick:r,onClickHandler:function(){window.scrollTo({top:0,behavior:"smooth"})}}},P=function(){var e=I(),n=e.stick,r=e.onClickHandler;return n?(0,l.jsx)("button",{"aria-label":"Scroll to top",type:"button",className:"scroll-top",onClick:r,children:(0,l.jsx)("i",{className:"fa fa-angle-double-up"})}):null},R=function(e){var n=e.children,r=e.headerContainerClass,c=e.headerTop,t=e.headerPaddingClass,i=e.headerPositionClass;return(0,l.jsxs)(s.Fragment,{children:[(0,l.jsx)(C,{layout:r,top:c,headerPaddingClass:t,headerPositionClass:i}),n,(0,l.jsx)(E,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}),(0,l.jsx)(P,{})]})}}}]);
//# sourceMappingURL=504.1a705f48.chunk.js.map