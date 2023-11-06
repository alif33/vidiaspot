import React from "react";
import { Link } from "react-router-dom";
import Layout from "../base/layout";
import { useForm } from "react-hook-form";
import HTTP from "../../lib/HTTP";
import toast from "react-hot-toast";

const ForgotPassword = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onErr = err => console.log(err)

    const onSubmit = async(data) => {
        
        HTTP('post', '/auth/password/email', { 
            email: data.email, 
            auth_field: 'email'
        })
        .then(res=>{
            console.log(res);
            if (res.success) {
                console.log(res.message);
                toast.success(`${res.message}`)
            }
        })
    };

    return (
        <Layout>
            <div className="login-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 mx-auto">
                            <div className="login-wrap password-form">
                                <div className="login-header">
                                    <h3>Forgot Password</h3>
                                    <p>
                                        Enter your email and we will send you a link to reset your
                                        password.
                                    </p>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit, onErr)} action="login">
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
                                    <button className="btn btn-primary w-100 login-btn" type="submit">
                                        Submit
                                    </button>
                                </form>
                                <Link to="index" className="back-home">
                                    <i className="fas fa-regular fa-arrow-left me-1" /> Back to Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
export default ForgotPassword;