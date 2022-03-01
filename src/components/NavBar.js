// import { Link } from 'react-router-dom';
// import { useContext } from "react";
import Auth from "../context/auth";
import New from '../media/images/New.png';
import '../CSS/NavBar.css';



import React, { Fragment, useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import jwtDecode from "jwt-decode";



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



    const authLinks = () => (
        <>

            <li className='nav-item'>
                <a className='nav-link' href='/Logout' onClick={logout_user}> تسجيل خروج</a>
            </li>
            <li className='nav-item'>
                <a className='nav-link' href='/ProfilePage'> الصفحة الشخصية</a>
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
                        className="navbar-toggler ml-auto custom-toggler exp"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        
                        >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <Link className="navbar-brand " to="#">
                            <img src={New}
                                className="img-responsive logo"
                                // width="100"
                                // height="80"
                                alt="New"
                            />
                        </Link>
                        <ul className="navbar-nav mr-auto  mt-2 mt-lg-0"  >
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

                            


                            <li className="nav-item">
                                <Link className="nav-link " to="/Home" role="navigation">الرئيسية </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Doctors" role="navigation">الأطباء
                                    {/* <span className="sr-only">(current)</span> */}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/AboutUs"  role="navigation">عنّا
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/ContactUs"  role="navigation">اتصل بنا
                                </Link>
                            </li>
                            {token && token_refresh ? authLinks() : guestLinks()}







                        </ul>
                       

                    </div>
                </nav>
                
                {redirect ? <Redirect to='/' /> : <Fragment></Fragment>}
            </Fragment>
        </>
    );
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,

});

export default connect(mapStateToProps, { logout })(Navbar);
/* export default NavBar; */
