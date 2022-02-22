

import React from "react";
import pp from "../media/images/pp.png";
import "../CSS/Profile.css";


import { Link } from "react-router-dom";

function ProfilePage() {

  return (
    <>
      <div className="flex-container">
        <div className="main-body">
          <div className="row">
            <div className="col-xl-2">
              <div className="card ">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src={pp}
                      alt="Admin"
                      className="rounded-circle"
                      width={150}
                      id="photo"
                    />
                    <div className="mt-3">
                      <h4>ندى طه </h4>
                      <p className="text-secondary mb-1">طالبه </p>
                      <p className="text-muted font-size-sm">الفيوم ,مصر</p>

                      <button className="btn btn-outline-primary">رسالة</button>

                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="card mt-3 ">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-globe mr-2 icon-inline"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                      الموقع
                    </h6>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <svg
                        xmlns={"http://www.w3.org/2000/svg"}
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-instagram mr-2 icon-inline text-danger"
                      >
                        <rect
                          x="2"
                          y="2"
                          width={20}
                          height={20}
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                      اﻻنستجرام
                    </h6>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-facebook mr-2 icon-inline text-primary"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                      الفيس بوك{" "}
                    </h6>
                  </li>
                  <br />
                  <br> </br>
                  <br> </br>
                  <br> </br>
                  <br> </br>
                  <br> </br>
                  <li className="list-group-item d-flex  align-items-center flex-wrap">
                    <Link to="/patientPortal">سجل المريض</Link>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
          <div className="row" >


                <div className="col-md-4">
                    <div className="card " >
                        <div className="card-body">
                            <div className="row">


                                <div className="col-md-9 text-secondary">

                               
                                </div>
                                <div className="col-md-3">
                                    <h6 className="mb-0">الاسم بالكامل</h6>
                                </div>
                            </div>
                            <hr />
                            <div className="row">

                                <div className="col-md-9 text-secondary">
                                    nada.taha9411@gmail.com
                                </div>
                                <div className="col-sm-3">
                                    <h6 className="mb-0"> البريد الألكتروني </h6>
                                </div>
                            </div>
                            <hr />
                            <div className="row">

                                <div className="col-md-9 text-secondary">
                                    08455464
                                </div>
                                <div className="col-md-3">
                                    <h6 className="mb-0">الهاتف المنزلى</h6>
                                </div>
                            </div>
                            <hr />
                            <div className="row">

                                <div className="col-md-9 text-secondary">
                                    01033377120
                                </div>
                                <div className="col-sm-3">
                                    <h6 className="mb-0">الجوال</h6>
                                </div>
                            </div>
                            <hr />
                            <div className="row">

                                <div className="col-sm-9 text-secondary">
                                    الدقى ,الجيزة
                                </div>
                                <div className="col-sm-3">
                                    <h6 className="mb-0">العنوان</h6>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-12">
                                    <a className="btn btn-info " target="__blank"
                                        href="Edit.html">تعديل</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="col-sm-8 ">
                    <div className="card mt-3 ">
                        <div className="card-body p-100">
                            <h6 className="d-flex align-items-right mb-3">هذا الشهر</h6> <i
                                className="material-icons text-info mr-2">التحاليل</i>
                            <br />
                            <small>فيتامين س</small>
                            <div className="progress mb-3" >
                                <div className="progress-bar bg-success" role="progressbar" style={{"width": "80%"}}
                                    aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <small>فيتامين د</small>
                            <div className="progress mb-3" >
                                <div className="progress-bar bg-primary" role="progressbar" style={{"width": "72%"}}
                                    aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <small>فيتامين أ</small>
                            <div className="progress mb-3" >
                                <div className="progress-bar bg-danger" role="progressbar" style={{"width": "45%"}}
                                    aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <small>فيتامين ب</small>
                            <div className="progress mb-3" >
                                <div className="progress-bar bg-warning" role="progressbar" style={{"width": "55%"}}
                                    aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <small>الحديد</small>
                            <div className="progress mb-3" >
                                <div className="progress-bar bg-warning" role="progressbar" style={{"width": "50%"}}
                                    aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
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
