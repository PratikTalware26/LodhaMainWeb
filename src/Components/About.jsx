import React, {useState, useEffect, useContext} from "react";
import "./About.css";
import mainLogo from "../assets/lodhagroup-logo.png"
import { useLocation, useNavigate } from "react-router";
import { ThanksContext } from "../App";
import axios from "axios";

const About = () => {
    const { setThanksState } = useContext(ThanksContext);
    const navigate = useNavigate();
  //Handeling Form Logic
  //data
  const [enquiryData, setEnquiryData] = useState({
    name: "",
    email: "",
    phone: "",
    origin: "",
    area: "about",
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
    <div>
      <div className="about-cont py-5" id="about">
        <div className="w-40">
          <div>
            <h2 className="py-2">Building a Better Life</h2>
          </div>
          <div>
            <p>
              We believe real estate is more than just building the proverbial
              four walls, it's about "Building a Better Life". This is the
              ideology with which we at Lodha have delivered the world's finest
              developments that have become some of the most iconic addresses
              and the most desirable residences in India as well as in London.
            </p>
          </div>
        </div>
        <div className="w-40">
          <p>
            Our residential and commercial spaces are aimed at every segment,
            right from super luxury to budget, thereby enabling every aspiring
            consumer to fulfil their dream.
          </p>
        </div>
      </div>
      <div className="text-center">
        <button className="about-knowmore-btn" onClick={()=>setFormpopup(!formPopup)}>Know More</button>
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

export default About;
