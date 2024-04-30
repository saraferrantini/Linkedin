import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import ConnectionIcon from "../assets/svg/connection.svg";
import { Link } from "react-router-dom";

function ProfileFetch({ profileData }) {
  return (
    <Col xs={12} className="gy-3 border-bottom">
      <Row>
        <Col xs={3}>
          <Link to={`/profile/${profileData._id}`}>
            <img
              src={profileData.image}
              className="rounded-circle"
              style={{ objectFit: "cover", width: "60px", height: "60px" }}
            />
          </Link>
        </Col>
        <Col xs={9} className="pb-2">
          <Link to={`/profile/${profileData._id}`} style={{ textDecoration: "none" }}>
            <p className="fw-bold m-0 text-black">
              {profileData.name} {profileData.surname}
            </p>
          </Link>
          <p className="m-0">{profileData.title}</p>
        </Col>
      </Row>
      <Row className="pb-3">
        <Col xs={3}></Col>
        <Col xs={9}>
          <Button
            type="button"
            className="d-flex align-items-center btn bg-white border-2 border-secondary text-secondary  rounded-pill"
          >
            <img src={ConnectionIcon} width={18}></img>
            <p className="px-1 m-0 fw-bold">Collegati</p>
          </Button>
        </Col>
      </Row>
    </Col>
  );
}

export default ProfileFetch;
