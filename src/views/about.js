import React from "react";
import { Button, Container, Row, Col } from "reactstrap";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// index sections
import SectionAbout from "views/index-sections/SectionAbout.js";

function About() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        <SectionAbout />
        <Container className="text-center">
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">AIMS</h2>
              <p className="description">
              The MMMUT IEEE SB aims to empower all its members with the required technical skills to flourish in the industry and to keep the abreast of the latest technological developments.
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">MISSION</h2>
              <p className="description">
              To bridge the gap between the academia and the industry and to provide the industry with full fledged technocrats.
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="ml-auto mr-auto text-left" md="8">
              <h2 className="title">OBJECTIVES</h2>
              <p className="description">
              <li>To enhance the students' technological perspective and to help every member to have a global view.</li>
              <li>To grow through collective effort.</li>
              <li>To create all round proffesionals, by various means like seminars, guest lectures, and pep talks.</li>
              <li>To bring out the dormant dexterities in its members and to use them for the common good.</li>
              <li>To enlighten its members about the skill set required by the industry and to take up activities to enrich them.</li>
              <li>To take an active role in the various oppurtunities provided by IEEE to be a part of the global technological revolution.</li>
              </p>
            </Col>
          </Row>
          <Row className="text-center upgrade-pro">
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="title">About IEEE</h2>
              <p className="description">
              The Institute of Electrical and Electronics Engineers (IEEE) is a professional association with its corporate office in New York City and its operations center in Piscataway, New Jersey. 
              It was formed in 1963 from the amalgamation of the American Institute of Electrical Engineers and the Institute of Radio Engineers. 
              Today, the organization's scope of interest has expanded into so many related fields, that it is simply referred to by the letters I-E-E-E (pronounced Eye-triple-E), 
              except on legal business documents. 
              As of 2018, it is the world's largest association of technical professionals with more than 423,000 members in over 160 countries around the world. 
              Its objectives are the educational and technical advancement of electrical and electronic engineering, telecommunications, computer engineering and allied disciplines.
              </p>
            </Col>
            <Col className="ml-auto mr-auto" sm="5">
              <Button className="btn-round" color="info" href="https://ieee.org">
                <i aria-hidden={true} className="nc-icon nc-spaceship" />{" "}
                IEEE.org
              </Button>
            </Col>
          </Row>
        </Container>
        <DemoFooter />
      </div>
    </>
  );
}

export default About;
