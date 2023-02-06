import React from "react";
import BannerSection from "./BannerSection";
import "./css/Facility.css";

const Facilities = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <BannerSection />

        <div className="container liscontainer">
          <div className="facilitycontent">
            {/* swimming */}
            <div className="facilitCard">
              <div className="facilimages">
                <img src="./images/intellectual.jpeg" alt="" />
              </div>
              <div className="facontent">
                <div className="factitle">Intellectual Development</div>
                <p>
                  Intellectual development is all about learning. It is about
                  how individuals organise their minds, ideas and thoughts to
                  make sense of the world they live in. The growth of a child's
                  ability to think and reason. It's about how they organize
                  their minds, ideas and thoughts to make sense of the world
                  they live in.
                </p>
              </div>
            </div>

            {/* skilled */}

            <div className="facilitCard">
              <div className="facilimages">
                <img src="./images/facilitiesstaff.jpeg" alt="" />
              </div>
              <div className="facontent">
                <div className="factitle">Skilled Staff</div>
                <p>
                  Skilled Staff is here to teach or guide for your bright
                  carrier and and provides Handson in our School.Teachers play a
                  key role in identifying and supporting students who are at
                  risk of dropping out, especially students from vulnerable
                  populations, such as girls ...
                </p>
              </div>
            </div>

            {/* sports */}
            <div className="facilitCard">
              <div className="facilimages">
                <img src="./images/yoga.jpeg" alt="" />
              </div>
              <div className="facontent">
                <div className="factitle">Yoga & Mediatation</div>
                <p>
                  Yoga at school might help students feel better and improve
                  their grades, Hygiene, fitness and "Good Living Skill" taught
                  to students.
                </p>
              </div>
            </div>

            {/* nice Infrastructure */}

            <div className="facilitCard">
              <div className="facilimages">
                <img src="./images/niceinfra.jpeg" alt="" />
              </div>
              <div className="facontent">
                <div className="factitle">Nice Infrastructure</div>
                <p>
                  The fact is that a good school infrastructure, with renewed
                  spaces, makes it possible for children and youths that live in
                  remote areas to study .A good school infrastructure makes it a
                  good place for the children to study, which is important as
                  the student spends maximum time in school.
                </p>
              </div>
            </div>

            {/* hygiene washroom */}
            <div className="facilitCard">
              <div className="facilimages">
                <img src="./images/cultural.jpeg" alt="" />
              </div>
              <div className="facontent">
                <div className="factitle">Cultural Activity</div>
                <p>
                  The cultural activities enhance the confidence level for
                  students, which allow students to perform better. Activities
                  will develop the personality for students and assist the
                  students for good career. Cultural learning manifests itself
                  in three forms during human ontogeny: imitative learning,
                  instructed learning, and collaborative learning.
                </p>
              </div>
            </div>

            {/* Good Academic */}

            <div className="facilitCard">
              <div className="facilimages">
                <img src="./images/goodacademic.jpeg" alt="" />
              </div>
              <div className="facontent">
                <div className="factitle">Good Academic</div>
                <p>
                  We provide our student with good encyclopedia to reduce their
                  encumbrance regarding any subject academically or globally. A
                  well equipped laboratories of physics, chemistry, biology and
                  computers for practical learning .We teach students by smart
                  classes for active participation and deep knowledge. A good
                  psychiatrist and counselor for students and Parents is
                  available during school timings.
                </p>
              </div>
            </div>

            {/* transport facility */}

            <div className="facilitCard">
              <div className="facilimages">
                <img src="./images/trans.jpeg" alt="" />
              </div>
              <div className="facontent">
                <div className="factitle">Transport Facility</div>
                <p>
                  The school provides transport facility to the students through
                  Buses & Magic for transporting the students from different
                  localities to the school and vice-versa. Students can avail
                  the Transport facility by putting up an application. All the
                  buses have trained driver’s and conductor’s. The school
                  follows all the rules and regulations of M.P. Government for
                  the buses.
                </p>
              </div>
            </div>

            {/* smart education fac */}

            <div className="facilitCard">
              <div className="facilimages">
                <img src="./images/parental.jpeg" alt="" />
              </div>
              <div className="facontent">
                <div className="factitle">Parental Education</div>
                <p>
                  Parent education programs focus on enhancing parenting
                  practices and behaviors, such as developing and practicing
                  positive discipline techniques, learning age-appropriate child
                  development skills and milestones, promoting positive play and
                  interaction between parents and children, and locating and
                  accessing community .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Facilities;
