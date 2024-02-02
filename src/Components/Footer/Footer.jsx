import React from "react";
import "./footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
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
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <div className="img">
                  <img
                    src="/public//images/Logo-Winstarit-.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <hr />
                <h5>
                  WinStarIT is an expert freelance team to grow your business
                  and increase your revenue.
                </h5>
                <div className="social">
                  <ul className="list-unstyled d-flex ">
                    <li className="lcon">
                      <FacebookOutlinedIcon />
                    </li>
                    <li className="lcon">
                      <XIcon />
                    </li>
                    <li className="lcon">
                      <InstagramIcon />
                    </li>
                    <li className="lcon">
                      <LinkedInIcon />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <div className="head">
                  <p>Company</p>
                </div>
                <hr />

                <div className="texts">
                  <ul className="list-unstyled ">
                    <li className="text">About</li>
                    <li className="text">Contact</li>
                    <li className="text">Blog</li>
                    <li className="text">Live Chat</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <div className="head">
                  <p>Services</p>
                </div>
                <hr />

                <div className="texts">
                  <ul className="list-unstyled ">
                    <li className="text">Web Development</li>
                    <li className="text">Graphic & UI/UX Design</li>
                    <li className="text">SEO & Digital Marketing</li>
                    <li className="text">Portfolio</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <div className="head">
                  <p>Newsletter </p>
                </div>
                <hr />

                <div className="textss">
                  <p className="sub">Subscribe our newsletter</p>
                  <form action="">
                    <input type="text" placeholder="Email" className="input" />
                    <button className="btn button ">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
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
