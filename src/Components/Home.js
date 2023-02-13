import React from "react";
import "./css/BannerS.css";
import "./css/LatestNews.css";
import "./css/Admission.css";
import "./css/HlastSection.css";
import { NavLink } from "react-router-dom";

const BannerSection = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            {/* <li data-target="#carouselExampleIndicators" data-slide-to="3"></li> */}
            {/* <li data-target="#carouselExampleIndicators" data-slide-to="4"></li> */}
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img
                className="d-block slideimage"
                src="./images/Bloom(2).png"
                alt="First slide"
              />
              <div className="carousel-caption d-none d-md-block">
                {/* <h1>
                  <b>Blooming Buds Play School</b>
                </h1>
                <p>
                  <b>
                    Embracing state-of-the-art technology in our classrooms
                    allows Blooming Buds Play School to facilitate 21st century
                    teaching and learning for its teachers and students.
                  </b>
                </p> */}
              </div>
            </div>
            {/* <div className="carousel-item">
              <img
                className="d-block slideimage"
                src="./images/Bloom2.png"
                alt="Second slide"
              />
              <div className="carousel-caption d-none d-md-block">
                <h1 style={{ color: "black" }}>
                  <b>Dynamic Educators</b>
                </h1>
                <p>
                  <b style={{ color: "#262624" }}>
                    Blooming Buds Play School to facilitate 21st century
                    teaching and learning for its teachers and students.
                  </b>
                </p>
              </div>
            </div> */}
            <div className="carousel-item">
              <img
                className="d-block slideimage"
                src="./images/Bloom3.png"
                alt="Third slide"
              />
              <div className="carousel-caption d-none d-md-block">
                {/* <h1>
                  <b>Hands-on learning</b>
                </h1>
                <p>
                  <b>
                    Since its inception, Blooming Buds Play School has consistently grown year after
                    year and has gained a reputation of becoming a leading
                    educational institute.
                  </b>
                </p> */}
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block slideimage"
                src="./images/Bloom4.png"
                alt="Fourt slide"
              />
              <div className="carousel-caption d-none d-md-block">
                {/* <h1>
                  <b>Safe and Caring Environment</b>
                </h1>
                <p>
                  <b>
                    Feeling safe and cared for is what makes our school
                    community a complete family!
                  </b>
                </p> */}
              </div>
            </div>
            {/* <div className="carousel-item">
              <img
                className="d-block slideimage"
                src="./images1/slide5_11zon.webp"
                alt="Fifth slide"
              />
              <div className="carousel-caption d-none d-md-block">
                <h1>
                  <b>21st Century Education</b>
                </h1>
                <p>
                  <b>
                    Embracing state-of-the-art technology in our classrooms
                    allows Blooming Buds Play School to facilitate 21st century
                    teaching and learning for its teachers and students.
                  </b>
                </p>
              </div>
            </div> */}
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon jj"
              aria-hidden="true"
            ></span>
            <span className="sr-only"></span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon jj"
              aria-hidden="true"
            ></span>
            <span className="sr-only"></span>
          </a>
        </div>
      </div>

      {/* Latest New Section---------------------- */}

      <div className="container-fluid p-0">
        <h1 className="heading1 ada">Facilities</h1>

        <div className="container-fluid px-5 d-flex latest_card_box">
          <div className="lnewsleft p-3">
            <div className="card_img1">
              <img src="./images/home_pre.jpeg" alt="" />
            </div>
            <div className="title">
              <h3 className="my-3 ak">Pre-School</h3>
              <p>
                Blooming Buds Play School provides an enriched learning
                environment that has helped countless students learn, develop
                and grow. Our unparalleled curriculum and teaching methods help
                students take the next step in their education and approach the
                future with confidence.
              </p>
            </div>
          </div>
          <div className="lnewsmid p-3">
            <div className="card_img1">
              <img src="./images/homestaff.jpeg" alt="" />
            </div>
            <div className="title">
              <h3 className="my-3 ak">Skilled Staff</h3>
              <p>
                Skilled Staff is here to teach or guide for your bright carrier
                and and provides Handson in our School.Teachers play a key role
                in identifying and supporting students One of the most important skills for a preschool teacher is the ability to communicate well.
              </p>
            </div>
          </div>
          <div className="lnewsright p-3">
            <div className="card_img1  extra" >
              <img src="./images/home_yaga.jpeg" alt="" />
            </div>
            <div className="title">
              <h3 className="my-3 ak">Sports</h3>
              <p>
                Sports help in overall physical as well as mental development of
                the students. While playing with each other in schools, it
                inbuilt a sense of team spirit, leadership, self-esteem,
                self-confidence, friendliness among the children. Games & Sports
                undergo positive mentoring among children.
              </p>
            </div>
          </div>
        </div>

        <div className="latestbutton p-2">
          <NavLink className="btn btn-lg kop viewbtn" to="/facilities">
            View all New
          </NavLink>
        </div>
      </div>

      {/* Admission Section ---------- */}

      <div className="container-fluid mt-3 p-0">
        <div className="container-fluid d-flex latest_card_box_ad p-0">
          <div className="ladmleft p-5 text-center">
            <div className="title">
              <h1 className="my-3 lnns">
                Our <span style={{ color: "yellow" }}>School</span>
              </h1>
              <p>
                Blooming Buds Play School in Karond, Bhopal aims to inculcate a
                research-driven curriculum to the daily learning schedule of the
                little ones using technical aids. Our play school in karond ,
                Bhopal consists of a child-oriented environment with specialized
                teachers for a better learning and fruitful day at kindergarten.
                Blooming Buds kids school provides a complete package of
                programs for tiny tots ranging from 2 to 5 years of age. We have
                a definite curriculum for all the levels and provide designated
                admission kits for little ones at the time of admission. The
                playschool education affordable and available to every child
                looking forward to having a better tomorrow! We are a K to 8
                school with a wide array of resources designed to foster student
                achievement that will prepare our pupils to pursue higher
                education and be competitive in their careers.
              </p>
            </div>
            <div className="readbutton p-2">
              <NavLink className="btn btn-lg bg-warning adm" to="/ourschool">
                Read More
              </NavLink>
            </div>
          </div>

          <div className="ladmright p-5 text-center">
            <div className="title">
              <h1 className="my-3 lnns">
                <span style={{ color: "yellow" }}>
                  Blooming Buds Play School{" "}
                </span>
                Admission
              </h1>
              <p className="mt-3">
                The Blooming Buds Play School gives a fair and equal chance to
                all applicants who fulfill the admission requirements; dependent
                upon space availability. To determine admission eligibility for
                students transferring from another school, official report cards
                as well as other supporting documents are submitted upon
                application. Blooming Buds Play School is a unique place for our
                little learner where they learn with fun. We offer the best of
                Play way methods of education. Here they grow & develop with
                learning and playing. Here they became independent and confident
                from dependence. Here they became social and skilled.
                {/* Here they learn
                to create their own world. Blooming Buds Play School Way is only
                a part of educational development of child, with as much
                emphasis placed on preparation for the future. Teaching is
                innovatively structured so that each child’s personality can
                develop and self confidence can grow. */}
              </p>
            </div>
            <div className="readbutton p-2">
              <NavLink
                className="btn btn-lg bg-warning adm mt-3"
                to="/academicprocedure"
              >
                Read More
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Home LAst Section ------------ */}

      <div className="container-fluid p-0">
        <div className="container-fluid p-0  d-flex latest_card_box_hls">
          <div className="hlsleft">
            <div className="ccc1_img">
              <img src="./images/homepage4.jpeg" alt="" />
            </div>
            <div className="ccc2_img">
              <img src="./images/homepage3.jpeg" alt="" />
            </div>
          </div>
          <div className="hlsmid text-center p-5">
            <div className="card_imgl my-5">
              <img src="./images/logo1.jpg" alt="" />
            </div>
            <div className="title1 my-5">
              <div className="hlstbutton1">
                <NavLink
                  className="btn btn-lg kop kophl text-nowrap"
                  to="/gallery"
                  style={{ backgroundColor: "#2E63B1", color: "white" }}
                >
                  Student Life
                </NavLink>
                <NavLink
                  className="btn btn-lg kop  kophl text-nowrap"
                  to="/academicprocedure"
                  style={{ backgroundColor: "#1D4776", color: "white" }}
                >
                  Admission
                </NavLink>
              </div>
            </div>

            <p>
              Blooming Buds Play School provides a safe & nurturing environment
              for your children. This is very essential to tap their latest
              potential and bring them to the fore. Children are not like empty
              bins to be stuffed with information. They are like soft sponges
              and we enable them to develop an explorative and curious bent of
              mind to absorb meaningful knowledge and become well-adjusted,
              inquisitive, perceptive, bright and interactive children, ready
              for formal schooling. At Blooming Buds Play School, we just kindle
              the spark of curiosity in the already bright child that yours is
              so that he/she sparkles forever in future. At the Blooming Buds
              Play School, we believe in giving our students a voice and
              instilling in them a passion to be involved with their school
              community. It is evident that students are at the forefront of
              understanding the needs of making their school into an environment
              that promotes a safe and healthy learning environment. For this
              reason, Blooming Buds Play School is committed in providing a well
              balanced spiritual, academic and social well-being experience for
              it’s students. Students are encouraged to hone their talents in
              order to serve and participate in and beyond our community.
            </p>
            <div className="title1">
              <div className="hlstbutton">
                <NavLink
                  className="btn btn-lg hls px-4 py-3"
                  to="/facilities"
                  style={{ backgroundColor: "#2E63B1", color: "white" }}
                >
                  Learn More
                </NavLink>
              </div>
            </div>
          </div>
          <div className="hlsright">
            <div className="ccc1_img">
              <img src="./images/homepage7.jpeg" alt="" />
            </div>
            <div className="ccc2_img">
              <img src="./images/homepage5.jpeg" alt="" />
            </div>
            {/* <div className="ccc1_img">
              <img src="./images/homepage1.jpeg" alt="" />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSection;
