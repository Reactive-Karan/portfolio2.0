import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="12" className="footer-copywright">
          <h3>Designed and Developed by Karan Mishra</h3>
        </Col>
        <Col md="12" className="footer-copywright">
          <h3>Copyright © {year} Karan Mishra</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
