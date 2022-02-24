
import "../CSS/dr_profile.css";
import { React, useState, useEffect, Fragment } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";
export default function Comment() {
    const [comments,setcomments]=useState([])
    const [patient,setpatient]=useState([])
    const[patientcomment,setpatientcomment]=useState([])
    const token = localStorage.getItem('access')
    const user = jwtDecode(token).user_id
    useEffect(()=>{
  axios.get('/Comments/').then((res)=>setcomments(res.data))
  get_all()
 
  patient_name()

    },[])
    const get_all = ()=>{
        axios.get(`/users/`).then((res)=>setpatient(res.data))
      }
      
      const patient_name = ()=>{
  
      }
      
     
   
   
  return (
    <>
     <h1>Comments</h1>
     <div className="text-justify darker mt-4 float-right commentsection" >
                <h3>جميع التعليقات</h3>
                  <h4 className="text-center m-2" style={{color:'black'}}>أضف تجربتك </h4>
                    { comments.map((c)=>{
                        return (
                            <>
                            <h6 className="text-muted m-1" >{
                                patient.map((p)=>{
                                    if (p.id===c.patient_id){
                                        return (
                                            <>
                                            {p.username}
                                            </>
                                        )
                                    }
                                })

                            
                            }</h6> <span>{c.date_added}</span> <br />
                            <p>
                              {c.comment_description}
                            </p>
                            </>
                        )
                    })
                  
}
                  </div>
    </>
  );
}