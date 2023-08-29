import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const NavMenu = ({ menuWhiteClass, sidebarMenu }) => {
  const { t } = useTranslation();
  const triggerMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.add("active");
  };

  return (
    <div
      className={clsx(sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`)}
    >
      <nav>
        <ul>
          {/* 홈메뉴 숨김<li>
            <Link to={process.env.PUBLIC_URL + "/"}>
              {t("home")}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="mega-menu mega-menu-padding">
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      {t("home_group_one")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/home-fashion-two"}>
                      {t("home_fashion_two")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      {t("home_group_two")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/home-furniture-five"}>
                      {t("home_furniture_five")}
                    </Link>
                  </li>                  
                </ul>
              </li>
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      {t("home_group_three")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/home-grid-banner"}>
                      {t("home_grid_banner")}
                    </Link>
                  </li>                  
                </ul>
              </li>
            </ul>
          </li> */} 
          {/* 샵메뉴 숨김<li>
            <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
              {" "}
              {t("shop")}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="mega-menu">
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      {t("shop_layout")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      {t("shop_grid_standard")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-filter"}>
                      {t("shop_grid_filter")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-two-column"}>
                      {t("shop_grid_two_column")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-no-sidebar"}>
                      {t("shop_grid_no_sidebar")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-full-width"}>
                      {t("shop_grid_full_width")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={process.env.PUBLIC_URL + "/shop-grid-right-sidebar"}
                    >
                      {t("shop_grid_right_sidebar")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-list-standard"}>
                      {t("shop_list_standard")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-list-full-width"}>
                      {t("shop_list_full_width")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-list-two-column"}>
                      {t("shop_list_two_column")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/product/1"}>
                      {t("product_details")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product/1"}>
                      {t("product_tab_bottom")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product-tab-left/1"}>
                      {t("product_tab_left")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product-tab-right/1"}>
                      {t("product_tab_right")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product-sticky/1"}>
                      {t("product_sticky")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product-slider/1"}>
                      {t("product_slider")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={process.env.PUBLIC_URL + "/product-fixed-image/1"}
                    >
                      {t("product_fixed_image")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product/8"}>
                      {t("product_simple")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product/1"}>
                      {t("product_variation")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product/9"}>
                      {t("product_affiliate")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="mega-menu-img">
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/img/banner/banner-12.png"
                        }
                        alt=""
                      />
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li> */}
          {/* 컬렉션메뉴 숨김<li>
            <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
              {t("collection")}
            </Link>
          </li> */}
          <li>
            <Link onClick={() => triggerMobileMenu()}>
              <i class="pe-7s-menu"></i>
            </Link>
          </li>
          <li>
            <Link to={"/shop-grid-standard"}>
              {t("all_category")}
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/contact"}>
              {"이벤트"}
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/contact"}>
              {"의뢰"}
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>
              {t("pages")}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="submenu">
              <li>
                <Link to={process.env.PUBLIC_URL + "/cart"}>
                  {t("cart")}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/checkout"}>
                  {t("checkout")}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/wishlist"}>
                  {t("wishlist")}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/compare"}>
                  {t("compare")}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/my-account"}>
                  {t("my_account")}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/login-register"}>
                  {t("login_register")}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/about"}>
                  {t("about_us")}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/contact"}>
                  {t("contact_us")}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/not-found"}>
                  {t("404_page")}
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
              {t("blog")}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="submenu">
              <li>
                <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                  {t("blog_standard")}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/blog-no-sidebar"}>
                  {t("blog_no_sidebar")}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/blog-right-sidebar"}>
                  {t("blog_right_sidebar")}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  {t("blog_details_standard")}
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/contact"}>
              {t("contact_us")}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
};

export default NavMenu;
