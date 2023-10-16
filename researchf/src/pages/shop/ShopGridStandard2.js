import { Fragment, useState, useEffect } from "react";
import Paginator from "react-hooks-paginator"; 
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getSortedRequests } from "../../helpers/request";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import ShopSidebar from "../../wrappers/product/ShopSidebar";
import ShopTopbar from "../../wrappers/product/ShopTopbar";
import ShopProducts from "../../wrappers/product/ShopProducts";

const ShopGridTwoColumn = () => {
  const [layout, setLayout] = useState("grid four-column");
  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [sortedRequests, setSortedProducts] = useState([]);
  const { requests } = useSelector((state) => state.request);
  
  const pageLimit = 16;
  let { pathname } = useLocation();

  const getLayout = layout => {
    setLayout(layout);
  };

  const getSortParams = (sortType, sortValue) => {
    setSortType(sortType);
    setSortValue(sortValue);
  };

  const getFilterSortParams = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  useEffect(() => {
    let sortedRequests = getSortedRequests(requests, sortType, sortValue);
    const filterSortedProducts = getSortedRequests(
      sortedRequests,
      filterSortType,
      filterSortValue
    );
    sortedRequests = filterSortedProducts;
    setSortedProducts(sortedRequests);
    
    setCurrentData(sortedRequests.slice(offset, offset + pageLimit));
  }, [offset, requests, sortType, sortValue, filterSortType, filterSortValue]);

  return (
    <Fragment>
      <SEO
        titleTemplate="Shop Page"
        description="Shop page of flone react minimalist eCommerce template."
      />

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Home", path: process.env.PUBLIC_URL + "/" },
            {label: "Shop", path: process.env.PUBLIC_URL + pathname }
          ]} 
        />

        <div className="shop-area pt-95 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                {/* shop sidebar */}
                <ShopSidebar
                  requests={requests}
                  getSortParams={getSortParams}
                  sideSpaceClass="mr-30"
                />
              </div>
              <div className="col-lg-9">
                {/* shop topbar default */}
                <ShopTopbar
                  getLayout={getLayout}
                  getFilterSortParams={getFilterSortParams}
                  productCount={requests.length}
                  sortedProductCount={currentData.length}
                />

                {/* shop page content default */}
                <ShopProducts layout={layout} requests={currentData} />

                {/* shop product pagination */}
                <div className="pro-pagination-style text-center mt-30">
                  <Paginator
                    totalRecords={sortedRequests.length}
                    pageLimit={pageLimit}
                    pageNeighbours={2}
                    setOffset={setOffset}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    pageContainerClass="mb-0 mt-0"
                    pagePrevText="«"
                    pageNextText="»"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default ShopGridTwoColumn;
