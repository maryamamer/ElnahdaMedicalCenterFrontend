
import "../CSS/dr_profile.css";
import { React, useState, useEffect, Fragment } from "react";

import axios from "axios";
import jwtDecode from "jwt-decode";
export default function Comment() {
    const [comments,setcomments]=useState([])
    const [patient,setpatient]=useState([])
    useEffect(()=>{
  axios.get('/Comments/').then((res)=>setcomments(res.data))
  get_all()
 

    },[])
    const get_all = ()=>{
        axios.get(`/users/`).then((res)=>setpatient(res.data))
      }
   
  return (
    <>
     <h1>التعليقات</h1>
     <div className="text-justify darker mt-4 float-right commentsection" >
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