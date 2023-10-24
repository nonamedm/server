"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[112],{6664:function(e,s,i){var a=i(1413),t=i(9439),r=i(2791),n=i(1496),c=i(2830),l=i(9434),d=i(2558),o=i(7842),m=i(1770),u=i(4275),h=i(8725),x=i(1065),p=i(184);s.Z=function(e){var s=e.product,i=e.currency,j=e.discountedPrice,v=e.finalProductPrice,f=e.finalDiscountedPrice,g=e.show,N=e.onHide,b=e.wishlistItem,y=e.compareItem,w=(0,r.useState)(null),Z=(0,t.Z)(w,2),C=Z[0],k=Z[1],S=(0,l.I0)(),P=(0,l.v9)((function(e){return e.cart})).cartItems,_=(0,r.useState)(),I=(0,t.Z)(_,2),B=I[0],F=(I[1],(0,r.useState)()),A=(0,t.Z)(F,2),R=A[0],q=(A[1],(0,r.useState)()),z=(0,t.Z)(q,2),K=z[0],L=(z[1],(0,r.useState)(1)),H=(0,t.Z)(L,2),T=H[0],V=H[1],U=(0,m.bh)(P,s,B,R),O={spaceBetween:10,loop:!0,effect:"fade",fadeEffect:{crossFade:!0},thumbs:{swiper:C},modules:[n.xW,n.o3]},W={onSwiper:k,spaceBetween:10,slidesPerView:4,touchRatio:.2,freeMode:!0,loop:!0,slideToClickedSlide:!0,navigation:!0};return(0,p.jsxs)(c.Z,{show:g,onHide:function(){k(null),N()},className:"product-quickview-modal-wrapper",children:[(0,p.jsx)(c.Z.Header,{closeButton:!0}),(0,p.jsx)("div",{className:"modal-body",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsxs)("div",{className:"col-md-5 col-sm-12 col-xs-12",children:[(0,p.jsx)("div",{className:"product-large-image-wrapper",children:(0,p.jsx)(o.Z,{options:O,children:s.image&&s.image.map((function(e,s){return(0,p.jsx)(o.o,{children:(0,p.jsx)("div",{className:"single-image",children:(0,p.jsx)("img",{src:""+e,className:"img-fluid",alt:"Product"})})},s)}))})}),(0,p.jsx)("div",{className:"product-small-image-wrapper mt-15",children:(0,p.jsx)(o.Z,{options:W,children:s.image&&s.image.map((function(e,s){return(0,p.jsx)(o.o,{children:(0,p.jsx)("div",{className:"single-image",children:(0,p.jsx)("img",{src:""+e,className:"img-fluid",alt:""})})},s)}))})})]}),(0,p.jsx)("div",{className:"col-md-7 col-sm-12 col-xs-12",children:(0,p.jsxs)("div",{className:"product-details-content quickview-content",children:[(0,p.jsx)("h2",{children:s.name}),(0,p.jsx)("div",{className:"product-details-price",children:null!==j?(0,p.jsxs)(r.Fragment,{children:[(0,p.jsx)("span",{children:i.currencySymbol+f})," ",(0,p.jsx)("span",{className:"old",children:i.currencySymbol+v})]}):(0,p.jsxs)("span",{children:[i.currencySymbol+v," "]})}),s.rating&&s.rating>0?(0,p.jsx)("div",{className:"pro-details-rating-wrap",children:(0,p.jsx)("div",{className:"pro-details-rating",children:(0,p.jsx)(d.Z,{ratingValue:s.rating})})}):"",(0,p.jsx)("div",{className:"pro-details-list",children:(0,p.jsx)("p",{children:s.shortDescription})}),s.variation?(0,p.jsxs)("div",{className:"pro-details-size-color",children:[(0,p.jsxs)("div",{className:"pro-details-color-wrap",children:[(0,p.jsx)("span",{children:"Color"}),(0,p.jsx)("div",{className:"pro-details-color-content",children:s.variation.map((function(e,s){return(0,p.jsxs)("label",{className:"pro-details-color-content--single ".concat(e.color),children:[(0,p.jsx)("input",{type:"radio",value:e.color,name:"product-color",checked:e.color===B?"checked":"",onChange:function(){V(1)}}),(0,p.jsx)("span",{className:"checkmark"})]},s)}))})]}),(0,p.jsxs)("div",{className:"pro-details-size",children:[(0,p.jsx)("span",{children:"Size"}),(0,p.jsx)("div",{className:"pro-details-size-content",children:s.variation&&s.variation.map((function(e){return""}))})]})]}):"",s.affiliateLink?(0,p.jsx)("div",{className:"pro-details-quality",children:(0,p.jsx)("div",{className:"pro-details-cart btn-hover",children:(0,p.jsx)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:"Buy Now"})})}):(0,p.jsxs)("div",{className:"pro-details-quality",children:[(0,p.jsxs)("div",{className:"cart-plus-minus",children:[(0,p.jsx)("button",{onClick:function(){return V(T>1?T-1:1)},className:"dec qtybutton",children:"-"}),(0,p.jsx)("input",{className:"cart-plus-minus-box",type:"text",value:T,readOnly:!0}),(0,p.jsx)("button",{onClick:function(){return V(T<K-U?T+1:T)},className:"inc qtybutton",children:"+"})]}),(0,p.jsx)("div",{className:"pro-details-cart btn-hover",children:K&&K>0?(0,p.jsxs)("button",{onClick:function(){return S((0,u.Xq)((0,a.Z)((0,a.Z)({},s),{},{quantity:T,selectedProductColor:B||(s.selectedProductColor?s.selectedProductColor:null),selectedProductSize:R||(s.selectedProductSize?s.selectedProductSize:null)})))},disabled:U>=K,children:[" ","Add To Cart"," "]}):(0,p.jsx)("button",{disabled:!0,children:"Out of Stock"})}),(0,p.jsx)("div",{className:"pro-details-wishlist",children:(0,p.jsx)("button",{className:void 0!==b?"active":"",disabled:void 0!==b,title:void 0!==b?"Added to wishlist":"Add to wishlist",onClick:function(){return S((0,h.Mp)(s))},children:(0,p.jsx)("i",{className:"pe-7s-like"})})}),(0,p.jsx)("div",{className:"pro-details-compare",children:(0,p.jsx)("button",{className:void 0!==y?"active":"",disabled:void 0!==y,title:void 0!==y?"Added to compare":"Add to compare",onClick:function(){return S((0,x.a$)(s))},children:(0,p.jsx)("i",{className:"pe-7s-shuffle"})})})]})]})})]})})]})}},2558:function(e,s,i){var a=i(2791),t=i(184);s.Z=function(e){for(var s=e.ratingValue,i=[],r=0;r<5;r++)i.push((0,t.jsx)("i",{className:"fa fa-star-o"},r));if(s&&s>0)for(var n=0;n<=s-1;n++)i[n]=(0,t.jsx)("i",{className:"fa fa-star-o yellow"},n);return(0,t.jsx)(a.Fragment,{children:i})}},996:function(e,s,i){var a=i(8182),t=i(184);s.Z=function(e){var s=e.titleText,i=e.subtitleText,r=e.subtitleColorClass,n=e.positionClass,c=e.spaceClass,l=e.borderClass;return(0,t.jsxs)("div",{className:(0,a.Z)("section-title",n,c,l),children:[(0,t.jsx)("h2",{children:s}),(0,t.jsx)("p",{className:(0,a.Z)(r),children:i})]})}},7842:function(e,s,i){i.d(s,{o:function(){return l.o5}});var a=i(3433),t=i(1413),r=i(2791),n=i(8182),c=i(1496),l=i(8563),d=i(184),o=(0,r.forwardRef)((function(e,s){var i=e.options,r=e.prevIcon,o=e.nextIcon,m=e.children,u=e.className,h=e.navClass,x=void 0!==(null===i||void 0===i?void 0:i.modules)?i.modules:[],p="prev-".concat(h||"swiper-nav"),j="next-".concat(h||"swiper-nav"),v=(0,t.Z)((0,t.Z)({slidesPerView:1,spaceBetween:0,loop:!1,autoplay:!(null===i||void 0===i||!i.autoplay)&&{delay:2500,disableOnInteraction:!1},watchSlidesProgress:!0,autoHeight:!0,breakpoints:{}},i),{},{modules:[c.W_,c.tl,c.s5,c.pt].concat((0,a.Z)(x)),navigation:!(null===i||void 0===i||!i.navigation)&&{prevEl:".".concat(p),nextEl:".".concat(j)},pagination:!(null===i||void 0===i||!i.pagination)&&{clickable:!0}});return(0,d.jsxs)("div",{className:(0,n.Z)("swiper-wrap",u),ref:s,children:[(0,d.jsx)(l.tq,(0,t.Z)((0,t.Z)({},v),{},{children:m})),(null===v||void 0===v?void 0:v.navigation)&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("button",{type:"button",className:"swiper-button-prev ht-swiper-button-nav ".concat(p),children:(0,d.jsx)("i",{className:(0,n.Z)(r,"icon")})}),(0,d.jsx)("button",{type:"button",className:"swiper-button-next ht-swiper-button-nav ".concat(j),children:(0,d.jsx)("i",{className:(0,n.Z)(o,"icon")})})]})]})}));o.defaultProps={prevIcon:"pe-7s-angle-left",nextIcon:"pe-7s-angle-right",navStyle:1,dotStyle:1},s.Z=o},4112:function(e,s,i){i.r(s),i.d(s,{default:function(){return K}});var a=i(2791),t=i(3695),r=i(5378),n=(i(6543),i(184)),c=(i(996),i(8182)),l=i(1496),d=i(7842),o=JSON.parse('[{"id":1,"title":"Let\'s start with Research Factory","subtitle":"Find the right freelance<br>service, right away","thirdtitle":"#aaa #bbb #ccc","image":"/assets/img/slider/slider-2-2.jpg","url":"/shop-grid-standard"},{"id":2,"title":"Let\'s start with Research Factory","subtitle":"Find the right freelance<br>service, right away","thirdtitle":"#aaa #bbb #ccc","image":"/assets/img/slider/slider-1.jpg","url":"/shop-grid-standard"}]'),m=i(1087),u=function(e){var s=e.data;e.sliderClass;return(0,n.jsx)("div",{className:"single-slider-2 slider-height-1 d-flex align-items-center slider-height-res bg-img",style:{backgroundImage:"url(".concat(""+s.image,")")},children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-xl-6 col-lg-6 col-md-7",children:(0,n.jsxs)("div",{className:"slider-content-2 slider-animated-1",children:[(0,n.jsx)("h1",{className:"animated",dangerouslySetInnerHTML:{__html:s.subtitle}}),(0,n.jsx)("h3",{className:"animated",children:s.title}),(0,n.jsx)("br",{}),(0,n.jsx)("div",{className:"slider-btn btn-hover",children:(0,n.jsx)(m.rU,{className:"animated",to:""+s.url,children:"\ud544\uc694\ud55c \uc11c\ube44\uc2a4\ub97c \ucc3e\uc544\ubcf4\uc138\uc694"})}),(0,n.jsx)("br",{}),(0,n.jsx)("p",{className:"animated",dangerouslySetInnerHTML:{__html:s.thirdtitle},style:{fontSize:"20px",color:"white"}})]})}),(0,n.jsx)("div",{className:"col-xl-6 col-lg-6 col-md-7",children:(0,n.jsx)("div",{className:"slider-content-2 slider-animated-1",children:(0,n.jsx)("img",{className:"animated",src:"/assets/img/slider/slider-2-2-illust.png"})})})]})})})},h={effect:"fade",fadeEffect:{crossFade:!0},modules:[l.xW],loop:!0,speed:1e3,navigation:!0,autoHeight:!1},x=function(e){var s=e.spaceLeftClass,i=e.spaceRightClass;return(0,n.jsx)("div",{className:(0,c.Z)("slider-area",s,i),children:(0,n.jsx)("div",{className:"slider-active nav-style-1",children:o&&(0,n.jsx)(d.Z,{options:h,children:o.map((function(e,s){return(0,n.jsx)(d.o,{children:(0,n.jsx)(u,{data:e})},s)}))})})})},p=i(7369),j=i(4095),v=i(9434),f=i(1770),g=i(9439),N=i(6664),b=i(9846),y=i(3127),w=i(3149),Z=i(5956),C=i(5904),k=i(6720),S=i(6492),P=i(5408);var _=function(e){e.show;var s=e.onHide,i=e.productUrl,a=(e.productName,"http://researchf.cafe24app.com/"+i);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"fade modal-backdrop show",onClick:function(){s()}}),(0,n.jsxs)("div",{className:"share-content",style:{width:"300px",height:"200px",backgroundColor:"white",padding:"20px",position:"relative",top:"-60%",left:"-5%",zIndex:1050},children:[(0,n.jsx)("div",{className:"modal-header",style:{flexDirection:"row-reverse"},children:(0,n.jsx)("button",{type:"button",className:"btn-close",onClick:function(){s()}})}),(0,n.jsx)("h4",{style:{fontWeight:600,textAlign:"center"},children:"\uacf5\uc720\ud558\uae30"}),(0,n.jsx)(b.Z,{style:{marginRight:"20px"},url:a,children:(0,n.jsx)(y.Z,{size:48,round:!0,borderRadius:24})}),(0,n.jsx)(w.Z,{style:{marginRight:"20px"},url:a,children:(0,n.jsx)(Z.Z,{size:48,round:!0,borderRadius:24})}),(0,n.jsx)(C.Z,{style:{marginRight:"20px"},url:a,children:(0,n.jsx)(k.Z,{size:48,round:!0,borderRadius:24})}),(0,n.jsx)(S.Z,{url:a,children:(0,n.jsx)(P.Z,{size:48,round:!0,borderRadius:24})})]})]})},I=i(4275),B=i(8725),F=(i(1065),i(8563)),A=function(e){var s=e.product,i=e.currency,t=e.cartItem,r=e.wishlistItem,d=e.compareItem,o=e.spaceBottomClass,u=e.colorClass,h=e.titlePriceClass,x=(0,a.useState)(!1),p=(0,g.Z)(x,2),j=p[0],b=p[1],y=(0,a.useState)(!1),w=(0,g.Z)(y,2),Z=w[0],C=w[1],k=(0,f.lk)(s.price,s.discount),S=+(s.price*i.currencyRate).toFixed(2),P=+(k*i.currencyRate).toFixed(2),A=(0,v.I0)();return l.ZP.use([l.W_,l.tl]),(0,n.jsxs)(a.Fragment,{children:[(0,n.jsxs)("div",{className:(0,c.Z)("product-wrap-2",o,u),children:[(0,n.jsxs)("div",{className:"product-img",children:[(0,n.jsx)(F.tq,{spaceBetween:50,slidesPerView:1,onSlideChange:function(){},onSwiper:function(e){return null},navigation:!0,breakpoints:{320:{slidesPerView:1,spaceBetween:20},480:{slidesPerView:1,spaceBetween:30},640:{slidesPerView:1,spaceBetween:40},768:{slidesPerView:1}},children:s.image.map((function(e,i){return(0,n.jsx)(F.o5,{children:(0,n.jsx)(m.rU,{to:"/product/"+s.id,children:(0,n.jsx)("div",{className:"single-image single-image",style:{marginBottom:"15px"},children:(0,n.jsx)("img",{src:""+s.image[i],className:"img-fluid",alt:"",onClick:function(){}})})})},i)}))}),s.discount||s.new?(0,n.jsx)("div",{className:"product-img-badges"}):"",(0,n.jsxs)("div",{className:"product-action-2",children:[s.affiliateLink?(0,n.jsxs)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",title:"Buy now",children:[" ",(0,n.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):s.variation&&s.variation.length>=1?null:s.stock&&s.stock>0?(0,n.jsxs)("button",{onClick:function(){return A((0,I.Xq)(s))},className:void 0!==t&&t.quantity>0?"active":"",disabled:void 0!==t&&t.quantity>0,title:void 0!==t?"Added to cart":"Add to cart",children:[" ",(0,n.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):(0,n.jsx)("button",{disabled:!0,className:"active",title:"Out of stock",children:(0,n.jsx)("i",{className:"fa fa-shopping-cart"})}),(0,n.jsx)("button",{onClick:function(){return C(!0)},title:"Share",children:(0,n.jsx)("i",{className:"fa fa-share"})}),(0,n.jsx)("button",{className:void 0!==r?"active":"",title:void 0!==r?"Added to wishlist":"Add to wishlist",onClick:function(){A(void 0!==r?(0,B.ib)(s.id):(0,B.Mp)(s))},children:(0,n.jsx)("i",{className:"fa fa-heart"})})]})]}),(0,n.jsx)("div",{className:"product-content-2",children:(0,n.jsxs)("div",{className:"title-price-wrap-2 ".concat(h||""),children:[(0,n.jsx)("h3",{children:(0,n.jsx)(m.rU,{to:"/product/"+s.id,children:s.name})}),(0,n.jsx)("div",{className:"price-2",children:null!==k?(0,n.jsxs)(a.Fragment,{children:[(0,n.jsx)("span",{children:i.currencySymbol+P})," ",(0,n.jsx)("span",{className:"old",children:i.currencySymbol+S})]}):(0,n.jsxs)("span",{children:[i.currencySymbol+S," "]})})]})})]}),(0,n.jsx)(N.Z,{show:j,onHide:function(){return b(!1)},product:s,currency:i,discountedPrice:k,finalProductPrice:S,finalDiscountedPrice:P,wishlistItem:r,compareItem:d}),1==Z?(0,n.jsx)(_,{show:Z,onHide:function(){return C(!1)},productUrl:"/product/"+s.id,productName:s.name}):null]})},R=function(e){var s=e.spaceBottomClass,i=e.colorClass,t=e.titlePriceClass,r=e.category,c=e.type,l=e.limit,d=(0,v.v9)((function(e){return e.product})).products,o=(0,v.v9)((function(e){return e.currency})),m=(0,v.v9)((function(e){return e.cart})).cartItems,u=(0,v.v9)((function(e){return e.wishlist})).wishlistItems,h=(0,v.v9)((function(e){return e.compare})).compareItems,x=(0,f.Xp)(d,r,c,l);return(0,n.jsx)(a.Fragment,{children:null===x||void 0===x?void 0:x.map((function(e){return(0,n.jsx)("div",{className:"col-xl-3 col-md-6 col-lg-4 col-sm-6",children:(0,n.jsx)(A,{spaceBottomClass:s,colorClass:i,product:e,currency:o,cartItem:m.find((function(s){return s.id===e.id})),wishlistItem:u.find((function(s){return s.id===e.id})),compareItem:h.find((function(s){return s.id===e.id})),titlePriceClass:t})},e.id)}))})},q=i(9230),z=function(e){var s=e.spaceTopClass,i=e.spaceBottomClass,a=(e.category,e.productTabClass),t=(0,q.$G)().t;return(0,n.jsxs)("div",{className:(0,c.Z)("product-area",s,i),children:[(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)(p.Z.Container,{defaultActiveKey:t("recommended_service"),children:[(0,n.jsx)(j.Z,{variant:"pills",className:(0,c.Z)("product-tab-list-2 mt-60 mb-20",a),children:(0,n.jsx)(j.Z.Item,{children:(0,n.jsx)(j.Z.Link,{eventKey:t("recommended_service"),children:(0,n.jsx)("h4",{children:t("recommended_service")})})})}),(0,n.jsx)(p.Z.Content,{children:(0,n.jsx)(p.Z.Pane,{eventKey:t("recommended_service"),children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)(R,{limit:4,spaceBottomClass:"mb-25"})})})})]})}),(0,n.jsx)("div",{style:{backgroundColor:""},children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)(p.Z.Container,{defaultActiveKey:t("recently_search_associated_service"),children:[(0,n.jsx)(j.Z,{variant:"pills",className:(0,c.Z)("product-tab-list-2 mt-60 mb-20",a),children:(0,n.jsx)(j.Z.Item,{children:(0,n.jsx)(j.Z.Link,{eventKey:t("recently_search_associated_service"),children:(0,n.jsx)("h4",{children:t("recently_search_associated_service")})})})}),(0,n.jsx)(p.Z.Content,{children:(0,n.jsx)(p.Z.Pane,{eventKey:t("recently_search_associated_service"),children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)(R,{limit:4,spaceBottomClass:"mb-25"})})})})]})})}),(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)(p.Z.Container,{defaultActiveKey:t("favorite_services"),children:[(0,n.jsx)(j.Z,{variant:"pills",className:(0,c.Z)("product-tab-list-2 mt-60 mb-20",a),children:(0,n.jsx)(j.Z.Item,{children:(0,n.jsx)(j.Z.Link,{eventKey:t("favorite_services"),children:(0,n.jsx)("h4",{children:t("favorite_services")})})})}),(0,n.jsx)(p.Z.Content,{children:(0,n.jsx)(p.Z.Pane,{eventKey:t("favorite_services"),children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)(R,{limit:4,spaceBottomClass:"mb-25"})})})})]})}),(0,n.jsx)("div",{style:{backgroundColor:""},children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)(p.Z.Container,{defaultActiveKey:t("recommended_category"),children:[(0,n.jsx)(j.Z,{variant:"pills",className:(0,c.Z)("product-tab-list-2 mt-60 mb-20",a),children:(0,n.jsx)(j.Z.Item,{children:(0,n.jsx)(j.Z.Link,{eventKey:t("recommended_category"),children:(0,n.jsx)("h4",{children:t("recommended_category")})})})}),(0,n.jsx)(p.Z.Content,{children:(0,n.jsx)(p.Z.Pane,{eventKey:t("recommended_category"),children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)(R,{limit:4,spaceBottomClass:"mb-25"})})})})]})})})]})},K=function(){return(0,n.jsxs)(a.Fragment,{children:[(0,n.jsx)(t.Z,{titleTemplate:"Research Factory",description:"Kmong clone site"}),(0,n.jsxs)(r.Z,{headerContainerClass:"container-fluid",headerPaddingClass:"header-padding-2",children:[(0,n.jsx)(x,{}),(0,n.jsx)(z,{spaceBottomClass:"",category:"Service A"})]})]})}},6543:function(e,s,i){i.d(s,{Z:function(){return l}});var a=i(8182),t=JSON.parse('[{"id":1,"image":"/assets/img/banner/banner-1.jpg","title":"Watches","subtitle":"Starting at","price":"$99.00","link":"/shop-grid-standard"},{"id":2,"image":"/assets/img/banner/banner-2.jpg","title":"Plo Bag","subtitle":"Starting at","price":"$79.00","link":"/shop-grid-standard"},{"id":3,"image":"/assets/img/banner/banner-3.jpg","title":"Sunglass","subtitle":"Starting at","price":"$29.00","link":"/shop-grid-standard"}]'),r=i(1087),n=i(184),c=function(e){var s=e.data,i=e.spaceBottomClass;return(0,n.jsxs)("div",{className:(0,a.Z)("single-banner",i),children:[(0,n.jsx)(r.rU,{to:""+s.link,children:(0,n.jsx)("img",{src:""+s.image,alt:""})}),(0,n.jsxs)("div",{className:"banner-content",children:[(0,n.jsx)("h3",{children:s.title}),(0,n.jsxs)("h4",{children:[s.subtitle," ",(0,n.jsx)("span",{children:s.price})]}),(0,n.jsx)(r.rU,{to:""+s.link,children:(0,n.jsx)("i",{className:"fa fa-long-arrow-right"})})]})]})},l=function(e){var s=e.spaceTopClass,i=e.spaceBottomClass;return(0,n.jsx)("div",{className:(0,a.Z)("banner-area",s,i),children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:null===t||void 0===t?void 0:t.map((function(e,s){return(0,n.jsx)("div",{className:"col-lg-4 col-md-4",children:(0,n.jsx)(c,{data:e,spaceBottomClass:"mb-30"})},s)}))})})})}}}]);
//# sourceMappingURL=112.3996f557.chunk.js.map