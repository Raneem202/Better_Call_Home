import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import OwnerSideBar from "../../../Components/Owner/OwnerSideBar";
import OwnerOverview from "../../../Components/Owner/OwnerOverView";
const OwnerDashBoardPage = () => {
  return (
    <Container>
      <Row className="py-2">
        <Col xs="4" sm="4" md="3" className=" mt-4">
          <OwnerSideBar></OwnerSideBar>
        </Col>
        <Col xs="8" sm="8" md="9">
          <OwnerOverview></OwnerOverview>
        </Col>
      </Row>
    </Container>
  );
};

export default OwnerDashBoardPage;
