import React, { useState, useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import EditPen from "../assets/svg/edit_pen_long.svg";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { profileMeAct } from "../redux/actions/profileMeAct";

import { putImg } from "../redux/actions/images";

const ProfileHeader = function () {
  const [avatar, setAvatar] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profileMeRed.profileData);

  const [profileFormData, setProfileFormData] = useState({
    name: "",
    surname: "",
    email: "",
    username: "",
    bio: "",
    title: "",
    area: "",
    image: "",
  });

  /* STATO E FUNZIONI PER IL MODALE  */
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  /* STATO E FUNZIONI PER IL FORM */

  const [validated, setValidated] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    dispatch(profileMeAct());
  }, [dispatch]);

  useEffect(() => {
    if (profileData) {
      setProfileFormData(profileData);
    }
  }, [profileData]);

  const handleSubmit = async (event) => {
    const formData = new FormData();
    formData.append("profile", avatar);
    dispatch(putImg(profileData._id, formData));

    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYzlhYWEyODFkODAwMTlhM2VjNTciLCJpYXQiOjE3MTIwNDg1NTQsImV4cCI6MTcxMzI1ODE1NH0.6sHKqviDfFSd8qv2L8aNnu7plOcEuiqkhnhPbe72vKw",
        },
        body: JSON.stringify({
          name: profileFormData.name,
          surname: profileFormData.surname,
          email: profileFormData.email,
          username: profileFormData.username,
          bio: profileFormData.bio,
          title: profileFormData.title,
          area: profileFormData.area,
          image: profileFormData.image,
        }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const updatedProfileData = await response.json();
      console.log("Profile updated successfully:", updatedProfileData);

      setProfileFormData(updatedProfileData);
      handleClose();
      window.location.reload();
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <Row>
      <Col>
        <Card style={{ position: "relative" }}>
          {profileData && (
            <>
              <Card.Img
                variant="top"
                style={{ height: "12rem", backgroundColor: "black" }}
                src="https://images.unsplash.com/photo-1593328125760-2a9bf6288fb2?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="object-fit-cover"
              />
              <div id="profilePicture">
                <img src={profileData.image} alt="Profile" className="img-fluid" />
              </div>
              <Card.Body id="headerCard">
                <img src={EditPen} className="editIcon" alt="Edit Pen Icon" onClick={handleShow} />

                <Modal show={show} onHide={handleClose} size="lg">
                  <Modal.Header closeButton>
                    <Modal.Title>Modifica Profilo</Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    {/*   INIZIO FORM PER MODIFICARE I DATI DEL PROFILO */}

                    <Form ref={formRef} noValidate validated={validated} onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="nome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Scrivi qui il tuo nome"
                          value={profileFormData.name}
                          onChange={(e) =>
                            setProfileFormData((prevFormData) => ({
                              ...prevFormData,
                              name: e.target.value,
                            }))
                          }
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="cognome">
                        <Form.Label>Cognome</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Scrivi qui il tuo cognome"
                          value={profileFormData.surname}
                          onChange={(e) =>
                            setProfileFormData((prevFormData) => ({
                              ...prevFormData,
                              surname: e.target.value,
                            }))
                          }
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="indirizzo email">
                        <Form.Label>Indirizzo Email</Form.Label>
                        <Form.Control
                          required
                          type="email"
                          placeholder="Scrivi qui la tua email"
                          value={profileFormData.email}
                          onChange={(e) =>
                            setProfileFormData((prevFormData) => ({
                              ...prevFormData,
                              email: e.target.value,
                            }))
                          }
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Scrivi qui il tuo username"
                          value={profileFormData.username}
                          onChange={(e) =>
                            setProfileFormData((prevFormData) => ({
                              ...prevFormData,
                              username: e.target.value,
                            }))
                          }
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="biografia">
                        <Form.Label>Raccontaci di te</Form.Label>
                        <Form.Control
                          required
                          as="textarea"
                          rows={3}
                          value={profileFormData.bio}
                          onChange={(e) =>
                            setProfileFormData((prevFormData) => ({
                              ...prevFormData,
                              bio: e.target.value,
                            }))
                          }
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="professione">
                        <Form.Label>Professione</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Scrivi qui la tua professione"
                          value={profileFormData.title}
                          onChange={(e) =>
                            setProfileFormData((prevFormData) => ({
                              ...prevFormData,
                              title: e.target.value,
                            }))
                          }
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="area geografica">
                        <Form.Label>Area Geografica</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Scrivi qui la tua area geografica"
                          value={profileFormData.area}
                          onChange={(e) =>
                            setProfileFormData((prevFormData) => ({
                              ...prevFormData,
                              area: e.target.value,
                            }))
                          }
                        />
                      </Form.Group>
                      {/* <Form.Group className="mb-3" controlId="immagine profilo">
                        <Form.Label>URL immagine profilo</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Inserisci l'indirizzo della tua icon"
                          value={profileFormData.image}
                          onChange={(e) =>
                            setProfileFormData((prevFormData) => ({
                              ...prevFormData,
                              image: e.target.value,
                            }))
                          }
                        />
                      </Form.Group> */}

                      <Form.Group className="mb-3" controlId="immagine profilo">
                        <Form.Label>Carica la tua immagine profilo</Form.Label>
                        <Form.Control
                          required
                          type="file"
                          placeholder="Inserisci la tua immagine"
                          id="avatar"
                          accept="image/*"
                          onChange={handleImageChange}
                        />
                      </Form.Group>
                    </Form>

                    {/*     FINE FORM
                     */}
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button type="submit" variant="primary" onClick={handleSubmit}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>

                <h4 className="profileTitle">
                  {profileData.name} {profileData.surname}
                </h4>
                <Card.Text>{profileData.bio}</Card.Text>
                <p className="timeAndLocation">
                  {profileData.area} • <a href="#">Informazioni di contatto</a>
                </p>
                <button className="mainBtn">Disponibile per</button>
                <button className="secondaryBtn">Profilo</button>
                <button className="tertiaryBtn">Altro</button>
              </Card.Body>
            </>
          )}
        </Card>
      </Col>
    </Row>
  );
};

export default ProfileHeader;
