import React from "react";
import "./Brands.css";
import brandLogo from "../assets/400x300_Lodha_logo.jpeg";
import brandLogo2 from "../assets/400x300_Lodha_Luxury_logo.jpeg";
import brandLogo3 from "../assets/400x300_Palava_logo.jpeg";

const Brands = () => {
  return (
    <div className="p-4">
        <div><h2 className="text-center">Our Brands</h2></div>
    <div className="d-flex g-20 brand-card-cont">
      <div className="card custom-card">
        <div><img src={brandLogo} alt="" className="w-100 h-100"/></div>
        <div><button className="brand-btn">Know More</button></div>
      </div>
      <div className="card custom-card">
        <div><img src={brandLogo2} alt="" className="w-100 h-100"/></div>
        <div><button className="brand-btn">Know More</button></div>
      </div>
      <div className="card custom-card">
        <div><img src={brandLogo3} alt="" className="w-100 h-100"/></div>
        <div><button className="brand-btn">Know More</button></div>
      </div>
    </div>
    </div>
  );
};

export default Brands;
