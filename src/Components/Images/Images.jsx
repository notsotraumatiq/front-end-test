import React, { Component } from "react";
import classes from "./Images.module.css";
class Images extends Component {
  state = { numberOfImages: 10 };

  loadMore = () => {
    this.setState({ numberOfImages: this.state.numberOfImages + 10 });
  };

  render() {
    const content = { ...this.props.data };
    let arrayOfImages = [];
    for (let key in content) {
      let baseURL =
        "http://farm" +
        content[key].farm +
        ".static.flickr.com/" +
        content[key].server +
        "/" +
        content[key].id +
        "_" +
        content[key].secret +
        ".jpg";
      arrayOfImages.push(baseURL);
    }

    let searchResult = arrayOfImages
      .slice(0, this.state.numberOfImages)
      .map((img) => {
        return <img key={img} src={img} alt={img} />;
      });

    return (
      <div className={classes.image__list}>
        {searchResult}
        <div>
          {this.state.numberOfImages < arrayOfImages.length && (
            <button
              className={classes.Btn}
              type="button"
              onClick={this.loadMore}
            >
              Load More
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Images;
