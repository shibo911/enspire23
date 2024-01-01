import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Stack from "../Events/Stack";
import Aboutcard from "../Events/AboutCard";
import amanImg from "./speaker/1600154261501.jpeg";
import kalpitImg from "./speaker/58408147.jpg";
import sanImg from "./speaker/img_114401_sanjeev_bikhchandani.jpg";
import deepImg from "./speaker/27143603-deepshikha-pic_cover_1500x861.jpg";
import kausimg from "./speaker/download.jpeg";

function Sponsors() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Previous <strong className="purple">Sponsors </strong>
        </h1>
        <br /> <br />
        <Stack />
        <br /> <br />
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <h1 className="project-heading">
            Previous <strong className="purple">Speakers </strong>
          </h1>
          <br /> <br />
          <br /> <br />
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Aman <strong className="purple">Dhattarwal</strong>
            </h1>
            <Aboutcard text="He is an Indian YouTuber with over 4 million subscribers, an Educator, a Public speaker, a Career counselor, and a Tastemaker" />
          </Col>
          <Col
            md={5}
            style={{
              paddingTop: "12px",
              paddingBottom: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="about-img"
          >
            <img
              src={amanImg}
              className="img-fluid"
              style={{ width: "100%", maxWidth: "300px" }}
            />
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Kalpit <strong className="purple">Veerwal</strong>
            </h1>
            <Aboutcard text="Kalpit is a graduate of IIT bombay and is presently the founder and CEO of Acadboost. Kalput incredibly achieved a score of 360/360 in one of the most prestigius exams of India, JEE Mains and is also featured in the Limca book of records" />
          </Col>
          <Col
            md={5}
            style={{
              paddingTop: "12px",
              paddingBottom: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="about-img"
          >
            <img
              src={kalpitImg}
              className="img-fluid"
              style={{ width: "100%", maxWidth: "300px" }}
            />
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Sanjeev <strong className="purple">Bikchandani</strong>
            </h1>
            <Aboutcard text="He is a major investor in the Indian economy, 'the Naukri man' is a major shareholder in unicorn companies like Zomato and policybazzar. He draws his wealth from 'Info Edge (India) Ltd'. The company is an innovator who brought us various services like naukri.com, jeevansathi.com, 99acres.com and shiksha.com" />
          </Col>
          <Col
            md={5}
            style={{
              paddingTop: "12px",
              paddingBottom: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="about-img"
          >
            <img
              src={sanImg}
              className="img-fluid"
              style={{ width: "100%", maxWidth: "300px" }}
            />
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Deepshika <strong className="purple">Kumar</strong>
            </h1>
            <Aboutcard text="Deepshikha Kumar is the founder and Managin partner at Speakin - India's first and largest consortium of business experts servicing over 200 ares of expertise. She is the winner of the 2017 Asia Women Icon award for Entrepreneuership" />
          </Col>
          <Col
            md={5}
            style={{
              paddingTop: "12px",
              paddingBottom: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="about-img"
          >
            <img
              src={deepImg}
              className="img-fluid"
              style={{ width: "100%", maxWidth: "300px" }}
            />
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Kaustav <strong className="purple">Majumdar</strong>
            </h1>
            <Aboutcard text="Kaustav Majumdar is an advisor at the Bengal chamber of commerce and IIM Calcutta innocation park. He is an inversor, incubator, and mentor to scores of startups across the country and abroad. Kaustav also is a guest faculty in leadinf business and technology institutions and has a unique way of blending real world experiences with learing from experts with fun and adventure" />
          </Col>
          <Col
            md={5}
            style={{
              paddingTop: "12px",
              paddingBottom: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="about-img"
          >
            <img
              src={kausimg}
              className="img-fluid"
              style={{ width: "100%", maxWidth: "300px" }}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Sponsors;
