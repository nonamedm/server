import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const HeroSliderNineSingle = ({ data, sliderClass }) => {
  return (
    <div
      className="single-slider-2 slider-height-1 d-flex align-items-center slider-height-res bg-img"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + data.image})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-7">
            <div className="slider-content-2 slider-animated-1">
              <h1
                className="animated"
                dangerouslySetInnerHTML={{ __html: data.subtitle }}
              ></h1>
              <h3 className="animated">{data.title}</h3><br/>
              <div className="slider-btn btn-hover">
                <Link
                  className="animated"
                  to={process.env.PUBLIC_URL + data.url}
                >
                  필요한 서비스를 찾아보세요
                </Link>
              </div><br/>
              <p
                className="animated"
                dangerouslySetInnerHTML={{ __html: data.thirdtitle }}
                style={{fontSize: "20px", color:"white"}}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSliderNineSingle.propTypes = {
  data: PropTypes.shape({})
};

export default HeroSliderNineSingle;
