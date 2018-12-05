import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import AddRemoveButton from "../AddRemoveButton/AddRemoveButton";
import "./Product.css";
import Grid from "@material-ui/core/Grid";

var Product = ({
  imageUrl,
  productName,
  productPrice,
  productQty,
  addProductQty,
  removeProductQty,
  defaultOffer
}) => {
  return (
    <Grid item xs={6} sm={4} md={3} lg={2}>
      <Paper className="productRoot">
        {defaultOffer && (
          <span className="defaultOfferContainer">{defaultOffer}</span>
        )}
        <div className="imageContainer">
          <img alt="product" src={imageUrl} />
        </div>
        <span className="productText">{productName}</span>
        <span className="productText boldStyle">{`Rs. ${productPrice}`}</span>
        {productQty > 0 ? (
          <AddRemoveButton
            addProductQty={addProductQty}
            removeProductQty={removeProductQty}
            productQty={productQty}
          />
        ) : (
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            onClick={addProductQty}
            className="addButtonStyle"
          >
            ADD
          </Button>
        )}
      </Paper>
    </Grid>
  );
};

export default Product;
