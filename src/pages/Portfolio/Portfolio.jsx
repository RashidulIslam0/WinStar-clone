// import React from "react";
// import { Portfolios } from "../../db.json";

// const Portfolio = () => {
//   return (
//     <div>
//       <div className="port-top">
//         <h2>Our Creative Work</h2>
//       </div>
//       <div className="port-bootom">
//         <div className="row">
//           {Portfolios.map((ports) => (
//             <div className="col-md-4" key={ports.id}>
//               <div className="card p-3 mb-2">
//                 <div className="d-flex justify-content-between">
//                   <div className="badge">
//                     <img src={ports.img} alt="img" />
//                   </div>
//                 </div>
//                 <div className="mt-5">
//                   <h3 className="heading">{ports.imghead}</h3>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;

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
                  <p>{portfolio.project}</p>
                  <button className="btn button ">{portfolio.butt}</button>
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
