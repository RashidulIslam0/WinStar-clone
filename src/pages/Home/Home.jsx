import React from "react";
import "./home.css";
import { skills } from "../../db.json";
import { hero, teams, teamsimg, work, call, feedback } from "../../db.json";
import { Link } from "react-router-dom";
import Service from "../../Components/Carouselsss/Carousels";

const Home = () => {
  return (
    <>
      <section className="hero ">
        <div className="container">
          <div className="row">
            {hero.map((heros) => (
              <div className="col-lg-8 col-md-8 col-sm-12  mb-4">
                <div className="top d-flex ">
                  <img src={heros.image} alt="" />
                  <h6>{heros.wlc}</h6>
                </div>
                <div className="">
                  <h3 className="hero-header">
                    WinStar Team: Grow your business with <span>Winstarit</span>{" "}
                    .
                  </h3>
                  <p className="hero-para">{heros.dis}</p>
                </div>

                <Link to="/book" className="btn button ">
                  {heros.button}
                </Link>
              </div>
            ))}

            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="ft">
                <div className="tops">
                  <img src="/public/images/1f44b.svg" alt="" />
                  <p> WinStar Gift: Get your business M-Audit report Free!</p>
                </div>
                <div className="form">
                  <form>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="text"
                        id="form4Example1"
                        className="form-control"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="email"
                        id="form4Example2"
                        className="form-control"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="text"
                        id="form4Example2"
                        className="form-control"
                        placeholder="Phone Number"
                        required
                      />
                    </div>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="text"
                        id="form4Example2"
                        className="form-control"
                        placeholder="Website Url"
                        required
                      />
                    </div>
                  </form>
                  <button className="btn button ">Find Out</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skile">
        <div className="container mt-5 mb-3">
          <div className="row row-cols-1 row-cols-md-4">
            {skills.map((skill) => (
              <div className="col link  mb-4" key={skill.id}>
                <Link to={skill.link ? skill.link : "#"}>
                  {/* Check if a link is provided */}
                  <div className="card p-3 mb-2">
                    <div className="d-flex justify-content-between">
                      <div className="badge">
                        <img src={skill.image} alt="" />
                      </div>
                    </div>
                    <div className="mt-5">
                      <h3 className="heading">{skill.dis}</h3>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Service />

      <section className="team">
        <div className="container mt-5">
          <div className="team-head text-center mb-4">
            <h1>High Quality Team</h1>
            <p>
              We’re dedicated to providing you with the highest quality service
              possible.
            </p>
          </div>
          <div className="row row-cols-1 row-cols-md-4">
            {teams.map((team) => (
              <div className="col trim text-center" key={team.id}>
                <div className="card mb-4 shadow-sm">
                  <img
                    src={team.image}
                    className="card-img-top w-25"
                    alt={team.header}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{team.header}</h5>
                    <p className="card-text">{team.dis}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-md-6">
              {teamsimg.map((team) => (
                <div className="col-md-10" key={team.id}>
                  <div className="card mb-4 shadow-sm">
                    <div className="card-body">
                      <h5 className="card-titles">Developer Skills</h5>
                      <div className="">
                        <img
                          src={team.image}
                          className="card-img w-100"
                          alt={team.header}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="work">
        <div className="container-fluid mt-5 pt-5">
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://i.vimeocdn.com/video/1459909987-29cf72457bd40c1735e9d7b64c6ff45b094c88a637461170ca59b0a076e05406-d?mw=600&mh=338"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 work-right">
              <div className="top d-flex ">
                <img src="/public/images/1f44b.svg" alt="" />
                <h6 className="work-head">Why work with us?</h6>
              </div>
              {work.map((skill) => (
                <div className="col-md-12 mb-3" key={skill.id}>
                  <div className="card workss ps-3 p-1 mb-3">
                    <div className="d-flex ">
                      <div className="badges">
                        <img src={skill.image} alt="" />
                        <p>{skill.workdis}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="call">
        <div className="call-name">
          {call.map((skill) => (
            <div className="" key={skill.id}>
              <div
                className="col-lg-12 col-md-12 col-sm-12 mb-4 "
                key={skill.id}
              >
                <div className="call-name ">
                  <div className="">
                    <div className="d-flex justify-content-between">
                      <div className="call-title d-flex text-center m-0 m-auto justify-content-center">
                        <img src={skill.image} alt="" className="mr-2" />
                        <p>{skill.callname}</p>
                      </div>
                    </div>
                    <div className="btn button mt-3">{skill.button}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="feedback">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <div className="feedback-header text-center">
                <h4>Client Feedback</h4>
                <h2>Satisfied Clients</h2>
                <p>What say our clients!</p>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-3">
            {feedback.map((feedbacks) => (
              <div className="col mb-4" key={feedbacks.id}>
                <div className="card  m-3 mb-4 shadow-sm">
                  <div className="card-body feedback-body">
                    <div className="text-center p-4">
                      <img
                        src={feedbacks.image}
                        className="card-imgs img-fluid"
                        alt={feedbacks.header}
                      />
                      <h3>{feedbacks.name}</h3>
                      <h5>{feedbacks.skill}</h5>
                      <img
                        src={feedbacks["rating "]}
                        alt={feedbacks.header}
                        className="rating-img pb-2"
                      />
                      <p>{feedbacks.comment}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
