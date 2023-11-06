import React, { useState } from "react";
import Header from "../header";
import Footer from "../footer";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => { 
    return (
        <>
            <Header />
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="breadcrumb-bar">
                <div className="container">
                    <div className="row align-items-center text-center">
                        <div className="col-md-12 col-12">
                            <h2 className="breadcrumb-title">Login</h2>
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/index">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Login
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {children}
            <Footer />
        </>

    );
}
export default Layout;