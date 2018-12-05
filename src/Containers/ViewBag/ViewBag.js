import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

import "./ViewBag.css";

class ViewBag extends Component {
  render() {
    return this.props.totalItems > 0 ? (
      <div className="viewBagCls">
        <span className="cartText">
          {this.props.totalItems} items | Rs {this.props.totalPrice}
        </span>
        <Button aria-label="go">
          View Bag
          <KeyboardArrowRight />
        </Button>
      </div>
    ) : null;
  }
}

var mapStateToProps = state => {
  let totalItems = 0,
    totalPrice = 0;
  Object.values(state.allProducts).forEach(ele => {
    let eachProductPrice = 0;
    totalItems = totalItems + ele.productQty;
    eachProductPrice = ele.productQty * ele.sellingPrice;
    totalPrice = totalPrice + eachProductPrice;
  });

  return {
    totalItems: totalItems,
    totalPrice: totalPrice
  };
};

export default connect(mapStateToProps)(ViewBag);
