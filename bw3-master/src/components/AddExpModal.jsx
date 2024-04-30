import React, { useState, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AddIcon from "../assets/svg/add_icon.svg";

const AddExpModal = ({ userId }) => {
  const initialPosition = {
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  };
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState(initialPosition);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const formRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = formRef.current;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYzlhYWEyODFkODAwMTlhM2VjNTciLCJpYXQiOjE3MTIwNDg1NTQsImV4cCI6MTcxMzI1ODE1NH0.6sHKqviDfFSd8qv2L8aNnu7plOcEuiqkhnhPbe72vKw",
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          setFormData(initialPosition);
          console.log("LAVORO", formData);
        } else if (!response.ok) {
          throw new Error("Failed to add experience");
        }

        // After successful submission, close the modal
        handleClose();
        window.location.reload();
      } catch (error) {
        console.error("Error adding experience:", error);
      }
    }
  };
  return (
    <>
      <img
        src={AddIcon}
        className="editIcon"
        style={{ position: "absolute", top: "1rem", right: "1.8rem" }}
        onClick={handleShow}
      />

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi Esperienza</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {/*   INIZIO FORM PER AGGIUNGERE POSIZIONE LAVORATIVA */}
          <Form ref={formRef} noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="posizione lavorativa">
              <Form.Label>Posizione lavorativa</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Scrivi qui la tua posizione lavorativa"
                name="role"
                value={formData.role}
                onChange={(e) => {
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    role: e.target.value,
                  }));
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="compagnia">
              <Form.Label>Compagnia</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Scrivi qui la tua posizione lavorativa"
                name="company"
                value={formData.company}
                onChange={(e) => {
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    company: e.target.value,
                  }));
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="data di inizio">
              <Form.Label>Data di Inizio</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Scrivi qui la tua posizione lavorativa"
                name="startDate"
                value={formData.startDate}
                onChange={(e) => {
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    startDate: e.target.value,
                  }));
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="data conclusione">
              <Form.Label>Data Conclusione</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Scrivi qui la tua posizione lavorativa"
                name="endDate"
                value={formData.endDate}
                onChange={(e) => {
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    endDate: e.target.value,
                  }));
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="descrizione">
              <Form.Label>Descrizione</Form.Label>
              <Form.Control
                required
                as="textarea"
                rows={3}
                placeholder="Inserisci una breve descrizione del lavoro"
                name="description"
                value={formData.description}
                onChange={(e) => {
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    description: e.target.value,
                  }));
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="area geografica">
              <Form.Label>Area Geografica</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Scrivi qui la tua posizione lavorativa"
                name="area"
                value={formData.area}
                onChange={(e) => {
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    area: e.target.value,
                  }));
                }}
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button type="submit" variant="primary" onClick={handleSubmit}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
          {/*     FINE FORM */}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddExpModal;
