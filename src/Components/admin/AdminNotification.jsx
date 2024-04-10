import React from "react";
import Adminnavbar from "./Adminnavbar";
import "../../style.css";
import img from "../../Components/images/Group11.png";
import Notification from "./notification";

const AdminNotification = () => {
  return (
    <div className=" mt-4 ms-4">
      <Adminnavbar></Adminnavbar>

      <div>
        <h4 className="notification-header mt-4 mb-4">Notifications</h4>
        {/* popupp */}
        <div className=" m-auto">
          <div className="popup rounded-3 text-white ">
            <img src={img} alt="img"></img>
            <div>
              <p className="pra">We released some new features</p>
              <p>Check them out!</p>
            </div>
          </div>

          {/* comment */}
          <Notification></Notification>
          <Notification></Notification>
          <Notification></Notification>
          <Notification></Notification>
        </div>
      </div>
    </div>
  );
};

export default AdminNotification;
