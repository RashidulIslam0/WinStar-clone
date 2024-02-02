import React from "react";
import "./header.css";
const Header = () => {
  return (
    <>
      <nav className="navbar  navbar-expand-lg sticky-top ">
        <div className="container-fluid">
          <a className=" img " href="#">
            <img
              className="imgs"
              src="/public/images/Logo-Winstarit--300x85.png"
              alt
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>

            <button className="btn button " type="submit">
              Login
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
