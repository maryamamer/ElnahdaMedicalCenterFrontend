import { React, useState, useEffect, Fragment } from "react";
import { Link, useParams, Redirect,useHistory } from "react-router-dom";
import axios from "axios";
import { update_doctor } from "../actions/doctor";
import { useResolvedPath } from "react-router";
import { useDispatch,connect } from "react-redux";

function Editdoctor() {
    const dispatch=useDispatch()
    const [doctor,setdoctor]=useState({})
    const[dept,setdept]=useState([])
    useEffect( async () =>   {
        axios.get('/Departments/').then((res)=>{
            setdept(res.data)
           })
      axios.get(`/doctors/${params.id}/`).then((res)=>setdoctor(res.data))

     
    },[])


   
    const [doctorinfo, setdoctorinfo] = useState({
        experience:doctor.experience,
        username:doctor.username,
        password:doctor.password,
        fullname:doctor.fullname,
        email:doctor.email,
        phone:doctor.phone,
        date_of_birth:doctor.date_of_birth,
        address:doctor.address,
        image:doctor.image,
        price:doctor.price,
        age:doctor.age,
        gender:doctor.gender,
        education_degree:doctor.education_degree,
        specialization:doctor.specialization,
        achievements:doctor.achievements,
        status:doctor.status,
        is_superuser:doctor.is_superuser,
        patient_number:doctor.patient_number,
        dept_id:doctor.dept_id,
      });
      console.log(doctor.experience)
    
    const history=useHistory()
  const params = useParams();
  const onChange = e => setdoctorinfo({ ...doctorinfo, [e.target.name]: e.target.value });
  
  const handleimage = (e) => {
    let img = e.target.files[0];
    setdoctorinfo({ ...doctorinfo, image: img });
  };
  const handlechange = (e) => {
    let checked = e.target.checked;
    if (checked){
        setdoctorinfo({...doctorinfo,is_superuser:true})
    }
    else{
        setdoctorinfo({...doctorinfo,is_superuser:false})
    }
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

  const edit_doctor =(e) => {

      e.preventDefault()
   

     dispatch(update_doctor(params.id,doctorinfo ))
    alert('تم التعديل')
  

//      )
      
  };


  return (
    <>
      <form
        method="post"
        className=" bg-light m-3"
        noValidate
        onSubmit={(e) => edit_doctor(e)}
      >
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="username">الاسم</label>
            <input
              type="text"
              className="form-control"
              defaultValue={doctor.username}
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
              defaultValue={doctor.password}
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
              defaultValue={doctor.email}
              name="email"
              onChange={(e) => onChange(e)}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="dept_id">رقم القسم</label>
          <select
              className="custom-select "
              onChange={(e) => onChange(e)}
              name="dept_id"
              defaultValue={doctor.dept_id}
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
              defaultValue={doctor.patient_number}
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
              defaultValue={doctor.address}
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
              defaultValue={doctor.experience}
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
              defaultValue={doctor.fullname}
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
              defaultValue={doctor.gender}
              onChange={(e) => onChange(e)}
              id="gender"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="date_of_birth">تاريخ الميلاد</label>
            <input
              type="date"
              className="form-control"
              id="date_of_birth"
              name="date_of_birth"
              defaultValue={doctor.date_of_birth}
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
              defaultValue={doctor.price}
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
            defaultValue={doctor.phone}
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
              defaultValue={doctor.age}
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
              // ={image}
              defaultValue={doctor.image}
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
              defaultValue={doctor.education_degree}
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
              defaultValue={doctor.specialization}
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
              defaultValue={doctor.achievements}
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
              defaultValue={doctor.status}
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
            defaultChecked={doctor.is_superuser}
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
const mapStateToProps = state => ({
    doctor: state.getdoctor.doctor,
  
});

export default connect(mapStateToProps,{update_doctor})(Editdoctor);