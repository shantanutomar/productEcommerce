import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import * as actions from "../../Store/Actions/actions";
import "./SearchBar.css";

class SearchBar extends Component {
  state = {
    searchInputText: this.props.searchInp,
    timeoutId: null
  };
  onSearchHandler = event => {
    if (this.state.timeoutId) {
      clearTimeout(this.state.timeoutId);
    }
    const newValue = event.target.value;
    const latestTimeoutId = setTimeout(() => {
      this.props.updateSearchInp(newValue);
    }, 500);
    this.setState({
      searchInputText: newValue,
      timeoutId: latestTimeoutId
    });
  };

  render() {
    return (
      <div className="searchCls">
        <Input
          placeholder="Search by product name"
          onChange={this.onSearchHandler}
          value={this.state.searchInputText}
          margin="dense"
          fullWidth
          disableUnderline
          variant="outlined"
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </div>
    );
  }
}

var mapStateToProps = state => {
  return {
    searchInp: state.searchInp
  };
};

var mapDispatchToProps = dispatch => {
  return {
    updateSearchInp: searchInp => dispatch(actions.updateSearchInp(searchInp))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
