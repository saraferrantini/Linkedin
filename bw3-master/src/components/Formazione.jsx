import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import EditPen from "../assets/svg/edit_pen_long.svg";
import AddIcon from "../assets/svg/add_icon.svg";
import RightArrow from "../assets/svg/right_arrow_icon.svg";
import CompanyIcon from "../assets/company_icon.png";
import { useParams } from "react-router-dom";

const Formazione = function () {
  const params = useParams();
  return (
    <Row>
      <Col>
        <Card style={{ position: "relative", overflow: "hidden" }}>
          <div id="otherCards">
            <Row>
              <Col>
                {!params.userId && (
                  <>
                    <img
                      src={AddIcon}
                      className="editIcon"
                      style={{ position: "absolute", top: "1rem", right: "4rem" }}
                    ></img>
                    <img src={EditPen} className="editIcon" style={{ position: "absolute", top: "1rem" }}></img>
                  </>
                )}
                <h5 className="fw-bold pb-2">Formazione</h5>
              </Col>
            </Row>

            <Row className=" border-bottom py-3">
              <Col className="col-2 col-lg-1 d-flex justify-content-center align-items-start">
                <img src={CompanyIcon} style={{ width: "50px" }}></img>
              </Col>
              <Col>
                <p className="fw-bold">Università</p>
                <p className="timeAndLocation">Periodo</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, dolor alias quaerat, dolore quam amet
                  dicta perspiciatis quas excepturi, repellendus facere quos? Incidunt sed minus vero optio laborum
                  architecto eveniet.
                </p>
              </Col>
            </Row>

            <Row className="py-3">
              <Col className="col-2 col-lg-1 d-flex justify-content-center align-items-start">
                <img src={CompanyIcon} style={{ width: "50px" }}></img>
              </Col>
              <Col>
                <p className="fw-bold">Diploma superiore</p>
                <p className="timeAndLocation">Periodo</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, dolor alias quaerat, dolore quam amet
                  dicta perspiciatis quas excepturi, repellendus facere quos? Incidunt sed minus vero optio laborum
                  architecto eveniet.
                </p>
              </Col>
            </Row>
          </div>

          <Row>
            <Col className="col-12 sectionFooter">
              Mostra tutta la formazione
              <img src={RightArrow} style={{ marginLeft: "10px" }}></img>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default Formazione;
