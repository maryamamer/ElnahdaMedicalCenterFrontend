import React from "react";
import { Link } from "react-router-dom";
import location from "../media/images/icon-location.png";
import phone from "../media/images/icon-phone.png";
import mail from "../media/images/icon-mail.png";
import map from "../media/images/map.png";
import logo from "../media/images/logo.jpeg";

import "../CSS/ContactUs.css";

function ContactUs() {



    return (
        <>
         <span>
         <Link to="/Chatbot">
         <div class="input-group">
  <span id="chatbot">
    <i class="fa fa-user-circle-o" aria-hidden="true"></i>
  </span>

</div>
</Link>
         </span>
             <div className="container text-right">




        <div className="col-lg-12 px-lg-0 py-5 d-flex flex-row flex-wrap   ">
          <div className="col-lg-5 p-0 d-flex flex-column flex-wrap  justify-content-between section-title">
            <h1 className="text-center text-dark mb-5 ">تواصل معنا</h1>
            <div className="col-lg-12 p-0 pb-4 speciality-item d-flex flex-row flex-wrap ">
              <div className="col-11 col-lg-11 p-0 pl-3">
                <p className="m-0 text-right">
                  <img
                    alt=""
                    src={location}
                    className="img-fluid ls-is-cached lazyloaded"
                  />{" "}
                  العامرية -النهضة-كوبري شربات-اعلي صيدلية غباشي
                </p>
              </div>
            </div>
            <div className="col-lg-12 p-0 pb-4 speciality-item d-flex flex-row flex-wrap ">
              <div className="col-11 col-lg-11 p-0 pl-3">
                <p className="m-0 text-right">
                  {" "}
                  <img
                    alt=""
                    className="img-fluid ls-is-cached lazyloaded"
                    src={phone}
                  />{" "}
                  03-3475160 / 01050600505 / 01050600606{" "}
                </p>
              </div>
              
            </div>

            <div className="col-lg-11 p-0   d-flex flex-row flex-wrap ">
              <div className=" col-lg-6 p-0 pl-3">

                <p className="m-0 text-right">
                  {" "}
                  <img
                    alt=""
                    className="img-fluid ls-is-cached lazyloaded"
                    src={mail}
                  />{" "}
                  info@gmail.com
                </p>
              </div>
              <div id="appointment1" className="appointment1">
                <Link

                  className="appointment1-btn"

                  to="/Doctors"
                >
                  إحجز موعداً
                </Link>
              </div>
            </div>
            
          </div>

          <div className="col-6 col-lg-1 p-0 ">
          <img src={map}  alt="" className="img-responsive" />

          </div>
        </div>
        
      </div>
      
    </>
  );
}

export default ContactUs;
