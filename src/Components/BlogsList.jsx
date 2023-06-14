import React from "react";
import "./BlogsList.css";
import lodhaPalava from "../assets/lodhaPalava.jpeg";
import lodhaBellaVita from "../assets/lodhaBellaVita.jpeg";
import lodhaBelmondo from "../assets/lodhaBelmondo.jpeg";
import lodhaBuilders from "../assets/lodhaBuilders.jpeg";
import lodhaGiardino from "../assets/lodhaGiardino.jpeg";
import lodhaPanache from "../assets/lodhaPanache.jpeg";
import { Link } from "react-router-dom";

const BlogsList = () => {
    const handleBlogLinkClick = () => {
        const isMobileView = window.innerWidth <= 900; // Define the breakpoint for mobile view
        if (isMobileView) {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const blogListParent = document.querySelector(".blog-list-parent");
          if (blogListParent) {
            blogListParent.scrollIntoView({ behavior: "smooth" });
          }
        }
      };
  return (
    <div className="blog-list-parent">
      <div>
        <h2 className="text-center">More Blogs</h2>
      </div>
      <div className="blog-list-cont">
        <div className="card">
          <Link to="/lodha_palava" onClick={handleBlogLinkClick}>
            <div>
              <img src={lodhaPalava} alt="" className="w-100 h-100" />
            </div>
            <div className="p-2">
              <h6>Unlocking the Marvels of Palava:</h6>
              <p className="small">A Haven of Lifestyle and Luxury by Lodha</p>
            </div>
          </Link>
        </div>
        <div className="card">
          <Link to="/lodha_bella_vita" onClick={handleBlogLinkClick}>
            <div>
              <img src={lodhaBellaVita} alt="" className="w-100 h-100" />
            </div>
            <div className="p-2">
              <h6>Discover the Enchanting Lifestyle of Lodha Kharadi:</h6>
              <p className="small">A Paradise in Pune</p>
            </div>
          </Link>
        </div>
        <div className="card">
          <Link to="/lodha_belmondo" onClick={handleBlogLinkClick}>
            <div>
              <img src={lodhaBelmondo} alt="" className="w-100 h-100" />
            </div>
            <div className="p-2">
              <h6>Luxurious Lifestyle at Lodha Belmondo Pune:</h6>
              <p className="small">Location Benefits and Project Highlights</p>
            </div>
          </Link>
        </div>
        <div className="card">
          <Link to="/lodha_builders" onClick={handleBlogLinkClick}>
            <div>
              <img src={lodhaBuilders} alt="" className="w-100 h-100" />
            </div>
            <div className="p-2">
              <h6>Luxurious Living Redefined:</h6>
              <p className="small">Exploring Lodha Builders' Exquisite Projects</p>
            </div>
          </Link>
        </div>
        <div className="card">
          <Link to="/lodha_giardino" onClick={handleBlogLinkClick}>
            <div>
              <img src={lodhaGiardino} alt="" className="w-100 h-100" />
            </div>
            <div className="p-2">
              <h6>
                Exploring the Key Features and Location Benefits of Lodha Pune
              </h6>
              {/* <p>A Haven of Lifestyle and Luxury by Lodha</p> */}
            </div>
          </Link>
        </div>
        <div className="card">
          <Link to="/lodha_panache" onClick={handleBlogLinkClick}>
            <div>
              <img src={lodhaPanache} alt="" className="w-100 h-100" />
            </div>
            <div className="p-2">
              <h6>Unlocking the Marvels of Palava:</h6>
              <p className="small">A Haven of Lifestyle and Luxury by Lodha</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogsList;
