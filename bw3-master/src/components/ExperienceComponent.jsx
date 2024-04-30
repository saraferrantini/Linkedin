import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import EditPen from "../assets/svg/edit_pen_long.svg";
import RightArrow from "../assets/svg/right_arrow_icon.svg";
import CompanyIcon from "../assets/company_icon.png";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AddExpModal from "./AddExpModal";
import ModifyExpModal from "./ModifyExpModal";

const ExperienceComponent = (props) => {
  const { userId } = props;

  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    if (userId) {
      fetchExperiences(userId);
    }
  }, [userId]);

  const fetchExperiences = async (userId) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYzlhYWEyODFkODAwMTlhM2VjNTciLCJpYXQiOjE3MTIwNDg1NTQsImV4cCI6MTcxMzI1ODE1NH0.6sHKqviDfFSd8qv2L8aNnu7plOcEuiqkhnhPbe72vKw",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch user experiences");
      }
      const experiencesData = await response.json();
      setExperiences(experiencesData);
    } catch (error) {
      console.error("Error fetching user experiences:", error);
    }
  };

  const pathname = window.location.pathname;
  const parts = pathname.split("/");
  const wordUrl = parts[2];

  /*  PARAMS CHE VERRANNO AGGIORNATI CON L'USERID DELLA FETCH */
  const params = useParams();
  console.log("PARAMS", params);

  return (
    <Row>
      <Col>
        <Card style={{ position: "relative", overflow: "hidden" }}>
          <div id="otherCards" style={{ paddingBottom: "0.2rem" }}>
            <Row>
              <Col>
                {wordUrl === "experiences" && <AddExpModal userId={userId} />}

                {!params.userId && (
                  <Link to={`/profile/experiences/${userId}`}>
                    <img src={EditPen} className="editIcon" style={{ position: "absolute", top: "1rem" }} />
                  </Link>
                )}

                <h5 className="fw-bold pb-2">Esperienza</h5>
              </Col>
            </Row>

            {experiences.map((experience) => (
              <Row key={experience._id} className="border-top py-3" style={{ position: "relative" }}>
                <Col className="col-2 col-lg-1 d-flex justify-content-center align-items-start">
                  {wordUrl === "experiences" && (
                    <ModifyExpModal userId={userId} expId={experience._id} experience={experience} />
                  )}
                  <img src={CompanyIcon} style={{ width: "50px" }} alt="Company Logo"></img>
                </Col>
                <Col>
                  <p className="fw-bold">{experience.role}</p>
                  <p className="timeAndLocation">{`${(experience.startDate ?? "").split("T")[0]} - ${
                    (experience.endDate ?? "Present").split("T")[0] || "Present"
                  }`}</p>
                  <p>{experience.description}</p>
                </Col>
              </Row>
            ))}
          </div>

          {!params.userId && (
            <Row>
              <Col className="col-12 sectionFooter">
                Mostra tutte le esperienze
                <img src={RightArrow} style={{ marginLeft: "10px" }} alt="Arrow"></img>
              </Col>
            </Row>
          )}
        </Card>
      </Col>
    </Row>
  );
};
export default ExperienceComponent;
