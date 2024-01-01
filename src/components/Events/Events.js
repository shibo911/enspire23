import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import EventCards from "../Sponsors/EventCards";
import monopoly from "../../Assets/photo/monopoly.png";
import mys from "../../Assets/photo/mys.png";
import ipl from "../../Assets/photo/ipl.png";
import ad from "../../Assets/photo/ad.png";
import avenge from "../../Assets/photo/avenge.png";
import eship from "../../Assets/photo/eship.png";

function Events() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col></Col>
        </Row>
        <h1 className="project-heading">
          Events and <strong className="purple"> Activities </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <EventCards
              imgPath={monopoly}
              isBlog={false}
              title="Monopoly"
              description="🎩 Ready to roll the dice and make your mark as a Monopoly mogul? ENspire'23 brings you Monopoly Mania - a chance to relive those cherished board game moments on a life-sized board, complete with exciting tasks in the middle! 🏆💰 Don't miss your 'Get Out of Boredom' card in the newest and most exciting event in ENspire history! ♟️
              "
              demoLink="https://forms.gle/xdhUZNLgrKDaSnDq7"
            />
          </Col>
          <Col md={4} className="project-card">
            <EventCards
              imgPath={mys}
              isBlog={false}
              title="Mystery Room"
              description="Imagine this: a houseparty, a bunch of teenagers, a secret, and a murder. Intriguing, isn't it?
              E-Cell brings you the second edition of the most awaited event, 'Mystery Rooms’. And this time its murder!! You and your team will race against time to crack the case. Solve puzzles, find clues, and uncover the truth!"
              demoLink="https://docs.google.com/forms/d/e/1FAIpQLSf32Vi0Bif9_4OojuJ1X6v9OjuD_x3zXZaL8MWolKylTuWzmw/viewform?usp=sf_link"
            />
          </Col>
          <Col md={4} className="project-card">
            <EventCards
              imgPath={ipl}
              isBlog={false}
              title="IPL Auction"
              description="Get ready to unleash your inner team owner and cricket guru! Join us for the IPL Quiz and Auction event at ENspire, IIIT Lucknow. Build your dream team, win big, and experience the thrill of the auction. Let the games begin! 🙌💰"
              demoLink="https://forms.gle/Y9dAXPyeZDYpAZaF8"
            />
          </Col>
          <Col md={4} className="project-card">
            <EventCards
              imgPath={ad}
              isBlog={false}
              title="AD Arena"
              description="Promote to succeed, market to thrive! 🚀Ad Arena at ENspire'23 is the perfect stage to unleash your marketing creativity and compete! Dive into the world of design, craft persuasive taglines, or make eye-catching ads – it's your time to shine and take your marketing skills to new heights. Plus, there's a $2000 treasure chest up for grabs! 💰 Don't miss the boat – Register now and let your creativity set sail! ⛵Click on the link to register. Chop chop!"
              demoLink="https://unstop.com/competitions/ad-arena-enspire23-indian-institute-of-information-technology-iiit-lucknow-780868"
            />
          </Col>
          <Col md={4} className="project-card">
            <EventCards
              imgPath={avenge}
              isBlog={false}
              title="Avenge The Fallen"
              description="99 percent of startups will fail, but 100 percent of entrepreneurs will succeed… 'Avenge The Fallen' provides you with an excellent chance to learn about a company that got off to a promising start but eventually fizzled out. Tell us in PowerPoint what you would have done differently in light of this new information to prevent this crisis."
              demoLink="https://unstop.com/competitions/avenge-the-fallen-enspire23-indian-institute-of-information-technology-iiit-lucknow-765246"
            />
          </Col>
          <Col md={4} className="project-card">
            <EventCards
              imgPath={eship}
              isBlog={false}
              title="EShip-Quiz"
              description="Are you ready to put your entrepreneurial skills to the ultimate test?
              We're thrilled to announce the E-Ship Quiz, proudly presented by the
              Entrepreneurship Cell of IIIT Lucknow! 💡💼
              💰 What's in it for you? We've put together an enticing prize pool of ₹1500,
              with a chance to win big rewards that could fuel your entrepreneurial
              dreams. 🌟 Don't miss out on this incredible opportunity!"
              demoLink="https://unstop.com/quiz/e-ship-quiz-enspire2-indian-institute-of-information-technology-iiit-lucknow-765279"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Events;
