import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
function BookCard({ book }) {
  useEffect(() => {
    console.log(book);
  });

  return (
    <div>
      {book.title}
      {book.img.thumbnail}
      {book.authors}
      {book.description}
      {book.link}
      {/* <Card>
        <Card.Header></Card.Header>
        <Card.img variant="top" src= />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>  </Card.Text>
          <Card.Link> </Card.Link>
        </Card.Body>
      </Card> */}
    </div>
  );
}

export default BookCard;
