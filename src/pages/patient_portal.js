import React from "react";
import '../CSS/patient_portal.css'
import { FaHome, FaCalendarAlt, FaFileMedical, FaFlask, FaPills, FaHistory, FaSignOutAlt, FaClock, FaTimesCircle, FaCalendarDay } from "react-icons/fa";
import { Link } from 'react-router-dom';

function patient_portal() {
    return (
        <>
            {/* <!--*************************** Side NavBar ***************************--> */}
            <div class="sidebar-container" dir="rtl">
                <ul class="sidebar-navigation">
                    <li class="header">لوحة المتابعة</li>
                    <li>
                        <Link class="current" to="/patientPortal">
                            {/* <i class="fas fa-home" aria-hidden="true"></i> */}
                            <FaHome size={25} />
                            الرئيسية
                        </Link>
                    </li>
                    <li>
                        <Link to="/appointments">
                            {/* <i class="fas fa-calendar-alt" aria-hidden="true"></i> */}
                            <FaCalendarAlt size={25} />
                            المواعيد
                        </Link>
                    </li>
                    <li>
                        <a href="#">
                            {/* <i class="fas fa-file-alt" aria-hidden="true"></i> */}
                            <FaFileMedical size={25} />
                            التقارير
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            {/* <i class="fas fa-flask" aria-hidden="true"></i> */}
                            <FaFlask size={25} />
                            نتائج المعمل
                        </a>
                    </li>
                    <li>
                        <Link to="/prescription">
                            {/* <i class="fas fa-pills" aria-hidden="true"></i> */}
                            <FaPills size={25} />
                            الروشيتة
                        </Link>
                    </li>
                    <li>
                        <a href="#">
                            {/* <i class="fas fa-history" aria-hidden="true"></i> */}
                            <FaHistory size={25} />
                            السجل الصحي
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            {/* <i class="fas fa-sign-out-alt" aria-hidden="true"></i> */}
                            <FaSignOutAlt size={25} />
                            الخروج
                        </a>
                    </li>
                </ul>
            </div>

            {/* <!--*************************** Bodyyy ***************************--> */}
            <main role="main" dir="rtl" />
            <div class="container text-right">
                <h1>مرحبا، الاسم</h1>
                <p>إشعارات إشعارات إشعارات إشعارات إشعارات</p>
            </div>

            {/* <!--*************************** 1st Card - Medications ***************************--> */}
            <div class="album  bg-light">
                <div class="container">
                    <div class="row">

                        <div class="col-md-3 col-sm-12">
                            <div class="card mb-4 shadow-sm">
                                <div class="card-header text-center">
                                    <h3><b>الأدوية</b></h3>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item first-list-group text-center">Paracetamol 75 mg
                                        <p class="text-muted">قرص / يوميا</p>
                                    </li>
                                    <li class="list-group-item first-list-group text-center">Aspirin 75 mg
                                        <p class="text-muted">قرص / يوميا</p>
                                    </li>
                                    <li class="list-group-item first-list-group text-center">Ibuprofen 75 mg
                                        <p class="text-muted">قرص / يوميا</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* <!--*************************** 2nd Card - Condition ***************************--> */}
                        <div class="col-md-8 col-sm-12">
                            <div class="card mb-4 shadow-sm">
                                <div class="card-header text-center">
                                    <h3><b>الحالة المرضية</b></h3>
                                </div>

                                <div class="card-body">
                                    <div class="card-text">
                                        <div class="text-center">
                                            <label class="h4">التهاب الجيوب</label>
                                        </div>
                                        <div>
                                            <p class="text-muted text-right">
                                                وهو التهاب الجيوب (التجاويف) المجاورة للأنف ويشمل مخاط الأنف السميك، والأنف المسدود، وآلام الوجه
                                            </p>
                                        </div>

                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="text-right">
                                                <h5>
                                                    د/ أمل عبد السلام
                                                    <p><sub>دكتوراه أنف وأذن</sub></p>
                                                </h5>
                                            </div>

                                            <div class="text-right">
                                                <h6>
                                                    أخر زيارة: الأحد، 12 فبراير
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!--*************************** 3rd Card - Appointments ***************************--> */}
                        <div class="col-md-11 col-sm-12">
                            <div class="card mb-4 shadow-sm">
                                <div class="card-header text-center">
                                    <h3><b>المعاد القادم</b></h3>
                                </div>

                                <div class="card-body">
                                    <div class="card-text">
                                        <div class="text-center">
                                            <label class="h4">الجمعة، 1 يناير</label>
                                        </div>
                                        <div class="text-center">
                                            <p class="text-muted">
                                                <FaClock size={25} />
                                                10:30 - 10:00
                                                {/* <i class="far fa-clock"></i> */}
                                            </p>
                                            <h5>
                                                د/ أمل عبد السلام
                                                <p><sub>دكتوراه أنف وأذن</sub></p>
                                            </h5>
                                            <div class="mt-4">
                                                <span class="border border-secondary rounded-pill rounded-sm p-1">
                                                    <b>نوع الحجز:</b>
                                                    كشف
                                                </span>
                                                <span class="border border-secondary rounded-pill rounded-sm mr-5 p-1">
                                                    <b>التكلفة:</b>
                                                    70جنيهًا
                                                </span>
                                            </div>
                                        </div>
                                        <br />
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div>
                                                {/* <i class="fas fa-times-circle"></i> */}
                                                إلغاء الحجز
                                                <FaTimesCircle size={25} />
                                            </div>

                                            <div>
                                                <i class="fas fa-calendar-day"></i>
                                                تغيير المعاد
                                                <FaCalendarDay size={25} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!--*************************** 4th Card - Recent ***************************--> */}
                        <div class="col-md-11 col-sm-12">
                            <div class="card mb-4 shadow-sm">
                                <div class="card-header text-center">
                                    <h3><b>المستجدات</b></h3>
                                </div>
                                <ul class="list-group list-group-flush text-right">
                                    <li class="list-group-item">
                                        <h6>قام الطبيب أحمد فاروق بالتعديل في سجلك الصحي وفقا لأعراضك يوم 7أغسطس.</h6>
                                    </li>
                                    <li class="list-group-item">
                                        <h6>قامت الدكتورة أمل بزيادة جرعة "Alfuosin" إلى 10mg.</h6>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default patient_portal;