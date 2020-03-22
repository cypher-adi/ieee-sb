import React from "react";

// reactstrap components
import { Alert, Container } from "reactstrap";

// core components

function SectionNews() {
  const [alertSuccess, setAlertSuccess] = React.useState(true);
  const [alertWarning, setAlertWarning] = React.useState(true);
  const [alertDanger, setAlertDanger] = React.useState(true);
  return (
    <>
      <Container className="tim-container">
      </Container>
      <div id="notifications">
        <Alert className="alert-with-icon" color="danger" isOpen={alertDanger}>
          <Container>
            <div className="alert-wrapper">
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
                onClick={() => setAlertDanger(false)}
              >
                <i className="nc-icon nc-simple-remove" />
              </button>
              <div className="message">
                <i className="nc-icon nc-bell-55" /> 
                <marquee>
                  Workshop on Artificial Intelligence on 27 February. <br/>
                  Workshop on Python Programming.<br/>
                  Ethical Hacking Workshop.<br/>
                  Workshop on Android App Development.
                </marquee>
              </div>
            </div>
          </Container>
        </Alert>
      </div>
    </>
  );
}

export default SectionNews;
