import React, { useEffect } from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from "./App";
import { store } from "./store/store";
import PersistProvider from "./store/providers/persist-provider";
import { setProducts } from "./store/slices/product-slice"
import 'animate.css';
import 'swiper/swiper-bundle.min.css';
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "./assets/scss/style.scss";
import "./i18n";
import axios from "axios";
// import products from "./data/products.json";

// store.dispatch(setProducts(products));
// console.log("상품최초",products)
// var apiUrl = "http://localhost:8001"; //개발서버용
var apiUrl = ""; //운영서버용

//지금은 allProducts DB호출로 상품리스트 저장
//추후 구현 시 json파일 만드는 batch 필요

axios.post(apiUrl+'/allProducts').then(function (response) {
  console.log(response.data);
  let products = response.data;
  store.dispatch(setProducts(products));
}).catch(function(error) {

}).then(function () {
  //finally
});

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
      <PersistProvider>
        <App />
      </PersistProvider>
    </Provider>
);

