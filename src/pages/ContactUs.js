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
        <div className="col-lg-12 px-lg-0 py-5 d-flex  flex-wrap   ">
        
          <div className="col-lg-6 p-0 d-flex flex-column flex-wrap section-title">
            <h1 className="text-center text-dark mb-5 ">تواصل معنا</h1>
            <p className="m-0 text-right">
              <img alt="" src={location} className="img-fluid " /> العامرية
              -النهضة-كوبري شربات-اعلي صيدلية غباشي
            </p>
            <p className="m-0 text-right">
              {" "}
              <img alt="" className="img-fluid " src={phone} />{" "}
              03-3475160 / 01050600505 / 01050600606{" "}
            </p>
            <p className="m-0 text-right">
              {" "}
              <img alt="" className="img-fluid" src={mail} />{" "}
              info@gmail.com
            </p>
            <div id="appointment" className="appointment1">
                <Link
                  className="appointment1-btn"
                  to="/Doctors"
                >
                  إحجز موعداً
                </Link>
              </div>
          </div>
          <div className="col-lg-6 p-0 d-flex flex-column flex-wrap ">    
             
              <img src={map}  alt="" className="img-fluid img-thumbnail" style={{"border": "0"}}    /> 
             
          
          </div>
         
        </div>
      </div>
    </>
  );
}

export default ContactUs;