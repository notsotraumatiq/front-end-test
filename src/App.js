import React, { Component } from "react";
import SearchBar from "./Components/searchBar/SearchBar";
import Images from "./Components/Images/Images";
import axiosInstance from "./axios-flickr";

import "./App.css";
import { Route } from "react-router";

class App extends Component {
  state = { photos: [], error: false };
  onSearchSubmit = (term) => {
    axiosInstance
      .get("/", {
        params: {
          method: "flickr.photos.search",
          api_key: "3e7cc266ae2b0e0d78e279ce8e361736",
          format: "json",
          nojsoncallback: "1",
          safe_search: "1",
          text: term,
        },
      })
      .then((response) => this.setState({ photos: response.data.photos.photo }))
      .catch((error) => this.setState({ error: true }));
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <Route
            path="/"
            render={() => <SearchBar userSubmit={this.onSearchSubmit} />}
          ></Route>
          {/* <SearchBar userSubmit={this.onSearchSubmit} /> */}
          <Images data={this.state.photos} />
        </div>
      </React.Fragment>
    );
  }
}
export default App;
