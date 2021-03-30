import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchBook from "../components/SearchBar";
import Footer from "../components/Footer";
import NavTabs from "../components/NavBar";

function Home() {
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
          <h3 className="display-4">CARDS HERE</h3>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default Home;
