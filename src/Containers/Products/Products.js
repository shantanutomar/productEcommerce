import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../Store/Actions/actions";
import Product from "../../Components/Product/Product";
import Spinner from "../../Components/Spinner/Spinner";

import "./Products.css";

class Products extends Component {
  componentDidMount = () => {
    if (!Object.keys(this.props.productDtls).length) {
      this.props.fetchProductsDtls();
    }
  };
  render() {
    return this.props.isProductDtlsLoading ? (
      <div className="spinnerStyle">
        <Spinner />
      </div>
    ) : this.props.productsArray.length ? (
      this.props.productsArray.map(ele => {
        return (
          <Product
            key={ele.skuCode}
            defaultOffer={ele.defaultOffer}
            imageUrl={ele.productImages[0].name}
            productName={ele.productName}
            productPrice={ele.sellingPrice}
            productQty={ele.productQty}
            addProductQty={() => this.props.addProductQty(ele.skuCode)}
            removeProductQty={() => this.props.removeProductQty(ele.skuCode)}
          />
        );
      })
    ) : (
      <div className="noProductsCls">
        <span>Product not available</span>
      </div>
    );
  }
}

var mapStateToProps = state => {
  let productsArray = [];
  if (!state.isProductDtlsLoading) {
    if (state.searchInp !== "") {
      productsArray = Object.values(state.allProducts).filter(ele => {
        return (
          ele.productName
            .toLowerCase()
            .indexOf(state.searchInp.toLowerCase()) !== -1
        );
      });
    } else {
      productsArray = Object.values(state.allProducts);
    }
  }

  return {
    productDtls: state.allProducts,
    productsArray: productsArray,
    isProductDtlsLoading: state.isProductDtlsLoading
  };
};

var mapDispatchToProps = dispatch => {
  return {
    fetchProductsDtls: () => dispatch(actions.fetchProductsDtls()),
    addProductQty: skuCode => dispatch(actions.addProductQty(skuCode)),
    removeProductQty: skuCode => dispatch(actions.removeProductQty(skuCode))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
