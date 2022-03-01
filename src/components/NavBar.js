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
import axios from "axios";

const Navbar = ({ logout, isAuthenticated,users }) => {
    const token = localStorage.getItem('access')
    if(isAuthenticated){
        const token_refresh = localStorage.getItem('refresh')
        var user_id = jwtDecode(token).user_id
    }
  

    // if (isAuthenticated) {
    //     const user = jwtDecode(token)
    //     console.log(user)
    // }


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

    const superuserlink=()=>{
        <>
         <li className='nav-item'>
                <a className='nav-link' href='/admin/users'> الأدمن </a>
            </li>
        </>
    }
    const[issuper,setsuper]=useState(false)
    const [patients, setpatient] = useState([]);
    useEffect(() => {
        axios.get('/users')
            .then(res => setpatient(res.data))
            .catch((err) => console.log(err));
        
// patients.map((p)=>{
//     if(p.is_superuser==true){
//         setsuper(true)
//     }
//     setsuper(false)
// })
    },[])
 
    /* const user = jwtDecode(token).user_id */
    const authLinks = () => (
        <>

            <li className='nav-item'>
                <Link className='nav-link' to='/Logout' onClick={logout_user}> تسجيل خروج</Link>
            </li>
     
            
            <li className='nav-item'>
                <Link className='nav-link' to={`/Patient/${user_id}`}> الصفحة الشخصية</Link>
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
                        <Link className="navbar-brad"n to="#">
                            <img src={New}
                                className="img-responsive logo"
                                width="100"
                                height="80"
                                alt="New"
                            />
                        </Link>
                        <ul className="navbar-nav mr-auto">
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
                            {/* {token && issuper ? superuserlink():''} */}
                            {token ? authLinks() : guestLinks()}
                            {redirect ? <Redirect to='/' /> : <Fragment></Fragment>}
                        </ul>
                    </div>
                    
                </nav>
                
            </Fragment>
        </>
    );
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    users:state.user.users,
    patient: state.patient,

});

export default connect(mapStateToProps, { logout })(Navbar);
/* export default NavBar; */
