import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Logo from "../../components/header/Logo";
import NavMenu from "../../components/header/NavMenu";
import IconGroup from "../../components/header/IconGroup";
import MobileMenu from "../../components/header/MobileMenu";
import HeaderTop from "../../components/header/HeaderTop";
import { useLocation } from "react-router-dom";

const HeaderOne = ({
  layout,
  top,
  borderStyle,
  headerPaddingClass,
  headerPositionClass,
  headerBgClass
}) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const header = document.querySelector(".sticky-bar");
    setHeaderTop(header.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  const location = useLocation();
  

  return (
    <header className={clsx("header-area clearfix", headerBgClass, headerPositionClass)}>
      <div
        className={clsx(
          "header-top-area", 
          // headerPaddingClass, top === "visible" ? "d-none d-lg-block" : "d-none", 
          headerPaddingClass, top === "visible" ? "d-none" : "d-none", 
          borderStyle === "fluid-border" && "border-none" 
        )}
      >
        <div className={layout === "container-fluid" ? layout : "container"}>
          {/* header top */}
          <HeaderTop borderStyle={borderStyle} />
        </div>
      </div>
      {
        location.pathname.indexOf('product') > 0 ?
        <div
          className={clsx(
            headerPaddingClass, 
            "sticky-bar header-res-padding clearfix"
          )}
        >
          <div className="col-xl-2 col-lg-2 col-md-6 col-4" style={{marginLeft: "92px"}}>
            {/* header logo */}
            <Logo imageUrl="/assets/img/logo/logo.png" logoClass="logo" />
          </div>
          <div className={layout === "container-fluid" ? layout : "container"}>
            
            <div className="row">
              <div className="col-xl-10 col-lg-10 d-none d-lg-block">
                {/* Nav menu */}
                <NavMenu />
              </div>
              <div className="col-xl-2 col-lg-2 col-md-6 col-8">
                {/* Icon group */}
                <IconGroup />
              </div>
            </div>
          </div>
          {/* mobile menu */}
          <MobileMenu />
        </div>
        :
        <div
          className={clsx(
            headerPaddingClass, 
            "sticky-bar header-res-padding clearfix", 
            scroll > headerTop && "stick"
          )}
        >
          <div className="col-xl-2 col-lg-2 col-md-6 col-4" style={{marginLeft: "92px"}}>
            {/* header logo */}
            <Logo imageUrl="/assets/img/logo/logo.png" logoClass="logo" />
          </div>
          <div className={layout === "container-fluid" ? layout : "container"}>
            
            <div className="row">
              <div className="col-xl-10 col-lg-10 d-none d-lg-block">
                {/* Nav menu */}
                <NavMenu />
              </div>
              <div className="col-xl-2 col-lg-2 col-md-6 col-8">
                {/* Icon group */}
                <IconGroup />
              </div>
            </div>
          </div>
          {/* mobile menu */}
          <MobileMenu />
        </div>
      }   
        
        
    </header>
  );
};

HeaderOne.propTypes = {
  borderStyle: PropTypes.string,
  headerPaddingClass: PropTypes.string,
  headerPositionClass: PropTypes.string,
  layout: PropTypes.string,
  top: PropTypes.string
};

export default HeaderOne;
