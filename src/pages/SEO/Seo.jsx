import React from "react";
import { Link } from "react-router-dom";
import "./seo.css";
import Card from "../../Components/Card/Card";
import Price from "../../Components/price/Price";
import Service from "../../Components/SERVICE/Service";
function Seo() {
  return (
    <div>
      <section className="hero ">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12   mb-4">
              <div className=" ">
                <h3 className="hero-header pb-4 ">
                  WinStar SEO Service: Rank your website on{" "}
                  <span>Google 1st page!</span> .
                </h3>
                <p className="hero-paras  ">
                  Get Your Website to the Top of Google With WinStar SEO
                  Service, you can get your website ranking on the first page of
                  Google. We use the latest techniques and strategies to help
                  you get the most out of your website.
                </p>
                <br />
                <p className="hero-paras ">
                  Professional SEO service with Guaranteed Results! Boost Your
                  Traffic & Ranking from Today. Winstarit works differently than
                  other SEO agencies.
                </p>
                <br />
                <p className="pb-5">
                  <span className="red"> Note:</span> Too much backlinking is
                  not good in 2022 and can cause your website to be penalized.
                </p>
              </div>
              <div className=""></div>
              <Link to="/book" className="btn button me-5 rounded-3 ">
                Book a Call!
              </Link>
              <Link className="btn button ms-5 rounded-3   ">Ask Pricing!</Link>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="ft">
                <div className="tops">
                  <img src="/public/images/1f44b.svg" alt="" />
                  <p>
                    Claim Your Free Online Visibility Audit Report! – (Manually
                    Audit)
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
        </div>
      </section>
      <section className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <Card
              title="Keyword"
              dis="We find low cometition keywords for our client"
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <Card
              title="Search Engines"
              dis="We rank high on search engines for clients projects"
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <Card
              title="Traffic"
              dis="We drive targeted traffic to clients website"
            />
          </div>
        </div>
      </section>

      <section className="Plans ">
        <Price />
      </section>
      <section className="service">
        <Service />
      </section>
    </div>
  );
}

export default Seo;
