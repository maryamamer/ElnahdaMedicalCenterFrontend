import { React, useState, useEffect, Fragment } from "react";
import { Link, useParams, Redirect,useHistory } from "react-router-dom";
import axios from "axios";
import { add_user } from "../actions/users";
import { useDispatch,connect } from "react-redux";
import { get_doctor } from '../actions/doctor';

function Adduser({doctor}) {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(get_doctor())
    },[])
   
    const [userinfo,  setuserinfo] =   useState({
        last_login:'',
        is_superuser:'',
        first_name:'',
        last_name:'',
        is_staff:'',
        is_active:'',
        date_joined:'',
        username:'',
        fullname:'',
        email:'',
        report:'',
        phone:'',
        date_of_birth:'',
        address:'',
        age:'',
        image:'',
        gender:'',
        guardian_number:'',
        guardian_relation:'',
        doctor_id:''
      });
    
    const history=useHistory()
  const onChange = e => setuserinfo({ ...userinfo, [e.target.name]: e.target.value });
  
  const handlechange = (e) => {
    let checked = e.target.checked;
    if (checked){
        setuserinfo({is_superuser:true})
    }
    else{
        setuserinfo({is_superuser:false})
    }
  }; 

  const {last_login,is_superuser,is_staff,is_active,date_joined,username,fullname,email,report,phone,date_of_birth,address,age,image,gender,guardian_number,guardian_relation,doctor_id}=userinfo

  const  adduser =(e) => {

      e.preventDefault()
   

     dispatch(add_user(userinfo))
    alert('تم الاضافة')
    // window.location.reload(true)
      
  };

  return (
    <>
      <form method="post"
        className=" bg-light m-3"
        noValidate
       
        onSubmit={e => adduser(e)}
      >
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="username">اسم المستخدم</label>
            <input
              type="text"
              className="form-control"
              value={username}
              id="username"
              name="username"
              onChange={e => onChange(e)}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="email">ميل المستخدم</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              name="email"
              onChange={e => onChange(e)}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="address">العنوان</label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={address}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="fullname">الاسم بالكامل</label>
            <input
              type="text"
              className="form-control"
              id="fullname"
              name="fullname"
              value={fullname}
              onChange={e => onChange(e)}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
    
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="gender">النوع</label>

            <select
              className="custom-select "
              onChange={e => onChange(e)}
              name="gender"
              value={gender}
              id="gender"
           
            >
              <option value="male" >Male</option>
              <option value="female" >Female</option>
            </select>
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="date_of_birth">تاريخ الميلاد</label>
            <input
              type="date"
              className="form-control"
              id="date_of_birth"
              name="date_of_birth"
              value={date_of_birth}
              onChange={e => onChange(e)}
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
            onChange={e => onChange(e)}
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
              onChange={e => onChange(e)}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="image">صورة ان يوجد</label>
            <input
              type="file"
              className="form-control"
              value={image}
              id="image"
              name="image"
              onChange={e => onChange(e)}
         
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="last_login">تاريخ أخر زيارة</label>
            <input
              type="date"
              className="form-control"
              id="last_login"
              name="last_login"
              value={last_login}
              onChange={e => onChange(e)}
           
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          
        </div>
        <div className="custom-control custom-checkbox mb-3">
            <label htmlFor="is_staff">من العاملين بالمركز ؟</label>
            <input
              type="checkbox"
              className="custom-control-input"
              value={is_staff}
              id="is_staff"
              name="is_staff"
              onChange={e => onChange(e)}
         
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
        <div className="form-row">
        <div className="col-md-6 mb-3">
            <label htmlFor="report">ملف به أخر تطورات</label>
            <input
              type="file"
              className="form-control"
              value={report}
              id="report"
              name="report"
              onChange={e => onChange(e)}
         
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="custom-control custom-checkbox mb-3">
            <label htmlFor="is_active">هل مازال متواصل معنا؟</label>
            <input
              type="checkbox"
              className="custom-control-input"
              id="is_active"
              name="is_active"
              value={is_active}
              onChange={e => onChange(e)}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="date_joined">تاريخ تسجيل الدخول</label>
            <input
              type="date"
              className="form-control"
              value={date_joined}
              id="date_joined"
              name="date_joined"
              onChange={e => onChange(e)}
         
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="guardian_number">بطاقة الواصي ان وجد</label>
            <input
              type="number"
              className="form-control"
              id="guardian_number"
              name="guardian_number"
              value={guardian_number}
              onChange={e => onChange(e)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="guardian_relation">علاقة الواصي ان وجد</label>
            <select
              className="custom-select "
              onChange={e => onChange(e)}
              name="guardian_relation"
              value={guardian_relation}
              id="guardian_relation"
           
            >
              <option value="first degree" >First Degree</option>
              <option value="second degree" >Second Degree</option>
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
            onChange={e => {
                let checked = e.target.checked
                if (checked){
                    setuserinfo({is_superuser:true})
                }
                setuserinfo({is_superuser:false})
            }}
          
          
          />
          <label className="custom-control-label" for="is_superuser">
            ادمن؟
          </label>
        </div>
        <div className="form-group">
            <label htmlFor="doctor_id">الطبيب الخاص</label>
            <select
              className="custom-select "
              onChange={e => onChange(e)}
              name="doctor_id"
              value={doctor_id}
              id="doctor_id"
           
            >
                {
                    doctor.map((d)=>{
                        return (
                            <option value={d.fullname} >{d.fullname}</option>
                        )
                    })
                }
            </select>
        </div>
        <input className="btn btn-primary" type="submit" value="تأكيد" />
       
        <Link to="/admin"> <button className="btn btn-secondary btn-outline-light">الرجوع</button></Link>
      </form>
    </>
  );
}
const mapStateToProps = state => ({
    users: state.user,
    doctor:state.getdoctor
  
});

export default connect(mapStateToProps,{add_user})(Adduser);