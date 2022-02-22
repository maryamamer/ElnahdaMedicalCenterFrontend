import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Footer.css"
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import { BsJoystick } from "react-icons/bs";
import { BsFillTelephoneOutboundFill} from "react-icons/bs";
import { BsFillEnvelopeFill} from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";


export default function Footer() {
  return (
    <>
      <footer
        className="section footer-classNameic "
        style={{ background: "#1e386d" }}
      >
        <div className="container">
          <div className="row ">
            
            <div className=" col-md-6 ftco-footer-widget mb-4">
              <h1 className="ftco-heading-2 text-right text-light">
                مركز النهضة الطبي{" "}
              </h1>
              <h6 className="text-right text-light" dir="rtl">
                المركز مجهز بأحدث الأجهزة وتقنيات الكشف والعلاج ويضم كل التخصصات
                الطبية لخدمة جميع الحالات المرضية على يد نخبة من أفضل الأساتذة
                والمختصين.
              </h6>
            </div>
            <div className="col-md-6 ftco-footer-widget mb-4">
              <h2
                class="ftco-heading-2 text-light text-right"
                style={{
                  "margin-bottom": "5px!important",
                  "padding-right": "55px",
                  
                }}
              >
                للإستفسار
              </h2>
              <div className="block-23 mb-3 text-right text-light"  >
                <ul className="no-bullets">
                  <li  >
                    <Link
                      className="text text-light"
                      
                      target="_blank"
                      to=""
                    >
                     <BsJoystick /> العامرية -النهضة-كوبري شربات-اعلي صيدلية غباشي{" "} 
                    </Link>
                  </li>
                  <li >
                    <a href="tel:01050600505" >
                      <span
                        className="text text-light" 
                      >
                       <BsFillTelephoneOutboundFill /> 03-3475160 / 01050600505 / 01050600606 
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:#">
                      <span
                        className="text text-light"
                       
                      >
                        <BsFillEnvelopeFill /> Info@gmail.com
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/Nahdamedicalcenter">
                      <span
                        className="text text-light"
                       
                      >
                        <BsFacebook /> مركز النهضة الطبي
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>
        
        <hr />

        <div className="copyright text-center text-light">
          &copy; حقوق النشر ترجع لـ{" "}
          <strong>
            <span>مركز النهضة الطبي</span>
          </strong>
        </div>
        <div className="credits text-center text-light">صمم بواسطة فريق4</div>
      </footer>
    </>
  );
}