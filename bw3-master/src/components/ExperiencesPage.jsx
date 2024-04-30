import { Container, Row, Col } from "react-bootstrap";
import ExperienceComponent from "./ExperienceComponent";
import ProfileDexSideBar from "./ProfileDexSideBar";
import LinkedInNavbar from "../components/LinkedInNavbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileMeAct } from "../redux/actions/profileMeAct";

const ExperiencesPage = function () {
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
        <Row className="d-flex pt-4">
          <Col className="col-md-6 col-lg-8 mt-3">
            <Row>
              <Col className="col-12">{profileData && <ExperienceComponent userId={profileData._id} />}</Col>
            </Row>
          </Col>
          <Col className="col-md-6 col-lg-4 d-none d-md-block mt-3">
            <ProfileDexSideBar />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ExperiencesPage;
