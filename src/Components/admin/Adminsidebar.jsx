import React from "react";
import "../../style.css";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
const Adminsidebar = () => {
  return (
    <Row className="p-2 bg-white rounded-3" style={{ position: "relative" }}>
      <p className="profile-menu my-4">MENU</p>
      <div className=" d-flex align-items-center gap-2  mb-3">
        <div
          className="dashboard-icons"
          style={{ backgroundColor: "#7A4CFC" }}
        ></div>
        <Link to="/admin/dashboard" className="profile-list">
          <div>dashboard</div>
        </Link>
      </div>

      <div className=" d-flex align-items-center gap-2  mb-3">
        <div
          className="dashboard-icons"
          style={{ backgroundColor: "#FF5A5A" }}
        ></div>
        <Link to="/admin/notification">
          <div className="profile-list">Notification</div>
        </Link>
      </div>

      <div className=" d-flex align-items-center gap-2  mb-3">
        <div
          className="dashboard-icons"
          style={{ backgroundColor: "#82DD7A" }}
        ></div>
        <Link to="/admin/add-apartment">
          <div className="profile-list">Apartments</div>
        </Link>
      </div>

      <div className=" d-flex align-items-center gap-2  mb-3">
        <div
          className="dashboard-icons"
          style={{ backgroundColor: "#89AFFC" }}
        ></div>
        <Link to="/admin/change-password">
          <div className="profile-list">Password</div>
        </Link>
      </div>

      <div className=" d-flex align-items-center gap-2  mb-3">
        <div
          className="dashboard-icons"
          style={{ backgroundColor: "#B5E369" }}
        ></div>
        <Link to="/admin/user" className="profile-list">
          <div className="profile-list">User</div>
        </Link>
      </div>

      <div className=" d-flex align-items-center gap-2  mb-3">
        <div
          className="dashboard-icons"
          style={{ backgroundColor: "#FE983A" }}
        ></div>
        <Link to="/admin/Edit-profile" className="profile-list">
          <div>Edit Profile</div>
        </Link>
      </div>

      <div className=" d-flex align-items-center gap-2  mb-3">
        <div
          className="dashboard-icons"
          style={{ backgroundColor: "#5ED29B" }}
        ></div>
        <div className="profile-list">Chat with Users</div>
      </div>

      <div className=" d-flex align-items-center gap-2  mb-3">
        <div
          className="dashboard-icons"
          style={{ backgroundColor: "#000000" }}
        ></div>
        <Link to="/admin/Pending" className="profile-list">
          <div >Pending</div>
        </Link>
      </div>

      <h3 className="pointer loginfont">LOGOUT</h3>
    </Row>
  );
};

export default Adminsidebar;
