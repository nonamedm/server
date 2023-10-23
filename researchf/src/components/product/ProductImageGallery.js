import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import AnotherLightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import {Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

const ProductImageGallery = ({ product }) => {
  SwiperCore.use([Navigation, Pagination]);
  const [thumbIndex, setThumbsIndex] = useState(0);
  const [index, setIndex] = useState(-1);
  const slides = product?.image.map((img, i) => ({
      src: process.env.PUBLIC_URL + img,
      key: i,
  }));


  return (
    <Fragment>
      <div className="product-small-image-wrapper mt-15">
        {product?.image?.length ? (
          <div>
            {product.image.map((single, key) => (
               thumbIndex==key?
                <div className="single-image" key={key}>
                  <img
                    src={process.env.PUBLIC_URL + single}
                    className="img-fluid"                    
                    onClick={() => setIndex(key)}
                    alt=""
                  />
                </div>
                : null                
            ))}
          </div>
        ) : null}
      </div>
      <div className="product-large-image-wrapper mt-5">
        {product?.image?.length ? (
          <Swiper spaceBetween={50}
            slidesPerView={3}
            onSlideChange={()=>{}}
            onSwiper={(swiper)=>null}
            navigation
            //pagination={{ clickable: true }}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 3,
                spaceBetween: 20
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 3,
                spaceBetween: 30
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 3,
                spaceBetween: 40
              },
              768: {
                slidesPerView: 3,
              },
            }}
          >
            {product.image.map((single, key) => (
              <SwiperSlide key={key}>
                {/* <button className="lightgallery-button" onClick={() => setIndex(key)}>
                  <i className="pe-7s-expand1"></i>
                </button> */}
                <div className="single-image">
                  <img
                    src={process.env.PUBLIC_URL + single}
                    className="img-fluid"
                    alt=""
                    onClick={() => setThumbsIndex(key)}
                  />
                </div>
              </SwiperSlide>
            ))}
            <AnotherLightbox
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                slides={slides}
                plugins={[Thumbnails, Zoom, Fullscreen]}
            />
          </Swiper>
        ) : null}

      </div>
      
    </Fragment>
  );
};

ProductImageGallery.propTypes = {
  product: PropTypes.shape({})
};

export default ProductImageGallery;
