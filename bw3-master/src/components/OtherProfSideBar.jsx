import { Col, Container, Row } from "react-bootstrap";
import OtherProfiles from "./OtherProfiles";
import ProfilesSugg from "./ProfilesSugg";
import ImgAdv from "../assets/ImgAdv.png";

function OtherProfSideBar() {
  return (
    <Container>
      <Row className="gy-2">
        <Col xs={12} className="p-0">
          <img src={ImgAdv} alt="Adv" className="w-100 rounded img-fluid" />
        </Col>
        <Col xs={12}>
          <OtherProfiles />
        </Col>
        <Col xs={12}>
          <ProfilesSugg />
        </Col>
        <Col xs={12} className="p-0">
          <img src={ImgAdv} alt="Adv" className="w-100 rounded img-fluid" />
        </Col>
      </Row>
    </Container>
  );
}

export default OtherProfSideBar;
