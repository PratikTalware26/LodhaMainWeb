import React from "react";
import "./Blogs.css";
import lodhaPalava from "../assets/lodhaPalava.jpeg";
import lodhaBellaVita from "../assets/lodhaBellaVita.jpeg";
import lodhaBelmondo from "../assets/lodhaBelmondo.jpeg";
import lodhaBuilders from "../assets/lodhaBuilders.jpeg";
import lodhaGiardino from "../assets/lodhaGiardino.jpeg";
import lodhaPanache from "../assets/lodhaPanache.jpeg";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div id="blogs">
      <div>
        <h2 className="text-center">Our Latest Blogs</h2>
      </div>
      <div className="blogs-cont">
        <div className="card">
        <Link to="/lodha_palava">
          <div className="img-cont">
            <img src={lodhaPalava} alt="" className="w-100 h-100" />
          </div>
          <div>
            <h6>Unlocking the Marvels of Palava:</h6>
            <p>A Haven of Lifestyle and Luxury by Lodha</p>
          </div>
        </Link>
        </div>
        <div className="card">
        <Link to="/lodha_bella_vita">
          <div className="img-cont">
            <img src={lodhaBellaVita} alt="" className="w-100 h-100" />
          </div>
          <div>
            <h6>Discover the Enchanting Lifestyle of Lodha Kharadi:</h6>
            <p>A Paradise in Pune</p>
          </div>
        </Link>
        </div>
        <div className="card">
        <Link to="/lodha_belmondo">
          <div className="img-cont">
            <img src={lodhaBelmondo} alt="" className="w-100 h-100" />
          </div>
          <div>
            <h6>Luxurious Lifestyle at Lodha Belmondo Pune:</h6>
            <p>Location Benefits and Project Highlights</p>
          </div>
        </Link>
        </div>
        <div className="card">
        <Link to="/lodha_builders">
          <div className="img-cont">
            <img src={lodhaBuilders} alt="" className="w-100 h-100" />
          </div>
          <div>
            <h6>Luxurious Living Redefined:</h6>
            <p>Exploring Lodha Builders' Exquisite Projects</p>
          </div>
        </Link>
        </div>
        <div className="card">
        <Link to="/lodha_giardino">
          <div className="img-cont">
            <img src={lodhaGiardino} alt="" className="w-100 h-100" />
          </div>
          <div>
            <h6>
              Exploring the Key Features and Location Benefits of Lodha Pune
            </h6>
            {/* <p>A Haven of Lifestyle and Luxury by Lodha</p> */}
          </div>
        </Link>
        </div>
        <div className="card">
        <Link to="/lodha_panache">
          <div className="img-cont">
            <img src={lodhaPanache} alt="" className="w-100 h-100" />
          </div>
          <div>
            <h6>Luxurious Living at Lodha Panache:</h6>
            <p>Embrace Serenity and Opulence</p>
          </div>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
