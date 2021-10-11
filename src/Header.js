import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expanded-lg bg-dark navbar-dark py-3 fixed-top">
      <div className="container ">
        <a href="#a" className="navbar-brand">
          Book Shop
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#main" className="nav-link">
                Main Menu
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
