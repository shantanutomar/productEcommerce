import * as actionTypes from "../Actions/actionTypes";

var initState = {
  searchInp: "",
  allProducts: {},
  isProductDtlsLoading: true
};

var updateState = (oldState, updatedProps) => {
  return {
    ...oldState,
    ...updatedProps
  };
};

var fetchProductsDtlsSuccess = (state, action) => {
  return updateState(state, {
    allProducts: action.payLoad.productDtls,
    isProductDtlsLoading: false
  });
};
var fetchProductsDtlsFailure = (state, action) => {
  return updateState(state, {
    isProductDtlsLoading: false
  });
};
var updateSearchInp = (state, action) => {
  return updateState(state, {
    searchInp: action.payLoad.searchInp,
    isProductDtlsLoading: false
  });
};

var addProductQty = (state, action) => {
  let updatedQty = updateState(state.allProducts[action.payLoad.skuCode], {
    productQty: state.allProducts[action.payLoad.skuCode].productQty + 1
  });
  let updatedProductState = {
    ...state.allProducts,
    [action.payLoad.skuCode]: updatedQty
  };
  let updatedAllProducts = {
    allProducts: updatedProductState
  };

  return updateState(state, updatedAllProducts);
};

var removeProductQty = (state, action) => {
  let updatedQty = updateState(state.allProducts[action.payLoad.skuCode], {
    productQty: state.allProducts[action.payLoad.skuCode].productQty - 1
  });
  let updatedProductState = {
    ...state.allProducts,
    [action.payLoad.skuCode]: updatedQty
  };
  let updatedAllProducts = {
    allProducts: updatedProductState
  };

  return updateState(state, updatedAllProducts);
};

var reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_DTLS_SUCCESS:
      return fetchProductsDtlsSuccess(state, action);
    case actionTypes.FETCH_PRODUCTS_DTLS_FAILURE:
      return fetchProductsDtlsFailure(state, action);
    case actionTypes.UPDATE_SEARCH_INP:
      return updateSearchInp(state, action);
    case actionTypes.ADD_PRODUCT_QTY:
      return addProductQty(state, action);
    case actionTypes.REMOVE_PRODUCT_QTY:
      return removeProductQty(state, action);
    default:
      return state;
  }
};
export default reducer;
