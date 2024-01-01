import React from "react";
import { Col, Row } from "react-bootstrap";
import bbqImage from "./logos/Barbeque_Nation_New_Logo.jpg";
import dsImage from "./logos/Logo_Artboard_3_copy.png";
import bugImage from "./logos/17132399.png";
import blogImage from "./logos/blogadda-og.png";
import lensImage from "./logos/download.png";
function stack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://www.barbequenation.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={bbqImage} style={{ width: "100%" }} />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://dumsafar.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={dsImage} style={{ width: "100%" }} />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="http://www.lensfit.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={lensImage} style={{ width: "100%" }} />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://bugsee.com/" target="_blank" rel="noopener noreferrer">
          <img src={bugImage} style={{ width: "100%" }} />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://www.blogadda.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={blogImage} style={{ width: "100%" }} />
        </a>
      </Col>
    </Row>
  );
}

export default stack;
