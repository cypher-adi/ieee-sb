import React from "react";

// reactstrap components
import {
    Button,
  NavItem,
  NavLink,
  Nav,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function SectionProgress() {
  const [activeTab, setActiveTab] = React.useState("1");
  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  return (
    <>
      <div className="section">
        <Container>
          <Row>
            <Col>
              <div className="title">
                <h3>Let's Explore</h3>
              </div>
              <div className="nav-tabs-navigation">
                <div className="nav-tabs-wrapper">
                  <Nav id="tabs" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={activeTab === "1" ? "active" : ""}
                        onClick={() => {
                          toggle("1");
                        }}
                      >
                        Important  Links
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={activeTab === "2" ? "active" : ""}
                        onClick={() => {
                          toggle("2");
                        }}
                      >
                        Resources
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </div>
              <TabContent activeTab={activeTab} className="text-center">
                <TabPane tabId="1">
                  <p>
                  <a href="/team" target="_blank">Executive Committee Members</a> <br /> <br />
                  <a href="http://www.ieeeup.org/student-branches.aspx" target="_blank">IEEE UP Section Student Branches</a> <br /> <br />
                  <a href="http://www.ieeeup.org/ieee-membership.aspx" target="_blank">IEEE Membership Grades</a> <br /> <br />
                  <a href="http://www.ieeeup.org/how-to-become-ieee-member.aspx" >How To Become IEEE Member</a> <br /> <br />
                  <a href="https://www.ieee.org/Loginforms/myIEEE/login.html" >Access My IEEE</a> <br /> <br />
                  <a href="http://www.ieeeup.org/ieeeupsectionawards.aspx" >IEEE UP Section Awards</a>
                  </p>
                </TabPane>
                <TabPane tabId="2">
                  <p>
                  <a href="/events">IEEESb Events</a> <br /> <br />
                  <a href="https://www.ieeeup.org/news-letter.aspx" >Newsletter </a> <br /> <br />
                  <a href="http://www.ieeeup.org/data/pdf/UP_Section_Annual_Report_2019.pdf">Section Report 2019</a> <br /> <br />
                  <a href="http://www.ieeeup.org/data/pdf/Annual-report_IEEE_UPSec-V2.pdf">Section Report 2018</a> <br /> <br />
                  <a href="http://www.ieeeup.org/data/pdf/IEEE-UP-Section-HISTORY.pdf">History of IEEE Activities in U.P.</a>
                  </p>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionProgress;
