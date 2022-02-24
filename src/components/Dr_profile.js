import { React, useState, useEffect, Fragment } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import Doctor from "../media/images/Doctor.jpeg";
import "../CSS/dr_profile.css";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsFillAwardFill } from "react-icons/bs";
import { BsBook } from "react-icons/bs";
import axios from "axios";
import { add_appointment, remAppointment } from '../actions/appointment';
import { connect } from 'react-redux';
import Comment from "./comments";
import jwtDecode from "jwt-decode";


function Dr_Profile({ isregistered, remAppointment },props) {
  const params = useParams();
  const [doctor, setdoctor] = useState({});
  const [patient, setpatient] = useState([]);
  const[commvalue,setcomm]=useState('')
  const[isadded,setisadded]=useState(false)
  const token = localStorage.getItem('access')
const [currentdate,setcurrentdate]=useState('')
  const user = jwtDecode(token).user_id
  const get_user = ()=>{
    axios.get(`/users/${user}`).then((res)=>setpatient(res.data))
  }
  
  const appointment = localStorage.getItem('appointment')
  const username=JSON.stringify(patient.username)
  

  console.log(isregistered)
  useEffect(() => {
   
    axios
      .get(`/doctors/${params.id}`)
      .then((res) => setdoctor(res.data))



    get_user()
     var today = new Date(),
  date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  setcurrentdate(date)
  

      // get_user()
  }, [])
 
 const add_comment = async () =>{
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${localStorage.getItem("access")}`,
      Accept: "application/json",
    },
  };



  const body = JSON.stringify({
    patient_id:user,
    doctor_id:params.id,
    comment_description:commvalue,
    date_added:currentdate

  }) 
 await axios.post('/Comments/',body,config).then((res)=>console.log(res)).catch((err)=>console.log(err))
 setisadded(true)
 }
 const handlechange = (e)=>{
setcomm(e.target.value)
 }


  const [redirect, setRedirect] = useState(false);
  const notregLinks = () => (
    <Fragment>
      <Link to={`/booking/${doctor.id}`}>
        <input
          type="button"
          className="btn btn-primary"
          id="book-btn"
          value="احجز الأن"
        />
      </Link>
      {/* <li className='nav-item'>
            <Link className='nav-link' to='/signup'>Sign Up</Link>
        </li> */}
    </Fragment>
  );

  const rem_app = () => {
    remAppointment();
    setRedirect(true);
};
  const regLinks = () => (
    <input
      type="button"
      className="btn btn-danger"
      id="book-btn"
      value=" الغاء الحجز"
      onClick={rem_app}
    />
  );


  if (isadded){
   window.location.reload(true)
   }
  return (
    <>
      <div className="row text-right ">
        <div className="col-md-3 ">
          <div className="doc-det">
            <img src={doctor.image} alt="" />
      
            <h5>{doctor.fullname}</h5>
            <div className="stars">
              <svg
                repeat-element="5"
                className="star"
                xmlns={"http://www.w3.org/2000/svg"}
                width="16"
                height="16"
                fill="yellow"
                className="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            </div>
            <div className="info">
              <h6>
                <br />
                تخصص : {doctor.specialization}
                <br /> ثمن الكشف :  {doctor.price}
                <br /> الخبرة : {doctor.experience}
              </h6>
            </div>
          </div>
          <div className="book m-5 p-3 text-center">
            <i className="fas fa-calendar fa-2x"></i>

            <Fragment>
              {/* <Link to={`/booking/${doctor.id}`}>

                  <input
                    type="button"
                    className="btn btn-primary"
                    id="book-btn"
                    value="احجز الأن"
                  />
                  </Link> */}
              { appointment ? regLinks() : notregLinks()  }
            </Fragment>
            <Link to={`/recommend/${doctor.id}`}> <input type="button"  className="btn btn-primary btn-lg" value="المقترحات"/> </Link>
          </div>
        </div>
        <div className="col">
          <div className="d-card">
            <div className="info">
              <h6>

                <br /> &nbsp; الهاتف <BsFillTelephoneOutboundFill />
                {doctor.phone}
                <br />  &nbsp; <BsFillEnvelopeFill />الميل :
                {doctor.email}
                <br /> <BsBook /> &nbsp; التعليم :
                {doctor.education_degree}
                <br /> <BsFillAwardFill /> &nbsp; الانجازات : حاصل

                {doctor.achievements}
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-5">
        
      
        <div className="col-md-6">
          <section>
            <div className="container">
              <div className="row">
                <div className="col-sm-5 col-md-6 col-12 pb-4">
                  <h1>التعليقات</h1>
                  <div className="comment mt-4 text-justify float-left">
                    <img
                      src={"https://i.imgur.com/yTFUilP.jpg"}
                      alt=""
                      className="rounded-circle"
                      width="40"
                      height="40"
                    />
                    <h4> {username }</h4> <span>{currentdate}</span> <br />
                    <p>

                    </p>
                  </div>
                <Comment/>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-4 offset-md-1 offset-sm-1 col-12 mt-4">
                  <form id="algin-form">
                    <div className="form-group">
                      <h4>اترك تعليق</h4> <label for="message">رسالتك</label>{" "}
                      <textarea
                        name="msg"
                        id=""
                        msg
                        cols="30"
                        rows="5"
                        value={ commvalue }
                        onChange={handlechange}
                        className="form-control"
                        style={{ "background-color": "white" }}
                      ></textarea>
                    </div>
               
  

                    <div className="form-group">
                     <button type="button" id="post" onClick={add_comment} className="btn btn-primary btn-lg">
                        انشر تعليقك
                      </button>
                     
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = state => ({
  isregistered: state.addapp.isregistered
});

export default connect(mapStateToProps, { remAppointment })(Dr_Profile);