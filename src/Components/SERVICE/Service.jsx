import React from "react";
import "./services.css";
const Service = (props) => {
  return (
    <>
      <div classname="container">
        <h1 className="text-center pt-5 ">
          WINSTARIT SEO SERVICE PACKAGES & PRICING
        </h1>
        <div className="container table-responsive pt-5  pb-5">
          <table className="table table-bordered table-hover text-center">
            <thead className="thead">
              <tr>
                <th scope="col">Features</th>
                <th scope="col">Bronze</th>
                <th scope="col">Silver</th>
                <th scope="col">Gold</th>
                <th scope="col">Enterprise</th>
              </tr>
            </thead>
            <tbody className="tbody">
              <tr>
                <td>Allowed Websites</td>
                <td>01</td>
                <td>01</td>
                <td>01</td>
                <td>Custom</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="PRICINg ">
        <div className="container">
          <div className="row ">
            <div className="col-md-6">
              <div className="col-md-12">
                <div class="accordion ">
                  <div class="accordion-item mb-4">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne"
                      >
                        How Modern SEO Works?
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      class="accordion-collapse collapse show"
                    >
                      <div class="accordion-body">
                        <p>
                          SEO is the only process of ranking a website higher on
                          Google through a combination of three steps.
                        </p>
                        <ul>
                          <li>
                            Getting other related sites to hyperlink to you so
                            Google trusts your service or products
                          </li>
                          <li>
                            Creating unique content on your website so you can
                            rank for different keywords.
                          </li>
                        </ul>
                        <p>
                          <span>Note:</span>Too much backlinking is not good in
                          2022 and can cause your website to be penalized.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo"
                      >
                        How long does it take to start seeing results?
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTwo"
                      class="accordion-collapse collapse"
                    >
                      <div class="accordion-body">
                        <p>
                          This is completely dependent on your website’s factors
                          such as; domain age, current rankings, and previous
                          optimization (good or bad) But, it also depends on the
                          competition. The higher the competition is the longer
                          it takes to get results. It usually takes 9-10 weeks
                          to start seeing results. It is not possible to rank
                          overnight in Google.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="col-md-12">
                <div class="accordion ">
                  <div class="accordion-item mb-4">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne"
                      >
                        How Modern SEO Works?
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      class="accordion-collapse collapse show"
                    >
                      <div class="accordion-body">
                        <p>
                          SEO is the only process of ranking a website higher on
                          Google through a combination of three steps.
                        </p>
                        <ul>
                          <li>
                            Getting other related sites to hyperlink to you so
                            Google trusts your service or products
                          </li>
                          <li>
                            Creating unique content on your website so you can
                            rank for different keywords.
                          </li>
                        </ul>
                        <p>
                          <span>Note:</span>Too much backlinking is not good in
                          2022 and can cause your website to be penalized.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwos"
                      >
                        How long does it take to start seeing results?
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTwos"
                      class="accordion-collapse collapse"
                    >
                      <div class="accordion-body">
                        <p>
                          This is completely dependent on your website’s factors
                          such as; domain age, current rankings, and previous
                          optimization (good or bad) But, it also depends on the
                          competition. The higher the competition is the longer
                          it takes to get results. It usually takes 9-10 weeks
                          to start seeing results. It is not possible to rank
                          overnight in Google.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
