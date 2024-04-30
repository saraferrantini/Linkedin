import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../assets/css/style.css";
import { Form } from "react-bootstrap";
import MyButton from "../components/MyButton";
import { Link } from "react-router-dom";
import linkedinLogo from "../assets/logo.png";
import cerca_bold from "../assets/svg/cerca_bold.svg";
import home from "../assets/svg/home.svg";
import people from "../assets/svg/people.svg";
import work from "../assets/svg/work.svg";
import message from "../assets/svg/message.svg";
import campana from "../assets/svg/campana.svg";
import business from "../assets/svg/business.svg";
import { profileMeAct } from "../redux/actions/profileMeAct";
import { useDispatch, useSelector } from "react-redux";

function LinkedInNavbar() {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profileMeRed.profileData);

  useEffect(() => {
    dispatch(profileMeAct());
  }, [dispatch]);

  return (
    <>
      {profileData && (
        <>
          <Navbar collapseOnSelect expand="sm" className="flex-xs-row-reverse bg-body-tertiary fixed-top">
            <Container className="d-flex">
              <div className="d-flex align-items-center gap-sm-3">
                <div className="d-flex me-2">
                  <Link to="/home">
                    <img src={linkedinLogo} alt="logo" width="36px" height="36px" className="Logo_navbar_fixed " />
                  </Link>
                </div>

                <div>
                  <div className="position-relative">
                    <img src={cerca_bold} alt="cerca_bold" className="d-lg-none" style={{ width: "30px" }} />
                    <img
                      src={cerca_bold}
                      alt="research_icon"
                      className="d-none d-lg-block position-absolute research_icon_navbar"
                    />
                    <Form.Control
                      type="text"
                      placeholder="Cerca"
                      className="d-none d-lg-block ps-5 research_input_form_navbar m-0"
                      width={"20%"}
                    />
                  </div>
                </div>
              </div>
              <div className="d-md-flex">
                <Navbar.Toggle aria-controls="responsive-navbar-nav d-flex" />
                <Navbar.Collapse className="justify-content gap-2 ms-4">
                  <div className=" gap-5 d-flex ">
                    <Nav className="d-md-flex align-items-center ms-4 gap-4">
                      <div className="icons_navbar">
                        <Nav.Link as={Link} to="/home" className="p-0">
                          <img src={home} alt="home_icon" />

                          <span className="d-none d-md-block">Home</span>
                        </Nav.Link>
                      </div>

                      <div className="icons_navbar">
                        <img src={people} alt="network_icon" />
                        <Nav.Link href="#" className="p-0 fs-6">
                          <span className="d-none d-md-block">Network</span>
                        </Nav.Link>
                      </div>

                      <div className="icons_navbar">
                        <img src={work} alt="jobs_icon" />
                        <Nav.Link href="#" className="p-0 fs-6">
                          <span className="d-none d-md-block">Jobs</span>
                        </Nav.Link>
                      </div>

                      <div className="icons_navbar">
                        <img src={message} alt="messages_icon" />
                        <Nav.Link href="#" className="p-0 fs-6">
                          <span className="d-none d-md-block">Messages</span>
                        </Nav.Link>
                      </div>
                      <div className="icons_navbar">
                        <img src={campana} alt="notification_icon" />
                        <Nav.Link href="#" className="p-0 fs-6">
                          <span className="d-none d-md-block">Notifications</span>
                        </Nav.Link>
                      </div>
                    </Nav>
                  </div>

                  <div className="icons_navbar ps-3">
                    <div className="d-flex justify-content-center ">
                      <Link to={"/profile"}>
                        <img
                          src={profileData.image}
                          alt="profile_picture"
                          width={"25px"}
                          height={"25px"}
                          className="image_dropdown_navbar object-fit-cover"
                        />
                      </Link>
                    </div>

                    <NavDropdown
                      title="Me"
                      id="collapsible-nav-dropdown"
                      className="p-0 dropdown-menu-left d-none d-md-block"
                    >
                      <div style={{ width: "18rem" }} className="dropdown-menu-right">
                        <div className="px-2">
                          <img
                            src={profileData.image}
                            alt="draft_picture"
                            width="30px"
                            height={"30px"}
                            className="image_dropdown_navbar object-fit-cover"
                          />
                          <div>
                            <p className="fw-semibold">
                              {profileData.name} {profileData.surname}
                            </p>
                            <p>{profileData.bio}</p>

                            <MyButton text={"Visualizza Profilo"} colore={"primary"} link={"/Profile"}></MyButton>
                          </div>
                        </div>
                      </div>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Esci</NavDropdown.Item>
                    </NavDropdown>
                  </div>

                  <Nav>
                    <div className="container icons_navbar">
                      <div className="d-flex justify-content-center"></div>
                      <img src={business} alt="business_icon mb-0" />
                      <NavDropdown title="Business" id="collapsible-nav-dropdown" className=" d-none d-md-block">
                        <div>
                          <div>
                            <div>
                              <p>Per le aziende</p>
                            </div>
                          </div>
                        </div>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Scopri altro</NavDropdown.Item>
                      </NavDropdown>
                    </div>
                  </Nav>
                </Navbar.Collapse>
              </div>
            </Container>
          </Navbar>
        </>
      )}
    </>
  );
}

export default LinkedInNavbar;
