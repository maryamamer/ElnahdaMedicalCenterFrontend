import { React, useState, useEffect, Fragment } from "react";
import { Link, useParams, Redirect,useHistory } from "react-router-dom";
import axios from "axios";
import { updateuser } from "../actions/users";
import { useResolvedPath } from "react-router";
import { useDispatch,connect } from "react-redux";

function Edituser() {
    const dispatch=useDispatch()
    const [user,setuser]=useState({})
    useEffect( async () =>   {
      axios.get(`/users/${params.id}/`).then((res)=>setuser(res.data))
    },[])
   
    const [userinfo,  setuserinfo] =   useState({
        is_superuser:user.is_superuser,
        username:user.username,
        fullname:user.fullname,
        email:user.email,
        phone:user.phone,
        date_of_birth:user.date_of_birth,
        address:user.address,
        age:user.age,
        image:user.image,
        gender:user.gender,
       
      });
      console.log(user.username)
    
    const history=useHistory()
  const params = useParams();
  const onChange = e => setuserinfo({ ...userinfo, [e.target.name]: e.target.value });
  
  
  const handlechange = (e) => {
    let checked = e.target.checked;
    if (checked){
        setuserinfo({...userinfo,is_superuser:true})
    }
    else{
        setuserinfo({...userinfo,is_superuser:false})
    }
  }; 

  const {is_superuser,username,fullname,email,phone,date_of_birth,address,age,image,gender}=userinfo

  const edit_user =(e) => {

      e.preventDefault()
   

     dispatch(updateuser(params.id,userinfo))
    alert('تم التعديل')
    window.location.reload(true)
   
//      return (

// <div className="position-fixed bottom-0 right-0 p-3" style="z-index: 5; right: 0; bottom: 0;">
//   <div id="liveToast" className="toast hide" role="alert" aria-live="assertive" aria-atomic="true" data-delay="2000">
//     <div className="toast-header">
//       <img src="..." className="rounded mr-2" alt="..."/>
//       <strong className="mr-auto">Bootstrap</strong>
//       <small>11 mins ago</small>
//       <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
//         <span aria-hidden="true">&times;</span>
//       </button>
//     </div>
//     <div className="toast-body">
//       Hello, world! This is a toast message.
//     </div>
//   </div>
// </div>
//      )
      
  };

  return (
    <>
      <form method="post"
        className=" bg-light m-3"
        noValidate
       
        onSubmit={e => edit_user(e)}
      >
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="username">اسم المستخدم</label>
            <input
              type="text"
              className="form-control"
              id="username"
              defaultValue={user.username}
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
              defaultValue={user.email}
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
              defaultValue={user.address}
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
              onChange={e => onChange(e)}
              defaultValue={user.fullname}
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
              id="gender"
              defaultValue={user.gender}
           
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
              onChange={e => onChange(e)}
              defaultValue={user.date_of_birth}
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
            onChange={e => onChange(e)}
            defaultValue={user.phone}
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
              onChange={e => onChange(e)}
              defaultValue={user.age}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="image">صورة ان يوجد</label>
            <input
              type="file"
              className="form-control"
              id="image"
              name="image"
              onChange={e => onChange(e)}
              defaultValue={user.image}
         
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>
        <div className="custom-control custom-checkbox mb-3">
          <input
            type="checkbox"
            className="custom-control-input"
            id="is_superuser"
            defaultValue={user.isadmin}
            name="is_superuser"
            onChange={e => handlechange(e)}
          
          
          />
          <label className="custom-control-label" htmlFor="is_superuser">
            ادمن؟
          </label>
        </div>
        <input className="btn btn-primary" type="submit" value="تأكيد" />
       
        <Link to="/admin"> <button className="btn btn-secondary btn-outline-light">الرجوع</button></Link>
      </form>
    </>
  );
}
const mapStateToProps = state => ({
    users: state.user,
  
});

export default connect(mapStateToProps,{updateuser})(Edituser);
