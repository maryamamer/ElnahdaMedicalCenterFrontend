import { React, useState, useEffect, Fragment } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import axios from "axios";
import { useResolvedPath } from "react-router";
import { useDispatch, connect } from "react-redux";
import { get_doctor } from "../actions/doctor";
import {delete_doctor} from "../actions/doctor"

function DoctorList({doctors}) {
  const dispatch =useDispatch()
    useEffect(()=>{
      dispatch(get_doctor())
     
  
    },[])
 const removedoctor = (id)=>{
  dispatch(delete_doctor(id))
  window.location.reload(true)
 }
  return (
    <div  className="container bg-light p-5">
    <h1 className="m-3" style={{color:'black'}} >قائمة الأطباء</h1>
    <Link to="/admin/users"> <button className="btn btn-secondary btn-outline-info btn-lg m-3" type="button">المستخدمين</button></Link>
    <Link to="/admin/add/doctor"> <button className="btn btn-success btn-outline-info btn-lg m-3" type="button">اضافة طبيب</button></Link>
   <div className="bg-light " style={{margin:'100px'}}>
     <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">رقم الطبيب</th>
      <th scope="col">الصورة الشخصية</th>
      <th scope="col">اسم الطبيب</th>
      <th scope="col">ميل الطبيب</th>
      <th scope="col">التخصص</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
      { doctors.map((d)=>{
          return (
            <tr key={d.id}>
            <th scope="row">{d.id}</th>
            <td><img src={d.image} style={{borderRadius:'50%',width:'80px',height:'80px'}}></img></td>
            <td>{d.username}</td>
            <td>{d.email}</td>
            <td>{d.specialization}</td>
            <td>  <Link to={`editdoctor/${d.id}`} > <button className="btn btn-info btn-outline-primary btn-lg m-3" type="button">تعديل</button></Link></td>
            <td>  <button className="btn btn-danger btn-outline-primary btn-lg m-3" onClick={()=>{removedoctor(d.id)}} type="button">مسح</button></td>
          </tr>
          )
      })
  
}
  
  </tbody>
</table>
</div>

    </div>
  );
}

const mapStateToProps = (state) => ({
    doctors: state.getdoctor.doctor,
  });
  
  export default connect(mapStateToProps, { get_doctor })(DoctorList);