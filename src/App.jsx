import React from "react";
import HomePage from "./Components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./Components/fixed component/Navbar";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import Footer from "./Components/fixed component/Footer";
import AdminDashBoardPage from "./Pages/Admin/AdminDashBordPage";
// import "./style.css";
import AdminEditProfile from "./Pages/Admin/AdminEditProfPage";
import AdminAddApartment from "./Components/admin/AdminAddApartment";
import AdminAddApartmentPage from "./Pages/Admin/Owner/Owner_Add_Apartment";
import { useDispatch, useSelector } from "react-redux";
import { gethelloAction } from "./redux/actions/gethelloaction";
import AdminNotification from "./Components/admin/AdminNotification";
import AdminNotificationPage from "./Pages/Admin/Admin_Notification";
import AdminPasswordPage from "./Pages/Admin/Admin_password";
import AdminForgetPasswordPage from "./Components/Auth/ForgetPasswordPage";
import ForgetPasswordPage from "./Components/Auth/ForgetPasswordPage";
import NewPassword from "./Components/Auth/ConfirmCode";
import SelectNewPasswordPage from "./Components/Auth/NewPasswordPage";
import AdminPending from "./Pages/Admin/AdminPending";
import AdminUser from "./Pages/Admin/AdminUser";
import OwnerDashBoardPage from "./Pages/Admin/Owner/OwnerDashBoardPage";
import OwnerNotificationPage from "./Pages/Admin/Owner/OwnerNotificationPage";
import OwnerPasswordPage from "./Pages/Admin/Owner/OwnerPasswordPage";
import OwnerUsersPage from "./Pages/Admin/Owner/OwnerUsersPage";
import OwnerEditProfilePage from "./Pages/Admin/Owner/OwnerEditProfilePage";
import OwnerAddApartment from "./Components/Owner/ownerApartment";

const App = () => {
  return (
    <>
      <NavbarComponent></NavbarComponent>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route
            path="/admin/dashboard"
            element={<AdminDashBoardPage></AdminDashBoardPage>}
          ></Route>
          <Route
            path="/admin/Edit-profile"
            element={<AdminEditProfile></AdminEditProfile>}
          ></Route>

          <Route
            path="/admin/add-apartment"
            element={<AdminAddApartmentPage></AdminAddApartmentPage>}
          ></Route>
          <Route
            path="/admin/notification"
            element={<AdminNotificationPage></AdminNotificationPage>}
          ></Route>
          <Route
            path="/admin/change-password"
            element={<AdminPasswordPage></AdminPasswordPage>}
          ></Route>
          <Route
            path="/forgetpassword"
            element={<ForgetPasswordPage></ForgetPasswordPage>}
          ></Route>
          <Route
            path="/new-password"
            element={<NewPassword></NewPassword>}
          ></Route>
          <Route
            path="/confirm-password"
            element={<SelectNewPasswordPage></SelectNewPasswordPage>}
          ></Route>
          <Route
            path="/admin/pending"
            element={<AdminPending></AdminPending>}
          ></Route>
          <Route path="/admin/user" element={<AdminUser></AdminUser>}></Route>
          <Route
            path="/owner/dashboard"
            element={<OwnerDashBoardPage></OwnerDashBoardPage>}
          ></Route>
          <Route
            path="/owner/notification"
            element={<OwnerNotificationPage></OwnerNotificationPage>}
          ></Route>
          <Route
            path="/owner/add-apartment"
            element={<OwnerAddApartment></OwnerAddApartment>}
          ></Route>
          <Route
            path="/owner/change-password"
            element={<OwnerPasswordPage></OwnerPasswordPage>}
          ></Route>
          <Route
            path="/owner/user"
            element={<OwnerUsersPage></OwnerUsersPage>}
          ></Route>
          <Route
            path="/owner/Edit-profile"
            element={<OwnerEditProfilePage></OwnerEditProfilePage>}
          ></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
};

export default App;
