// import { Link } from 'react-router-dom';
// import { useContext } from "react";
import Auth from "../context/auth";
import New from '../media/images/New.png';
import '../CSS/NavBar.css';

import React, { Fragment, useState, useEffect } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import jwtDecode from "jwt-decode";
import axios from "axios"
import { Fragment } from 'react';
import {Navbar} from 'reactstrap';

const Navbar = ({ logout, isAuthenticated }) => {
    let token = localStorage.getItem('access')
    let token_refresh = localStorage.getItem('refresh')

    if (isAuthenticated) {
        const user = jwtDecode(token)
        console.log(user)
    }

    const [redirect, setRedirect] = useState(false);
    const history = useHistory();


    const logout_user = () => {
        logout();
        setRedirect(true);
    };

    const guestLinks = () => (

        <Fragment>

            <li className='nav-item'>
                <a className='nav-link' href='/login'> تسجيل الدخول </a>
            </li>
            {/* <li className='nav-item'>
                <Link className='nav-link' to='/signup'>Sign Up</Link>
            </li> */}

        </Fragment>
    );

    const [patients, setpatient] = useState([]);
    useEffect(() => {
        axios.get('/users')
            .then(res => setpatient(res.data))
            .catch((err) => console.log(err));
    });
    /* const user = jwtDecode(token).user_id */
    const authLinks = () => (
        <>

            <li className='nav-item'>
                <Link className='nav-link' to='/Logout' onClick={logout_user}> تسجيل خروج</Link>
            </li>
            {/* {
                patients.map((p, i) => {
                    return (
                        <>
                            <li className='nav-item'>
                                <Link className='nav-link' to={`/Patient/${p.id}`}> الصفحة الشخصية</Link>
                            </li>
                        </>
                    )
                })
            } */}

            <li className='nav-item'>
                <Link className='nav-link' to={`/Patient/${patients.id}`}> الصفحة الشخصية</Link>
            </li>

        </>
    );


    /* function NavBar() { */
    /* let { user, logoutuser } = useContext(Auth) */
    return (
        <>
            <Fragment>
                <nav className="navbar navbar-expand-lg">
                    <button
                        className="navbar-toggler ml-auto custom-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <Link className="navbar-brand" to="#">
                            <img src={New}
                                className="img-responsive logo"
                                width="100"
                                height="80"
                                alt="New"
                            />
                        </Link>
                        <ul className="navbar-nav mr-auto">
                            {/* {
                            user ?
                                <li className="nav-item">
                                    <Link onClick={logoutuser} className="nav-link" to="/Logout"> تسجيل خروج</Link>
                                </li>
                                :
                                <li className="nav-item">
                                    <Link className="nav-link LastItem" to="/Login">  تسجيل الدخول </Link>
                                </li>

                        } */}

                            {token && token_refresh ? authLinks() : guestLinks()}


                            <li className="nav-item">
                                <Link className="nav-link" to="/Home">الرئيسية </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Doctors">الأطباء
                                    {/* <span className="sr-only">(current)</span> */}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/AboutUs">عنّا
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/ContactUs">اتصل بنا
                                </Link>
                            </li>







                        </ul>
                        <Link className="navbar-brand" to="/">
                            <img src={New}
                                className="img-responsive logo"
                                width="100"
                                height="80"
                                alt="New"
                            />
                        </Link>

                    </div>
                </nav>
                {redirect ? <Redirect to='/' /> : <Fragment></Fragment>}
            </Fragment>
        </>
    );
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    patient: state.patient,

});


export default connect(mapStateToProps, { logout })(Navbar);
/* export default NavBar; */
