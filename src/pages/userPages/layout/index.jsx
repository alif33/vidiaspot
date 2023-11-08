import React, { useState } from "react";
import UserHeader from "../Userheader";
import { Link, useLocation } from "react-router-dom";
import Footer from "../../../components/base/footer";


const Layout = ({ children }) => { 
    const parms=useLocation().pathname

    return (
        <>
        <UserHeader parms={parms}/>
            {/* Breadscrumb Section */}
            <div className="breadcrumb-bar">
                <div className="container">
                    <div className="row align-items-center text-center">
                        <div className="col-md-12 col-12">
                            <h2 className="breadcrumb-title">Dashboard</h2>
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/index">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Dashboard
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dashboard-content">
                <div className="container">
                    <div className="">
                        <ul className="dashborad-menus">
                            <li>
                                <Link to="/dashboard/my-listings">
                                    <i className="feather-list" /> <span>My Listings</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/pending-approval">
                                    <i className="feather-list" /> <span>Pending</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/archived">
                                    <i className="feather-list" /> <span>Archived</span>
                                </Link>
                            </li>
                            <li className="active">
                                <Link to="/dashboard/favourite">
                                    <i className="feather-grid" /> <span>Favoruite</span>
                                </Link>
                            </li>
                            {/* <li>
                                <Link to="/profile">
                                    <i className="fa-solid fa-user" /> <span>Profile</span>
                                </Link>
                            </li> */}
                            
                            {/* <li>
                                <Link to="/bookmarks">
                                    <i className="fas fa-solid fa-heart" /> <span>Bookmarks</span>
                                </Link>
                            </li> */}
                            <li>
                                <Link to="/messages">
                                    <i className="fas fa-solid fa-message" /> <span>Messages</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/reviews">
                                    <i className="fas fa-solid fa-star" /> <span>Saved Searches</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/reviews">
                                    <i className="fas fa-solid fa-star" /> <span>Transactions</span>
                                </Link>
                            </li>
                            {/* <li>
                                <Link to="/login">
                                    <i className="fas fa-light fa-circle-arrow-left" />{" "}
                                    <span>Logout</span>
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                    { children }
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Layout




