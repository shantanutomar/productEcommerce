import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Store from "@material-ui/icons/Store";
import "./Footer.css";

var Footer = () => {
  return (
    <React.Fragment>
      <BottomNavigation className="footerRoot" value={0} showLabels>
        <BottomNavigationAction label="Products" icon={<Store />} />
        <BottomNavigationAction label="My Orders" icon={<ShoppingCart />} />
      </BottomNavigation>
    </React.Fragment>
  );
};
export default Footer;
