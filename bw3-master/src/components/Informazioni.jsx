import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import EditPen from "../assets/svg/edit_pen_long.svg";
import { useParams } from "react-router-dom";

const Informazioni = function () {
  const params = useParams();
  return (
    <Row>
      <Col>
        <Card style={{ position: "relative", overflow: "hidden" }}>
          {!params.userId && (
            <img src={EditPen} className="editIcon" style={{ position: "absolute", top: "1rem" }}></img>
          )}
          <div id="otherCards">
            <h5 className="fw-bold pb-2">Informazioni</h5>

            <p>
              Qui ci va la bio Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sapiente cum expedita
              numquam, odit nisi facere quis ipsa ipsam quidem minus tempore itaque. Consequatur earum exercitationem
              eaque praesentium impedit voluptatibus.
            </p>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default Informazioni;
