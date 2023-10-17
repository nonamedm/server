import PropTypes from "prop-types";
import clsx from "clsx";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Swiper, { SwiperSlide } from "../../components/swiper";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const ProductDescriptionTab = ({ spaceBottomClass, productFullDesc, productDetail }) => {
  const { products } = useSelector((state) => state.product);
  //console.log(products);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const thumbnailSwiperParams = {
    onSwiper: setThumbsSwiper,
    spaceBetween: 10,
    slidesPerView: 4,
    touchRatio: 0.2,
    freeMode: true,
    loop: true,
    slideToClickedSlide: true,
    navigation: true
  };
  const portfolioRef = useRef(null);
  const descriptionRef = useRef(null);
  const priceInfoRef = useRef(null);
  const reviewRef = useRef(null);
  
  const onMoveToElement = (param) => {
    switch(param) {
      case "Portfolio" :
        portfolioRef.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
        break;
      case "Description" :
        descriptionRef.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
        break;
      case "Price Info" :
        priceInfoRef.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
        break;
      case "Reviews" :
        reviewRef.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
        break;
      default :
        descriptionRef.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
        break;
    }
    
  } 

  return (
    <div className={clsx("description-review-area", spaceBottomClass)}>
      <div className="container">
        <div className="description-review-wrapper">
          <Tab.Container defaultActiveKey="Portfolio">
            <Nav variant="pills" className="description-review-topbar sticky">
              <Nav.Item>
                <Nav.Link eventKey="Portfolio" onClick={()=>{onMoveToElement("Portfolio")}}>Portfolio</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Description" onClick={()=>{onMoveToElement("Description")}}>Description</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Price Info" onClick={()=>{onMoveToElement("Price Info")}}>Price Info</Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link eventKey="Modify">Modify</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Cancel">Cancel·Refund</Nav.Link>
              </Nav.Item> */}
              <Nav.Item>
                <Nav.Link eventKey="Reviews" onClick={()=>{onMoveToElement("Reviews")}}>Reviews</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="description-review-bottom">
              {/* <Tab.Pane eventKey="Portfolio"> */}
                <div id="portfolio"  ref={portfolioRef} className="product-anotherinfo-wrapper">
                  <div className="product-small-image-wrapper mt-15">                    
                  <Swiper options={thumbnailSwiperParams}>
                    {products[0].image.map((single, key) => (
                      <SwiperSlide key={key}>
                        <div className="single-image">
                          <img
                            src={process.env.PUBLIC_URL + single}
                            className="img-fluid"
                            alt=""
                            onClick={()=>{alert("포트폴리오 선택")}}
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  </div>
                </div>
              {/* </Tab.Pane> */}
              {/* <Tab.Pane eventKey="Description"> */}
                <div id="description" className="full-description" ref={descriptionRef} dangerouslySetInnerHTML={{__html:productFullDesc}}></div>
              {/* </Tab.Pane> */}
              {/* <Tab.Pane eventKey="Price Info"> */}
                <div id="priceInfo" className="price-info-table" ref={priceInfoRef}>
                  <div className="price-info-tr">
                    <div className="price-info-th"></div>
                    <div className="price-info-th">
                      <span className="">STANDARD</span>
                      <span className="">{productDetail.variation[0].TYPE_PRICE}원</span>
                    </div>
                    <div className="price-info-th">
                      <span className="">DELUXE</span>
                      <span className="">{productDetail.variation[1].TYPE_PRICE}원</span>
                    </div>
                    <div className="price-info-th">
                      <span className="">PREMIUM</span>
                      <span className="">{productDetail.variation[2].TYPE_PRICE}원</span>
                    </div>
                  </div>
                  <div className="price-info-tbody">
                    <div className="price-info-tr">
                      <div className="price-info-td">패키지 설명</div>
                      <div className="price-info-td">
                        <div className="price-info-detail">
                          <div className="">{productDetail.variation[0].TYPE_NAME}</div>
                          <div className="" dangerouslySetInnerHTML={{__html:productDetail.variation[0].TYPE_EXPLN.replaceAll("\n","<br/>")}}></div>
                        </div>
                      </div>
                      <div className="price-info-td">
                        <div className="price-info-detail">
                          <div className="">{productDetail.variation[1].TYPE_NAME}</div>
                          <div className="" dangerouslySetInnerHTML={{__html:productDetail.variation[1].TYPE_EXPLN.replaceAll("\n","<br/>")}}></div>
                        </div>
                      </div>
                      <div className="price-info-td">
                        <div className="price-info-detail">
                          <div className="">{productDetail.variation[2].TYPE_NAME}</div>
                          <div className="" dangerouslySetInnerHTML={{__html:productDetail.variation[2].TYPE_EXPLN.replaceAll("\n","<br/>")}}></div>
                        </div>
                      </div>
                    </div>
                    <div className="price-info-tr">
                      <div className="price-info-td">작업기간</div>
                      <div className="price-info-td">
                        {productDetail.variation[0].TYPE_LT}                    
                      </div>
                      <div className="price-info-td">
                        {productDetail.variation[1].TYPE_LT}
                      </div>
                      <div className="price-info-td">
                        {productDetail.variation[2].TYPE_LT}
                      </div>
                    </div>
                    <div className="price-info-tr">
                      <div className="price-info-td">수정횟수</div>
                      <div className="price-info-td">
                        {productDetail.variation[0].TYPE_MOD_NUM}
                      </div>
                      <div className="price-info-td">
                          {productDetail.variation[1].TYPE_MOD_NUM}
                      </div>
                      <div className="price-info-td">
                        {productDetail.variation[2].TYPE_MOD_NUM}
                      </div>
                    </div>
                  </div>
                </div>
              {/* </Tab.Pane> */}
              {/* <Tab.Pane eventKey="Reviews"> */}
                <div id="reviews" className="row" ref={reviewRef}>
                  <div className="col-lg-7">
                    <div className="review-wrapper">
                      <div className="single-review">
                        <div className="review-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/testimonial/1.jpg"
                            }
                            alt=""
                          />
                        </div>
                        <div className="review-content">
                          <div className="review-top-wrap">
                            <div className="review-left">
                              <div className="review-name">
                                <h4>White Lewis</h4>
                              </div>
                              <div className="review-rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                              </div>
                            </div>
                            <div className="review-left">
                              <button>Reply</button>
                            </div>
                          </div>
                          <div className="review-bottom">
                            <p>
                              Vestibulum ante ipsum primis aucibus orci
                              luctustrices posuere cubilia Curae Suspendisse
                              viverra ed viverra. Mauris ullarper euismod
                              vehicula. Phasellus quam nisi, congue id nulla.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="single-review child-review">
                        <div className="review-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/testimonial/2.jpg"
                            }
                            alt=""
                          />
                        </div>
                        <div className="review-content">
                          <div className="review-top-wrap">
                            <div className="review-left">
                              <div className="review-name">
                                <h4>White Lewis</h4>
                              </div>
                              <div className="review-rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                              </div>
                            </div>
                            <div className="review-left">
                              <button>Reply</button>
                            </div>
                          </div>
                          <div className="review-bottom">
                            <p>
                              Vestibulum ante ipsum primis aucibus orci
                              luctustrices posuere cubilia Curae Suspendisse
                              viverra ed viverra. Mauris ullarper euismod
                              vehicula. Phasellus quam nisi, congue id nulla.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-lg-5">
                    <div className="ratting-form-wrapper pl-50">
                      <h3>Add a Review</h3>
                      <div className="ratting-form">
                        <form action="#">
                          <div className="star-box">
                            <span>Your rating:</span>
                            <div className="ratting-star">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="rating-form-style mb-10">
                                <input placeholder="Name" type="text" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="rating-form-style mb-10">
                                <input placeholder="Email" type="email" />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="rating-form-style form-submit">
                                <textarea
                                  name="Your Review"
                                  placeholder="Message"
                                  defaultValue={""}
                                />
                                <input type="submit" defaultValue="Submit" />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div> */}
                </div>
              {/* </Tab.Pane> */}
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
};

ProductDescriptionTab.propTypes = {
  productFullDesc: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default ProductDescriptionTab;
