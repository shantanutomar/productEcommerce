import React from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import "./AddRemoveButton.css";

var AddRemoveButton = ({ addProductQty, removeProductQty, productQty }) => {
  return (
    <div className="addRemoveButtonCls">
      <ButtonBase color="primary" onClick={removeProductQty}>
        -
      </ButtonBase>
      <span>{productQty}</span>
      <ButtonBase color="primary" onClick={addProductQty}>
        +
      </ButtonBase>
    </div>
  );
};

export default AddRemoveButton;
