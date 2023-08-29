import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import ProductGridTwo from "./ProductGridTwo";
import { useTranslation } from "react-i18next";

const TabProductFive = ({
  spaceTopClass,
  spaceBottomClass,
  category,
  productTabClass
}) => {
  const { t } = useTranslation();
  return (
    <div className={clsx("product-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <Tab.Container defaultActiveKey={t("favorite_services")}>
          <Nav
            variant="pills"
            className={clsx("product-tab-list-2 mb-60", productTabClass)}
          >
            <Nav.Item>
              <Nav.Link eventKey={t("recommended_service")}>
                <h4>{t("recommended_service")}</h4>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={t("recently_search_associated_service")}>
                <h4>{t("recently_search_associated_service")}</h4>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={t("favorite_services")}>
                <h4>{t("favorite_services")}</h4>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={t("recommended_category")}>
                <h4>{t("recommended_category")}</h4>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey={t("recommended_service")}>
              <div className="row">
                <ProductGridTwo
                  category={category}
                  type="new"
                  limit={8}
                  spaceBottomClass="mb-25"
                />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey={t("recently_search_associated_service")}>
              <div className="row">
                <ProductGridTwo
                  category={category}
                  type="bestSeller"
                  limit={8}
                  spaceBottomClass="mb-25"
                />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey={t("favorite_services")}>
              <div className="row">
                <ProductGridTwo
                  category={category}
                  type="bestSeller"
                  limit={8}
                  spaceBottomClass="mb-25"
                />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey={t("recommended_category")}>
              <div className="row">
                <ProductGridTwo
                  category={category}
                  type="saleItems"
                  limit={8}
                  spaceBottomClass="mb-25"
                />
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
        <div className="view-more text-center mt-20 toggle-btn6 col-12">
          <Link
            className="loadMore6"
            to={process.env.PUBLIC_URL + "/shop-grid-standard"}
          >
            VIEW MORE PRODUCTS
          </Link>
        </div>
      </div>
    </div>
  );
};

TabProductFive.propTypes = {
  category: PropTypes.string,
  productTabClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default TabProductFive;
