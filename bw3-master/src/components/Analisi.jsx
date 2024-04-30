import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import PeopleIcon from "../assets/svg/people_icon.svg";
import ReportsIcon from "../assets/svg/report_icon.svg";
import EyeIcon from "../assets/svg/eye_icon.svg";
import RightArrow from "../assets/svg/right_arrow_icon.svg";

const Analisi = function () {
  return (
    <Row>
      <Col>
        <Card style={{ position: "relative", overflow: "hidden" }}>
          <div id="otherCards">
            <h5 className="fw-bold">Analisi</h5>

            <div className="subtitles">
              <img src={EyeIcon}></img>
              <span> Solo per te</span>
            </div>

            <Row className="d-flex justify-content-start gy-4">
              <Col className="col-12 col-lg-4">
                <Row className="gap-2">
                  <Col className="col-1">
                    <img src={PeopleIcon} />
                  </Col>
                  <Col>
                    <p className="fw-bold">Visualizzazioni profilo</p>
                    <span className="sectionContent">Scopri chi ha visitato il tuo profilo.</span>
                  </Col>
                </Row>
              </Col>

              <Col className="col-12 col-lg-4">
                <Row className="gap-2">
                  <Col className="col-1">
                    <img src={ReportsIcon} />
                  </Col>
                  <Col>
                    <p className="fw-bold">Impressioni del profilo</p>
                    <span className="sectionContent">Crea un post per aumentare l'interesse.</span>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <Row>
            <Col className="col-12 sectionFooter">
              Mostra tutte le analisi
              <img src={RightArrow} style={{ marginLeft: "10px" }}></img>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default Analisi;
