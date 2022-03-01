import React, { useState, useEffect } from "react";
import New from "../media/images/New.png";
import Ali from "../media/images/ALi.png";
import axios from "axios";
import Nada from "../media/images/Nada.png";
import "../CSS/Doctors.css";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { get_doctor } from "../actions/doctor";

function Recommend() {
  const params = useParams();

  const dispatch = useDispatch();

  const all = useSelector((state) => state.getdoctor.doctor);
  const doctor = all.filter((d) => d.id == params.id)[0];
  const [recommend, setrecommend] = useState([]);

  useEffect(() => {
    setrecommend(all.filter((r) => r.specialization == doctor.specialization));
  }, []);
  // setdoctor(all.filter((d) => d.id === params.id));
  // setrecommend(all.filter((d) => d.specialization == doctor.specialization));

  return (
    <>
      <div classNameName="container-fluid">
        <div className="container-fluid">
          <div className="row m-5">
            {recommend.map((d, i) => {
              return (
                <div className="col-md-3" key={i}>
                  <Link to={`/dr/${d.id}`}>
                    <div className="divDoctor">
                      <img className="img1" src={`${d.image}`} alt="doctor" />
                      <div className="overview justify-content-evenly">
                        <h2>{d.fullname}</h2>
                        <p> {d.specialization}</p>
                        <p>التقييم</p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  Doctors: state.getdoctor,
});

export default connect(mapStateToProps, { get_doctor })(Recommend);
