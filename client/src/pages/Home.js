import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchBook from "../components/SearchBar";

function Home() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1 className="display-1">Google Books Search</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <SearchBook />
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 className="display-4">Search Results</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 className="display-4">Search Results</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
