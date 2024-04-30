import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import backPhoto from "../assets/photo_2024-04-05_12-42-35.jpg";

const OtherHeaderProf = ({ profileData }) => {
  return (
    <Row>
      <Col>
        <Card style={{ position: "relative" }}>
          <>
            <Card.Img
              variant="top"
              style={{ height: "12rem", backgroundColor: "black" }}
              src={backPhoto}
              className="object-fit-cover"
            />
            <div id="profilePicture">
              <img src={profileData.image} alt="Profile" className="img-fluid" />
            </div>
            <Card.Body id="headerCard">
              <h4 className="profileTitle">
                {profileData.name} {profileData?.surname}
              </h4>
              <Card.Text>{profileData?.bio}</Card.Text>
              <p className="timeAndLocation">
                {profileData.area} • <a href="#">Informazioni di contatto</a>
              </p>
              <button className="mainBtn">Disponibile per</button>
              <button className="secondaryBtn">Profilo</button>
              <button className="tertiaryBtn">Altro</button>
            </Card.Body>
          </>
        </Card>
      </Col>
    </Row>
  );
};

export default OtherHeaderProf;
