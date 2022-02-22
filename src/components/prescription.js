import React from "react";
import '../CSS/prescription.css'
import { FaHome, FaCalendarAlt, FaFileMedical, FaFlask, FaPills, FaHistory, FaSignOutAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

function prescription() {
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
            <main role="main" dir="rtl">
                <div class="container">
                    <div class="row">

                        <div class="col-md-10 col-sm-12">
                            <div class="card mb-4 shadow-sm">
                                <div class="card-header text-center display-4">
                                    <b>الروشيتة</b>
                                </div>
                                <div class="card-header text-right">
                                    <div>
                                        <b class="h4 font-weight-bolder">د/ أمل عبد السلام
                                            <p><sub class="text-muted">11/1/2022</sub></p>
                                        </b>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-secondary btn-lg">طباعة</button>
                                    </div>
                                </div>

                                <div class="card-body bg-light">
                                    <div class="table-responsive">
                                        <table class="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col">الدواء</th>
                                                    <th scope="col" class="text-center">الكمية</th>
                                                    <th scope="col" class="text-center">المدة</th>
                                                    <th scope="col" class="text-center">التعليمات</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">Paracetamol</th>
                                                    <td class="text-center">1-0-0</td>
                                                    <td class="text-center">شهر</td>
                                                    <td class="text-center">يؤخذ قرص بعد الفطار مباشرة</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Aspirin</th>
                                                    <td class="text-center">0-0-1</td>
                                                    <td class="text-center">أسبوعين</td>
                                                    <td class="text-center">يؤخذ قرص قبل النوم</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Ibuprofen</th>
                                                    <td class="text-center">1-1-1</td>
                                                    <td class="text-center">3 أيام</td>
                                                    <td class="text-center">يمنع معه أخذ قرص Paracetamol صباحا، ويؤخذ على 3 أيام متقطعة </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </main>

        </>
    );
}

export default prescription;