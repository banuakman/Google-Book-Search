import React, { useEffect } from "react";

function BookCard({ book }) {
  useEffect(() => {
    console.log(book);
  });

  const bookSave = (id) => {
    book.id === id;

    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col shadow">
          <a href={book.link} target="\_blank">
            <h4>Title: {book.title}</h4>
          </a>
          <button className="btn btn-success" onClick={bookSave}>
            Save
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
