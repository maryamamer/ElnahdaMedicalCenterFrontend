import pp from "../media/images/pp.png";
import "../CSS/Profile.css";
import axios from "axios";
import { connect } from 'react-redux';
import jwtDecode from "jwt-decode";
import { React, useState, useEffect, Fragment } from "react";
import { Link, useParams, Redirect } from "react-router-dom";


function ProfilePage() {
  const params = useParams();
  console.log(params);
  const token = localStorage.getItem('access')
  const user = jwtDecode(token).user_id
  const [patient, setpatient] = useState({});

  useEffect(() => {
    axios
      .get(`/users/${user}`)
      .then((res) => setpatient(res.data))
  }, [])
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="card" style={{ "height": "fit-content", "padding": "50px" }}>
            <div>
              <img
                src={pp}
                alt="Admin"
                className="rounded-circle"
                width={100}
                id="photo"
              />
              <h4>{patient.fullname} </h4>
              <p className="text-secondary mb-1">طالبه </p>
              <p className="text-muted font-size-sm">{patient.address}</p>
              <button className="btn btn-outline-primary">رسالة</button>
              <div className="row">
                <div className="card" style={{ "width": "60rem", "height": "fit-content", "margin": "auto" }}>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-3">
                        <h6 className="mb-0">الاسم بالكامل</h6>
                      </div>
                      <div className="col-md-9 text-secondary">
                        {patient.username}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0"> البريد الألكتروني </h6>
                      </div>
                      <div className="col-md-9 text-secondary">
                        {patient.email}
                      </div>

                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-md-3">
                        <h6 className="mb-0">الهاتف المنزلى</h6>
                      </div>
                      <div className="col-md-9 text-secondary">
                        08455464
                      </div>

                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">الجوال</h6>
                      </div>

                      <div className="col-md-9 text-secondary">
                        {patient.phone}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">العنوان</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {patient.address}
                      </div>

                    </div>
                    <hr />
                    <div className="row">

                      <Link to={'/patientPortal'}>
                        <span className="row">
                          <div className="col-sm-12">
                            <a className="btn btn-info " target="__blank"
                              href="Edit.html">سجل المريض</a>
                            <Link to={'/Editpp'}>

                              <a className="btn btn-info " target="__blank"
                                href="Edit.html"> تعديل</a>

                            </Link>
                          </div>
                        </span>

                      </Link>

                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="card" style={{ "width": "60rem", "height": "24rem", "margin-top": "83px" }}>
                  <div className="card-body">
                    <h6 className="d-flex align-items-right mb-3">هذا الشهر</h6> <i
                      className="material-icons text-info mr-2">التحاليل</i>
                    <br />
                    <small>فيتامين س</small>
                    <div className="progress mb-3" >
                      <div className="progress-bar bg-success" role="progressbar" style={{ "width": "80%" }}
                        aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small>فيتامين د</small>
                    <div className="progress mb-3" >
                      <div className="progress-bar bg-primary" role="progressbar" style={{ "width": "72%" }}
                        aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small>فيتامين أ</small>
                    <div className="progress mb-3" >
                      <div className="progress-bar bg-danger" role="progressbar" style={{ "width": "45%" }}
                        aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small>فيتامين ب</small>
                    <div className="progress mb-3" >
                      <div className="progress-bar bg-warning" role="progressbar" style={{ "width": "55%" }}
                        aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small>الحديد</small>
                    <div className="progress mb-3" >
                      <div className="progress-bar bg-warning" role="progressbar" style={{ "width": "50%" }}
                        aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;