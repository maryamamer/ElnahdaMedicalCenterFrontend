import jwtDecode from "jwt-decode";
import { React, useState } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import "../CSS/booking.css";
import { add_appointment, registered } from "../actions/appointment";
import { connect } from 'react-redux';


function Booking({ registered, isregistered, add_appointment }) {

  const params = useParams()
  const [formData, setFormData] = useState({
    date: '',
    message: ''
  });
  //   if (isregistered) {
  //     return <Redirect to='/dr' />

  // }

  const { date, message } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    add_appointment(date, message);
    registered();
  };

  if (isregistered) {
    return <Redirect to={`/dr/${params.id}`} />
  }

  return (
    <>
      <div className="col">
        <div className="well">
          <div className="well-header text-center">من فضلك أدخل جمبع البيانات المطلوبة</div>
          <hr />

          <p>ميعاد المقابلة</p>

          {/* <!-- 1st Choice Input --> */}
          <form method="post" onSubmit={e => {
            onSubmit(e)
            alert('تم التسجيل بنجاح')

          }}>
            <div className="form-group">
              <label for="datepicker">الاختيار الاول</label>
              <div className="input-group date" id="datetimepicker2">
                <input type="date" className="form-control" id="datepicker" name="date" value={date}
                  onChange={e => onChange(e)} />
                <span className="input-group-addon"><span className="fa fa-calendar"></span></span>
              </div>
            </div>



            <div className="form-group">

              <input className="form-control text-right" type="text" name="message" value={message}
                onChange={e => onChange(e)} id="message" placeholder="إترك رسالتك" maxlength="140" rows="7"></input>
            </div>

            {/* <!-- Button Area--> */}
            <div className="checkbox">

              <label><input type="checkbox" />الأحكام والشروط</label>
            </div>
            <a href="/dr">
              <input type="submit" className="btn btn-success" value="التأكيد" />
            </a>
            <input type="reset" className="btn btn-primary" value="التراجع" /><hr />

          </form>

          {/* <!-- form end --> */}
        </div>
      </div>
    </>
  );
}
const mapStateToProps = state => ({
  isregistered: state.addapp.isregistered
});


export default connect(mapStateToProps, { registered, add_appointment })(Booking);


