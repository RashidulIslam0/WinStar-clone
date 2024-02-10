import React from "react";
import "./price.css";

const Price = () => {
  return (
    <>
      <section id="pricing" className="our_pricing section-padding">
        <div className="container">
          <div className="row">
            <div class="section-title text-center">
              <h1 class="section-title-white">OUR</h1>
              <p class="section-title-white">Plans & Pricing</p>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="pricingTable pricingTable-2">
                <div class="pricingTable-header">
                  <h3 class="title">BRONZE PLAN</h3>
                  <h5 class="price-month">MINIMUM 6 MONTHS CONTRACT</h5>
                  <h1 class="price-value">$650/month</h1>
                </div>
                <ul class="pricing-content text-start ps-5">
                  <li>
                    <samp class="icon">✓ </samp> Onpage SEO: Complete
                  </li>
                  <li>
                    <samp class="icon">✓ </samp> 10 Keyword Research
                  </li>
                  <li>
                    <samp class="icon">✓ </samp> 3 contextual and editorial
                    guest posts
                  </li>
                  <li>
                    <samp class="icon">✓ </samp> Dedicated SEO Account Manager
                  </li>
                  <li>
                    <samp class="icon">✓ </samp> Dedicated client dashboard
                  </li>
                  <li>
                    <samp class="icons">✗ </samp> Monthly Report
                  </li>
                </ul>
                <a href="#" class="btn button rounded-3">
                  Send me a proposal
                </a>
              </div>
            </div>
            {/* END COL  */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="pricingTable pricingTabletop pricingTable-2">
                <div className="pricingTable-header">
                  <h3 className="title">SILVER PLAN</h3>
                  <h5 className="price-month">MINIMUM 6 MONTHS CONTRACT</h5>
                  <h1 className="price-value">$1150/month</h1>
                </div>
                <ul className="pricing-contents  text-start ps-5 ">
                  <li className="li">
                    <samp className="icon">✓ </samp> Onpage SEO : Complete
                  </li>
                  <li>
                    <samp className="icon">✓ </samp> 25 Keyword Research
                  </li>
                  <li>
                    <samp className="icon">✓ </samp> 6 contextual and editorial
                    guest posts
                  </li>
                  <li>
                    <samp className="icon">✓ </samp> Dedicated SEO Account
                    Manager
                  </li>
                  <li>
                    <samp className="icon">✓ </samp> Dedicated client dashboard
                  </li>
                  <li>
                    <samp className="icon">✓ </samp> Monthly Report
                  </li>
                </ul>
                <a href="#" className="btn button rounded-3">
                  Send me a proposa
                </a>
              </div>
            </div>
            {/* END COL  */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="pricingTable pricingTable-2">
                <div className="pricingTable-header">
                  <h3 className="title">GOLD PLAN</h3>
                  <h5 className="price-month">MINIMUM 6 MONTHS CONTRACT</h5>
                  <h1 className="price-value">$2150/month</h1>
                </div>
                <ul className="pricing-content  text-start ps-5 ">
                  <li className="li">
                    <samp className="icon">✓ </samp> Onpage SEO : Complete
                  </li>
                  <li>
                    <samp className="icon">✓ </samp> 25 Keyword Research
                  </li>
                  <li>
                    <samp className="icon">✓ </samp> 6 contextual and editorial
                    guest posts
                  </li>
                  <li>
                    <samp className="icon">✓ </samp> Dedicated SEO Account
                    Manager
                  </li>
                  <li>
                    <samp className="icon">✓ </samp> Dedicated client dashboard
                  </li>
                  <li>
                    <samp className="icon">✓ </samp> Monthly Report
                  </li>
                </ul>
                <a href="#" className="btn button rounded-3">
                  Send me a proposa
                </a>
              </div>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-lg-4 col-md-6 col-sm-12 price-list">
              <h5>We’ve generate over</h5>
              <h3>$59,825,840</h3>
              <p>in client Revenue</p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 price-list">
              <h5>We’ve generate over</h5>
              <h3>$59,825,840</h3>
              <p>in client Revenue</p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 price-list">
              <h5>We’ve generate over</h5>
              <h3>$59,825,840</h3>
              <p>in client Revenue</p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12"></div>

            <div className="col-lg-4 col-md-6 col-sm-12"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Price;
