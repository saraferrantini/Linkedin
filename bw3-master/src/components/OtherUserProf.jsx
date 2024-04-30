import { Container, Row, Col } from "react-bootstrap";
import Informazioni from "./Informazioni";
import ExperienceComponent from "./ExperienceComponent";
import Formazione from "./Formazione";
import FooterProfile from "./FooterProfile";
import Competenze from "./Competenze";
import Interessi from "./Interessi";
import OtherHeaderProf from "./OtherHeaderProf";
import OtherProfSideBar from "./OtherProfSideBar";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LinkedInNavbar from "./LinkedInNavbar";

const OtherUserProf = function () {
  const [profileData, setProfileData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pathname = window.location.pathname;
        const parts = pathname.split("/");
        const profileId = parts[2];

        if (profileId) {
          const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${profileId}`, {
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYzlhYWEyODFkODAwMTlhM2VjNTciLCJpYXQiOjE3MTIwNDg1NTQsImV4cCI6MTcxMzI1ODE1NH0.6sHKqviDfFSd8qv2L8aNnu7plOcEuiqkhnhPbe72vKw",
            },
          });
          const data = await response.json();
          setProfileData(data);
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };
    fetchData();
  }, [location.pathname]);

  useEffect(() => {
    const reloadPage = () => {
      window.location.reload();
    };
    window.addEventListener("popstate", reloadPage);
    return () => window.removeEventListener("popstate", reloadPage);
  }, []);

  return (
    <>
      <LinkedInNavbar />
      <Container className="mt-5">
        <Row className="d-flex pt-4 justify-content-center">
          <Col className="col-md-7 col-lg-8 xxl-9">
            <Row className="gy-2">
              <Col className="col-12">{profileData && <OtherHeaderProf profileData={profileData} />}</Col>
              <Col className="col-12">
                <Informazioni />
              </Col>
              <Col className="col-12">{profileData && <ExperienceComponent userId={profileData._id} />}</Col>
              <Col className="col-12">
                <Formazione />
              </Col>
              <Col className="col-12">
                <Competenze />
              </Col>
              <Col className="col-12">
                <Interessi />
              </Col>
            </Row>
          </Col>
          <Col className="col-md-5 col-lg-4 xxl-3 d-none d-md-block">
            <OtherProfSideBar />
          </Col>
          <Row>
            <FooterProfile />
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default OtherUserProf;
