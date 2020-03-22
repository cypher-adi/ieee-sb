import React from "react";
import { Container, Row, Col } from "reactstrap";
// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// index sections
function Team() {
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
          <h2 className="title text-center">Faculty Members</h2>
            <Row>
              <Col className="mr-auto" md="3" sm="3">
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/team/brijesh.jpg")}
                />
                <p className="text-center">Dr. Brijesh Kumar <br/> Faculty Advisor <br/> IEEE Student Branch Counsellor </p>
              </Col>
            </Row>
          </Container>
          <Container>
          <h2 className="title text-center">Members</h2>
            <Row>
              <Col className="mr-auto" md="3" sm="3">
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/team/shashwat.jpg")}
                />
                <p className="text-center">Shashwat Srivasatva <br/> Student Chair <br/>IEEE Student Branch</p>
              </Col>
              <Col className="mr-auto" md="3" sm="3">
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/team/siddhant.jpg")}
                />
                <p className="text-center">Siddhant Chaturvedi <br/> Vice-Chairman <br/>IEEE Student Branch</p>
              </Col>
              
              <Col className="mr-auto" md="3" sm="3">
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/team/subodh.jpg")}
                />
                <p className="text-center">Subodh Rai <br/> Vice-Chairman <br/>IEEE Student Branch</p>
              </Col>
            </Row>
            <Row>
              <Col className="mr-auto" md="3" sm="3">
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/team/vaibhav.jpg")}
                />
                <p className="text-center">Vaibhav Choudhary <br/> Treasurer <br/>IEEE Student Branch</p>
              </Col>
              <Col className="mr-auto" md="3" sm="3">
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/team/shaurya.jpg")}
                />
                <p className="text-center">Shaurya Sharma <br/> Secretary <br/>IEEE Student Branch</p>
              </Col>
              
              <Col className="mr-auto" md="3" sm="3">
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/team/rahul.jpg")}
                />
                <p className="text-center">Rahul Sharma <br/> Joint-Secretary <br/>IEEE Student Branch</p>
              </Col>
            </Row>
            <Row>
              <Col className="mr-auto" md="3" sm="3">
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/team/shivangi.jpg")}
                />
                <p className="text-center">Shivangi Jaiswal <br/> Joint-Secretary <br/>IEEE Student Branch</p>
              </Col>
              <Col className="mr-auto" md="3" sm="3">
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/team/peeyush.jpg")}
                />
                <p className="text-center">Peeyush Kumar Yadav <br/> Technical Head <br/>IEEE Student Branch</p>
              </Col>
              
              <Col className="mr-auto" md="3" sm="3">
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/team/sachin.jpg")}
                />
                <p className="text-center">Sachin Kumar <br/> Technical Head <br/>IEEE Student Branch</p>
              </Col>
            </Row>
            
            <Row>
              <Col className="mr-auto" md="3" sm="3">
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/team/vipul.jpg")}
                />
                <p className="text-center">Vipul Kumar <br/> Technical Head <br/>IEEE Student Branch</p>
              </Col>
              <Col className="mr-auto" md="3" sm="3">
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/team/govind.jpg")}
                />
                <p className="text-center">Govind Mishra <br/> Technical Head <br/>IEEE Student Branch</p>
              </Col>
              <Col className="mr-auto" md="3" sm="3">
              </Col>
            </Row>
          </Container>
          <Container>
          <h2 className="title text-center">IEEE SIGHT</h2>
            <Row>
            <Col className="mr-auto" md="3" sm="3">
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/team/shaurya.jpg")}
                />
                <p className="text-center">Shaurya Sharma <br/> Student Chair</p>
              </Col>
              <Col className="mr-auto" md="3" sm="3">
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/team/anurag.jpg")}
                />
                <p className="text-center">Anurag Singh <br/> Vice-Chairman</p>
              </Col>
              
              <Col className="mr-auto" md="3" sm="3">
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/team/abhinav.jpg")}
                />
                <p className="text-center">Abhinav Sahu <br/> Secretary</p>
              </Col> 
            </Row>
        </Container>
          <Container>
          <h2 className="title text-center">IEEE WIE</h2>
            <Row>
            <Col className="mr-auto" md="3" sm="3">
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/team/mayuri.jpg")}
                />
                <p className="text-center">Mayuri Mishra <br/> Student Chair</p>
              </Col>
              <Col className="mr-auto" md="3" sm="3">
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/team/rashi.jpg")}
                />
                <p className="text-center">Rashi Singh <br/> Vice-Chair</p>
              </Col>
              
              <Col className="mr-auto" md="3" sm="3">
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/team/dipti.jpg")}
                />
                <p className="text-center">Dipti Upadhyay <br/> Secretary</p>
              </Col> 
            </Row>
            <Row>
            <Col className="mr-auto" md="3" sm="3">
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/team/shradha.jpg")}
                />
                <p className="text-center">Shradha Gupta <br/> Joint-Secretary</p>
              </Col> 
            </Row>
        </Container>
        </div>
        <DemoFooter />
      </div>
    </>
  );
}

export default Team;
