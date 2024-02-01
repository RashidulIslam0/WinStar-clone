import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <div className="footer-top">
        <div className="desing">
          <h1>100% Satisfaction Guarantee</h1>
          <p>
            Did you know that WinStarIT offers satisfaction guarantee. If you
            don’t enjoy your services don’t worry, we’ll give you a refund. We
            are confident that you won’t regret your order! See what our current
            customers are saying about us on clutch.co
          </p>
          <div className=""></div>
          <div class="flex-container">
            <img src="/public/images/1f44b.svg" alt="" />
            <h3>Book A Call with “Md Rashidul Islam”</h3>
          </div>

          <div className="buttons">
            <button className="btn button " type="submit">
              Book a Call!
            </button>
          </div>
        </div>
      </div>

      <div className="footer-middle">
        <div className="row footer-desing">
          <div className="col-3">
            <div className="img">
              <img src="/public//images/Logo-Winstarit-.png" alt="" />
            </div>
            <hr />
            <p>
              WinStarIT is an expert freelance team to grow your business and
              increase your revenue.
            </p>
            <div className="socal">
              <ul>
                <li>
                  <FontAwesomeIcon icon="fa-brands fa-facebook" />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-3">hq</div>
          <div className="col-3">qqq</div>
          <div className="col-3">qqsd</div>
        </div>
      </div>

      <div className="footer-bottom ">
        <div className="text-center p-3">
          © 2020 Copyright: Md Rashidul Islam
          <a className="text-body"></a>
        </div>
      </div>
    </>
  );
};

export default Footer;
