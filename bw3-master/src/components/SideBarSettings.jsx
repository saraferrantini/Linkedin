import { Row, Col } from "react-bootstrap";
import EditPen from "../assets/svg/edit_pen_long.svg";

function SideBarSettings() {
  const profileUrl = window.location.href;
  return (
    <Row className="border rounded bg-white">
      <Row className="py-2 pe-0 border-bottom m-0">
        <Col xs={12} className="d-flex justify-content-between pe-0">
          <p className="fw-bold m-0">Lingua del profilo</p>
          <img src={EditPen} className="btn py-0"></img>
        </Col>
        <Col xs={12}>
          <p className="m-0">Italiano</p>
        </Col>
      </Row>
      <Row className="py-2 pe-0 m-0">
        <Col xs={12} className="d-flex justify-content-between pe-0">
          <p className="fw-bold m-0">Profilo pubblico e URL</p>
          <img src={EditPen} className="btn py-0"></img>
        </Col>
        <Col xs={12} className="overflow-hidden">
          <p className="m-0 ">{profileUrl}</p>
        </Col>
      </Row>
    </Row>
  );
}

export default SideBarSettings;
