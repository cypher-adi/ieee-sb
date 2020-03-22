import React from "react";
import { Container, Row, Col } from "reactstrap";
// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// index sections

function Events() {
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
      <div className="main"> <br/>
        <Container>
        <h2 className="title text-center">IEEE Student Branch Activities</h2>
        <hr/>
          <Row>
            <Col md="3">

            <img
                  alt="..."
                  className="img-rounded img-no-padding img-responsive"
                  src={require("assets/img/events/women.jpg")}
                />
            </Col> 
            <Col md="9">
            <h4 className="title">International Women's Day</h4>
            On the occasion of the 21 st International Women’s Day , IEEE WIE Chapter (Women in 
Engineering) organized an event s to celebrate womanhood and pays tribute to the 
indomitable spirit of women across the glob e. The chief guest fo r the event was Mrs Anju 
Chaudhary Vice Chairperson , U.P. Commission for Women, Lucknow and Guest of 
Honour, Ms . Vandana Singh, Chair person, Women Club, MMMUT Gorakhpur .
<br/>
The various sessions were conducted , where , “Women Empowerment ” and “ Girl 
Technical Education Participation ” wer e the topics of invited t alk s delivered by Mrs . 
Anju Chaudhary and Mrs. Vandana Singh, respectively .
            </Col>
          </Row>
          <hr/>
          <Row>
            <Col md="3">
            <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/events/republic.jpg")}
                />
            </Col>
            <Col md="9">
            <h4 className="title">Republic Day Celebration</h4>
            70th Republic Day of India was celebrated with gaiety and patriotic fever at the Multipurpose Hall , MMMUT Gorakhpur . 
            IEEE student branch diligently organized the event , chief guest of the event Hon’ble Vice Chancellor , 
            Prof . Sri Niwas Singh hoisted the national flag and addressed the gathering and highlighted the achievements of 
            the IEEE Student Branch and other also . IEEE student branch organized a charity program for the poor and under 
            privileged children of nearby society. A skit was prepared by the children with the help of IEEE Students and displayed 
            their patriotism and pride for the nation. 
            More than 1000 students and faculty members were present during the events .
            </Col>
          </Row>
          <hr/>
          <Row>
            <Col md="3">
            <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/events/council.jpg")}
                />
            </Col>
            <Col md="9">
            <h4 className="title">Career Counselling by Experts</h4>
            IEEE student branch organized a career counselling sessions for the development and grooming of the newly inducted members.
             Career decisions play a vital in shaping the growth and development of the student. 
             With the motto of personality development expert , Ms. Rashmi Ranjan , Founder of Uddan , NGO , addressed the crowd . 
             Latest trends in the selection process in the industries were elaborated by the expert in his talk. 
            The session concluded gifting students with numerous ways to groom their personality.
            </Col>
          </Row>
          <hr/>
          <Row>
            <Col md="3">
            <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/events/upcon.jpg")}
                />
            </Col>
            <Col md="9">
            <h4 className="title">UPCON-2018</h4>
            The 5th "IEEE Uttar Pradesh Section International Conference on Electrical, Electronics and Computer Engineering (UPCON-2018)" is top level International Conference covering broad topics in the areas of Electrical, Computer and Electronics Engineering, will be organized this year by Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur (Uttar Pradesh), India. UPCON conference is organized annually at various locations in Uttar Pradesh (UP). Prior to this, first four series of UPCON conferences were organized at GCET, Greater Noida (2014), Indian Institute of Information Technology Allahabad (IIITA), Allahabad (2015), Indian Institute of Technology (IIT-BHU) Varanasi (2016) and GLA University (GLAU) Mathura (2017) respectively.
This conference will provide an excellent platform to the researchers to present their research work and is known as the UP-section's conference. The conference is technically and financially sponsored by IEEE UP Section. There are multiple tracks in the conference covering almost all areas of Electrical, Computer & Electronics Engineering. 
Uttar Pradesh Section is located in Region 10, and is represented at the India Council.
            </Col>
          </Row>
          <hr/>
          <Row>
            <Col md="3">
            <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/events/ts.jpg")}
                />
            </Col>
            <Col md="9">
            <h4 className="title">TechSRIJAN'19</h4>
            Madan Mohan Malaviya University of Technology, Gorakhpur has been a benchmark in imparting technical experience for the 
            last 56 years. To enrich its branch name the institution has its own IEEE Student Branch which has been successful in 
            ameliorating the intellect of the masses. 
            For the past 19 years the IEEE Student Branch along with SAE India Collegiate Club has been organising the annual techno management fest for the college, 
            techSRIJAN to patronise technical excellence and innovation.
            </Col>
          </Row>
          <hr/>
          <Row>
            <Col md="3">
            <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/events/ai.jpg")}
                />
            </Col>
            <Col md="9">
            <h4 className="title">Workshop on Artificial Intelligence</h4>
            Our intelligence is what makes us human, and AI is an extension of that quality.
Artificial intelligence (AI) makes it possible for machines to learn from experience,
adjust to new inputs and perform human-like tasks. <br/>
IEEE Student Branch in collaboration with Cetpa organized a seminar on
Artificial Intelligence. In which trained professionals from Cetpa Pvt Ltd. took seminar on Artificial Intelligence and addressed a bunch of enthusiastic students, who were ready to grasp knowledge related to this field. 
The fully packed seminar hall consisted of students from 1st year till final year.
            </Col>
          </Row>
          <hr/>
          </Container>

        <DemoFooter />
      </div>
    </>
  );
}

export default Events;
