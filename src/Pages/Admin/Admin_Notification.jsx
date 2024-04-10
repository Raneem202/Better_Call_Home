import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Adminsidebar from "../../Components/admin/Adminsidebar";
import AdminNotification from "../../Components/admin/AdminNotification";
const AdminNotificationPage = () => {
  return (
    <Container>
      <Row className="py-2">
        <Col xs="4" sm="4" md="3" className=" mt-4">
          <Adminsidebar></Adminsidebar>
        </Col>
        <Col xs="8" sm="8" md="9">
          <AdminNotification></AdminNotification>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminNotificationPage;
