import React, { Component } from "react";
import axios from "axios";
import "./MoveItem.css";

class MoveItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      hasError: false
    };
  }

  moveItem = async (shelf, id) => {
    this.setState({ isLoading: true });
    await axios
      .get(`http://localhost:7000/bookshelf/update/${id}/${shelf}`)
      .then(response => {
        if (!response.data) throw Error("There was an error.");
        this.setState({
          isLoading: false
        });

        if (this.props.listType === "bookshelf")
          return this.props.getBookshelf();
        if (this.props.listType === "book")
          return this.props.getBookDetails(id);
      })
      .catch(error => {
        this.setState({
          isLoading: false,
          hasError: true
        });
        console.log(error.message);
      });
  };

  render() {
    return (
      <div>
        <label htmlFor="shelf-select">
          <i>Reading Status:</i>
        </label>
        <div className="input-group">
          {this.props.isLoading ? (
            <select className="custom-select" value="isLoadingTrue">
              <option value="isLoadingTrue">Loading...</option>
            </select>
          ) : (
            <select
              className="custom-select"
              value={this.props.shelf}
              onChange={e => this.moveItem(e.target.value, this.props.id)}
            >
              <option value="none">
                {this.props.shelf === "none" ? "Not Selected" : "Remove"}
              </option>
              <option value="wantToRead">Want To Read</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="read">Read</option>
            </select>
          )}
        </div>
      </div>
    );
  }
}

export default MoveItem;
