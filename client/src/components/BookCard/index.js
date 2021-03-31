import React, { useEffect } from "react";
import API from "../../utils/API";

function BookCard({ book }) {
  useEffect(() => {
    console.log(book);
  });

  function bookSave(book) {
    API.saveBook(book)
      .then((res) => {
        console.log("saved:", res);
        //should I redirect to saved page?
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col shadow">
          <a href={book.link} target="\_blank">
            <h4>Title: {book.title}</h4>
          </a>
          <button
            className="btn btn-success"
            onClick={() => {
              bookSave(book);
            }}
          >
            Save this Book
          </button>
          <hr />
          <div className="row">
            <div className="col-md-12">
              <img src={book.img.thumbnail} alt="book thumbnail" />
              <hr />
              <h5>Author: {book.authors}</h5>
              <p>{book.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
