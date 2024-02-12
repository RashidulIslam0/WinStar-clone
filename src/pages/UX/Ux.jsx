import React from "react";
import { Link } from "react-router-dom";
import "./uxui.css";
const UxUi = () => {
  return (
    <>
      <section className="dev-top  pb-5">
        <div className="container ">
          <div className="row">
            <div className="col-md-6 dev-top-left">
              <h1>Design creative UI/UX with WinStarIT</h1>
              <p>
                We are a creative design agency and we will create clean and
                modern design for your business with extra care. Feel free to
                discuss any idea right now! Go Live Chat…
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
                className="h-75 m-5"
                src="https://winstarit.com/wp-content/uploads/2020/12/mobile-app_81.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="dev-tops  pt-5 ">
        <div className="container ">
          <div className="row">
            <div class="col-md-5 gp-left">
              <img
                class="h-50 m-5"
                src="https://winstarit.com/wp-content/uploads/2020/12/mobile-app_91.png"
                alt=""
              />
            </div>

            <div className="col-md-6  gp-right ">
              <h1>How do we help?</h1>
              <div className="">
                <img
                  src="https://winstarit.com/wp-content/uploads/2020/12/icon-text.png"
                  alt=""
                />
                <p>
                  With WinStarIT world cClarify and discuss your business &
                  challenges
                </p>
              </div>
              <div className="">
                <img
                  src="https://winstarit.com/wp-content/uploads/2020/12/icon-text.png"
                  alt=""
                />
                <p>Research + wireframe + visual mood board</p>
              </div>
              <div className="">
                <img
                  src="https://winstarit.com/wp-content/uploads/2020/12/icon-text.png"
                  alt=""
                />
                <p>Create user-centric & visually pleasing design</p>
              </div>
              <div className="">
                <img
                  src="https://winstarit.com/wp-content/uploads/2020/12/icon-text.png"
                  alt=""
                />
                <p>You review, I send iterations, you are happy, we are done</p>
              </div>
              <div className="">
                <img
                  src="https://winstarit.com/wp-content/uploads/2020/12/icon-text.png"
                  alt=""
                />
                <p>
                  lass SEO Service, your dream business gets an effective
                  solutions to SEO that includes:
                </p>
              </div>
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
                    <h3>Research</h3>
                    <p>
                      Listen to stakeholders & understand business objectives
                      and requirements and do detailed research on the subject &
                      existing apps.
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
                    <h3>Architecture</h3>
                    <p>
                      Construct a point of view based on customers’ needs and
                      insights. Create a flowchart or a roadmap to broad app
                      functionality.
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
                    <h3>Wireframing</h3>
                    <p>
                      Brainstorming many possible solutions with sketches
                      followed by wireframes.
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
                    <h3>UX Testing</h3>
                    <p>
                      Create an interface functional prototype of the wireframe
                      to see it the planned functionality works effectively.
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
                    <h3>UI Design</h3>
                    <p>
                      Final layout design, visual asset creation including
                      colors, icons and illustration.
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
                    <h3>Finalized</h3>
                    <p>
                      Create an interactive prototype and test user interface
                      and create feedback and solutions.
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
    </>
  );
};

export default UxUi;
