

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
                      width={100}
                      id="photo"
                    />
                    <div className="mt-3">
                      <h4>ندى طه </h4>
                      <p className="text-secondary mb-1">طالبه </p>
                      <p className="text-muted font-size-sm">الفيوم ,مصر</p>

                      <button className="btn btn-outline-primary">رسالة</button>
                      <div className="row" >


<div className="col-md-4">
  <div className="card " >
    <div className="card-body">
      <div className="row">



        <div className="col-md-3">
          <h6 className="mb-0">الاسم بالكامل</h6>
        </div>
        <div className="col-md-9 text-secondary">

          ندى طه السيد شعبان
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <h6 className="mb-0"> البريد الألكتروني </h6>
        </div>
        <div className="col-md-9 text-secondary">
          nada.taha9411@gmail.com
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
          01033377120
        </div>
        </div>
      <hr />
      <div className="row">
      <div className="col-sm-3">
          <h6 className="mb-0">العنوان</h6>
        </div>
        <div className="col-sm-9 text-secondary">
          الدقى ,الجيزة
        </div>
        
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-12">
          <a className="btn btn-info " target="__blank"
            href="Edit.html">تعديل</a>
        </div>
        <div className="col-sm-8 ">
           
              <div className="card-body ">
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
