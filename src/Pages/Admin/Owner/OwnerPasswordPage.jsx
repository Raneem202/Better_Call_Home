import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import OwnerSideBar from "../../../Components/Owner/OwnerSideBar";
import OwnerOverview from "../../../Components/Owner/OwnerOverView";
import OwnerNotification from "../../../Components/Owner/OwnerNotification";
import OwnerPassword from "../../../Components/Owner/OwnerPassword";
const OwnerPasswordPage = () => {
  return (
    <Container>
      <Row className="py-2">
        <Col xs="4" sm="4" md="3" className=" mt-4">
          <OwnerSideBar></OwnerSideBar>
        </Col>
        <Col xs="8" sm="8" md="9">
          <OwnerPassword></OwnerPassword>
        </Col>
      </Row>
    </Container>
  );
};

export default OwnerPasswordPage;
