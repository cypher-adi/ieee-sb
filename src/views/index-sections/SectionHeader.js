import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

// core components

function SectionHeader() {
  return (
    <>
      <div className="section">
        <Container className="text-center">
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Welcome</h2>
              <p className="description">
              IEEE is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity. 
              IEEE and its members inspire a global community to innovate for a better tomorrow through its more than 423,000 members in over 160 countries, 
              and its highly cited publications, conferences, technology standards, and professional and educational activities. 
              IEEE is the trusted “voice” for engineering, computing, and technology information around the globe.
              </p>
            </Col>
          </Row>
          <Row className="text-center upgrade-pro">
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="title">Who are we?</h2>
              <p className="description">
              MMMUT IEEE Student branch is a team of IEEE members who organized various events, workshops and various skills enhanced programes through out the year. 
              Starting from early twenties our body has enrolled more than 6000 plus members and also won best student branch award in 2019.
              </p>
            </Col>
            <Col className="ml-auto mr-auto" sm="5">
              <Button className="btn-round" color="info" href="/about">
                <i aria-hidden={true} className="nc-icon nc-spaceship" />{" "}
                Know More
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionHeader;
