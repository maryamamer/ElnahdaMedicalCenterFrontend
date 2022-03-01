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


function Doctors() {
   
    const dispatch=useDispatch()
 
     const doctors= useSelector((state)=>state.getdoctor.doctor)
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    useEffect(() => {

        dispatch(get_doctor())


    },[]);
        const searchItems = (query) => {
            setSearchInput(query)
            if (searchInput!==''){
           const searchdoctors= doctors.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(searchdoctors)
        }
        else{
            setFilteredResults(doctors)
        }
        }

    return (
        <>

            <div classNameName="container-fluid">
                <div className="row ">
                    <form method="get"className="mx-auto" >
                        <input className="search" type="search"   onChange={(e) => searchItems(e.target.value)} placeholder="Search" />
                    </form>
                </div>
                <div className="container-fluid">
                    <div className="row m-5">
                        {
                            searchInput.length > 1 ? (
                            filteredResults.map((d, i) => {
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
                            )):( doctors.map((d, i) => {
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
                            ))}
                    </div>
                </div>
            </div>

        </>

    );
}

const mapStateToProps = state => ({
    doctor: state.getdoctor,
  
});

export default connect(mapStateToProps,{get_doctor})(Doctors);