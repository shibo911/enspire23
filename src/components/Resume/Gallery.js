import React, { useState, useEffect } from "react";
import { Container, Carousel } from "react-bootstrap";
import Particle from "../Particle";
import CarouselItem from "./CarouselItem"; 

import img1 from './picture/DSC_0306.jpg';
import img2 from './picture/DSC_0535.jpg';
import img3 from './picture/DSC_0579.jpg';
import img4 from './picture/DSC_0779.jpg';
import img5 from './picture/DSC_0964.jpg';
import img6 from './picture/DSC_1311.jpg';

function Gallery() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
      
        <h1 className="project-heading">
         <strong className="purple"> Gallery </strong>
        </h1>
        <br></br><br></br>
        <Container className="text-center mx-auto">
          <Carousel data-bs-theme="dark" fade style={{ maxWidth: "100%",  }}>
            <Carousel.Item>
              <CarouselItem image={img1} />
            </Carousel.Item>
            <Carousel.Item>
              <CarouselItem image={img2} />
            </Carousel.Item>
            <Carousel.Item>
              <CarouselItem image={img3} />
            </Carousel.Item>
            <Carousel.Item>
              <CarouselItem image={img4} />
            </Carousel.Item>
            <Carousel.Item>
              <CarouselItem image={img5} />
            </Carousel.Item>
            <Carousel.Item>
              <CarouselItem image={img6} />
            </Carousel.Item>
          </Carousel>
        </Container>
      </Container>
    </div>
  );
}

export default Gallery;
