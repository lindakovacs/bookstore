import React, { Component } from "react";
import axios from "axios";
import BookList from "../BookList/BookList";
import "./Search.css";

// https://codeburst.io/throttling-and-debouncing-in-javascript-b01cad5c8edf
function debounce(func, delay) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, delay);
  };
}

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      hasError: false,
      userInput: "",
      booksSearched: false,
      books: []
    };
    this.debouncedSearch = debounce(this.searchBooks, 200);
  }

  searchBooks = async userInput => {
    if (userInput) {
      this.setState({
        isLoading: true,
        hasError: false
      });
      await axios
        .get(`http://localhost:7000/books/search/${userInput}`)
        .then(data => {
          if (!data.data.books) {
            throw Error("There was an error.");
          } else {
            this.setState({
              books: data.data.books,
              booksSearched: true,
              isLoading: false
            });
          }
        })
        .catch(error => {
          this.setState({
            isLoading: false,
            booksSearched: true
          });
        });
    }
  };

  render() {
    return (
      <div className="search-field">
        <p>Search for a Book</p>
        <div className="input-group mb-3">
          <input
            type="text"
            placeholder="Enter title or author..."
            value={this.state.userInput}
            onChange={e => {
              this.setState({
                userInput: e.target.value
              });
              e.persist();
              this.debouncedSearch(e.target.value);
            }}
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => this.searchBooks(this.state.userInput)}
            >
              <i className="fas fa-search" />
            </button>
          </div>
          </div>
          <div class="alert alert-danger" role="alert"> Important: Our API is a wrapper around the Google API, which is <a href="https://www.keycdn.com/support/rate-limiting" target="blank">rate limited</a>. 
          This means that after a certain number of requests per day (in the thousands), you will not be able to search for books.
          In order to get around this, the bookstore API will not search for books on every single request.
          It will only process the last request in a rapid succession of requests.
          When you get this response back from the server, you shoud simply ignore the response.
          When you receive this response, it simply means that the server is waiting for the user to finish typing, and you can ignore the response. </div>
        {
        this.state.isLoading ? (
          <div className="error">
            <p>Loading...</p>
          </div>
        ) : (
          this.state.booksSearched && (
            <div className="search-results">
              <section>
                <p>SEARCH RESULTS</p>
              </section>
              <BookList listType="search-results" books={this.state.books} />
            </div>
          )
        )}
      </div>
    );
  }
}

export default Search;
