import React, { useState, useEffect, useContext } from "react";
import mainImg from "../assets/Swimming Pool.jpg";
import "./Enquiry.css";
import mainLogo from "../assets/lodhagroup-logo.png";
import Disclaimer from "./Disclaimer";
import { useLocation, useNavigate } from "react-router-dom";
import { ThanksContext } from "../App";
import axios from "axios";

const Enquiry = () => {
  const { setThanksState } = useContext(ThanksContext);
  const navigate = useNavigate();
  //Handeling Form Logic
  //data
  const [enquiryData, setEnquiryData] = useState({
    name: "",
    email: "",
    phone: "",
    origin: "",
    area: "enquiry",
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
        // console.log(enquiryData);
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

  return (
    <>
      <div className="footer-parent-cont" id="enquiry">
        <div className="footer-logo-cont">
          <img src={mainLogo} alt="" className="footer-logo-img" />
        </div>
        <div className="enquiry-form-cont">
          <div className="enquiry-leftside">
            <img src={mainImg} alt="enquiry" />
          </div>
          <div className="enquiry-rightside">
            <h1 className="drop-enquiry">DROP AN ENQUIRY</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  pattern="[A-Za-z\s]+"
                  title="Please enter a valid name (only letters and spaces allowed)."
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="phone"
                  placeholder="Mobile Number"
                  maxLength="12"
                  minLength="10"
                  pattern="[0-9]+"
                  title="Please enter a valid number (only numbers allowed)."
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="enquiry-submit-btn-cont">
                <button className="enquiry-submit-btn" type="submit">
                  Schedule a site visit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Disclaimer/>
    </>
  );
};

export default Enquiry;
