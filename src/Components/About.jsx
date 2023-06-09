import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="about-cont py-5">
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
        <button className="about-knowmore-btn">Know More</button>
      </div>
    </div>
  );
};

export default About;
