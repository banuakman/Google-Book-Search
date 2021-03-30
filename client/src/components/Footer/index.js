import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => (
  <footer>
    <Container className="footer" fluid={true}>
      <Row>
        <Col xl={12}>
          Copyright © 2021-{new Date().getFullYear()}{" "}
          <strong>Banu Akman</strong>
        </Col>
      </Row>
    </Container>
  </footer>
);
export default Footer;
