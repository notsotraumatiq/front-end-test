import React, { Component } from "react";
import classes from "./SearchBar.module.css";

import PropTypes from "prop-types";
class SearchBar extends Component {
  state = { input: "", photos: [] };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onSubmitChange = (event) => {
    event.preventDefault();
    this.props.userSubmit(this.state.input);
  };

  render() {
    return (
      <div>
        <form className={classes.flexContainer}>
          <label>Welcome to Image Search: </label>
          <input
            className={classes.inputStyle}
            type="text"
            placeholder="Search Box"
            value={this.state.input}
            onChange={this.onInputChange}
          />
          <button
            className={classes.Btn}
            onClick={this.onSubmitChange}
            disabled={!this.state.input}
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = { input: PropTypes.string };

export default SearchBar;
