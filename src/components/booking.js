import jwtDecode from "jwt-decode";
import { React, useState, useEffect } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import "../CSS/booking.css";
import { add_appointment, registered } from "../actions/appointment";
import { connect } from 'react-redux';
import axios from "axios";


function Booking({ registered, isregistered, add_appointment, app }) {
  const params = useParams()
  const [doctorapps, setdoctorapps] = useState([])
  useEffect(() => {
    axios.get('/Doctorapps/').then((res) => setdoctorapps(res.data.filter((d) => d.doctor_id == params.id)))

  }, [])

  const [formData, setFormData] = useState({
    date: '',
    message: ''
  });

  const { date, message } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    add_appointment(date, message);
    registered();

  };

  if (isregistered) {
    localStorage.setItem('appointment', (JSON.parse(app))[0].id)

    return <Redirect to={`/dr/${params.id}`} />
  }


  return (
    <>
      <div className="col">
        <div className="well">
          <div className="well-header text-center">من فضلك أدخل جمبع البيانات المطلوبة</div>
          <hr />


          {/* <!-- 1st Choice Input --> */}
          <form method="post" onSubmit={e => {
            onSubmit(e)
            alert('تم التسجيل بنجاح')

          }}>
            <div className="form-group">
              <label for="date">المواعيد </label>
              <select
                className="custom-select "
                value={date}
                name="date"
                onChange={(e) => onChange(e)}
                id="date"
              >
                {doctorapps.map((d, i) => {
                  d.date = new Date().toLocaleString()

                  return (
                    <option key={i} value={d.date}>{d.date}</option>
                  )

                })



                }
              </select>
            </div>


            <p>رسالتك</p>
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
            <Link to={`/dr/${params.id}`}> <input type="reset" className="btn btn-primary" value="التراجع" /><hr />
            </Link>
          </form>

          {/* <!-- form end --> */}
        </div>
      </div>
    </>
  );
}
const mapStateToProps = state => ({
  isregistered: state.addapp.isregistered,
  app: state.getapp.app
});


export default connect(mapStateToProps, { registered, add_appointment })(Booking);


