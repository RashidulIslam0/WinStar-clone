// import React from "react";

// const Work = (props) => {
//   return (
//     <>
//       <section className="works container">
//         <div className="row">
//           <div className="card-all   col-sm-12  mt-4 mb-4">
//             <div className="card p-3">
//               <div className="card-body">
//                 <img className="w-25 pb-4" src={props.img} alt="" />
//                 <h5 className="card-title">{props.title}</h5>
//                 <p className="card-text pb-3">{props.dis}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Work;

import React from "react";

const Work = (props) => {
  return (
    <>
      <section className="works container">
        <div className="row">
          <div className="col-12   mt-4 mb-4">
            <div className="card p-3">
              <div className="card-body">
                <img className="w-100 pb-4" src={props.img} alt={props.title} />
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text pb-3">{props.dis}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
