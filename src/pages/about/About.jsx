import React from "react";
import { Link } from "react-router-dom";
import "./about.css";
const About = () => {
  return (
    <>
      <div className="about">
        <section className="hero  ">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-12   mb-4">
                <div className=" ">
                  <h3 className="hero-header cont-header  pb-4 ">
                    About WinStarIT: Cloud Expert
                    <span>Team </span>
                  </h3>
                  <p className="cont-paras  ">
                    We are a web and digital marketing agency that helps
                    businesses grow online. We are passionate about helping
                    businesses achieve their goals and objectives through
                    effective online marketing strategies. We have a team of
                    experienced and talented professionals who are dedicated to
                    delivering quality services to our clients.
                  </p>
                  <p className="cont-paras  ">
                    We are a web and digital marketing agency that helps
                    businesses grow online. We are passionate about helping
                    businesses achieve their goals and objectives through
                    effective online marketing strategies. We have a team of
                    experienced and talented professionals who are dedicated to
                    delivering quality services to our clients.
                  </p>
                </div>
                <div className=""></div>
                <Link to="/book" className="btn button me-5 rounded-3 ">
                  Book a Call!
                </Link>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="ft">
                  <div className="tops">
                    <img src="/public/images/1f44b.svg" alt="" />
                    <p>
                      Exclusive Guide: 4 Ways To Skyrocket Your Organic Traffic
                      With Content Writing!
                    </p>
                  </div>
                  <div className="form">
                    <form>
                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="text"
                          id="form4Example1"
                          className="form-control"
                          placeholder="Name"
                          required
                        />
                      </div>
                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="email"
                          id="form4Example2"
                          className="form-control"
                          placeholder="Email Address"
                          required
                        />
                      </div>
                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="text"
                          id="form4Example2"
                          className="form-control"
                          placeholder="Phone Number"
                          required
                        />
                      </div>
                    </form>
                    <button className="btn button ">Find Out</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-5 pb-5 misvis">
          <div className="container">
            <div className="row">
              <div className="col-md-6 ">
                <div className="misson">
                  <h1>Mission</h1>
                  <p>
                    The Mission of WinstarIT is to supply pragmatic and
                    cost-effective Business Consulting, IT-enabled Services /
                    Solutions, and Products that deliver pre-determined and
                    tangible results to our global customers.
                  </p>
                </div>
              </div>
              <div className="col-md-6 p-3">
                <div className="misson">
                  <h1>Vision</h1>
                  <p>
                    We are committed to providing world-class products and
                    services which will disrupt the established order and exceed
                    expectations for quality, value, and reliability while
                    constantly achieving operational excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="teme">
          <div className="tems container">
            <div className="tems-head">
              <h5>OUR</h5>
              <h2>Awesome Team</h2>
              <p>
                We are a very helpful and hardworking team and contact us to see
                action of our service.
              </p>
            </div>
            <div className="tems-member pt-5">
              <div className="row">
                <div className="col-md-3 m-3 member1">
                  <img
                    src="https://winstarit.com/wp-content/uploads/2021/11/ashikprofile.png"
                    alt=""
                  />
                  <h3>Md Rashidul Islam</h3>
                  <p>Founder and CEO</p>
                </div>
                <div className="col-md-3 m-3 member1">
                  <img
                    src="https://winstarit.com/wp-content/uploads/2021/11/ashikprofile.png"
                    alt=""
                  />
                  <h3>Md Rashidul Islam</h3>
                  <p>Founder and CEO</p>
                </div>
                <div className="col-md-3 m-3 member1">
                  <img
                    src="https://winstarit.com/wp-content/uploads/2021/11/ashikprofile.png"
                    alt=""
                  />
                  <h3>Md Rashidul Islam</h3>
                  <p>Founder and CEO</p>
                </div>
                <div className="col-md-3 m-3 member1">
                  <img
                    src="https://winstarit.com/wp-content/uploads/2021/11/ashikprofile.png"
                    alt=""
                  />
                  <h3>Md Rashidul Islam</h3>
                  <p>Founder and CEO</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
