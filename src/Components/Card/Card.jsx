import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className=" card-all  mt-4 mb-4">
            <div className="card p-3">
              <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.dis}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
