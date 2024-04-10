import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import Adminnavbar from "../admin/Adminnavbar";
import ProfilePicChanger from "../admin/changephoto";
import EditProfileHock from "../../hocksJs/auth_hocks/Edit_Profile_Hock";
import { ToastContainer } from "react-toastify";

const OwnerEdit = () => {
  const [
    username,
    phoneNumber,
    Changeusername,
    ChangephoneNumber,
    email,
    changeEmail,
    save,
  ] = EditProfileHock();

  return (
    <div className="mt-4 ms-4">
      <Adminnavbar />
      <div className="mt-4">
        <h4>Edit profile</h4>
        <Row>
          <Col xs="12" md="7">
            <form>
              <div className="mb-3">
                <label className="lable">Username</label>
                <input
                  className="input-group-text w-100 text-start bg-white"
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={username}
                  onChange={Changeusername}
                />
              </div>
              <div className="mb-3">
                <label className="lable">Email</label>
                <input
                  className="input-group-text w-100 text-start bg-white"
                  type="Email"
                  placeholder="admin@gmail.com"
                  name="Email"
                  value={email}
                  onChange={changeEmail}
                  disabled
                />
              </div>
              <div className="mb-3">
                <label className="lable">PHone Number</label>
                <input
                  className="input-group-text w-100 text-start bg-white"
                  type="text"
                  placeholder="phonenumber"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={ChangephoneNumber}
                />
              </div>
              <div className="text-center">
                <Button type="submit" className="save col-md-3" onClick={save}>
                  Save
                </Button>
              </div>
            </form>
          </Col>
          <Col xs="12" md="5" className="pop">
            <div>
              <ProfilePicChanger></ProfilePicChanger>
            </div>
          </Col>
        </Row>
      </div>
      <ToastContainer />
    </div>
  );
};

export default OwnerEdit;
