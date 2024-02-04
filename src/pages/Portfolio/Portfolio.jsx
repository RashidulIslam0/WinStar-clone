import React from "react";
import { Portfolios } from "../../db.json";
import "./portfolio.css";
const Portfolio = () => {
  return (
    <div>
      <div className="port-top">
        <h2>Our Creative Work</h2>
      </div>
      <div className="port-bootom container">
        <div className="row ">
          {Portfolios.map((portfolio) => (
            <div className="col-md-4 bordesr" key={portfolio.id}>
              <div className="port-dis p-3 mb-2">
                <div className="port-img">
                  <img src={portfolio.img} alt={portfolio.imghead} />
                </div>
                <div className="mt-3">
                  <h3 className="heading">{portfolio.imghead}</h3>
                </div>
                <div className="d-flex  port-dise pb-3">
                  <h6>{portfolio.project}</h6>
                  <p>{portfolio.cat}</p>
                </div>
                <div className="port-btn d-grid gap-2 d-md-flex justify-content-md-end">
                  <button className="btn button  ">{portfolio.butt}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
