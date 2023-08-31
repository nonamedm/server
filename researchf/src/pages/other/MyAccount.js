import { Fragment } from "react"; 
import { useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";
import MyProject from "../../components/other/MyProject";
import MyAccountMenu from "../../components/other/MyAccountMenu";

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
                <MyAccountMenu></MyAccountMenu>
              </div>
              <div className="col-12 col-lg-9 col-md-8">
                <MyProject></MyProject>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default MyAccount;
