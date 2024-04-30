import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../redux/actions";
import { Col, Row, Button, Modal } from "react-bootstrap";
import ProfileFetch from "./ProfileFetch";

function OtherProfiles() {
  const dispatch = useDispatch();
  const tuttiIProfili = useSelector((state) => state.profile.profiles);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  console.log("Profiles:", tuttiIProfili);

  const shuffleArray = (array) => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Row className="border border-bottom-0 rounded-top bg-white px-4">
        <Col xs={12} className="pt-4">
          <p className="fw-bold m-0">Altri profili simili</p>
        </Col>
        {shuffleArray(tuttiIProfili)
          .slice(0, 5)
          .map((unProfilo) => (
            <ProfileFetch key={unProfilo._id} profileData={unProfilo} />
          ))}
      </Row>
      <Row>
        <Col xs={12} className="text-center p-0 border border-top-0 rounded-bottom">
          <Button className="btn bg-white w-100 text-secondary fw-bold fs-6 border-0" onClick={handleShowModal}>
            Mostra tutto
          </Button>
        </Col>
      </Row>
      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Tutti i profili</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={7} className="px-auto">
              {tuttiIProfili.map((profilo) => (
                <div className="py-2 px-4">
                  <ProfileFetch key={profilo._id} profileData={profilo} />
                </div>
              ))}
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default OtherProfiles;
