import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/base/layout";
import { apple, facebook, google } from "../../lib/imagepath";
import { useForm } from "react-hook-form";
import HTTP from "../../lib/HTTP";

const SignUp = () => {
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();



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

    const onErr = err => console.log(err);

    const onSubmit = async(data) => {
        const __ = {...data, accept_terms: true};
        HTTP('post', '/users', __)
        .then(res=>{
            console.log(res);
        })
        .catch(err=>console.log(err))
    };  

    return (
        <Layout>
            <div className="login-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 mx-auto">
                            <div className="login-wrap register-form">
                                <div className="login-header">
                                    <h3>Create an Account</h3>
                                    <p>
                                        Lets start with <span>Listee</span>
                                    </p>
                                </div>
                                {/* Login Form */}
                                <form onSubmit={handleSubmit(onSubmit, onErr)} action="login">
                                    <div className="form-group group-img">
                                        <div className="group-img">
                                            <i className="feather-user" />
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Full Name"
                                                {...register("name", {
                                                    required: "Email is required",
                                                })}
                                            />
                                        </div>
                                    </div>
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
                                    <div className="row">
                                        <div className="col-md-2">
                                            <div className="form-group">
                                                {/* <div className="group-img"> */}
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Phone number"
                                                        {...register("phone_country", {
                                                            required: "Country",
                                                    })}
                                                    />
                                                {/* </div> */}
                                            </div>
                                        </div>
                                        <div className="col-md-10">
                                            <div className="form-group group-img">
                                                <div className="group-img">
                                                    <i className="feather-phone" />
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Phone number"
                                                        {...register("phone", {
                                                            required: "Phone is required",
                                                    })}
                                                    />
                                                </div>
                                            </div>
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
                                                    required: "Email is required",
                                              })}
                                            />
                                            <span className={`toggle-password  ${ passwordType==="password"? "feather-eye":"feather-eye-off" } `} onClick={togglePassword}></span>
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
                                                {...register("password_confirmation", {
                                                    required: "Email is required",
                                              })}
                                            />
                                            <span className={`toggle-password  ${ passwordType==="password"? "feather-eye":"feather-eye-off" } `} onClick={togglePassword}></span>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary w-100 login-btn" type="submit">
                                        Create Account
                                    </button>
                                    <div className="register-link text-center">
                                        <p>
                                            Already have an account?{" "}
                                            <Link className="forgot-link" to="/login">
                                                Sign In
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
export default SignUp;