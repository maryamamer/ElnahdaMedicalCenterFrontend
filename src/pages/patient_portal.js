import React from "react";
import "../CSS/patient_portal.css";
import {
  FaHome,
  FaCalendarAlt,
  FaFileMedical,
  FaFlask,
  FaPills,
  FaHistory,
  FaSignOutAlt,
  FaClock,
  FaTimesCircle,
  FaCalendarDay,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function patient_portal() {
  return (
    <>
      {/* <!--*************************** NavBar ***************************--> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
            <li className="nav-item active">
              <Link to="/patientPortal" className="nav-link current">
                <FaHome size={25} /> الرئيسية
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/prescription" className="nav-link">
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

      {/* <!--*************************** 1st Card - Medications ***************************--> */}
      <div className="container mt-5 p-3 shadow">
        <div className="row">
          <div className="col-md-4 col-sm-12 border rounded ml-5">
            <div className="card-header text-center">
              <h3 className="card-header text-center m-auto">
                <b>الأدوية</b>
              </h3>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item first-list-group text-center">
                Paracetamol 75 mg
                <p className="text-muted">قرص / يوميا</p>
              </li>
              <li className="list-group-item first-list-group text-center">
                Aspirin 75 mg
                <p className="text-muted">قرص / يوميا</p>
              </li>
              <li className="list-group-item first-list-group text-center">
                Ibuprofen 75 mg
                <p className="text-muted">قرص / يوميا</p>
              </li>
            </ul>
          </div>

          {/* <!--*************************** 2nd Card - Condition ***************************--> */}
          <div className="col-md-6 col-sm-12 border rounded">
            <div className="card-header text-center">
              <h3 className="card-header text-center m-auto">
                <b>الحالة المرضية</b>
              </h3>
            </div>

            <div className="card-body">
              <div className="card-text">
                <div className="text-center">
                  <label className="h4">التهاب الجيوب</label>
                </div>
                <div>
                  <p className="text-muted text-right">
                    وهو التهاب الجيوب (التجاويف) المجاورة للأنف ويشمل مخاط الأنف
                    السميك، والأنف المسدود، وآلام الوجه
                  </p>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="text-right">
                    <h5>
                      د/ أمل عبد السلام
                      <p>
                        <sub>دكتوراه أنف وأذن</sub>
                      </p>
                    </h5>
                  </div>

                  <div className="text-right">
                    <h6>أخر زيارة: الأحد، 12 فبراير</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--*************************** 3rd Card - Appointments ***************************--> */}
      <div className="container mt-5 p-3 shadow">
        <div className="row">
          <div className="col-md-10 col-sm-5 m-auto border rounded">
            <div className="card-header text-center">
              <h3 className="card-header text-center m-auto">
                <b>المعاد القادم</b>
              </h3>
            </div>

            <div className="card-body">
              <div className="card-text">
                <div className="text-center">
                  <label className="h4">الجمعة، 1 يناير</label>
                </div>
                <div className="text-center">
                  <p className="text-muted">
                    10:30 - 10:00 <FaClock size={25} />
                  </p>
                  <h5>
                    د/ أمل عبد السلام
                    <p>
                      <sub>دكتوراه أنف وأذن</sub>
                    </p>
                  </h5>
                  <div className="mt-4">
                    <div className="border border-dark rounded-pill rounded-sm p-1 m-auto">
                      <b>نوع الحجز:</b> كشف
                    </div>
                    <br />
                    <div className="border border-dark rounded-pill rounded-sm p-1 m-auto">
                      <b>التكلفة:</b> 70جنيهًا
                    </div>
                  </div>
                </div>
                {/* <br />
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                  <FaTimesCircle size={25} />
                    إلغاء الحجز
                  </div>

                  <div>
                  <FaCalendarDay size={25} />
                    تغيير المعاد
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--*************************** 4th Card - Recent ***************************--> */}
      <div className="container mt-5 p-3 shadow">
        <div className="row">
          <div className="col-md-10 col-sm-5 m-auto border rounded">
            <div className="card-header text-center">
              <h3 className="card-header text-center m-auto">
                <b>المستجدات</b>
              </h3>
            </div>
            <ul className="list-group list-group-flush text-right">
              <li className="list-group-item">
                <h6>
                  قام الطبيب أحمد فاروق بالتعديل في سجلك الصحي وفقا لأعراضك يوم
                  7أغسطس.
                </h6>
              </li>
              <li className="list-group-item">
                <h6>قامت الدكتورة أمل بزيادة جرعة "Alfuosin" إلى 10mg.</h6>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
}

export default patient_portal;
