import { React, useState, useEffect, Fragment } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import Doctor from "../media/images/Doctor.jpeg";
import "../CSS/dr_profile.css";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsFillAwardFill } from "react-icons/bs";
import { BsBook } from "react-icons/bs";
import axios from "axios";
import { add_appointment, remAppointment } from "../actions/appointment";
import { connect } from "react-redux";
import Comment from "../components/comments";
import jwtDecode from "jwt-decode";
import smile from "../media/images/smile.jpg";

function Dr_Profile({ isregistered, remAppointment }, props) {
  const params = useParams();
  const [doctor, setdoctor] = useState({});
  const [patient, setpatient] = useState([]);
  const [commvalue, setcomm] = useState("");
  const [isadded, setisadded] = useState(false);
  const token = localStorage.getItem("access");
  const [currentdate, setcurrentdate] = useState("");
  console.log(commvalue)
  if (token) {
    var user = jwtDecode(token).user_id;
  }

  const get_user = () => {
    axios.get(`/users/${user}`).then((res) => setpatient(res.data));
  };

  const appointment = localStorage.getItem("appointment");
  const username = JSON.stringify(patient.username);

  useEffect(() => {
    axios.get(`/doctors/${params.id}`).then((res) => setdoctor(res.data));

    get_user();
    var today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
    setcurrentdate(date);

    // get_user()
  }, []);

  const add_comment = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    const body = JSON.stringify({
      patient_id: user,
      doctor_id: params.id,
      comment_description: commvalue,
      date_added: currentdate,
    });
    await axios
      .post("/Comments/", body, config)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setisadded(true);
  };
  const handlechange = (e) => {
    setcomm(e.target.value);
  };

  const [redirect, setRedirect] = useState(false);
  const notregLinks = () => (
    <Fragment>
      <Link to={`/booking/${doctor.id}`}>
        <button type="button" className="btn btn-success " style={{ width: '5rem', padding: '10px' }}>
          ???????? ????????
        </button>
      </Link>
      <br />
      {/* <li className='nav-item'>
            <Link className='nav-link' to='/signup'>Sign Up</Link>
        </li> */}
      {/* <Link to={`/Payment/${doctor.id}`}>
        <button type="button" className="btns">
          ???????? ??????????
        </button>
      </Link>
      <br /> */}

      <Link to={`/recommend/${doctor.id}`}>
        <button type="button" className="btns">
          ??????????????????
        </button>
      </Link>
    </Fragment>
  );

  const rem_app = () => {
    remAppointment();
    setRedirect(true);
  };
  const regLinks = () => (
    <>
      <input
        type="button"
        className="btn btn-danger"
        id="book-btn"
        value=" ?????????? ??????????"
        onClick={rem_app}
      />
      <Link to={`/Payment/${doctor.id}`}>
        <button type="button" className="btns">
          ???????? ??????????
        </button>
      </Link>
    </>
  );

  if (isadded) {
    window.location.reload(true);
  }
  return (
    <>
      {/* <!--*************************** 1st Card - Profile ***************************--> */}
      <div className="container mt-5 mb-5 p-3">
        <div className="row">
          <div className="col-md-5 col-sm-12 rounded shadow m-auto">
            {/* <div className="card " style={{height:'500px'}}> */}
            <div className="text-right">
              <div>
                <img
                  src={doctor.image}
                  className="img-fluid rounded-circle"
                  alt=""
                  width="70px"
                  height="70px"
                />
              </div>
              <b className="h6 b-str">{doctor.fullname}</b>
            </div>
            <br />
            {/* breeeeeeeeeeeeeeeeeeeeeeeeeeak */}

            <div>
              <p className="card-text text-center p-str">
                ????????: {doctor.specialization}
                <br />
                ?????? ??????????: {doctor.price}
                <br />
                ????????????: {doctor.experience}
              </p>
            </div>
            {/* breeeeeeeeeeeeeeeeeeeeeeeeeeak */}

            {/* <div className="d-flex justify-content-around m-auto" id="card-body-bg"> */}
            <div className="d-flex flex-column bd-highlight mb-3">
              <div className="p-2 bd-highlight">
                <Fragment>{appointment ? regLinks() : notregLinks()}</Fragment>
              </div>
            </div>
          </div>

          {/* <!--*************************** 2nd Card - Contact ***************************--> */}
          <div className="col-md-7 col-sm-12 m-auto">
            <div className="d-card">
              <div className="info">
                <h6>
                  <br /> &nbsp;
                  <i className="fas fa-phone"></i>
                  ????????????:
                  {doctor.phone}
                  <br /> &nbsp;
                  <i className="fas fa-envelope"></i>
                  ??????????:
                  {doctor.email}
                  <br /> &nbsp;
                  <i className="fas fa-graduation-cap"></i>
                  ??????????????:
                  {doctor.education_degree}
                  <br /> &nbsp;
                  <i className="fas fa-award"></i>
                  ??????????????????: ???????? ?????? {doctor.achievements}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--*************************** 3rd Card - Comments ***************************--> */}
      <div className="container mt-5 mb-5 p-3">
        <div className="row">
          <div className="col-md-7 col-sm-12 rounded shadow m-auto">
            <h1 className="text-center font-weight-bold string">??????????????????</h1>

            <div className="text-right">
              <img src={smile} width="70px" alt="" height="70px" />
              <b className="h3">{username}</b>
              <br />
              <p className="text-muted">{currentdate}</p>
            </div>

            <div className="d-flex flex-div">
              <Comment id={params.id} />
            </div>
            <br />

            <div className="text-center">
              <a href="#" className="h6">
                ???????? ???? ??????????????????
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <!--*************************** 4th Card - ShareWithUS ***************************--> */}
      {/* <div className="container mt-5 mb-5 p-3">
        <div className="row">
          <div className="col-md-10 col-sm-12 rounded m-auto">
            <form>
              <div className="form-group">
                <h3 className="text-center font-weight-bold text-white">
                  ???????? ??????????????
                </h3>
                <label className="text-white h5" for="message">
                  ????????????
                </label>{" "}
                <textarea
                  name="msg"
                  id=""
                  msg
                  cols="30"
                  rows="5"
                  value={commvalue}
                  onChange={handlechange}
                  className="form-control"
                  style={{ "background-color": "white" }}
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="button"
                  id="post"
                  onClick={add_comment}
                  className="btn"
                >
                  <b className="h4">????????</b>
                </button>
              </div>

              <div className="form-inline">
                <input
                  type="checkbox"
                  name="check"
                  id="checkbx"
                  className="mr-1"
                />
                <label className="text-white h6 mr-1" for="subscribe">
                  ???????????? ?????????? ?????? ??????????????????
                </label>
              </div>
            </form>
            <br /> <br /> <br />
          </div>
        </div>
      </div> */}

      {token ? (<div className="container mt-5 mb-5 p-3">
        <div className="row">
          <div className="col-md-10 col-sm-12 rounded m-auto">
            <form>
              <div className="form-group">
                <h3 className="text-center font-weight-bold text-white">
                  ???????? ??????????????
                </h3>
                <label className="text-white h5" for="message">
                  ????????????
                </label>{" "}
                <textarea
                  name="msg"
                  id=""
                  msg
                  cols="30"
                  rows="5"
                  value={commvalue}
                  onChange={handlechange}
                  className="form-control"
                  style={{ "background-color": "white" }}
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="button"
                  id="post"
                  onClick={add_comment}
                  className="btn"
                >
                  <b className="h4">????????</b>
                </button>
              </div>

              <div className="form-inline">
                <input
                  type="checkbox"
                  name="check"
                  id="checkbx"
                  className="mr-1"
                />
                <label className="text-white h6 mr-1" for="subscribe">
                  ???????????? ?????????? ?????? ??????????????????
                </label>
              </div>
            </form>
            <br /> <br /> <br />
          </div>
        </div>
      </div>) :
        (
          <div>
            <h3 className="text-danger text-center">
              ???? ???????????? ???????????? ?????????????? ???????????????? ??????????????
            </h3>
          </div>
        )
      }
    </>
  );
}
const mapStateToProps = (state) => ({
  isregistered: state.addapp.isregistered,
});

export default connect(mapStateToProps, { remAppointment })(Dr_Profile);

// import { React, useState, useEffect, Fragment } from "react";
// import { Link, useParams, Redirect } from "react-router-dom";
// import Doctor from "../media/images/Doctor.jpeg";
// import "../CSS/dr_profile.css";
// import { BsFillTelephoneOutboundFill } from "react-icons/bs";
// import { BsFillEnvelopeFill } from "react-icons/bs";
// import { BsFillAwardFill } from "react-icons/bs";
// import { BsBook } from "react-icons/bs";
// import axios from "axios";
// import { add_appointment, remAppointment } from '../actions/appointment';
// import { connect } from 'react-redux';
// import Comment from "./comments";
// import jwtDecode from "jwt-decode";

// function Dr_Profile({ isregistered, remAppointment },props) {
//   const params = useParams();
//   const [doctor, setdoctor] = useState({});
//   const [patient, setpatient] = useState([]);
//   const[commvalue,setcomm]=useState('')
//   const[isadded,setisadded]=useState(false)
//   const token = localStorage.getItem('access')
// const [currentdate,setcurrentdate]=useState('')
//   const user = jwtDecode(token).user_id
//   const get_user = ()=>{
//     axios.get(`/users/${user}`).then((res)=>setpatient(res.data))
//   }

//   const appointment = localStorage.getItem('appointment')
//   const username=JSON.stringify(patient.username)

//   useEffect(() => {

//     axios
//       .get(`/doctors/${params.id}`)
//       .then((res) => setdoctor(res.data))

//     get_user()
//      var today = new Date(),
//   date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//   setcurrentdate(date)

//       // get_user()
//   }, [])

//  const add_comment = async () =>{
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `JWT ${localStorage.getItem("access")}`,
//       Accept: "application/json",
//     },
//   };

//   const body = JSON.stringify({
//     patient_id:user,
//     doctor_id:params.id,
//     comment_description:commvalue,
//     date_added:currentdate

//   })
//  await axios.post('/Comments/',body,config).then((res)=>console.log(res)).catch((err)=>console.log(err))
//  setisadded(true)
//  }
//  const handlechange = (e)=>{
// setcomm(e.target.value)
//  }

//   const [redirect, setRedirect] = useState(false);
//   const notregLinks = () => (
//     <Fragment>
//       <Link to={`/booking/${doctor.id}`}>
//         <input
//           type="button"
//           className="btn btn-primary"
//           id="book-btn"
//           value="???????? ????????"
//         />
//       </Link>
//       {/* <li className='nav-item'>
//             <Link className='nav-link' to='/signup'>Sign Up</Link>
//         </li> */}
//     </Fragment>
//   );

//   const rem_app = () => {
//     remAppointment();
//     setRedirect(true);
// };
//   const regLinks = () => (
//     <input
//       type="button"
//       className="btn btn-danger"
//       id="book-btn"
//       value=" ?????????? ??????????"
//       onClick={rem_app}
//     />
//   );

//   if (isadded){
//    window.location.reload(true)
//    }
//   return (
//     <>
//       <div className="row text-right ">
//         <div className="col-md-3 ">
//           <div className="doc-det">
//             <img src={doctor.image} alt="" />

//             <h5>{doctor.fullname}</h5>
//             <div className="stars">
//               <svg
//                 repeat-element="5"
//                 className="star"
//                 xmlns={"http://www.w3.org/2000/svg"}
//                 width="16"
//                 height="16"
//                 fill="yellow"
//                 className="bi bi-star-fill"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
//               </svg>
//             </div>
//             <div className="info">
//               <h6>
//                 <br />
//                 ???????? : {doctor.specialization}
//                 <br /> ?????? ?????????? :  {doctor.price}
//                 <br /> ???????????? : {doctor.experience}
//               </h6>
//             </div>
//           </div>
//           <div className="book m-5 p-3 text-center">
//             <i className="fas fa-calendar fa-2x"></i>

//             <Fragment>
//               {/* <Link to={`/booking/${doctor.id}`}>

//                   <input
//                     type="button"
//                     className="btn btn-primary"
//                     id="book-btn"
//                     value="???????? ????????"
//                   />
//                   </Link> */}
//               { appointment ? regLinks() : notregLinks()  }
//             </Fragment>
//             <Link to={`/recommend/${doctor.id}`}> <input type="button"  className="btn btn-primary btn-lg" value="??????????????????"/> </Link>
//           </div>
//         </div>
//         <div className="col">
//           <div className="d-card">
//             <div className="info">
//               <h6>

//                 <br /> &nbsp; ???????????? <BsFillTelephoneOutboundFill />
//                 {doctor.phone}
//                 <br />  &nbsp; <BsFillEnvelopeFill />?????????? :
//                 {doctor.email}
//                 <br /> <BsBook /> &nbsp; ?????????????? :
//                 {doctor.education_degree}
//                 <br /> <BsFillAwardFill /> &nbsp; ?????????????????? : ????????

//                 {doctor.achievements}
//               </h6>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="row m-5">

//         <div className="col-md-6">
//           <section>
//             <div className="container">
//               <div className="row">
//                 <div className="col-sm-5 col-md-6 col-12 pb-4">
//                   <h1>??????????????????</h1>
//                   <div className="comment mt-4 text-justify float-left">
//                     <img
//                       src={"https://i.imgur.com/yTFUilP.jpg"}
//                       alt=""
//                       className="rounded-circle"
//                       width="40"
//                       height="40"
//                     />
//                     <h4> {username }</h4> <span>{currentdate}</span> <br />
//                     <p>

//                     </p>
//                   </div>
//                 <Comment id={params.id}/>
//                 </div>
//                 <div className="col-lg-4 col-md-5 col-sm-4 offset-md-1 offset-sm-1 col-12 mt-4">
//                   <form id="algin-form">
//                     <div className="form-group">
//                       <h4>???????? ??????????</h4> <label for="message">????????????</label>{" "}
//                       <textarea
//                         name="msg"
//                         id=""
//                         msg
//                         cols="30"
//                         rows="5"
//                         value={ commvalue }
//                         onChange={handlechange}
//                         className="form-control"
//                         style={{ "background-color": "white" }}
//                       ></textarea>
//                     </div>

//                     <div className="form-group">
//                      <button type="button" id="post" onClick={add_comment} className="btn btn-primary btn-lg">
//                         ???????? ????????????
//                       </button>

//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>
//     </>
//   );
// }
// const mapStateToProps = state => ({
//   isregistered: state.addapp.isregistered
// });

// export default connect(mapStateToProps, { remAppointment })(Dr_Profile);