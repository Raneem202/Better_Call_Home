import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Adminsidebar from "../../Components/admin/Adminsidebar";
import Adminnavbar from "../../Components/admin/Adminnavbar";
import AdminEdit from "../../Components/admin/AdminEdit";
const AdminEditProfile = () => {
  return (
    <Container>
      <Row className="py-2">
        <Col xs="4" sm="4" md="3" className="mt-4">
          <Adminsidebar></Adminsidebar>
        </Col>
        <Col xs="8" sm="8" md="9">
          <AdminEdit></AdminEdit>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminEditProfile;
