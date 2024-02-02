import React from "react";
import "./home.css";
const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="row ">
          <div className="col-8 heros">
            <div className="top d-flex ">
              <img src="/public/images/1f44b.svg" alt="" />
              <h6>Welcome to Winstarit</h6>
            </div>
            <div className="">
              <h3 className="hero-header">
                WinStar Team: Grow your business with <span>Winstarit</span> .
              </h3>
              <p className="hero-para">
                You’re here because you want to grow your business. You want
                more customers, more sales, and more success. But you don’t know
                how to get there. You’ve tried all the traditional marketing
                techniques, but they’re not working like they used to. You need
                something new, something that will reach your target audience
                and persuade them to buy from you. That’s where we come in.
              </p>
            </div>

            <button className="btn button ">Book a Call!</button>
          </div>
          <div className="col-4">
            <div className="ft">
              <div className="tops">
                <img src="/public/images/1f44b.svg" alt="" />
                <p> WinStar Gift: Get your business M-Audit report Free!</p>
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
                  {/* Email input */}
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
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input
                      type="text"
                      id="form4Example2"
                      className="form-control"
                      placeholder="Website Url"
                      required
                    />
                  </div>
                </form>
                <button className="btn button ">Find Out</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skile"></section>
    </>
  );
};

export default Home;
