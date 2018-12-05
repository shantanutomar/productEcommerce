import * as actionTypes from "./actionTypes";
import axios from "axios";

export var fetchProductsDtlsSuccess = productDtls => {
  return {
    type: actionTypes.FETCH_PRODUCTS_DTLS_SUCCESS,
    payLoad: { productDtls: productDtls }
  };
};

var fetchProductsDtlsFailure = () => {
  return {
    type: actionTypes.FETCH_PRODUCTS_DTLS_FAILURE
  };
};

export var fetchProductsDtls = () => {
  return dispatch => {
    axios
      // .get("https://www.mocky.io/v2/5b3de5ed310000db1f6de257")
      .get("./productsData.json")
      .then(response => {
        let productList = [];
        for (var skuCode in response.data.responseData.productList) {
          productList.push({
            ...response.data.responseData.productList[skuCode],
            productQty: 0
          });
        }
        let arrayToObjectKeyByID = (array, keyField) =>
          array.reduce((obj, item) => {
            obj[item[keyField]] = item;
            return obj;
          }, {});

        let productListObj = arrayToObjectKeyByID(productList, "skuCode");

        dispatch(fetchProductsDtlsSuccess(productListObj));
      })
      .catch(error => {
        dispatch(fetchProductsDtlsFailure());
        alert("Error occured while fetching Product Details " + error);
      });
  };
};

export var updateSearchInp = searchInp => {
  return {
    type: actionTypes.UPDATE_SEARCH_INP,
    payLoad: { searchInp: searchInp }
  };
};

export var addProductQty = skuCode => {
  return {
    type: actionTypes.ADD_PRODUCT_QTY,
    payLoad: { skuCode: skuCode }
  };
};
export var removeProductQty = skuCode => {
  return {
    type: actionTypes.REMOVE_PRODUCT_QTY,
    payLoad: { skuCode: skuCode }
  };
};
