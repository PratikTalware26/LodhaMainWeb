import React, { useState, useEffect, useContext } from "react";
import "./Navbar.css";
import mainLogo from "../assets/lodhagroup-logo.png";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { ThanksContext } from "../App";
import axios from "axios";

const Navbar = () => {
    const { setThanksState } = useContext(ThanksContext);
    const navigate = useNavigate();
  //Handeling Form Logic
  //data
  const [enquiryData, setEnquiryData] = useState({
    name: "",
    email: "",
    phone: "",
    origin: "",
    area: "Navbar",
    ip: "",
    domain: "lodhagrouphinjewadi.in",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    setEnquiryData({ ...enquiryData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(enquiryData);
    try {
        const fetchData = async () => {
          const jsonData = JSON.stringify(enquiryData);
          await axios
            .post(
              "https://www.crm.brickfolio.in/api/leads/add_raw_lead",
              jsonData,
              {
                headers: {
                  "Content-Type": "application/json; charset=utf-8",
                  "Access-Control-Allow-Origin": "*",
                },
              }
            )
            .then((res) => {
              setThanksState(true);
              navigate("/thanks");
            });
        };
        fetchData();
    //   console.log(enquiryData);
    } catch (error) {
      console.log(error.message);
    }
  };

  //utm data
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get("utm_source") === "google") {
      setEnquiryData((prevData) => ({
        ...prevData,
        utm_source: searchParams.get("utm_source"),
        utm_medium: searchParams.get("utm_medium"),
        utm_campaign: searchParams.get("utm_campaign"),
        utm_term: searchParams.get("utm_term"),
        utm_content: searchParams.get("utm_content"),
      }));
    }
  }, [location]);

  const [formPopup, setFormpopup] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [transitionClass, setTransitionClass] = useState("");

  useEffect(() => {
    if (formPopup) {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        setTransitionClass("popupEffect");
      }, 10); // Delay adding the class
    } else {
      setTransitionClass(""); // Remove the class immediately
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [formPopup]);

  const closePopup = () => {
    setIsExiting(true);
    setTimeout(() => {
      setFormpopup(false);
      setIsExiting(false);
    }, 300); // Duration of the transition in milliseconds
  };

  return (
    <div className="sticky-pos">
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between p-3">
        <div
          className="nav-item"
          data-bs-toggle="offcanvas"
          href="#offcanvasExample"
          role="button"
          aria-controls="offcanvasExample"
        >
          Menu
        </div>
        <div className="nav-item">
          <img src={mainLogo} alt="Logo" />
        </div>
        <div className="nav-item nav-enquiry-btn">
          <button
            className="about-knowmore-btn"
            onClick={() => setFormpopup(!formPopup)}
          >
            Enquiry Now!
          </button>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <div className="offcanvas-title" id="offcanvasExampleLabel">
            <img src={mainLogo} alt="" />
          </div>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="menu-cont">
          <ul>
            <li data-bs-dismiss="offcanvas" aria-label="Close"><a href="#home">Home</a></li>
            <li data-bs-dismiss="offcanvas" aria-label="Close"><a href="#projects">Projects</a></li>
            <Link to="/lodha_palava"><li>Blogs</li></Link>
            <li data-bs-dismiss="offcanvas" aria-label="Close"><a href="#enquiry">Contact Us</a></li>
          </ul>
        </div>
      </div>

      {formPopup && (
        <div className={`popupContainer ${isExiting ? "exit" : ""}`}>
          <div className={`popup ${transitionClass}`}>
            <div className="popup-img-cont">
              <img src={mainLogo} alt="" />
            </div>
            <div className="popup-inp-cont">
              <h2>Register to know more</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  pattern="[A-Za-z\s]+"
                  title="Please enter a valid name (only letters and spaces allowed)."
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  minLength="10"
                  maxLength="12"
                  pattern="[0-9]+"
                  title="Please enter a valid number (only numbers allowed)."
                  onChange={handleChange}
                  required
                />
                <div className="popup-submit-btn-cont">
                  <button type="submit" className="submit-btn">
                    Know more
                  </button>
                </div>
              </form>
              <button className="close-btn" onClick={closePopup}>
                X
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
