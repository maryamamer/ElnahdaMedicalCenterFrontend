import React from "react";
import { Link } from "react-router-dom";
import location from "../media/images/icon-location.png";
import phone from "../media/images/icon-phone.png";
import mail from "../media/images/icon-mail.png";
import map from "../media/images/map.png";

import "../CSS/ContactUs.css";


function ContactUs() {

    return (
        <>
         <span>

         <Link to="/Chatbot">

<input
  type="button"
  className="btn btn-primary"
  id="book-btn"
  value="نظام الرد اﻵلي"
/>
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
                    />{" "}العامرية -النهضة-كوبري شربات-اعلي صيدلية غباشي
                </p>


              </div>
            </div>
            <div className="col-lg-12 p-0 pb-4 speciality-item d-flex flex-row flex-wrap ">
            
              <div className="col-11 col-lg-11 p-0 pl-3">
              <p className="m-0 text-right"> <img
                    alt=""
                    className="img-fluid ls-is-cached lazyloaded"
                    src={phone}
                  />{" "}03-3475160 / 01050600505 / 01050600606 </p>

               
               

              </div>
            </div>
            <div className="col-lg-12 p-0 pb-4 speciality-item d-flex flex-row flex-wrap ">
              
                
              <div className="col-11 col-lg-11 p-0 pl-3">
                 <p className="m-0 text-right"> <img
                    alt=""
                    className="img-fluid ls-is-cached lazyloaded"
                    src={mail}
                  />{" "}info@gmail.com
                </p>
              </div>


            </div>
          </div>
        </div>
        <div className="col-lg-5 p-0 d-flex flex-column flex-wrap align-items-start justify-content-between">
          <img src={map} className="img-fluid" alt="" />{" "}
        </div>
      </div>
      


    </>
  );

}

export default ContactUs;