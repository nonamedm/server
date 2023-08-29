import PropTypes from "prop-types";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import { getDiscountPrice } from "../../helpers/product";
import ProductModal from "./ProductModal";
import ShareProductModal from "./ShareProductModal";
import { addToCart } from "../../store/slices/cart-slice";
import { addToWishlist, deleteFromWishlist } from "../../store/slices/wishlist-slice";
import { addToCompare } from "../../store/slices/compare-slice";

const ProductGridSingleTwo = ({
  product,
  currency,
  cartItem,
  wishlistItem,
  compareItem,
  spaceBottomClass,
  colorClass,
  titlePriceClass
}) => {
  const [modalShow, setModalShow] = useState(false);
  const [shareModalShow, setShareModalShow] = useState(false);
  const discountedPrice = getDiscountPrice(product.price, product.discount);
  const finalProductPrice = +(product.price * currency.currencyRate).toFixed(2);
  const finalDiscountedPrice = +(
    discountedPrice * currency.currencyRate
  ).toFixed(2);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <div className={clsx("product-wrap-2", spaceBottomClass, colorClass)}>
        <div className="product-img">
          <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
            <img
              className="default-img"
              src={process.env.PUBLIC_URL + product.image[0]}
              alt=""
            />
            {product.image.length > 1 ? (
              <img
                className="hover-img"
                src={process.env.PUBLIC_URL + product.image[1]}
                alt=""
              />
            ) : (
              ""
            )}
          </Link>
          {product.discount || product.new ? (
            <div className="product-img-badges">
              {product.discount ? (
                <span className="pink">-{product.discount}%</span>
              ) : (
                ""
              )}
              {product.new ? <span className="purple">New</span> : ""}
            </div>
          ) : (
            ""
          )}

          <div className="product-action-2">
            {product.affiliateLink ? (
              <a
                href={product.affiliateLink}
                rel="noopener noreferrer"
                target="_blank"
                title="Buy now"
              >
                {" "}
                <i className="fa fa-shopping-cart"></i>{" "}
              </a>
            ) : product.variation && product.variation.length >= 1 ? (
              <Link
                to={`${process.env.PUBLIC_URL}/product/${product.id}`}
                title="Select options"
              >
                <i className="fa fa-cog"></i>
              </Link>
            ) : product.stock && product.stock > 0 ? (
              <button
                onClick={() => dispatch(addToCart(product))}
                className={
                  cartItem !== undefined && cartItem.quantity > 0
                    ? "active"
                    : ""
                }
                disabled={cartItem !== undefined && cartItem.quantity > 0}
                title={
                  cartItem !== undefined ? "Added to cart" : "Add to cart"
                }
              >
                {" "}
                <i className="fa fa-shopping-cart"></i>{" "}
              </button>
            ) : (
              <button disabled className="active" title="Out of stock">
                <i className="fa fa-shopping-cart"></i>
              </button>
            )}

            <button onClick={() => setShareModalShow(true)} title="Share">
              <i className="fa fa-share"></i>
            </button>

            <button 
              className={wishlistItem !== undefined ? "active" : ""}
              // disabled={wishlistItem !== undefined}
              title={
                wishlistItem !== undefined
                  ? "Added to wishlist"
                  : "Add to wishlist"
              }
              onClick={() => {
                wishlistItem !== undefined ? dispatch(deleteFromWishlist(product.id)) : dispatch(addToWishlist(product))
              }}
            >
              <i className="fa fa-heart"></i>
            </button>

            {/* 상품퀵뷰 주석처리 */}
            {/* <button onClick={() => setModalShow(true)} title="Quick View">
              <i className="fa fa-eye"></i>
            </button> */}

            {/* 상품비교 주석처리 */}
            {/* <button
              className={compareItem !== undefined ? "active" : ""}
              disabled={compareItem !== undefined}
              title={
                compareItem !== undefined
                  ? "Added to compare"
                  : "Add to compare"
              }
              onClick={() => dispatch(addToCompare(product))}
            >
              <i className="fa fa-retweet"></i>
            </button> */}
          </div>
        </div>
        <div className="product-content-2">
          <div
            className={`title-price-wrap-2 ${
              titlePriceClass ? titlePriceClass : ""
            }`}
          >
            <h3>
              <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
                {product.name}
              </Link>
            </h3>
            <div className="price-2">
              {discountedPrice !== null ? (
                <Fragment>
                  <span>
                    {currency.currencySymbol + finalDiscountedPrice}
                  </span>{" "}
                  <span className="old">
                    {currency.currencySymbol + finalProductPrice}
                  </span>
                </Fragment>
              ) : (
                <span>{currency.currencySymbol + finalProductPrice} </span>
              )}
            </div>
          </div>
          {/* 찜하기 주석처리(위로보냄) */}
          {/* <div className="pro-wishlist-2">
            <button
              className={wishlistItem !== undefined ? "active" : ""}
              disabled={wishlistItem !== undefined}
              title={
                wishlistItem !== undefined
                  ? "Added to wishlist"
                  : "Add to wishlist"
              }
              onClick={() => dispatch(addToWishlist(product))}
            >
              <i className="fa fa-heart-o" />
            </button>
          </div> */}
        </div>
      </div>
      {/* product modal */}
      <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
        currency={currency}
        discountedPrice={discountedPrice}
        finalProductPrice={finalProductPrice}
        finalDiscountedPrice={finalDiscountedPrice}
        wishlistItem={wishlistItem}
        compareItem={compareItem}
      />
      {
        shareModalShow == true ?
        <ShareProductModal
          show={shareModalShow}
          onHide={()=>setShareModalShow(false)}
          productUrl={process.env.PUBLIC_URL + "/product/" + product.id}
          productName={product.name}
        />
        : null
      }
    </Fragment>
  );
};

ProductGridSingleTwo.propTypes = {
  cartItem: PropTypes.shape({}),
  compareItem: PropTypes.shape({}),
  wishlistItem: PropTypes.shape({}),
  currency: PropTypes.shape({}),
  product: PropTypes.shape({}),
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  colorClass: PropTypes.string,
  titlePriceClass: PropTypes.string,
};

export default ProductGridSingleTwo;
