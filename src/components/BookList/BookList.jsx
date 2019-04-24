import React from "react";
import { Link } from "react-router-dom";
import MoveItem from "../MoveItem/MoveItem";
import noImage from "../../images/no-image.png";
import "./BookList.css";

function BookList(props) {
  const books = props.books;
  const listType = props.listType;

  return (
    <div className={"panel " + (books.length ? "" : "panel-empty")}>
      {
      books.length ? (
        books.map((book, index) => {
          const link = "/book/" + book.id;
          const thumbnail = book.imageLinks
            ? book.imageLinks.thumbnail || noImage
            : noImage;
          const length = book.authors && book.authors.length;
          const authorList = book.authors
            ? book.authors.reduce((authors, author, index) => {
                if (length === 1) return authors;
                else if (index === length - 1) return authors + " & " + author;
                else return authors + ", " + author;
              })
            : "author unknown";
          const statusMap = {
            none: "Not Selected",
            wantToRead: "Want To Read",
            currentlyReading: "Currently Reading",
            read: "Read"
          };

          return (
            <section key={`${book.id}-${index}`} className={listType}>
              <div className="media">
                {
                listType === "book" ? (
                  <div className="thumb-group">
                    <img src={thumbnail} alt="book thumbnail" />
                    <p>
                      <i>{statusMap[book.shelf]}</i>
                    </p>
                  </div>
                ) : (
                  <Link to={link}>
                    <img src={thumbnail} alt="book thumbnail" />
                  </Link>
                )}

                <div className="media-body ml-3">
                  {
                  listType === "book" ? (
                    <div>
                      <h2 className="mt-0">{book.title}</h2>
                      {book.subtitle && <h5>{book.subtitle}</h5>}
                    </div>
                  ) : (

                    <Link to={link}>
                      <h4 className="mt-0 primary">{book.title}</h4>
                    </Link>
                  )}

                  <p>
                    <i>
                      <span className="author">By </span>
                      {authorList}
                    </i>
                  </p>

                  {
                  listType === "book" && (
                    <div>
                      {book.description && (
                        <p>{book.description.replace(/<[/\w]+>/g, "")}</p>
                      )}
                      <div className="details">
                        {book.publishedDate && (
                          <p>{book.publishedDate.substr(0, 4)}</p>
                        )}
                        {book.pageCount && <p>{book.pageCount} pages</p>}
                        {book.infoLink && (
                          <a
                            href={book.infoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <p>More info</p>
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  {
                  listType === "search-results" || (
                    <div>
                      <hr />
                      <MoveItem {...props} shelf={book.shelf} id={book.id} />
                    </div>
                  )}
                </div>
              </div>
              {books.length === 1 || index === books.length - 1 || <hr />}
            </section>
          );
        })
      ) : (
        <div className="error">
          <p>No Books Were Found.</p>
        </div>
      )}
    </div>
  );
}

export default BookList;
