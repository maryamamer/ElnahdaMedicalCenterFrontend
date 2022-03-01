/* import { React, useContext } from "react";
import Nurse from '../media/images/Nurse.jpeg';
import '../CSS/Login.css';*/
import Auth from "../context/auth";

import Nurse from '../media/images/Nurse.jpeg';
import '../CSS/Login.css';
import React, { useState, useContext, useEffect } from 'react';
import { Link, Redirect,useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';

import axios from 'axios';
import { LOGIN_FAIL } from "../actions/types";
import jwtDecode from "jwt-decode";
/*
function Login() {
    let { loginuser } = useContext(Auth)*/
const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const history = useHistory();

    const { username, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const [loginfail,setloginfail]=useState('')
    const onSubmit = e => {
        e.preventDefault();

        login(username, password);
        if(!isAuthenticated){
            setloginfail('هذا المستخدم غير موجود , نرجو التواصب مع أحد الموظفين لاعطائك بيانات الدخول')
        }
       
    };

    /* let { user } = useContext(Auth)
    user ?  <Redirect to='/' /> : <Redirect to='/login' /> */
    if (isAuthenticated) {
        return <Redirect to={`/`} />
        
    }
    return (

        <>


            <section class="h-100" id="login">
                <div class="container h-100 opacity-0.4;">
                    <div class="row justify-content-md-center h-100 ">
                        <div class="card-wrapper">
                            <div class="brand">
                                <h1 class="card-title text-dark">تسجيل الدخول</h1>
                               
                            </div>
                            <div class="card-body">

                                <form method="post" class="my-login-validation" novalidate onSubmit={e => onSubmit(e)} /* onSubmit={loginuser} */>
                                    <div class="form-group ">
                                        <label for="email " className=" text-light">اسم المستخدم</label>
                                        <input id="email" type="text" class="form-control" name="username" required value={username}
                                            onChange={e => onChange(e)} />
                                        <div class="invalid-feedback">

                                            من فضلك ادخل بريد ألكتروني صحيح
                                        </div>
                                    </div>

                                    <div className="form-group " />
                                    <label for="password" className=" text-light">كلمة السر

                                    </label>

                                    <input id="password" type="password" class="form-control" name="password" required data-eye value={password}
                                        onChange={e => onChange(e)} />
                                    <div class="invalid-feedback">

                                        يجب ادخال كلمة السر
                                    </div>


                                    <div className="form-group" />
                                    <div className="custom-checkbox custom-control">
                                        <input type="checkbox" name="remember" id="remember" className="custom-control-input" />
                                        <label for="remember" className="custom-control-label text-light">تذكرني
                                            <Link to="/RestPass" className="float-right">
                                                هل نسيت كلمة السر ؟
                                            </Link>
                                        </label>
                                    </div>


                                    <div className="form-group m-0" />
                                    <input type="submit" className="btn btn-primary btn-block" value="تسجيل الدخول"  />


                                </form>
                                <p style={{color:'red'}} className='text-danger'>
                                {loginfail}
                                </p>
                               
                                {/* {
                                    isAuthenticated ? (<Redirect to='/' />) : (<div style= {{color:"red"}}>هذا المستخدم غير موجود </div>)
                                } */}
                            </div>
                            
                        </div>
                       
                    </div>
                </div>
            </section>
           
        </>
    );
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);

/* export default Login; */