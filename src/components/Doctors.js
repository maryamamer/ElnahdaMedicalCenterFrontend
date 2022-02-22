import React, { useState, useEffect } from "react";
import New from '../media/images/New.png'
import Ali from '../media/images/ALi.png'
import axios from "axios"
import Nada from '../media/images/Nada.png'
import '../CSS/Doctors.css'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { connect } from 'react-redux';
import { get_doctor } from '../actions/doctor';


function Doctors(props) {
    // const doctors =useSelector((state)=>state.doctor)
    // console.log(doctors)
    const [doctors, setdoctor] = useState([]);
    // setdoctor(doctor)
    // setdoctor(useSelector(state=>state.doctor.doctor))
    // console.log(doctors)
    // console.log(doctor)

    useEffect(() => {
        axios.get('/doctors')
            .then(res => setdoctor(res.data))
            .catch((err) => console.log(err));


    });

    return (
        <>

            <div classNameName="container-fluid">
                <div className="row justify-content-around">
                    <form>
                        <input className="search" type="search" placeholder="Search" />
                    </form>
                </div>
                <div className="container-fluid">
                    <div className="row m-5">
                        {
                            doctors.map((d, i) => {
                                return (
                                    <>
                                        <div className="col-md-3">
                                            <Link to={ `/dr/${d.id}`}>

                                            <div className="divDoctor">
                                                <img className="img1" src={`${d.image}`} alt="doctor" />
                                                <div className="overview justify-content-evenly">
                                                    <h2>{d.fullname}</h2>
                                                    <p> {d.specialization}</p>
                                                    <p>التقييم</p>
                                                </div>
                                            </div>
                                            </Link>
                                        </div>
                                    </>
                                )
                            }
                            )}
                    </div>
                </div>
            </div>

        </>

    );
}

const mapStateToProps = state => ({
    doctor: state.doctor,
  
});

export default connect(mapStateToProps)(Doctors);