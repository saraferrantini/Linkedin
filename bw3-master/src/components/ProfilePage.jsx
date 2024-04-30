import { Container, Row, Col } from "react-bootstrap";
import ProfileHeader from "./ProfileHeader";
import Analisi from "./Analisi";
import Risorse from "./Risorse";
import Informazioni from "./Informazioni";
import ExperienceComponent from "./ExperienceComponent";
import Formazione from "./Formazione";
import ProfileDexSideBar from "./ProfileDexSideBar";
import FooterProfile from "./FooterProfile";
import Competenze from "./Competenze";
import Interessi from "./Interessi";
import LinkedInNavbar from "../components/LinkedInNavbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileMeAct } from "../redux/actions/profileMeAct";

const ProfilePage = function () {
  /*  FETCH CON REDUX */
  const profileData = useSelector((state) => state.profileMeRed.profileData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(profileMeAct());
  }, [dispatch]);

  return (
    <>
      <LinkedInNavbar />
      <Container className="mt-5">
        <Row className="d-flex pt-4 justify-content-center">
          <Col className="col-md-7 col-lg-8 xxl-9">
            <Row className="gy-2">
              <Col className="col-12">
                <ProfileHeader />
              </Col>
              <Col className="col-12">
                <Analisi />
              </Col>
              <Col className="col-12">
                <Risorse />
              </Col>
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
            <ProfileDexSideBar />
          </Col>
          <Row>
            <FooterProfile />
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default ProfilePage;
