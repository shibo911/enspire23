import React from "react";
import { Card } from "react-bootstrap";

const CarouselItem = ({ image}) => {
  return (
    <Card style={{ backgroundColor: "transparent", border: "none" }}>
      <Card.Img variant="top" src={image} />
    </Card>
  );
};

export default CarouselItem;
