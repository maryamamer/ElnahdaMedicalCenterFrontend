import { React, useState, useEffect, Fragment } from "react";
import { Link, useParams, Redirect, useHistory } from "react-router-dom";
import axios from "axios";
import { add_user } from "../actions/users";
import { useDispatch, connect, useSelector } from "react-redux";
import { get_doctor } from "../actions/doctor";
import {add_doctor} from "../actions/doctor"

function Add_doctor() {
  const dispatch = useDispatch();
  const[dept,setdept]=useState([])
  const errors=useSelector((state)=>state.getdoctor.errors)
  useEffect(()=>{
    axios.get('/Departments/').then((res)=>{
     setdept(res.data)
    })

    
  },[])
  

  const [doctorinfo, setdoctorinfo] = useState({
    experience: "",
    username: "",
    password: "",
    fullname: "",
    email: "",
    phone: "",
    date_of_birth: "",
    address: "",
    image: "",
    price: "",
    age: "",
    gender: "",
    education_degree: "",
    specialization: "",
    achievements: "",
    status: "",
    is_superuser: "",
    patient_number: "",
    dept_id:"",
  });

  const history = useHistory();

  const onChange = (e) => {
    setdoctorinfo({ ...doctorinfo, [e.target.name]: e.target.value });
 
  };
  // setuserinfo({ ...userinfo, [e.target.name]: e.target.value });

  const handlechange = (e) => {
    let checked = e.target.checked;
    if (checked) {
      setdoctorinfo({ ...doctorinfo, [e.target.name]: true });
    } else {
      setdoctorinfo({ ...doctorinfo, [e.target.name]: false });
    }
  };

  const handleimage = (e) => {
    let img = e.target.files[0];
    setdoctorinfo({ ...doctorinfo, image: img });
  };
  const {
    experience,
    username,
    password,
    fullname,
    email,
    phone,
    date_of_birth,
    address,
    image,
    price,
    age,
    gender,
    education_degree,
    specialization,
    achievements,
    status,
    is_superuser,
    patient_number,
    dept_id,

  } = doctorinfo;
console.log(doctorinfo)
  const adddoctor = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("experience", experience);
    fd.append("username", username);
    fd.append("password", password);
    fd.append("fullname", fullname);
    fd.append("email", email);
    fd.append("phone", phone);
    fd.append("date_of_birth", date_of_birth);
    fd.append("addresss", address);
    fd.append("image", image);
    fd.append("price", price);
    fd.append("age", age);
    fd.append("gender", gender);
    fd.append("education_degree", education_degree);
    fd.append("specialization", specialization);
    fd.append("achievements", achievements);
    fd.append("status", status);
    fd.append("is_superuser", is_superuser);
    fd.append("patient_number", patient_number);
    fd.append("dept_id", dept_id);
 
    dispatch(add_doctor(fd));
  };

  return (
    <>
      <form
        method="post"
        className=" bg-light m-3"
        noValidate
        onSubmit={(e) => adddoctor(e)}
      >
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="username">الاسم</label>
            <input
              type="text"
              className="form-control"
              value={username}
              id="username"
              name="username"
              onChange={(e) => onChange(e)}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="password">الرقم السري</label>
            <input
              type="text"
              className="form-control"
              value={password}
              id="password"
              name="password"
              onChange={(e) => onChange(e)}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="email">الميل</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              name="email"
              onChange={(e) => onChange(e)}
              required
            />
          
           <div className="bg-light">
          <p style={{color:'red'}}>
             {errors.email}
          </p>
           </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="dept_id">رقم القسم</label>
          <select
              className="custom-select "
              onChange={(e) => onChange(e)}
              name="dept_id"
              value={dept_id}
              id="gender"
            >
              {
                dept.map((d)=>{
                  return (
                    <option value={d.id}>{d.id}</option>
                  )
                })
              }
            
             
            </select>
        </div>
        <div className="form-group">
          <label htmlFor="patient_number">عدد المرضي</label>

          <input
              type="number"
              className="form-control"
              id="patient_number"
              name="patient_number"
              value={patient_number}
              onChange={(e) => onChange(e)}
            />
         
        </div>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="address">العنوان</label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={address}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="experience">سنين الخبرة</label>
            <input
              type="number"
              className="form-control"
              id="experience"
              name="experience"
              value={experience}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="fullname">الاسم بالكامل</label>
            <input
              type="text"
              className="form-control"
              id="fullname"
              name="fullname"
              value={fullname}
              onChange={(e) => onChange(e)}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="gender">النوع</label>

            <select
              className="custom-select "
              
              name="gender"
              value={gender}
              onChange={(e) => onChange(e)}
              id="gender"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <div className="bg-light">
          <p style={{color:'red'}}>
             {errors.gender}
          </p>
          </div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="date_of_birth">تاريخ الميلاد</label>
            <input
              type="date"
              className="form-control"
              id="date_of_birth"
              name="date_of_birth"
              value={date_of_birth}
              onChange={(e) => onChange(e)}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="price">سعر الكشف </label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              value={price}
              onChange={(e) => onChange(e)}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="phone">الهاتف</label>
          <input
            type="phone"
            className="form-control"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="age">العمر</label>
            <input
              type="number"
              className="form-control"
              id="age"
              name="age"
              value={age}
              onChange={(e) => onChange(e)}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="image">صورة ان يوجد</label>
            <input
              type="file"
              className="form-control"
              // multiple
              accept="image/*"
              // value={image}
              id="image"
              name="image"
              onChange={(e) => handleimage(e)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="education_degree">المستوى التعليمي</label>

            <input
              type="text"
              className="form-control"
              id="education_degree"
              name="education_degree"
              value={education_degree}
              onChange={(e) => onChange(e)}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="specialization">التخصص </label>
            <input
              type="text"
              className="form-control"
              id="specialization"
              name="specialization"
              value={specialization}
              onChange={(e) => onChange(e)}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="achievements">الانجازات</label>
            <input
              type="text"
              className="form-control"
              id="achievements"
              name="achievements"
              value={achievements}
              onChange={(e) => onChange(e)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="status">الحالة الاجتماعية</label>
            <select
              className="custom-select "
              onChange={(e) => onChange(e)}
              name="status"
              value={status}
              id="status"
            >
              <option value="single">Single</option>
              <option value="married">Married</option>
            </select>
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>

        <div className="custom-control custom-checkbox mb-3">
          <input
            type="checkbox"
            className="custom-control-input"
            id="is_superuser"
            value={is_superuser}
            name="is_superuser"
            onChange={(e) => handlechange(e)}
          />
          <label className="custom-control-label" for="is_superuser">
            ادمن؟
          </label>
        </div>
        {/* <div className="form-group">
          <label htmlFor="doctor_id">الطبيب الخاص</label>
          <select
            className="custom-select "
            onChange={(e) => onChange(e)}
            name="doctor_id"
            value={doctor_id}
            id="doctor_id"
          >
            {doctor.map((d) => {
              return <option value={d.id}>{d.id}</option>;
            })}
          </select>
        </div> */}
        <input className="btn btn-primary" type="submit" value="تأكيد" />

        <Link to="/admin/doctors">
          {" "}
          <button className="btn btn-secondary btn-outline-light">
            الرجوع
          </button>
        </Link>
      </form>
    </>
  );
}
const mapStateToProps = (state) => ({
  users: state.user,
  isdoctor: state.user.isdoctor,
  doctor: state.getdoctor.doctor,
});

export default connect(mapStateToProps, { add_doctor })(Add_doctor);
