import React, { useState } from "react";
import { Link } from "react-router-dom";
import { apple, facebook, google } from "../imagepath";
import Layout from "../base/layout";
import { useForm } from "react-hook-form";
import HTTP from "../../lib/HTTP";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");

    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }

    const togglePassword =()=>{
        if(passwordType==="password"){
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    // email: 'alifhasan332@gmail.com',
    // password: 'a21422100'

    const onErr = err => console.log(err)

    // const onSubmit = async(data) => {
        
    //     HTTP('post', '/auth/password/email', { email: data.email })
    //     .then(res=>{
    //         if (res.success) {
    //             toast.success(`${res.message}`)
    //         }
    //     })
    // };


    const onSubmit = async (data) =>{

        HTTP('get', '/homeSections')
        .then(res=>{
            console.log(res);
        })

        
        // const { email, password } = data;

        // HTTP('post', '/auth/login', { email, password })
        // .then(res=>{
        //     console.log(res);
        // })
        // .catch(err=>{
        //     console.log(err);
        // })
    }



    return (
        <Layout>
            
            <div className="login-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 mx-auto">
                            <div className="login-wrap">
                                <div className="login-header">
                                    <h3>Welcome Back</h3>
                                    <p>Please Enter your Details</p>
                                </div>
                                {/* Login Form */}
                                <form onSubmit={handleSubmit(onSubmit, onErr)} action="dashboard">
                                    <div className="form-group group-img">
                                        <div className="group-img">
                                            <i className="feather-mail" />
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Email Address"
                                                {...register("email", {
                                                    required: "Email is required",
                                              })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="pass-group group-img">
                                            <i className="feather-lock" />
                                            <input
                                                type={passwordType}
                                                className="form-control pass-input"
                                                placeholder="Password"
                                                // onChange={handlePasswordChange}
                                                // value={passwordInput}
                                                {...register("password", {
                                                    required: "Password is required",
                                              })}
                                            />
                                            <span className={`toggle-password  ${ passwordType==="password"? "feather-eye":"feather-eye-off" } `} onClick={togglePassword}></span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6">
                                            <label className="custom_check">
                                                <input
                                                    type="checkbox"
                                                    name="rememberme"
                                                    className="rememberme"
                                                />
                                                <span className="checkmark" />
                                                Remember Me
                                            </label>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="text-md-end">
                                                <Link className="forgot-link" to="/forgot-password">
                                                    Forgot password?
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary w-100 login-btn" type="submit">
                                        Sign in
                                    </button>
                                    <div className="register-link text-center">
                                        <p>
                                            No account yet?{" "}
                                            <Link className="forgot-link" to="/signup">
                                                Signup
                                            </Link>
                                        </p>
                                    </div>
                                    <div className="login-or">
                                        <span className="or-line" />
                                        <span className="span-or">
                                            Sign in with Social Media Accounts
                                        </span>
                                    </div>
                                    <div className="social-login">
                                        <Link to="#" className="btn btn-apple w-100">
                                            <img src={apple} className="me-1" alt="img" />
                                            Sign in with Apple
                                        </Link>
                                    </div>
                                    <div className="social-login">
                                        <Link to="#" className="btn btn-google w-100">
                                            <img src={google} className="me-1" alt="img" />
                                            Sign in with Google
                                        </Link>
                                    </div>
                                    <div className="social-login">
                                        <Link to="#" className="btn btn-facebook w-100 mb-0">
                                            <img
                                                src={facebook}
                                                className="me-2"
                                                alt="img"
                                            />
                                            Continue with Facebook
                                        </Link>
                                    </div>
                                </form>
                                {/* /Login Form */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  
        </Layout>

    );
}
export default Login;