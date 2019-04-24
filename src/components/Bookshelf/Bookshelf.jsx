import React, { Component } from "react";
import axios from "axios";
import BookList from "../BookList/BookList";
import "./Bookshelf.css";

class Bookshelf extends Component {
  state = {
    books: {},
    isLoading: false,
    hasError: false,
    errorMessage: ""
  };

  getBookshelf = async () => {
    this.setState({ isLoading: true });
    await axios
      .get("http://localhost:7000/bookshelf")
      .then(data => {
        if (!data.data) {
          throw new Error("There was an error.");
        } else {
          this.setState({
            books: data.data.books,
            isLoading: false
          });
        }
      })
      .catch(error => {
        this.setState({
          isLoading: false,
          hasError: true,
          errorMessage: error.message
        });
      });
  };

  componentDidMount() {
    this.getBookshelf();
  }

  render() {
    const categories = ["Want to read", "Currently Reading", "Read"];
    const books = this.state.books;

    return (
      <div className="bookshelf">
        <section>
          <h1><strong>BOOKSHELF</strong></h1>
        </section>

        {this.state.isLoading ? (
          <div className="error">
            <p>Loading...</p>
          </div>
        ) : this.state.hasError ? (
          <div className="error">
            <p>{this.state.errorMessage}</p>
          </div>
        ) : (
          Object.keys(books).map((category, index) => {
            const categoryClass = categories[index];
            const categoryName = categoryClass
            return (
              <div className={categoryClass} key={categoryClass}>
              <h2>{categoryName}</h2>
                <BookList
                  listType="bookshelf"
                  books={this.state.books[category]}
                  getBookshelf={this.getBookshelf}
                />
              </div>
            );
          })
        )}
      </div>
    );
  }
}

export default Bookshelf;

// Work in progress - Hooks
// function Bookshelf(props) {
//   const [bookshelf, setBookshelf] = useState({});
//   const [isLoading, setIsLoading] = useState(true);
//   const [hasError, setHasError] = useState(false);
//   const [errorMessage, setErrorMessahe] = useState("");

//   getBookshelf (() ={
//     setIsLoading(true);
//     axios
//       .get("http://localhost:7000/bookshelf")
//       .then(data => {
//         if (!data.data) {
//           throw new Error("There was an error.");
//         } else {
//           setBookshelf(data.data.books);
//           setisLoading(false);
//         }
//       })
//       .catch(() => {
//         setIsLoading(false);
//         sethasError(true);
//         setErrorMessahe: error.message;
//       });
//   };

// }

// export default Bookshelf;
