import React from "react";
import { Link } from "react-router-dom";
import "./content.css";
import ContentCard from "../../Components/Card/Content_card";
import Card from "../../Components/Card/Card";
import Price from "../../Components/price/Price";
import ContPrice from "../../Components/price/Cont-price";
import Work from "../../Components/work/work";
const Content = (props) => {
  return (
    <>
      <section className="hero  ">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12   mb-4">
              <div className=" ">
                <h3 className="hero-header cont-header  pb-4 ">
                  WinStar Content: Search Engine Optimized and Reader-Friendly
                  <span>Content Writing </span> Service .
                </h3>
                <p className="cont-paras  ">
                  Looking to improve your website’s visibility and SEO? Look no
                  further than a content writing service that delivers
                  high-quality, search engine optimized and reader-friendly
                  content. These services can help you create engaging and
                  informative articles that will help your website rank higher
                  in search engines.
                </p>
              </div>
              <div className=""></div>
              <Link to="/book" className="btn button me-5 rounded-3 ">
                Book a Call!
              </Link>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="ft">
                <div className="tops">
                  <img src="/public/images/1f44b.svg" alt="" />
                  <p>
                    Exclusive Guide: 4 Ways To Skyrocket Your Organic Traffic
                    With Content Writing!
                  </p>
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
                  </form>
                  <button className="btn button ">Find Out</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="content-conv">
        <div className="container">
          <div className="row">
            <div className="col-md-4 pb-5">
              <img
                className="con-conv-img "
                src="https://winstarit.com/wp-content/uploads/2022/06/script.png"
                alt=""
              />
            </div>
            <div className="col-md-8">
              <div className="con-conv-head">
                <h2>
                  Ξ Generate more leads and sales with WinStar{" "}
                  <span>Conversion-focused</span> content.
                </h2>
                <p>
                  You know that high-quality, conversion-focused content is
                  essential for a successful online marketing strategy. But how
                  can you be sure your content is really hitting its mark?
                  WinStar can help. Our team of experienced writers will work
                  with you to create customized content that’s tailored to your
                  unique needs and goals.
                </p>
                <p>
                  And the best part? Our content is always focused on
                  conversions – so you can be sure that you’re getting the most
                  out of your investment. With WinStar, you’ll get the leads and
                  sales you need to take your business to the next level.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-look">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="con-conv-head">
                <h2>
                  What does
                  <span>great content </span> look like?
                </h2>
                <p>
                  When creating content, you must keep your audience in mind.
                  What will engage them and keep them coming back for more? Your
                  content must be relevant and fresh, while also being
                  persuasive and attractive to search engines. Quality content
                  is key to a successful website or Business.
                </p>
                <p>
                  It’s original – Great content is not copied or plagiarized.
                  It’s something that’s been created specifically for your
                  website, by you or by someone you hire.
                </p>
              </div>
            </div>

            <div className="col-md-4 pb-5">
              <img
                className="con-conv-img m-lg-5 "
                src="https://winstarit.com/wp-content/uploads/2022/06/script.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6">
            <Card
              title="Keyword"
              dis="We find low cometition keywords for our client"
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <Card
              title="Search Engines"
              dis="We rank high on search engines for clients projects"
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <Card
              title="Traffic"
              dis="We drive targeted traffic to clients website"
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <Card
              title="Traffic"
              dis="We drive targeted traffic to clients website"
            />
          </div>

          <div className="col-lg-3 col-md-6">
            <Card
              title="Keyword"
              dis="We find low cometition keywords for our client"
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <Card
              title="Search Engines"
              dis="We rank high on search engines for clients projects"
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <Card
              title="Traffic"
              dis="We drive targeted traffic to clients website"
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <Card
              title="Traffic"
              dis="We drive targeted traffic to clients website"
            />
          </div>
        </div>
      </section>

      <section>
        <ContPrice />
      </section>
    </>
  );
};

export default Content;
