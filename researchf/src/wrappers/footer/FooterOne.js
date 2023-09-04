import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import FooterCopyright from "../../components/footer/FooterCopyright";
import FooterNewsletter from "../../components/footer/FooterNewsletter";


const FooterOne = ({
  spaceTopClass,
  spaceBottomClass,
  spaceLeftClass,
  spaceRightClass,
  containerClass,
  extraFooterClass,
  sideMenu
}) => {
  return (
    <footer className={clsx("footer-area",  spaceTopClass, spaceBottomClass, extraFooterClass, spaceLeftClass, spaceRightClass )}>
      <div className={`${containerClass ? containerClass : "container"}`}>
        <div className="row" style={{flexDirection:"column"}}>
          <div
            className={`${
              sideMenu ? "col-xl-10 col-sm-6" : "col-lg-10 col-sm-6"
            }`}
          >
            {/* footer copyright */}
            <FooterCopyright
              spaceBottomClass="mb-30"
            />
          </div>
          <div
            className={`${
              sideMenu ? "col-lg-10 col-sm-6" : "col-lg-10 col-sm-6"
            }`}
          >
            <div className="footer-widget mb-30 ml-30">
              <div className="footer-title">
                <h3>Footer 내용 및 링크 작성란</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/about"}>링크</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

FooterOne.propTypes = {
  backgroundColorClass: PropTypes.string,
  containerClass: PropTypes.string,
  extraFooterClass: PropTypes.string,
  sideMenu: PropTypes.bool,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string
};

export default FooterOne;
