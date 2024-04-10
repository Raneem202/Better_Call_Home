import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Adminsidebar from "../../Components/admin/Adminsidebar";
import AdminPassword from "../../Components/admin/AdminPassword";
import "../../style.css";
const AdminPasswordPage = () => {
  return (
    <Container>
      <Row className="py-2">
        <Col xs="4" sm="4" md="3" className=" sidebar mt-4" id="sidebar">
          <Adminsidebar></Adminsidebar>
        </Col>
        <Col xs="8" sm="8" md="9">
          <AdminPassword></AdminPassword>
        </Col>
      </Row>
      <div className="gog" id="more"></div>
    </Container>
  );
};

export default AdminPasswordPage;
