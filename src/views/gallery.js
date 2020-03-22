import React from "react";
import { Container, Row, Col } from "reactstrap";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function Gallery() {
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
      <div id="images">
          <Container>
            <div className="title">
              <h2 className="text-center">Gallery</h2>
            </div>
            <Row>
              <Col md="6">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/Gallery/1.jpg")}
                />
              </Col>
              <Col md="6">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/Gallery/2.jpg")}
                />
              </Col>
            </Row> <br/>
            <Row>
              <Col md="6">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/Gallery/3.jpg")}
                />
              </Col>
              <Col md="6">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/Gallery/4.jpg")}
                />
              </Col>
            </Row> <br/>
            <Row>
              <Col md="6">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/Gallery/5.jpg")}
                />
              </Col>
              <Col md="6">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/Gallery/6.jpg")}
                />
              </Col>
            </Row> <br/>
            <Row>
              <Col md="6">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/Gallery/7.jpg")}
                />
              </Col>
              <Col md="6">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/Gallery/8.jpg")}
                />
              </Col>
            </Row> <br/>
            <Row>
              <Col md="6">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/Gallery/9.jpg")}
                />
              </Col>
              <Col md="6">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/Gallery/10.jpg")}
                />
              </Col>
            </Row>
          </Container>
        </div>
        <DemoFooter />
      </div>
    </>
  );
}

export default Gallery;
