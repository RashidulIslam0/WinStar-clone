import React from "react";
import "./development.css";
import { Link } from "react-router-dom";
import Portfolio from "../Portfolio/Portfolio";
const Development = () => {
  return (
    <>
      <section className="dev-top ">
        <div className="container ">
          <div className="row">
            <div className="col-md-6 dev-top-left">
              <h1>WordPress Web Development</h1>
              <p>
                We are an expert web developer freelance team. Click the live
                chat button to talk about your business. We will design and
                develop high quality websites for your dream business.
              </p>
              <div className="mt-5">
                <button className="btn button me-lg-5  ">Check Pricing</button>
                <Link to="/chats" className="btn button ms-lg-4 ">
                  Live Chat
                </Link>
              </div>
            </div>
            <div className="col-md-6 dev-top-right ">
              <img
                src="https://winstarit.com/wp-content/uploads/2020/12/Font-image.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="dev-send ">
        <div className="container ">
          <div className="row mt-5 mb-5 ">
            <div className="col-md-6 pb-5 dev-send-left ">
              <img
                src="https://winstarit.com/wp-content/uploads/2020/12/website-mockup.png"
                alt=""
              />
            </div>

            <div className="col-md-6 dev-send-right">
              <p>
                We can create pixel perfect and responsive web design for our
                client’s business website, in order that they can get more
                customers and generate leads.
              </p>
              <p>
                We completely understand your business category and make an
                internet design, which is consistent with your site requirements
                and allows you to stand aside from the gang. Our web designers
                make amazing designs which will fulfill your dream of getting a
                singular brand recognition and identity.
              </p>
              <p>
                Committed to delivering versatile web development services with
                full customer contentment, we give true value to your project
                your investment with the execution of enterprise-class theming &
                integration services. Our professional team is admired globally
                to satisfy clients’ complex needs thoroughly.
              </p>
              <p>
                Strengthen your foothold within the online world with help of
                our core expertise in advanced web development technology. Our
                multifaceted & prolific approach will carve a singular image of
                your business that tends to form your brand famous and renowned
                worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="dev-process">
        <div className="container">
          <div className="pro-top">
            <h5>OUR</h5>
            <h2>Special Working Process</h2>
          </div>
          <div className="pro-bot">
            <div className="row">
              <div className="col-12 pro-card p-4 col-lg-4">
                <div className="row">
                  <div className="col-2">
                    <img
                      src="https://winstarit.com/wp-content/uploads/2020/12/01.png"
                      alt=""
                    />
                  </div>
                  <div className="col-10">
                    <h3>Idea</h3>
                    <p>
                      To research the need through in-depth research with the
                      assistance of brilliant tools.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 pro-card p-4 col-lg-4">
                <div className="row">
                  <div className="col-2">
                    <img
                      src="https://winstarit.com/wp-content/uploads/2020/12/02.png"
                      alt=""
                    />
                  </div>
                  <div className="col-10">
                    <h3>Sketch</h3>
                    <p>
                      To draft the planning that’s associated with the research
                      so as to see the feasibility.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 pro-card p-4 col-lg-4">
                <div className="row">
                  <div className="col-2">
                    <img
                      src="https://winstarit.com/wp-content/uploads/2020/12/03.png"
                      alt=""
                    />
                  </div>
                  <div className="col-10">
                    <h3>Design</h3>
                    <p>
                      After completing the feasibility test, a final design is
                      ready by using smart tools.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 pro-card p-4 col-lg-4">
                <div className="row">
                  <div className="col-2">
                    <img
                      src="https://winstarit.com/wp-content/uploads/2020/12/04.png"
                      alt=""
                    />
                  </div>
                  <div className="col-10">
                    <h3>Develop</h3>
                    <p>
                      Now, our development team starts developing the answer
                      consistent with design.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 pro-card p-4 col-lg-4">
                <div className="row">
                  <div className="col-2">
                    <img
                      src="https://winstarit.com/wp-content/uploads/2020/12/05.png"
                      alt=""
                    />
                  </div>
                  <div className="col-10">
                    <h3>Test</h3>
                    <p>
                      Within the testing phase, we test every component to form
                      sure that our solution fits the need.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 pro-card p-4 col-lg-4">
                <div className="row">
                  <div className="col-2">
                    <img
                      src="https://winstarit.com/wp-content/uploads/2020/12/06.png"
                      alt=""
                    />
                  </div>
                  <div className="col-10">
                    <h3>Finalizing</h3>
                    <p>
                      We make the delivery for the answer and assist our clients
                      to regulate and administer the solution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" dev-price">
        <div className="container">
          <div className="row">
            <div className="section-title pro-top pt-5 text-center">
              <h5> Our </h5>
              <h2>Pricing</h2>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="pricingTable pricingTable-2">
                <div className="pricingTable-header">
                  <h3 className="title">Silver</h3>
                  <h5 className="price-month">Content Ranking Guarantee</h5>
                  <h1 className="price-value">$375</h1>
                </div>
                <ul className="pricing-content  ps-5">
                  <li>Total 25000 Words</li>
                  <li>Per 1000/w = $15 / 1200 BDT</li>
                  <li>Professional Writers</li>
                  <li>SEO Purpose</li>
                  <li>Quick Proofread</li>
                  <li>Revision 02</li>
                  <li>Standard Support</li>
                  <li>Premium Grammarly Check</li>
                  <li>Plagarisim Check</li>
                  <li>Editorial Check</li>
                  <li>30 Days</li>
                </ul>
                <Link to="/chats" className="btn button rounded-3">
                  Start Live Chat
                </Link>
              </div>
            </div>

            {/* END COL  */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="pricingTable price-gold pricingTabletop pricingTable-2">
                <div className="pricingTable-header">
                  <h3 className="title">Gold</h3>
                  <h5 className="price-month">Content Ranking Guarantee</h5>
                  <h1 className="price-value">$550</h1>
                </div>
                <ul class="pricing-content  ps-5">
                  <li>Total 25000 Words</li>
                  <li>Per 1000/w = $15 / 1200 BDT</li>
                  <li>Executive Writers</li>
                  <li>Blog Purpose</li>
                  <li>Expert Proofread</li>
                  <li>Revision 03</li>

                  <li>Top-Notce Support</li>
                  <li>Premium Grammarly Check</li>
                  <li>Plagarisim Check</li>
                  <li>Editorial Check</li>
                  <li>30 Days</li>
                </ul>
                <Link to="/chats" className="btn button rounded-3">
                  Start Live Chat
                </Link>
              </div>
            </div>
            {/* END COL  */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="pricingTable pricingTable-2">
                <div className="pricingTable-header">
                  <h3 className="title">Platinum</h3>
                  <h5 className="price-month">Content Ranking Guarantee</h5>
                  <h1 className="price-value">$750</h1>
                </div>
                <ul className="pricing-content  ps-5">
                  <li>Total 25000 Words</li>
                  <li>Per 1000/w = $15 / 1200 BDT</li>
                  <li>Top Notce Writers</li>
                  <li>Website Content</li>
                  <li>Expert Proofread</li>
                  <li>Revision 05</li>

                  <li>On-Demand Support</li>
                  <li>Premium Grammarly Check</li>
                  <li>Plagarisim Check</li>
                  <li>Editorial Check</li>
                  <li>30 Days</li>
                </ul>
                <Link to="/chats" className="btn button rounded-3">
                  Start Live Chat
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" dev-Work">
        <Portfolio />
      </section>
    </>
  );
};

export default Development;
