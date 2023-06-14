import React, { useEffect, useState } from "react";
import "./Projects.css"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import project2 from "../assets/project2.jpeg"
import project7 from "../assets/project7.jpeg"
import project12 from "../assets/project12.jpeg"
import project13 from "../assets/project13.jpeg"


// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

const Projects = () => {
    const [windowWidth, setWindowWidth]= useState(window.innerWidth)
    const [slides, setSlides]= useState(3)

    useEffect(()=>{
        const handleResize=()=>{
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleResize)
        return ()=>{
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    useEffect(()=>{
        if(windowWidth<700){
            setSlides(1)
        }else if(windowWidth<1050){
            setSlides(2)
        }else{
            setSlides(3)
        }
    },[windowWidth])

  return (
    <div className="p-5 project-cont-parent" id="projects">
    <div><h2 className="text-center p-2">Feature Projects</h2></div>
    <div>
      <Swiper
        slidesPerView={slides}
        spaceBetween={20}
        pagination={{
          type: "fraction",
        }}
        autoplay={{
            delay:5000
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper projects-cont"
      >
        <SwiperSlide>
        <div className="h-100 card-cont">
          <div className="card">
            <img src={project2} alt="" className="w-100 h-100"/>
          </div>
          <div className="p-1">
          <h4>Lodha Panache</h4>
          <p>Great Life. Great Location.</p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="h-100 card-cont">
          <div className="card">
            <img src={project7} alt="" className="w-100 h-100"/>
          </div>
          <div className="p-1">
          <h4>Lodha Belmondo</h4>
          <p>Luxury Chic Studios Set in a 100- Acre Riverside Resort</p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="h-100 card-cont">
          <div className="card">
            <img src={project12} alt="" className="w-100 h-100"/>
          </div>
          <div className="p-1">
          <h4>Lodha Giardino</h4>
          <p>Creators of the world's finest developments coming soon to kharadi</p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="h-100 card-cont">
          <div className="card">
            <img src={project13} alt="" className="w-100 h-100"/>
          </div>
          <div className="p-1">
          <h4>Lodha bella vita</h4>
          <p>The Pride of Owning A Lodha Home</p>
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  );
};

export default Projects;
