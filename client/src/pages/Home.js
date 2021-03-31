import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchBook from "../components/SearchBar";
import Footer from "../components/Footer";
import NavTabs from "../components/NavBar";
import BookCard from "../components/BookCard";

function Home() {
  const [booklist, setBooklist] = useState([]);

  return (
    <Container fluid>
      <NavTabs />

      <Row>
        <Col>
          <h1 className="display-1">Google Books Search</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <SearchBook setBooklist={setBooklist} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 className="display-4">Search Results</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          {booklist.map((book) => {
            return <BookCard book={book} />;
          })}
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default Home;
