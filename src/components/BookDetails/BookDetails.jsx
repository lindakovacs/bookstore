import React, { Component } from "react";
import axios from "axios";
import BookList from "../BookList/BookList";
import "./BookDetails.css";

class BookDetails extends Component {
  state = {
    books: [],
    hasError: false,
    errorMessage: "",
    isLoading: false
  };

  getBookDetails = async (id) => {
    this.setState({ isLoading: true });
    await axios
      .get(`http://localhost:7000/book/${id}`)
      .then(data => {
        if (data.data.error) {
          console.log(data.data.error);
          this.setState({
            hasError: true,
            isLoading: false,
            errorMessage: data.data.error
          });
        } else if (!data.data.book) {
          throw new Error("There was an error.");
        } else {
          const newBooks = [];
          newBooks.push(data.data.book);
          this.setState({
            books: newBooks,
            isLoading: false
          });
        }
      })
      .catch(error => {
        this.setState({
          hasError: true,
          isLoading: false,
          errorMessage: error.message
        });
      });
  };

  componentDidMount() {
    this.getBookDetails(this.props.match.params.id);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error">
          <p>{this.state.errorMessage}</p>
        </div>
      );
    } else if (this.state.isLoading) {
      return (
        <div className="error">
          <p>Loading...</p>
        </div>
      );
    } else {
      return (
        <div className="book-details">
          <section>
            <p>BOOK DETAILS</p>
          </section>
          <BookList
            listType="book"
            books={this.state.books}
            getBookDetails={this.getBookDetails}
          />
        </div>
      );
    }
  }
}

export default BookDetails;
