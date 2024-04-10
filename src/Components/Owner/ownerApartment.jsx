import React, { useState, useEffect } from "react";
import "../../App.css";
import Adminnavbar from "../admin/Adminnavbar";
import { Col, Row } from "react-bootstrap";
import img from "../../Components/images/photo_2024-03-21_21-37-11.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { UseGetDateToken } from "../../hocks/useGetData";

const OwnerAddApartment = () => {
  const [appartments, setAppartments] = useState([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState("");

  const getAppartments = async () => {
    setLoading(true);
    try {
      const res = await UseGetDateToken("/api/Owner/GetOwnerApartments", {
        params: {
          PageNumber: page,
          PageSize: pageSize,
          Search: search,
          OwnerId: JSON.parse(localStorage.getItem("data-user")).userId,
        },
      });

      setAppartments(res.data);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  useEffect(() => {
    getAppartments();
  }, []);

  // Change page
  const paginate = (pageNumber) => setPage(pageNumber);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" mt-4 ms-4">
      <Adminnavbar></Adminnavbar>
      <Row>
        <Col xs="12" md="7">
          <h2>Apartment</h2>
          <hr
            style={{
              border: "1px solid red",
              backgroundColor: "red",
              width: "50px",
              height: "2.5px",
              marginTop: "-5px",
            }}
          />
          {appartments.date.length === 0 ? (
            <div
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                marginTop: "20px",
              }}
            >
              No appartments found
            </div>
          ) : (
            appartments.date.map((appartment) => (
              <><div className=" conntt ">
                <div className=" left-side">
                  <div>
                    <img
                      className="photoowner"
                      style={{
                        position: "relative",
                        height: "300px",
                        width: "608px",
                        margin: "auto",
                        border: "1px solid white",
                        borderRadius: "15px",
                        marginleft: "1px",
                      }}
                      src={
                        appartment.apartmentsPics.length > 0
                          ? appartment.apartmentsPics[0]
                          : img
                      }
                      alt="img"
                    ></img>
                    <FontAwesomeIcon
                      style={{
                        position: "absolute",
                        marginLeft: "-35px",
                        marginTop: "7px",
                        color: "#DA100B",
                        fontSize: "26px",
                      }}
                      icon={faTimesCircle}
                    />
                  </div>
                  <div className="triangle-up"></div>
                  <div className="info">
                    <div style={{ marginTop: "20px" }}>
                      <h3>{appartment.apartmentTitle}</h3>
                    </div>
                    <div>
                      <Link
                        to="/"
                        className="linkedit"
                        style={{ marginLeft: "130px" }}
                      >
                        <button
                          style={{
                            display: "inline",
                            color: "#1672EC",
                            border: "2px solid #1672EC",
                            background: "white",
                            width: "80px",
                            height: "31px",
                            borderRadius: "5px",
                          }}
                        >
                          <FontAwesomeIcon
                            style={{ marginRight: "5px" }}
                            icon={faPen}
                          />
                          Edit
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="span">
                    <p>{appartment.description}</p>
                  </div>
                  <div className="price">
                    <p style={{ fontWeight: "450 ", fontFamily: "Roboto" }}>
                      {appartment.address}
                    </p>
                  </div>
                  <div className="details">
                    <h5>{appartment.salary} EGP</h5>
                  </div>
                  <div className="butt">
                    <h5>{appartment.numberOfUsers} Users</h5>
                  </div>
                </div>
              </div>
              </>
            ))
          )}

          {/* Pagination */}
          <div className="pagination" style={{ marginLeft: "370px" }}>
            <button
              style={{
                width: "40px",
                border: "none",
                borderRadius: "5px",
                height: "45px",
                marginBottom: "10px",
                marginTop: "80px",
              }}
              onClick={() => paginate(page - 1)}
              disabled={page === 1}
            >
              &lt;
            </button>
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                style={{
                  width: "40px",
                  borderRadius: "5px",
                  marginLeft: "7px",
                  height: "45px",
                  marginBottom: "200px",
                  marginTop: "80px",
                  color: page === index + 1 ? "blue" : "black",
                  border: page === index + 1 ? "1px solid blue" : "none",
                }}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button
              style={{
                width: "40px",
                border: "none",
                borderRadius: "5px",
                height: "45px",
                marginLeft: "7px",
                marginBottom: "10px",
                marginTop: "80px",
              }}
              onClick={() => paginate(page + 1)}
              disabled={page === totalPages}
            >
              &gt;
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default OwnerAddApartment;
