import { React, useState, useEffect, Fragment } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import axios from "axios";
import { useResolvedPath } from "react-router";
import { deleteuser } from "../actions/users";
import { useDispatch } from "react-redux";

function Admin() {
  const dispatch =useDispatch()
  const[user,setuser]=useState([])
    useEffect(()=>{
      axios.get('/users/').then((res)=>setuser(res.data))
     
  
    },[])
 const removeuser = (id)=>{
  dispatch(deleteuser(id))
  window.location.reload(true)
 }
 
  return (
    <div  className="container bg-light p-5">
    <h1 className="m-3" style={{color:'black'}} >قائمة المستخدمين</h1>
    <Link to="/admin/doctors"> <button className="btn btn-secondary btn-outline-info btn-lg m-3" type="button">الأطباء</button></Link>
    <Link to="/add"> <button className="btn btn-success btn-outline-info btn-lg m-3" type="button">اضافة مريض</button></Link>
   <div className="bg-light " style={{margin:'100px'}}>
     <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">رقم المستخدم</th>
      <th scope="col">الصورة الشخصية</th>
      <th scope="col">اسم المستخدم</th>
      <th scope="col">ميل المستخدم</th>
      <th scope="col">النوع</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
      { user.map((u)=>{
          return (
            <tr key={u.id}>
            <th scope="row">{u.id}</th>
            <td><img src={u.image} style={{borderRadius:'50%',width:'80px',height:'80px'}}></img></td>
            <td>{u.username}</td>
            <td>{u.email}</td>
            <td>{u.gender}</td>
            <td>  <Link to={`/edituser/${u.id}`} > <button className="btn btn-info btn-outline-primary btn-lg m-3" type="button">تعديل</button></Link></td>
            <td>  <button className="btn btn-danger btn-outline-primary btn-lg m-3" onClick={()=>{removeuser(u.id)}} type="button">مسح</button></td>
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


export default Admin;