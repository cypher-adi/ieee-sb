import React from "react";

// reactstrap components
import {
  Button,
  Card,
  Form,
  Input,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
const divstyle = {
  color: 'white',
};

function SectionLogin() {
  return (
    <>
      <div
        className="section section-image section-login"
        
      >
        <Container>
          <Row>
            <Col className="mx-auto" md="6">
              <Card className="card-register">
                <h3 className="title mx-auto">Contact Us</h3>
                <div className="social-line text-center">
                  <Button
                    className="btn-neutral btn-just-icon mt-0"
                    color="facebook"
                    href="https://www.facebook.com/IEEEMMMUT/"
                    onClick="window.location.href = 'https://www.facebook.com/IEEEMMMUT/';"
                  >
                    <i className="fa fa-facebook-square" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mt-0 ml-1"
                    color="google"
                    href="https://www.instagram.com/techsrijan.mmmut"
                    onClick="window.location.href = 'https://www.instagram.com/techsrijan.mmmut';"
                  >
                    <i className="fa fa-instagram" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mt-0 ml-1"
                    color="twitter"
                    href="#"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                </div>
                <Form className="register-form">
                  
                <label>Name</label>
                  <InputGroup className="form-group-no-border">
                    <Input placeholder="Name" type="text" name="name" />
                  </InputGroup>
                  <label>Email</label>
                  <InputGroup className="form-group-no-border">
                    <Input placeholder="Email" type="email" name="email" />
                  </InputGroup>
                  <label>Message</label>
                  <InputGroup className="form-group-no-border">
                    <textarea placeholder="Message..." name="message"/>
                  </InputGroup>
                  <Button
                    block
                    className="btn-round"
                    color="danger"
                    type="button"
                  >
                    Submit
                  </Button>
                </Form>
              </Card>
            </Col>
            <Col className="mx-auto" md="6" style={divstyle}>
              <h3 className="title">Address</h3>
              Madan Mohan Malaviya University of Technology, <br/> Gorakhpur, U.P., <br/> 273010 
              <h3 className="title">Email</h3>
              <a href="mailto:techsrijan@mmmut.ac.in">
              <Button color="info" outline type="button" className="mr-1">
              techsrijan@mmmut.ac.in
                </Button>
              </a>
              <hr/>
              <h4 className="title">Shashwat Srivastava</h4>
              Student Chair, <br/>IEEE Student Chapter MMMUT, <br/> +91 - 9650659510
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionLogin;
