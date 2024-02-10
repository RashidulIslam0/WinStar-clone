import React from "react";
import "./price.css";

const ContPrice = () => {
  return (
    <>
      <section id="pricing" className="our_pricing section-padding">
        <div className="container">
          <div className="row">
            <div class="section-title pt-5 text-center">
              <h1 class="section-title"> Our Best Pricing</h1>
              <p class="section-title">
                We want to ensure that our products and services are accessible
                to everyone, so we offer a variety of pricing plans to
                accommodate your needs.
              </p>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="pricingTable pricingTable-2">
                <div class="pricingTable-header">
                  <h3 class="title">Silver</h3>
                  <h5 class="price-month">Content Ranking Guarantee</h5>
                  <h1 class="price-value">$375</h1>
                </div>
                <ul class="pricing-content  ps-5">
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
                <a href="#" class="btn button rounded-3">
                  Take This Package
                </a>
              </div>
            </div>
            {/* END COL  */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="pricingTable pricingTabletop pricingTable-2">
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
                <a href="#" class="btn button rounded-3">
                  Take This Package
                </a>
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
                <ul class="pricing-content  ps-5">
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
                <a href="#" class="btn button rounded-3">
                  Take This Package
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContPrice;
