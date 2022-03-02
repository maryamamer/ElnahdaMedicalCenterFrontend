import React from "react";
import "../CSS/RestPass.css";
import staff from "../media/images/icon-support-staff.png";
import { BsFillTelephoneOutboundFill} from "react-icons/bs";

export default function RestPass() {
  return (
    <>
      <section>
        <div className="container">
          <div className="section-title text-dark" id="section">
            <h1 className="text-dark">هل نسيت كلمة السر؟</h1>
          </div>
          <div className="row">
          <div className="col-6" >
              
              <img alt="" className="img-fluid lazyloaded" src={staff} />
            
          </div>
            <div className="col-6 text-dark text-right">
              <h2 className="m-2">إتصل بالدعم الفني على أحد  الأرقام التالية:</h2>
              <p className="hov text-bold text-center"> 03-3475160 / 01050600505 / 01050600606<BsFillTelephoneOutboundFill /> </p>
              <h3 className=" text-center">وسيتم حل المشكلة في أقرب وقت</h3>
            </div>
            
          </div>
        </div>
      </section>
      <br></br>
     
    </>
  );
}
