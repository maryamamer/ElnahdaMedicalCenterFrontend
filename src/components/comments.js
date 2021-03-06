
import "../CSS/dr_profile.css";
import { React, useState, useEffect, Fragment } from "react";

import axios from "axios";
import jwtDecode from "jwt-decode";
import { useParams } from "react-router";

export default function Comment({ id }) {
  const [comments, setcomments] = useState([])
  const [patient, setpatient] = useState([])
  const [filtered, setfiltered] = useState([])


  useEffect(() => {
    axios.get('/Comments/').then((res) => {
      setcomments(res.data.filter((cm) => cm.doctor_id == id))
    })
    console.log(comments)
    get_all()
    console.log(id)

  }, [])

  const get_all = async () => {
    axios.get(`/users/`).then((res) => setpatient(res.data))
  }

  return (
    <>

      {/* <h1>التعليقات</h1> */}
      <div className="text-justify darker float-right commentsection" >

        {comments.map((c, i) => {
          return (
            <div key={i}>
              <h6 className="text-muted m-1" >{
                patient.map((p) => {
                  if (p.id === c.patient_id) {
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
            </div>
          )
        })

        }
      </div>
    </>
  );
}