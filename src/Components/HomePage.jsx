import React from "react";
import "../App.css";
import ContactUs from "./ContactUs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
// import { Col, Row } from "react-bootstrap";
const HomePage = () => {
  return (
    <div>
      <div className="mainSection">
        <div className="mainSection">
          <section>
            <div className="firstsection col-md-11">
              <div className="firstsectionword offset-md-2 ">
                <div className="mainHead">Better Call</div>
                <div className="mainHeadContain">Home</div>
              </div>
              <img
                className="mainImg col-md-6 offset-md-1 "
                src="./Front/Rectangle 6.png"
                alt="img1"
              />
            </div>
            <div className="viewMoreSection col-md-2 offset-md-5">
              <div className="wordsection">
                <div className="word">
                  {" "}
                  View more{" "}
                  <FontAwesomeIcon
                    className="arrowicon col-md-2 offset-md-2"
                    icon={faLongArrowAltRight}
                  />{" "}
                </div>
              </div>
            </div>
          </section>
          {/* /////////////////////////////////////////////// */}
          <section>
            <div className="section2 ">
              <div className="aboutsection col-md-11 ">
                <img
                  className="aboutimg offset-md-3"
                  src="./Front/Rectangle 9.png"
                  alt="img2"
                />
                <div className="offset-md-1 col-md-6">
                  <div className="about">About</div>

                  <div className="aboutword col-md-7">
                    Better Call home is a real estate agency that helps you find
                    homes easily with your specific characteristics and
                    requirements, also it helps you sell your home it helps you
                    find the proper buyer, it helps you buy or rent your dream
                    home with the outstanding help of our team as it’s the most
                    professional in the business.
                  </div>
                  <div className="viewMoreSection3 col-md-2">
                    <div className="wordsection">
                      <div className="word col-md-15">
                        {" "}
                        Read more{" "}
                        <FontAwesomeIcon
                          className="arrowicon col-md-2 offset-md-2"
                          icon={faLongArrowAltRight}
                        />{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ////////////////////////////////////////////////////////////////// */}
          <div className="sectiontherd col-md-11"></div>
          <div className="titleofsec3 ">Main Focus/Mission Statement</div>
          <div className="section3">
            <div className="secnum1 col-md-4 ">
              <div className="num1">1</div>
              <div className="wordofnum1 col-md-7 offset-md-1">
                Sell Smarter with Better Call Home, Sell your home smarter with
                more data and insight with our free home value report.
              </div>
            </div>
            <div className="secnum2 col-md-4 offset-md-1">
              <div className="num1">2</div>
              <div className="wordofnum1 col-md-8 offset-md-1">
                Comparable Sales, See what other homes are being sold/rented for
                in and around your neighborhood as it helps you find the perfect
                price.{" "}
              </div>
            </div>
          </div>
          {/* ////////////////////////////////////////////////////////////////////////// */}
          <div className="ourprojectsection col-md-11 ">
            <div className="ourproject">Our Projects</div>
            <div style={{ display: "flex" }}>
              <img
                className="ourprojectimg1 col-md-5"
                src="./Front/Rectangle 17.png"
                alt="img"
              />
              <div className="wordofimg">
                <div className="samplehome">
                  Sample <br />
                  Homes
                </div>
                <div className="viewmore">
                  {" "}
                  View More
                  <FontAwesomeIcon
                    className="arrowicon2 col-md-2 offset-md-1"
                    icon={faLongArrowAltRight}
                  />
                </div>
              </div>
              <img
                className="ourprojectimg3 col-md-5"
                src="./Front/image 15.png"
                alt="img"
              ></img>
            </div>
            <div style={{ display: "flex" }}>
              <img
                className="ourprojectimg55 col-md-2"
                src="./Front/image 16.png"
                alt="img"
              />
              <img
                className="ourprojectimg44 col-md-4"
                src="./Front/image 17.png"
                alt="img"
              />
              <img
                className="ourprojectimg2 col-md-4"
                src="./Front/image 18.png"
                alt="img"
              />
            </div>
            <div className="viewMoreSection4 col-md-2 offset-md-8">
              <div className="wordsection">
                <div className="word word2">
                  {" "}
                  ALL Home{" "}
                  <FontAwesomeIcon
                    className="arrowicon4 col-md-2 offset-md-2"
                    icon={faLongArrowAltRight}
                  />{" "}
                </div>
              </div>
            </div>
          </div>
          {/* //////////////////////////////////////////////////////////*/}
          <div className="contactsection offset-md-1">
            <div>
              <ContactUs />
            </div>
          </div>
        </div>
        {/* mainSection */}
      </div>
    </div>
  );
};

export default HomePage;
