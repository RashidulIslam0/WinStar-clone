import React from "react";
import { Link } from "react-router-dom";

function Service() {
  return (
    <>
      {/* Carousel wrapper */}
      <div
        id="carouselBasicExample"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselBasicExample"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselBasicExample"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselBasicExample"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          />
        </div>
        {/* Inner */}
        <div className="carousel-inner">
          {/* Single item */}
          <Link to="/tutul" className="carousel-item active">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp"
              className="d-block w-100"
              alt="Sunset Over the City"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>WordPress</h1>
              <p>Build and grow your website with the best way to WordPress</p>
              <button className="btn  button">Get started</button>
            </div>
          </Link>
          {/* Single item */}
          <div className="carousel-item">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp"
              className="d-block w-100"
              alt="Canyon at Night"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          {/* Single item */}
          <div className="carousel-item">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp"
              className="d-block w-100"
              alt="Cliff Above a Stormy Sea"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselBasicExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselBasicExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Carousel wrapper */}
    </>
  );
}

export default Service;
