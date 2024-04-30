import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import PeopleIcon from "../assets/svg/people_icon.svg";
import BookmarkIcon from "../assets/svg/bookmark_icon.svg";
import EyeIcon from "../assets/svg/eye_icon.svg";
import RightArrow from "../assets/svg/right_arrow_icon.svg";

const Risorse = function () {
  return (
    <Row>
      <Col>
        <Card style={{ position: "relative", overflow: "hidden" }}>
          <div id="otherCards">
            <h5 className="fw-bold">Risorse</h5>

            <div className="subtitles">
              <img src={EyeIcon}></img>
              <span> Solo per te</span>
            </div>

            <Row className="d-flex justify-content-start gy-4">
              <Col className="col-12 border-bottom pb-3">
                <Row>
                  <Col className="col-1 d-flex justify-content-center align-items-center">
                    <img src={PeopleIcon} />
                  </Col>
                  <Col>
                    <p className="fw-bold">La mia rete</p>
                    <span className="sectionContent">Salva e gestisci i tuoi collegamenti e interessi.</span>
                  </Col>
                </Row>
              </Col>

              <Col className="col-12">
                <Row>
                  <Col className="col-1 d-flex justify-content-center align-items-center">
                    <img src={BookmarkIcon} />
                  </Col>
                  <Col>
                    <p className="fw-bold">I miei elementi</p>
                    <span className="sectionContent">Monitora le tue offerte di lavoro, i corsi e gli articoli.</span>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <Row>
            <Col className="col-12 sectionFooter">
              Mostra tutte le risorse
              <img src={RightArrow} style={{ marginLeft: "10px" }}></img>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default Risorse;
