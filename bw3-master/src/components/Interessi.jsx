import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import EditPen from "../assets/svg/edit_pen_long.svg";
import AddIcon from "../assets/svg/add_icon.svg";
import RightArrow from "../assets/svg/right_arrow_icon.svg";

const Interessi = function () {
  return (
    <Row>
      <Col>
        <Card style={{ position: "relative", overflow: "hidden" }}>
          <div id="otherCards">
            <Row>
              <Col>
                <h5 className="fw-bold pb-2">Interessi</h5>
              </Col>
            </Row>

            <Row className="align-items-start">
              <Col className="col-3  py-3 border-bottom border-2 border-success">
                <p className="fw-bold text-success">Aziende</p>
              </Col>
              <Col className="py-3 border-bottom">
                <p className="fw-bold">Scuole o università</p>
              </Col>
            </Row>

            <Row>
              <Col className="col-12 col-lg-6">
                <Row className="py-3 align-items-start">
                  <Col className="d-flex flex-grow-0">
                    <img
                      src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_200_200/0/1646830188798/epicodeschool_logo?e=1720051200&v=beta&t=UYO0-ttVul_5ief3KfIxPKuBb3ieeG45N45wHUG0FbE"
                      style={{ width: "50px" }}
                    ></img>
                  </Col>
                  <Col className="d-flex flex-column flex-grow-1">
                    <p className="fw-bold">Epicode</p>

                    <p className="timeAndLocation">14.392 follower</p>
                    <button className="secondaryBtn mt-3" style={{ width: "50%" }}>
                      + Segui
                    </button>
                  </Col>
                </Row>
              </Col>

              <Col className="col-12 col-lg-6">
                <Row className="py-3 align-items-start">
                  <Col className="d-flex flex-grow-0">
                    <img
                      src="https://media.licdn.com/dms/image/C4D0BAQEdULh5jqIljA/company-logo_200_200/0/1648797140649/ifoa_logo?e=1720051200&v=beta&t=mzMi1HBh2iyzpMtSD5pLyvnYptKLn32B1eol0-h-Zlc"
                      style={{ width: "50px" }}
                    ></img>
                  </Col>
                  <Col className="d-flex flex-column flex-grow-1">
                    <p className="fw-bold">IFOA</p>

                    <p className="timeAndLocation">23.348 follower</p>
                    <button className="secondaryBtn mt-3" style={{ width: "50%" }}>
                      + Segui
                    </button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>

          <Row>
            <Col className="col-12 sectionFooter">
              Mostra tutti gli interessi
              <img src={RightArrow} style={{ marginLeft: "10px" }}></img>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default Interessi;
