import React from "react";
import "../CSS/prescription.css";
import {
  FaHome,
  FaCalendarAlt,
  FaFileMedical,
  FaFlask,
  FaPills,
  FaHistory,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function prescription() {
  return (
    <>
      {/* <!--*************************** NavBar ***************************--> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light nav-container">
        <p className="navbar-brand">لوحة المتابعة</p>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/patientPortal" className="nav-link">
                <FaHome size={25} /> الرئيسية
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/prescription" className="nav-link current">
                <FaPills size={25} /> الروشيتة
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/appointments" className="nav-link">
                <FaCalendarAlt size={25} /> المواعيد
              </Link>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <FaFileMedical size={25} /> التقارير
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <FaFlask size={25} /> نتائج المعمل
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* <!--*************************** Bodyyy ***************************--> */}
      <div className="container mt-5 p-3 shadow">
        <div className="row">
          <div className="col-md-10 col-sm-12 border rounded m-auto">
            <div className="card-header text-center display-4">
              <b className="card-header text-center m-auto">الروشيتة</b>
            </div>
            <div className="card-header text-right">
              <div>
                <b className="h4 font-weight-bolder">
                  د/ أمل عبد السلام
                  <p>
                    <sub className="text-muted">11/1/2022</sub>
                  </p>
                </b>
              </div>
              <div>
                  <button
                    type="button"
                    className="btn btn-lg print-btn"
                  >
                    <b className="h6">طباعة</b>
                  </button>
                </div>
            </div>

            <div className="card-body bg-light">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">الدواء</th>
                      <th scope="col" className="text-center">
                        الكمية
                      </th>
                      <th scope="col" className="text-center">
                        المدة
                      </th>
                      <th scope="col" className="text-center">
                        التعليمات
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Paracetamol</th>
                      <td className="text-center">1-0-0</td>
                      <td className="text-center">شهر</td>
                      <td className="text-center">
                        يؤخذ قرص بعد الفطار مباشرة
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Aspirin</th>
                      <td className="text-center">0-0-1</td>
                      <td className="text-center">أسبوعين</td>
                      <td className="text-center">يؤخذ قرص قبل النوم</td>
                    </tr>
                    <tr>
                      <th scope="row">Ibuprofen</th>
                      <td className="text-center">1-1-1</td>
                      <td className="text-center">3 أيام</td>
                      <td className="text-center">
                        يمنع معه أخذ قرص Paracetamol صباحا، ويؤخذ على 3 أيام
                        متقطعة{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* <div>
                  <button
                    type="button"
                    className="btn btn-lg print-btn"
                  >
                    <b className="h6">تعديل</b>
                  </button>
                </div> */}

            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
}

export default prescription;
