import React from "react";
import { contactform_img, contactleftimg } from "../imagepath";
import { useForm } from "react-hook-form";
import Layout from "../../components/base/layout";
import HTTP from "../../lib/HTTP";
import toast from "react-hot-toast";

const Contract = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onErr = err => console.log(err);

    const onSubmit = async(data) => {
        HTTP('post', '/contact', {...data, country_name: "Bangladsh", country_code: "BD"})
        .then(res=>{
            if (res.success) {
                toast.success('Your message has been sent.');
                reset();
            }
        })
        .catch(err=>console.log(err))
    };

    return (
        <Layout>
            <div className="contactus-info">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 contactus-img col-md-12">
                            <div className="contactleft-info">
                                <img
                                    src={contactleftimg}
                                    className="img-fluid"
                                    alt=""
                                />
                                <div className="contactinfo-content">
                                    <div className="contact-hours">
                                        <h6>Hours</h6>
                                        <ul>
                                            <li>Tuesday - Saturday : 9am - 5pm</li>
                                            <li>Monday: 10:30am - 3pm Closed on Sunday</li>
                                        </ul>
                                    </div>
                                    <div className="contact-hours">
                                        <h6>Contact Us</h6>
                                        <ul>
                                            <li>132, My Street, Kingston, New York 12401</li>
                                            <li>Tel : +088 01562 1452</li>
                                            <li> Email : support@listee.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 contactright-map col-md-12">
                            <div className="google-maps">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.8862835683544!2d-73.98256668525309!3d41.93829486962529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dd0ee3286615b7%3A0x42bfa96cc2ce4381!2s132%20Kingston%20St%2C%20Kingston%2C%20NY%2012401%2C%20USA!5e0!3m2!1sen!2sin!4v1670922579281!5m2!1sen!2sin"
                                    width={600}
                                    height={544}
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*/contact Information*/}
            {/*contact Form*/}
            <section className="contactusform-section">
                <div className="container">
                    <div className="contact-info">
                        <h2>
                            Contact <span>Us</span>
                        </h2>
                        <p>We are here to help you</p>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-5">
                            <div className="contactform-img">
                                <img
                                    src={contactform_img}
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7">
                            <div className="contactus-form">
                                <form onSubmit={handleSubmit(onSubmit, onErr)} className="">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="First name*"
                                            {...register("first_name", {
                                                required: "First name is required",
                                            })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Last name*"
                                            {...register("last_name", {
                                                required: "Last name is required",
                                            })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Company Name*"
                                            {...register("company_name", {
                                                required: "Company name is required",
                                            })}
                                        />
                                    </div>
                                    <div className="form-group me-0">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Email*"
                                            {...register("email", {
                                                required: "Email is required",
                                            })}
                                        />
                                    </div>
                                    {/* <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Subject"
                                        />
                                    </div> */}
                                    <div className="form-group">
                                        <textarea
                                            rows={4}
                                            className="form-control"
                                            placeholder="Write a Message*"
                                            {...register("message", {
                                                required: "Message is required",
                                            })}
                                        />
                                    </div>
                                    <div className="submit-section">
                                        <button className="btn btn-primary submit-btn" type="submit">
                                            {" "}
                                            Submit{" "}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>

    );
}
export default Contract;