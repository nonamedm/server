// get requests
// export const getRequests = (requests, category, type, limit) => {
//   const finalRequests = category
//     ? requests.filter(
//         request => request.filter(single => single === category)[0]
//       )
//     : requests;

//   if (type && type === "new") {
//     const newRequests = finalRequests.filter(single => single.new);
//     return newRequests.slice(0, limit ? limit : newRequests.length);
//   }
//   if (type && type === "bestSeller") {
//     return finalRequests
//       .sort((a, b) => {
//         return b.saleCount - a.saleCount;
//       })
//       .slice(0, limit ? limit : finalRequests.length);
//   }
//   if (type && type === "saleItems") {
//     const saleItems = finalRequests.filter(
//       single => single.discount && single.discount > 0
//     );
//     return saleItems.slice(0, limit ? limit : saleItems.length);
//   }
//   return finalRequests.slice(0, limit ? limit : finalRequests.length);
// };

// get request discount price
// export const getDiscountPrice = (price, discount) => {
//   return discount && discount > 0 ? price - price * (discount / 100) : null;
// };

// get request cart quantity
// export const getRequestCartQuantity = (cartItems, request, color, size) => {
//   let requestInCart = cartItems.find(
//     single =>
//       single.id === request.id &&
//       (single.selectedRequestColor
//         ? single.selectedRequestColor === color
//         : true) &&
//       (single.selectedRequestSize ? single.selectedRequestSize === size : true)
//   );
//   if (cartItems.length >= 1 && requestInCart) {
//     if (request.variation) {
//       return cartItems.find(
//         single =>
//           single.id === request.id &&
//           single.selectedRequestColor === color &&
//           single.selectedRequestSize === size
//       ).quantity;
//     } else {
//       return cartItems.find(single => request.id === single.id).quantity;
//     }
//   } else {
//     return 0;
//   }
// };

// export const cartItemStock = (item, color, size) => {
//   if (item.stock) {
//     return item.stock;
//   } else {
//     return item.variation
//       .filter(single => single.color === color)[0]
//       .size.filter(single => single.name === size)[0].stock;
//   }
// };

//get requests based on category
export const getSortedRequests = (requests, sortType, sortValue) => {
  
  if (requests && sortType && sortValue) {
    if (sortType === "category") {
      return requests.filter(
        request => request.filter(single => single === sortValue)[0]
      );
    }
    if (sortType === "filterSort") {
      let sortRequests = [...requests];
      if (sortValue === "default") {
        return sortRequests;
      }
      if (sortValue === "priceHighToLow") {
        //console.log(requests);
        return sortRequests.sort((a, b) => {
          return b.price - a.price;
        });
      }
      if (sortValue === "priceLowToHigh") {
        return sortRequests.sort((a, b) => {
          return a.price - b.price;
        });
      }
    }
  }
  return requests;
};

// get individual element
const getIndividualItemArray = array => {
  let individualItemArray = array.filter(function(v, i, self) {
    return i === self.indexOf(v);
  });
  return individualItemArray;
};

// get individual categories
export const getIndividualCategories = requests => {
  let requestCategories = [];
  requests &&
    requests.map(request => {
      return (
        request.category &&
        request.category.map(single => {
          return requestCategories.push(single);
        })
      );
    });
  const individualRequestCategories = getIndividualItemArray(requestCategories);
  return individualRequestCategories;
};

// get individual tags
export const getIndividualTags = requests => {
  let requestTags = [];
  requests &&
    requests.map(request => {
      return (
        request.tag &&
        request.tag.map(single => {
          return requestTags.push(single);
        })
      );
    });
  const individualRequestTags = getIndividualItemArray(requestTags);
  return individualRequestTags;
};

// get individual colors
export const getIndividualColors = requests => {
  let requestColors = [];
  requests &&
    requests.map(request => {
      return (
        request.variation &&
        request.variation.map(single => {
          return requestColors.push(single.color);
        })
      );
    });
  const individualRequestColors = getIndividualItemArray(requestColors);
  return individualRequestColors;
};

// get individual sizes
export const getRequestsIndividualSizes = requests => {
  let requestSizes = [];
  requests &&
    requests.map(request => {
      return (
        request.variation &&
        request.variation.map(single => {
          /*return single.size.map(single => {
            return requestSizes.push(single.name);
          });*/
        })
      );
    });
  const individualRequestSizes = getIndividualItemArray(requestSizes);
  return individualRequestSizes;
};

// get request individual sizes
export const getIndividualSizes = request => {
  let requestSizes = [];
  request.variation &&
    request.variation.map(singleVariation => {
      return (
        singleVariation.size &&
        singleVariation.size.map(singleSize => {
          return requestSizes.push(singleSize.name);
        })
      );
    });
  const individualSizes = getIndividualItemArray(requestSizes);
  return individualSizes;
};

export const setActiveSort = e => {
  const filterButtons = document.querySelectorAll(
    ".sidebar-widget-list-left button, .sidebar-widget-tag button, .request-filter button"
  );
  filterButtons.forEach(item => {
    item.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
};

export const setActiveLayout = e => {
  const gridSwitchBtn = document.querySelectorAll(".shop-tab button");
  gridSwitchBtn.forEach(item => {
    item.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
};

export const toggleShopTopFilter = e => {
  const shopTopFilterWrapper = document.querySelector(
    "#request-filter-wrapper"
  );
  shopTopFilterWrapper.classList.toggle("active");
  if (shopTopFilterWrapper.style.height) {
    shopTopFilterWrapper.style.height = null;
  } else {
    shopTopFilterWrapper.style.height =
      shopTopFilterWrapper.scrollHeight + "px";
  }
  e.currentTarget.classList.toggle("active");
};
