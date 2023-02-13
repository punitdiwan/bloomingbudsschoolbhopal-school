import React from "react";
import "./css/ourschool.css";
import NobleSidebar from "./NobleSidebar";

const OurSchool = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="container-fluid d-flex latest_card_box_ad p-0">
          <div className="ourschooleft px-5 text-left">
            {/* <h4 className="kalur text-center" style={{color:"black", fontWeight:"bold"}}>Our School</h4> */}
            <b>
              <p>
                <em>Blooming Buds Play School.</em>
              </p>
            </b>
            <b>
              <p>
                <em>
                  Blooming Buds Play School. Blooming Buds Play School was
                  founded in 2013 as School is one of the best play schools for
                  both girls and boys managed by Blooming Buds Group. Blooming
                  Buds Group is run by Mrs. Neetu Zade. We, Blooming Buds,
                  understand that each child is a distinct individual who needs
                  to be nurtured in order to grow into a mature and responsible
                  citizen. Our academic infrastructure along with a wide range
                  of co-curricular activities help our students in the all-round
                  personality development. We have a strong team of motivated
                  teachers who are always ready to accept challenges of
                  developing the potential of each and every student. The
                  Blooming Buds Play School is one of the best play schools for
                  your child’s early education in Bhopal (MP). Your child will
                  feel empowered to learn and grow in an engaging manner. The
                  staff at our school in Bhopal, has been carefully handpicked
                  after ensuring they are qualified and have received adequate
                  training. Our teachers have also been trained to give first
                  aid and deal with any emergencies that may arise on our
                  premises. You can be assured that your child is in good hands
                  as we have your child’s best interests at heart. At our play
                  school , your child will learn new skills and develop his or
                  her personality and strengths through innovative teaching
                  methods. With a unique, one of its kind concepts, The Blooming
                  Buds Play School is a place where children grow & develop
                  while riding, listening, and playing. Here they move from
                  dependence to independence, from shaky coordination to refined
                  skills.”
                </em>
              </p>
            </b>
            <h5> Blooming Buds Play School is proud to offer:</h5>
            <ul className="px-3">
              <li> Blooming Buds Play School is proud to offer:</li>
              <li>A great Indian environment for growing and learning</li>
              {/* <li>Indian Studies, CBSC, and programs</li> */}

              <li>and much more…</li>
            </ul>
            <p>
              We encourage all community members to discover the possibilities
              at the Blooming Buds Play School!
            </p>
          </div>

          <div className="ourschoolright p-4">
            <NobleSidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurSchool;
