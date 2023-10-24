import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

const PortfolioDetail = ({ portfolioDetail, portfolioIdx, onHide }) => {
  //console.log("전달받음",portfolioDetail,": ",portfolioIdx);

  SwiperCore.use([Navigation, Pagination]);

  let [onModalBack, setOnModalBack] = useState(true);
  let [portfolioIdxChg, setPortfolioIdxChg] = useState(portfolioIdx);
  return (
    <>
      <div className="fade modal-backdrop show" onClick={()=>{onHide()}}></div>
      <div className="portfolio-detail">
        <div className="portfolio-heading">
          <div className="portfolio-heading-name">{portfolioDetail[portfolioIdxChg].NAME}</div>
          <div className="portfolio-chat">
            <button type="button" className="portfolio-chat-btn" onClick={()=>{

            }}>문의하기</button>
          </div>
          <div className="portfolio-close">
            <button type="button" className="btn-close" onClick={()=>{onHide()}}/>
          </div>
        </div>
        <div className="portfolio-body">
          <div className="portfolio-left">
            <div className="portfolio-left-data">포트폴리오명 : {portfolioDetail[portfolioIdxChg].NAME}</div>
            <div className="portfolio-left-data">클라이언트명 : {portfolioDetail[portfolioIdxChg].CLIENT}</div>
            <div className="portfolio-left-data">작업기간 : {portfolioDetail[portfolioIdxChg].LT}</div>
          </div>
          <div className="portfolio-right">
            {
              portfolioDetail[portfolioIdxChg].image.map((a,i)=>(
                <img src={portfolioDetail[portfolioIdxChg].image[i].path} className="portfolio-detail-img" key={i}/>

              ))
            }
          </div>
        </div>
        <div className="portfolio-hr"></div>
        <div className="portfolio-footer">
          <Swiper 
              spaceBetween={50}
              slidesPerView={3}
              onSlideChange={()=>{}}
              onSwiper={(swiper)=>null}
              navigation
              //pagination={{ clickable: true }}
              breakpoints={{
                // when window width is >= 320px
                320: {
                  slidesPerView: 2,
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
                  slidesPerView: 4,
                },
              }}
            >
              {portfolioDetail.map((single, key) => (
                <SwiperSlide key={key} style={{textAlign:"center"}}>
                  {portfolioDetail[key].image.map((a,i)=>(
                    portfolioDetail[key].image[i].type==0?
                    <div className="single-image single-image-port" key={i} style={{marginBottom: "15px"}}>
                      <img
                        src={process.env.PUBLIC_URL + portfolioDetail[key].image[i].path}
                        className="img-fluid"
                        alt=""
                        onClick={()=>{
                          setPortfolioIdxChg(key);
                        }}
                      />
                    </div>
                    : null
                    ))}
                  <span className="portfolio-footer-name">{portfolioDetail[key].NAME}</span>
                </SwiperSlide>
              ))}
              
            </Swiper> 
        </div>
      </div>
    </>
  );
};

export default PortfolioDetail;
