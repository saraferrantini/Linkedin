import { Row, Col, Image, Button } from "react-bootstrap";
import WindstarCruises from "../assets/Windstar_Cruises.jpeg";
import MysticCruises from "../assets/mystic_cruises_logo.jpeg";
import AddIcon from "../assets/svg/add_icon.svg";

function Companies() {
  return (
    <>
      <Row className="border border-bottom-0 rounded-top bg-white px-4">
        <Col xs={12} className="pt-4">
          <p className="fw-bold m-0">Potrebbe interessarti</p>
        </Col>
        <Col xs={12}>
          <p className="fw-bold m-0">Pagine per te</p>
        </Col>
        <Col xs={12} className="gy-2 border-bottom">
          <Row>
            <Col xs={3}>
              <Image src={MysticCruises} className="rounded-circle img-fluid" />
            </Col>
            <Col xs={9} className="pb-2">
              <p className="fw-bold m-0">Mystic Cruises</p>
              <p className="m-0">Organizzazione di viaggi</p>
              <p className="m-0">51.804 follower</p>
            </Col>
          </Row>
          <Row className="pb-3">
            <Col xs={3}></Col>
            <Col xs={9}>
              <Button
                type="button"
                className="d-flex align-items-center btn bg-white border-2 border-secondary text-secondary  rounded-pill"
              >
                <img src={AddIcon} width={20} />
                <p className="px-1 m-0 fw-bold">Segui</p>
              </Button>
            </Col>
          </Row>
        </Col>
        <Col xs={12} className="gy-2 border-bottom">
          <Row>
            <Col xs={3}>
              <Image src={WindstarCruises} className="rounded-circle img-fluid" />
            </Col>
            <Col xs={9} className="pb-2">
              <p className="fw-bold m-0">Windstar Cruises</p>
              <p className="m-0">Tempo libero, viaggi e turismo</p>
              <p className="m-0">71.422 follower</p>
            </Col>
          </Row>
          <Row className="pb-3">
            <Col xs={3}></Col>
            <Col xs={9}>
              <Button
                type="button"
                className="d-flex align-items-center btn bg-white border-2 border-secondary text-secondary  rounded-pill"
              >
                <img src={AddIcon} width={20} />
                <p className="px-1 m-0 fw-bold">Segui</p>
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="text-center p-0 border border-top-0 rounded-bottom">
          <Button className="btn bg-white w-100 text-secondary fw-bold fs-6 border-0">Mostra tutto</Button>
        </Col>
      </Row>
    </>
  );
}

export default Companies;
