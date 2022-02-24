
import "../CSS/dr_profile.css";
import { React, useState, useEffect, Fragment } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import axios from "axios";
export default function Comment() {
    const [comments,setcomments]=useState([])
    const [patient,setpatient]=useState([])
    const[patientcomment,setpatientcomment]=useState({})
    useEffect(()=>{
  axios.get('/Comments/').then((res)=>setcomments(res.data))
  get_all()
  const user= patient.filter((p)=>p.id===comments.patient_id)
  setpatientcomment(user)


    },[])
    const get_all = ()=>{
        axios.get(`/users/`).then((res)=>setpatient(res.data))
      }
     
     console.log(patientcomment)
   
   
  return (
    <>
     <h1>Comments</h1>
     <div className="text-justify darker mt-4 float-right commentsection" >
                    <img
                      src={"https://i.imgur.com/CFpa3nK.jpg"}
                      alt=""
                      className="rounded-circle"
                      width="40"
                      height="40"
                    />
                    { comments.map((c)=>{
                        return (
                            <>
                            <h4 style={{color:'black'}}>{patientcomment.email}</h4> <span>{c.date_added}</span> <br />
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