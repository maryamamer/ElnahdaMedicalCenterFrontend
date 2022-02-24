import React, { useState, useEffect } from "react";
import New from "../media/images/New.png";
import Ali from "../media/images/ALi.png";
import axios from "axios";
import Nada from "../media/images/Nada.png";
import "../CSS/Doctors.css";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { get_doctor } from "../actions/doctor";
import getdoctor from "../reducers/getdoctor";
import { param } from "jquery";

function Recommend() {
  const params = useParams();
  const [doctor, setdoctor] = useState([]);
  const dispatch=useDispatch()
  const [recommend, setrecommend] = useState([]);

  const all=useSelector((state)=>state.getdoctor)
  
  

  useEffect(() => {
//     axios
//   .get(`/doctors/`)
//   .then((res) => {
//     setdoctors(res.data);
//   }).catch((err) => console.log(err));


  
dispatch(get_doctor())
// getdoctor()

// filterdoctor()
  },[]);
  
const getdoctor =()=>{
    all.map((d)=>{if(d.id==params.id){setdoctor(d)}})
   
}
const filterdoctor =()=>{
 
    const recommended=all.filter((d)=>d.specialization===doctor.specialization)
    setrecommend(recommended)
}


 
//   setrecommend(all.filter((d)=>d.specialization===doctor.specialization))


//   setdoctors(get_doctor())
//   const recommended = doctors.filter(
//     (d) => d.specialization === doctor.specialization
//   );
//  setrecommend(recommended)
 
 
 

  



  //    axios.get('/doctors').then((res)=>setdoctors(res.data))

  //    setrecommend(doctors.filter((d)=>d.specialization===doctor.specialization))

  // console.log(doctors)
  // useEffect(()=>{
  //     const res = axios
  //     .get(`/doctors/`)
  //     res.data.filter((r) => r.specialization === doctor.specialization)
  //     setrecommend(res)
  // },[])

  // setdoctor(doctor)
  // setdoctor(useSelector(state=>state.doctor.doctor))
  // console.log(doctors)
  // console.log(doctor)

  return (
    <>
      <div classNameName="container-fluid">
       
        <div className="container-fluid">
          <div className="row m-5">
            {recommend.map((d, i) => {
              return (
                <>
                  <div className="col-md-3">
                    <Link to={`/dr/${d.id}`}>
                      <div className="divDocto ">
                        <img className="img1" src={`${d.image}`} alt="doctor" />
                      </div>
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

// const mapStateToProps = (state) => ({
//   Doctors: state.getdoctor,
// });

// export default connect(mapStateToProps)(Recommend);
export default Recommend
