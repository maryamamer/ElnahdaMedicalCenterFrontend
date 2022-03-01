import pp from "../media/images/pp.png";
import "../CSS/Profile.css";
import axios from "axios";
import { connect, useSelector } from "react-redux";
import jwtDecode from "jwt-decode";
import { React, useState, useEffect, Fragment } from "react";
import { Link, useParams, Redirect,useHistory } from "react-router-dom";
import { updateuserprofile } from "../actions/users";
import { useDispatch } from "react-redux";


function EditPatient() {
  const params = useParams();
  console.log(params);
<<<<<<< HEAD
  const dispatch = useDispatch()
  const token = localStorage.getItem("access");
  const user = jwtDecode(token).user_id;
  
 const errors=useSelector((state)=>state.user.errors)
  const [patient, setpatient] = useState({});
  useEffect(() => {
    axios.get(`/users/${user}`).then((res) => setpatient(res.data));
  }, []);

  const [userinfo,  setuserinfo] =   useState({
    fullname: patient.fullname,

    email: patient.email,

    phone: patient.phone,

    address: patient.address,
   
  });

  console.log(errors)

  const onChange = e => setuserinfo({ ...userinfo, [e.target.name]: e.target.value });
  const {fullname,email,phone,address}=userinfo

  
  console.log(patient);
  const isupdated=useSelector((state)=>state.user.updated)
  const history=useHistory()
  const edit_patient = (e)=>{
   e.preventDefault()
   
   dispatch(updateuserprofile(userinfo,params.id))
  if(isupdated){
    window.location.replace(`/Patient/${params.id}/`)
  }

  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="card"
            style={{ height: "fit-content", padding: "50px" }}
          >
            <div>
              <img
                src={pp}
                alt="Admin"
                className="rounded-circle"
                width={100}
                id="photo"
              />
              <div className="row">
                <div
                  className="card"
                  style={{
                    width: "60rem",
                    height: "fit-content",
                    margin: "auto",
                  }}
                >
                  <div className="card-body">
                    <form method="post" className="bg-light" onSubmit={(e)=>edit_patient(e)}  noValidate>
                      <div className="form-row">
                        <div className="col-md-12">
                          <label htmlFor="fullname" className="mb-0">
                            الاسم بالكامل
                          </label>

                          <input
                            type="text"
                            id="fullname"
                            name="fullname"
                            class="form-control"
                            onChange={e => onChange(e)}
                            defaultValue={patient.fullname}
                          />
                        </div>
                      </div>
                      <hr />
                      <div className="form-row">
                        <div className="col-md-12">
                          <label htmlFor="email" className="mb-0">
                            {" "}
                            البريد الألكتروني{" "}
                          </label>

                          <input
                            type="text"
                            name="email"
                            id="email"
                            class="form-control"
                            onChange={e => onChange(e)}
                            defaultValue={patient.email}
                          />
                        </div>
                      </div>
                      <hr />
                      <div className="form-row">
                        <div className="col-md-12">
                          <label htmlFor="phone" className="mb-0">
                            الجوال
                          </label>

                          <input
                            type="text"
                            id="phone"
                            name="phone"
                            class="form-control"
                            onChange={e => onChange(e)}
                            defaultValue={patient.phone}
                          />
                        </div>
                      </div>
                      <hr />
                      <div className="form-row">
                        <div className="col-md-12">
                          <label htmlFor="address" className="mb-0">
                            العنوان
                          </label>

                          <input
                            type="text"
                            name="address"
                            id="address"
                            class="form-control"
                            onChange={e => onChange(e)}
                            defaultValue={patient.address}
                          />
                        </div>
                      </div>
                      <hr />
                      <div className="form-row">
                        <div className="col-sm-12">
                       
                            <input
                              type="submit"
                              className="btn btn-info"
                              value="حفظ التغيرات"
                            />
                      
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditPatient;

