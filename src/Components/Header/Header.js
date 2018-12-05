import React from "react";
import EcommerceLogo from "../../assets/images/EcommerceLogo.png";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import RefreshIcon from "@material-ui/icons/Refresh";
import AccountCircle from "@material-ui/icons/AccountCircle";

import "./Header.css";

var Header = () => {
  return (
    <React.Fragment>
      <AppBar position="sticky" color="default">
        <Toolbar className="headerCls">
          <img
            className="agroStarImgCls"
            src={EcommerceLogo}
            alt="AgroStarImg"
          />
          <div>
            <IconButton className="iconBtn" aria-label="Refresh">
              <RefreshIcon />
            </IconButton>
            <IconButton className="iconBtn" aria-label="Account">
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
export default Header;
