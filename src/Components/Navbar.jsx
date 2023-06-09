import React from "react";
import "./Navbar.css"
import mainLogo from "../assets/lodhagroup-logo.png";

const Navbar = () => {
  return (
    <div className="sticky-pos">
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between p-3">
        <div className="nav-item" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">Menu</div>
        <div className="nav-item">
          <img src={mainLogo} alt="Logo" />
        </div>
        <div className="nav-item">Optional</div>
      </nav>

      <div
        className="offcanvas offcanvas-start"
        tabindex="-1"
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
        <div>
            <ul>
                <li>Blogs</li>
                <li>Blogs</li>
                <li>Blogs</li>
                <li>Blogs</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
