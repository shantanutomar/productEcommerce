import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./App.css";
import Header from "./Components/Header/Header";
import Products from "./Containers/Products/Products";
import Footer from "./Components/Footer/Footer";
import SearchBar from "./Containers/SearchBar/SearchBar";
import Grid from "@material-ui/core/Grid";
import ViewBag from "./Containers/ViewBag/ViewBag";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  palette: {
    primary: green
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <SearchBar />
          <Grid container spacing={8}>
            <div className="productsCls">
              <Products />
            </div>
          </Grid>
          <ViewBag />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
