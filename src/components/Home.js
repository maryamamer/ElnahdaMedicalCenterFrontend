import React, { component } from "react";
import slide1 from "../media/images/slide-1.jpg";
import slide2 from "../media/images/slide-2.jpg";
import slide3 from "../media/images/slide-3.jpg";
import logo from "../media/images/logo.jpeg";
import "../CSS/Home.css";
import { Link } from "react-router-dom";
import { FaCheckDouble } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
// import { FaAngleDoubleRight} from "react-icons/fa";
// import {Linking} from 'react-native'

export default class HomePage extends React.Component {
  render() {


    return (
      <>
        <body>


          <div id="hero" className="carousel slide" data-ride="carousel">
            {/* <!-- Indicators --> */}
            <ul className="carousel-indicators">
              <li data-target="#hero" data-slide-to="0" className="active"></li>
              <li data-target="#hero" data-slide-to="1"></li>
              <li data-target="#hero" data-slide-to="2"></li>
            </ul>


            {/* <!-- The slideshow --> */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={slide1} alt="Dr" width="2000" height="600" />

                <div className="carousel-caption">
                  <h2>مرحباً بكم في مركز النهضة الطبي</h2>
                  <p>!معكم لحظة بلحظة</p>
                  <p>يومياً طوال أيام الأسبوع ال24 ساعة</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={slide2} alt="Lab" width="2000" height="600" />
              </div>
              <div className="carousel-item">
                <img src={slide3} alt="Emergcy" width="2000" height="600" />
              </div>
            </div>

            {/* <!-- Left and right controls --> */}

            <a className="carousel-control-prev" href="#hero" data-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#hero" data-slide="next">
              <span className="carousel-control-next-icon"></span>
            </a>
          </div>

          {/* <!-- ======= Featured Services Section ======= --> */}
          <span>  <Link to="/Chatbot">
            <div class="input-group">
              <span id="chatbot">
                <i class="fa fa-user-circle-o" aria-hidden="true"></i>
              </span>

            </div>
          </Link>
          </span>
          <section id="featured-services" className="featured-services">
            <div className="container" data-aos="fade-up">
              <div className="row">
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 text-center">
                  <div
                    className="icon-box"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >

                    <h4 className="title">مركز الطوارئ</h4>
                    <p className="description text-right">
                      معاك لحظة بلحظة طوال ال 24 ساعة يومياً
                    </p>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 text-center">
                  <div
                    className="icon-box"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <h4 className="title">وحدة رعاية الأطفال</h4>
                    <p className="description text-right">
                      رعاية صحية فائقة وتجهيزات على أعلى مستوى لتوفير الرعاية
                      المثلى للأطفال حديثي الولادة والأطفال المبتسرين
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 text-center">
                  <div
                    className="icon-box"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <h4 className="title">عيادات خارجية</h4>
                    <p className="description text-right">
                      بنوفرلك عيادات خارجية شاملة جميع التخصصات تحت إشراف صفوة
                      من كبار الاستشاريين والأخصائيين في جميع التخصصات
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 text-center">
                  <div
                    className="icon-box"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <h4 className="title">عيادة الأسنان</h4>
                    <p className="description text-right">
                      تضم نخبة من أفضل أطباء الأسنان
                      (تقويم-جراحة-زراعة-أطفال-تجميل) وأحدث التقنيات لعلاج العصل
                      بدون ألم وفي أقل عدد زيارات
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 text-center">
                  <div
                    className="icon-box"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <h4 className="title">مركز الأشعة</h4>
                    <p className="description text-right">
                      جاهز لخدمتكم في الأشعة التشخيصية ويتم إصدار جميع التقارير
                      خلال 24 ساعة من وقت إجراء الفحص
                    </p>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 text-center">
                  <div
                    className="icon-box"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <h4 className="title">معمل التحاليل</h4>
                    <p className="description text-right">
                      معمل تحاليل متكامل، جميع التحاليل الطبية بأحدث التقنيات
                      بأعلى دقة وأسرع النتائج
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 text-center">
                  <div
                    className="icon-box"
                    data-aos="fade-up"
                    data-aos-delay="700"
                  >
                    <h4 className="title">طاقم طبي </h4>
                    <p className="description text-right">
                      نسعى دائما لتقديم كل الرعاية والاهتمام لمرضانا مع وجود
                      فريق طبي متميز لتطبيق أعلى المعايير
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 text-center">
                  <div
                    className="icon-box"
                    data-aos="fade-up"
                    data-aos-delay="800"
                  >
                    <h4 className="title">تعاقدات الشركات</h4>
                    <p className="description text-right">
                      نستقبل تعاقدات الشركات، وذلك لتقديم الخدمات الطبية والصحية
                      لموظفيهم وذويهم
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- ======= appointment ======= --> */}
          <section id="appointment" className="appointment">
            <div className="container1" data-aos="zoom-in">
              <div className="text-center">
                <h3>في حالة طوارئ؟ تحتاج إلى المساعدة الآن؟</h3>
                <a className="appointment-btn scrollto" href="tel:+01276015353">
                  إحجز موعداً
                </a>
              </div>
            </div>
          </section>
          {/* <!-- ======= About Us Section ======= --> */}
          <section id="about" className="about text-right">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>عنّا</h2>
              </div>

              <div className="row">
                <div className="col-lg-6" data-aos="fade-right">
                  <img src={logo} className="img-fluid" alt="" />
                </div>
                <div
                  className="col-lg-6 pt-4 pt-lg-0 content text-right"
                  data-aos="fade-left"
                >
                  <h3 className="text-center"> مركز النهضة الطبي</h3>
                  <p className="description2 text-center">
                    اول واحدث مجمع طبي متكامل بالنهضةمركز النهضة الطبي بيوفرلك
                    عيادات خارجية شاملة جميع التخصصات تحت إشراف صفوة من كبار
                    الاستشاريين والأخصائيين في جميع التخصصات و تشمل عياداتنا
                    عيادة الباطنة - عيادة النساء والتوليد - عيادة الاسنان -
                    عيادة العظام - عيادة الجلدية و التجميل - عيادة أنف و أذن و
                    حنجرة - عيادة اطفال - عياده الجراحة - عيادة رمد - اكبر واضخم
                    مركز علاج طبيعي متكامل بغرب الاسكندرية - معمل تحاليل طبية
                    متكامل - مركز اشعة مجهز باحدث اجهزة الاشعة الديجتال
                  </p>
                  <br />
                  <br />
                  <ul>
                    <li className="description2">
                      <FaCheckDouble />
                      خدمة 24 ساعة يومياً
                    </li>
                    <li className="description2">
                      <FaCheckDouble />
                      أكفأ الأطباء والمتخصصين
                    </li>
                    <li className="description2">
                      <FaCheckDouble />
                      أحدث المعدات
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- ======= Frequently Asked Questioins Section ======= --> */}
          <section id="faq" className="faq section-bg ">
            <div className="container">
              <div className="section-title">
                <h2>أسئلة تهمك</h2>
                <p>هنا ستجد إجابة لكل الأسئلة التي تدور في بالك </p>
              </div>

              <ul className="faq-list text-right">
                <li>
                  <div data-toggle="collapse" data-target="#faq1">
                    <FaAngleDown className="bi bi-chevron-down icon-show" />
                    <FaAngleUp className="bi bi-chevron-up icon-close" />
                    ماهي مواعيدنا؟{" "}
                  </div>

                  <div id="faq1" className="collapse" data-parent=".faq-list">
                    <p>نحن متواجدن ال 24 ساعة يومياً</p>
                  </div>
                </li>

                <li>
                  <div data-toggle="collapse" data-target="#faq2">
                    <FaAngleDown className="bi bi-chevron-down icon-show" />
                    <FaAngleUp className="bi bi-chevron-up icon-close" />
                    ماهي الأقسام المتاحة لدينا؟{" "}
                  </div>
                  <div
                    id="faq2"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      مركز النهضة الطبي هو مركز طبي متكامل شامل جميع الأقسام:
                      عيادة الباطنة - عيادة النساء والتوليد - عيادة الاسنان -
                      عيادة العظام - عيادة الجلدية و التجميل - عيادة أنف و أذن و
                      حنجرة - عيادة اطفال - عياده الجراحة - عيادة رمد - اكبر
                      واضخم مركز علاج طبيعي متكامل بغرب الاسكندرية - معمل تحاليل
                      طبية متكامل - مركز اشعة مجهز باحدث اجهزة الاشعة الديجتال
                    </p>
                  </div>
                </li>

                <li>
                  <div data-toggle="collapse" data-target="#faq3">
                    <FaAngleDown className="bi bi-chevron-down icon-show" />
                    <FaAngleUp className="bi bi-chevron-up icon-close" />
                    ماهي إجراءات السلامة التي يتخذها المركز الطبي؟{" "}
                  </div>
                  <div
                    id="faq3"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      يقوم الفريق الطبي بأحدث إجراءات السامة الخاصة بفيروس
                      كورونا المستجد{" "}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </body>
      </>
    );
  }
}
