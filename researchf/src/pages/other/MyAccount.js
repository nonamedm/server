import { Fragment } from "react"; 
import { useLocation } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";

const MyAccount = () => {
  let { pathname } = useLocation();

  return (
    <Fragment>
      <SEO
        titleTemplate="My Account"
        description="My Account page of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Home", path: process.env.PUBLIC_URL + "/" },
            {label: "My Account", path: process.env.PUBLIC_URL + pathname }
          ]} 
        />
        {/* 마이페이지부터 수정한다
          일반인, 전문가 바인딩 하고
          리스트 출력하는 레이아웃 잡은 뒤
          장바구니, 찜 같은거 연결하고
          전문가는 우선 상품등록만 먼저 완료하기
        */}
        <div className="contact-area pt-100 pb-100">
          <div className="container">
            <div className="custom-row-2">
              <div className="col-12 col-lg-3 col-md-4">
                <div className="contact-info-wrap1">
                  <div className="mypage-header"><h2>My Page</h2>
                  </div>
                  <div>
                    <div className="single-my-account mb-20">
                      <div className="single-my-account mb-20">
                        <h2 className="panel-heading">                          
                          <a href="">My Projects </a>                         
                        </h2>
                        <p className="panel-second">Overall (0)</p>
                        <p className="panel-second">Waiting for approval (0)</p>
                        <p className="panel-second">Requesting (0)</p>
                        <p className="panel-second">Closing (0)</p>
                        <p className="panel-second">Not approved (0)</p>
                      </div>
                    </div>


                    <div className="single-my-account mb-20">
                      <div className="single-my-account mb-20">
                        <h2 className="panel-heading">
                          <a href="">Purchase</a>
                        </h2>
                      </div>
                    </div>

                    <div className="single-my-account mb-20">
                      <div className="single-my-account mb-20">
                        <h2 className="panel-heading">
                          <a href="">Cash</a>                            
                        </h2>
                      </div>
                    </div>

                    <div className="single-my-account mb-20">
                      <div className="single-my-account mb-20">
                        <h2 className="panel-heading">
                          <a href="">Recharge Cash</a>                            
                        </h2>
                      </div>
                    </div>

                    <div className="single-my-account mb-20">
                      <div className="single-my-account mb-20">
                        <h2 className="panel-heading">
                          <a href="">Coupon</a>                            
                        </h2>
                      </div>
                    </div>
                    <div className="single-my-account mb-20">
                      <div className="single-my-account mb-20">
                        <h2 className="panel-heading">
                          <a href="">Payment details</a>                            
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-9 col-md-8">
                <div className="contact-form1">
                  <div className="contact-title mb-30">
                    <h2>Get In Touch</h2>
                  </div>
                  <form className="contact-form-style">
                    <div className="row">
                      <div className="col-lg-6">
                        <input name="name" placeholder="Name*" type="text" />
                      </div>
                      <div className="col-lg-6">
                        <input name="email" placeholder="Email*" type="email" />
                      </div>
                      <div className="col-lg-12">
                        <input
                          name="subject"
                          placeholder="Subject*"
                          type="text"
                        />
                      </div>
                      <div className="col-lg-12">
                        <textarea
                          name="message"
                          placeholder="Your Message*"
                          defaultValue={""}
                        />
                        <button className="submit" type="submit">
                          SEND
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="form-message" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default MyAccount;
