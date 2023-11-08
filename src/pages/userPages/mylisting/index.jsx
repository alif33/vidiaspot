import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { Link, useLocation } from "react-router-dom";
import Layout from "../layout";
import AXIOS from "../../../lib/AXIOS";
import HTTP from "../../../lib/HTTP";
import { getAuth } from "../../../lib/CookieHandler";


const MyListe = () => {
    const [listings, setListings] = useState([]);
    const auth = getAuth();

    const fetchListings = ()=>{
        AXIOS('get', 'posts?embed=null&sort=created_at&belongLoggedUser=1', auth.bearer)
        .then( async (res)=>{
            if(res.success){
                const posts = res.result.data;
                setListings(posts);
                let updatePosts = [];
                for (const post of posts) {
                    const img = await HTTP('get', `/pictures/${post.id}?embed=null`);
                    const image = img.result.url.medium;
                    const updatePost = {
                        ...post,
                        image
                    }
                    updatePosts.push(updatePost);
                }
                setListings(updatePosts);
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        fetchListings();
    }, [])


    const handleMute= (id) =>{
        AXIOS('put', `posts/${id}/offline`,  auth.bearer)
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const handleDelete = (id)=>{
        AXIOS('delete', `posts/${id}`,  auth.bearer)
        .then(res=>{
            if(res.success){
                fetchListings();
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }       

    const columns = [
        {
            title: 'Image',
            dataIndex: 'image',
            render: (text, data, record) => (
                <div className="listingtable-img">
                    {" "}
                    <Link to="/service-details">
                        <h1>{data.name}</h1>
                        <img
                            className="img-fluid avatar-img"
                            src={data.image}
                            alt=""
                        />
                    </Link>
                </div>
            ),
            sorter: (a, b) => { a.image.length - b.image.length }
        },
        {
            title: 'Details',
            dataIndex: 'content',
            render: (text, data, record) => (
                <>
                    <h6>
                        <Link to="/service-details">
                            {text}
                        </Link>
                    </h6>
                    <div className="listingtable-rate">
                        <h5>{data.title}</h5>
                        <Link to="#" className="cat-icon">
                            <i className="fa-regular fa-circle-stop" />{" "}
                            Electronics
                        </Link>{" "}
                        <span className="discount-amt">$350000.00</span>
                        <span className="fixed-amt">{data.price_formatted}</span>
                    </div>
                    <p>{data.description}</p>
                </>
            ),
            sorter: (a, b) => { a.content.length - b.content.length }
        },
        {
            title: 'Status',
            dataIndex: 'status',
            render: (text, record, data) => (
                <span className={record.bg}>{text}</span>
            ),
            sorter: (a, b) => { a.status.length - b.status.length }
        },
        {
            title: 'Views',
            dataIndex: 'numbers',
            render: (text, record, data) => (
                <span>{text}</span>
            ),
            sorter: (a, b) => { a.numbers.length - b.numbers.length }
        },
        {
            title: 'Action',
            dataIndex: 'class',
            render: (text, data, record) => (
                <div className={text}>
                    
                    <span
                        className="action-btn btn-view"
                        onClick={()=>handleMute(data.id)}
                    >
                        <i className="feather-eye" />
                    </span>
                    <span
                        to="#"
                        className="action-btn btn-edit"
                    >
                        <i className="feather-edit-3" />
                    </span>
                    <span
                        className="action-btn btn-trash"
                        onClick={()=>handleDelete(data.id)}
                    >
                        <i className="feather-trash-2" />
                    </span>
                </div>
            ),
            sorter: (a, b) => { a.class.length - b.class.length }
        },
    ]

    // const fetchPhoto = ()=>{
    //    const __img = fetchImage()
    //    console.log(__img);
    // }

    // const fetchImage = async(id)=>{
    //     const img = await HTTP('get', `/pictures/${id}?embed=null`);
    //     console.log(img.result.url.medium);
    //     return img.result.url.medium
    // }

    return (
        <Layout>
            <div className="dash-listingcontent dashboard-info">
                <div className="dash-cards card">
                    <div className="card-header">
                        <h4>My Listings</h4>
                        <Link
                            className="nav-link header-login add-listing"
                            to="/add-listing"
                        >
                            <i className="fa-solid fa-plus" /> Add Listing
                        </Link>
                    </div>
                    <div className="card-body">
                        <div className="listing-search">
                            <div className="filter-content form-group">
                                <div className="group-img">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search..."
                                    />
                                    <i className="feather-search" />
                                </div>
                            </div>
                            <div className="sorting-div">
                                <div className="sortbyset">
                                    <span className="sortbytitle">Sort by</span>
                                    <div className="sorting-select">
                                        <select className="form-control select">
                                            <option>Newest</option>
                                            <option>Newest</option>
                                            <option>Oldest</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive">
                            {
                                listings && <Table
                                className="listing-table datatable"
                                columns={columns}
                                // bordered
                                dataSource={listings}
                                rowKey={(record) => record.id}
                                showSizeChanger={true}
                            />
                        
                            }
                                
                        </div>
                        <div className="blog-pagination">
                            <nav>
                                <ul className="pagination">
                                    <li className="page-item previtem">
                                        <Link className="page-link" to="#">
                                            <i className="fas fa-regular fa-arrow-left" /> Prev
                                        </Link>
                                    </li>
                                    <li className="justify-content-center pagination-center">
                                        <div className="pagelink">
                                            <ul>
                                                <li className="page-item">
                                                    <Link className="page-link" to="#">
                                                        1
                                                    </Link>
                                                </li>
                                                <li className="page-item active">
                                                    <Link className="page-link" to="#">
                                                        2 <span className="visually-hidden">(current)</span>
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="#">
                                                        3
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="page-item nextlink">
                                        <Link className="page-link" to="#">
                                            Next <i className="fas fa-regular fa-arrow-right" />
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>

    );
}
export default MyListe;