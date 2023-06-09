import React, { useState, useEffect, useRef } from "react";
import "./Projects.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import project from "../assets/WhatsApp Image 2023-06-09 at 12.10.51 PM.jpeg";

const Projects = () => {
  const [progress, setProgress] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setProgress(0); // Reset progress when slide changes
      setCurrentSlide(next); // Update current slide index
    },
    afterChange: (current) => {
      setCurrentSlide(current); // Update current slide index
      setProgress(0); // Reset progress when slide changes
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const nextProgress = prevProgress + 1;
        return nextProgress <= 100 ? nextProgress : 0;
      });
    }, settings.autoplaySpeed / 100);

    return () => clearInterval(interval);
  }, []);

  const totalSlides = Math.ceil(settings.slidesToShow / settings.slidesToScroll);

  return (
    <div>
      <div>
        <h2>Featured Projects</h2>
      </div>
      <div>
        <Slider ref={sliderRef} {...settings}>
          <div>
            <div className="card slide-item">
              <img src={project} alt="" />
            </div>
          </div>
          <div>
            <div className="card slide-item">
              <img src={project} alt="" />
            </div>
          </div>
          <div>
            <div className="card slide-item">
              <img src={project} alt="" />
            </div>
          </div>
          {/* Add more slides as needed */}
        </Slider>

        <div className="slide-navigation">
          <button className="navigation-button" onClick={() => sliderRef.current.slickPrev()}>
            Prev
          </button>
          <span className="slide-count">
            Slide {currentSlide + 1} of {totalSlides}
          </span>
          <button className="navigation-button" onClick={() => sliderRef.current.slickNext()}>
            Next
          </button>
        </div>

        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
