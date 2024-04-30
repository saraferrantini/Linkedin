import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import EditPen from "../assets/svg/edit_pen_long.svg";
import AddIcon from "../assets/svg/add_icon.svg";
import RightArrow from "../assets/svg/right_arrow_icon.svg";
import CompanyIcon from "../assets/company_icon.png";
import { useParams } from "react-router-dom";

const Competenze = function () {
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
                <h5 className="fw-bold pb-2">Competenze</h5>
              </Col>
            </Row>

            <Row className=" border-bottom py-3 align-items-center">
              <Col className="col-1 me-3 me-lg-0">
                <img src={CompanyIcon} style={{ width: "30px" }}></img>
              </Col>
              <Col>
                <p className="fw-bold">Competenze analitiche</p>

                <p>Competenze da freelance e presso aziende.</p>
              </Col>
            </Row>

            <Row className="py-3 align-items-center">
              <Col className="col-1 me-3 me-lg-0">
                <img src={CompanyIcon} style={{ width: "30px" }}></img>
              </Col>
              <Col>
                <p className="fw-bold">Competenze pratiche</p>

                <p>Competenze maturate durante le esperienze lavorative.</p>
              </Col>
            </Row>
          </div>

          <Row>
            <Col className="col-12 sectionFooter">
              Mostra tutte le competenze
              <img src={RightArrow} style={{ marginLeft: "10px" }}></img>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default Competenze;
