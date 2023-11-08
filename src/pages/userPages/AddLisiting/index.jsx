import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { 
    gallerymedia_1, 
    gallerymedia_2, 
    gallerymedia_3, 
    gallerymedia_4, 
    gallerymedia_5, 
    mediaimg_1, 
    mediaimg_2 
} from "../../../lib/imagepath";
import Layout from "../layout";
import { useForm } from "react-hook-form";
import HTTP from "../../../lib/HTTP";
import { getAuth } from "../../../lib/CookieHandler";

const AddLisiting = () => {
    const [text, setTest] = useState("");
    const [tags, setTags] = useState([]);
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    }= useForm();
    const auth = getAuth();

    useEffect(()=>{
        const { name, email } = auth.u;
        setValue("contact_name", name);
        setValue('email', email);

    }, [])

    

    const handleKeyDown = e=>{
        if (e.key === 'Enter' && text.trim() !== '') {
            e.preventDefault();
            setTags([...tags, text.trim()]);
            setText(''); // Clear the input field
          }
    }

    console.log(tags);

    const onErr = err => console.log(err)

    const onSubmit = async(data) => {
        HTTP('post', 'posts', {
            ...data,
            tags: [
                "fresh",
                "new"
            ],
            pictures: ["https://newsite.vidiaspot.com/storage/files/us/2/thumb-816x460-2b4db895a06fe753b4f26c73c6f27db2.jpg"]

        }, auth.bearer)
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })
    };


    return (
        <Layout>
            <div className="profile-content">
                    <form onSubmit={handleSubmit(onSubmit, onErr)}>
                        <div className="messages-form">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Basic information</h4>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label className="col-form-label">
                                            Category <span>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control pass-input"
                                            placeholder="Title"
                                            {...register("category_id", {
                                                required: "Cat is required",
                                            })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label">
                                            Title <span>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control pass-input"
                                            placeholder="Listing Title"
                                            {...register("title", {
                                                required: "Title is required",
                                            })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label">
                                            Description <span>*</span>
                                        </label>
                                        <textarea
                                            rows={6}
                                            className="form-control listingdescription"
                                            placeholder="Des.."
                                            {...register("description", {
                                                required: "Description is required",
                                            })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label">
                                            Price <span>*</span>
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control pass-input"
                                            placeholder="eg 15000"
                                            {...register("price", {
                                                required: "Price is required",
                                            })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label">
                                            City <span>*</span>
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control pass-input"
                                            placeholder="eg 15000"
                                            {...register("city_id", {
                                                required: "City is required",
                                            })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label">
                                            Tags <span>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control pass-input"
                                            placeholder="eg 15000"
                                            onChange={e=>setTags(e.target.value)}
                                            onKeyDown={handleKeyDown}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h4>Seller Information </h4>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label className="col-form-label">Contact Name</label>
                                        <input
                                            type="text"
                                            className="form-control pass-input"
                                            placeholder=""
                                            {...register("contact_name", {
                                                required: "Contact name is required",
                                            })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label">Email </label>
                                        <input
                                            type="text"
                                            className="form-control pass-input"
                                            placeholder=""
                                            {...register("email", {
                                                required: "Email is required",
                                            })}
                                        />
                                    </div>
                                    <div className="form-group formlast-input">
                                        <label className="col-form-label">Phone </label>
                                        <input
                                            type="text"
                                            className="form-control pass-input"
                                            placeholder=""
                                        />
                                    </div>
                                </div>
                            </div>
                        

                            {/* Keep media */}

                            <div className="card media-section">
                                <div className="card-header">
                                    <h4>Media Information </h4>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 featured-img1">
                                            <h6 className="media-title">Featured Image</h6>
                                            <div className="media-image ">
                                                <img src={mediaimg_2} alt="" />
                                            </div>
                                            <div className="settings-upload-btn">
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    name="image"
                                                    className="hide-input image-upload"
                                                    id="file"
                                                />
                                                <label htmlFor="file" className="file-upload">
                                                    Upload File
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 featured-img2">
                                            <h6 className="Featured image">Logo</h6>
                                            <div className="media-image">
                                                <img src={mediaimg_1} alt="" />
                                            </div>
                                            <div className="settings-upload-btn">
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    name="image"
                                                    className="hide-input image-upload"
                                                    id="file1"
                                                />
                                                <label htmlFor="file1" className="file-upload">
                                                    Upload File
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gallery-media">
                                        <h6 className="media-title">Gallery</h6>
                                        <div className="galleryimg-upload">
                                            <div className="gallery-upload">
                                                <img
                                                    src={gallerymedia_1}
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                                <Link to="#" className="profile-img-del">
                                                    <i className="feather-trash-2" />
                                                </Link>
                                            </div>
                                            <div className="gallery-upload">
                                                <img
                                                    src={gallerymedia_2}
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                                <Link to="#" className="profile-img-del">
                                                    <i className="feather-trash-2" />
                                                </Link>
                                            </div>
                                            <div className="gallery-upload">
                                                <img
                                                    src={gallerymedia_3}
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                                <Link to="#" className="profile-img-del">
                                                    <i className="feather-trash-2" />
                                                </Link>
                                            </div>
                                            <div className="gallery-upload">
                                                <img
                                                    src={gallerymedia_4}
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                                <Link to="#" className="profile-img-del">
                                                    <i className="feather-trash-2" />
                                                </Link>
                                            </div>
                                            <div className="gallery-upload">
                                                <img
                                                    src={gallerymedia_5}
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                                <Link to="#" className="profile-img-del">
                                                    <i className="feather-trash-2" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="settings-upload-btn">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                name="image"
                                                className="hide-input image-upload"
                                                id="file2"
                                            />
                                            <label htmlFor="file2" className="file-upload">
                                                Upload File
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-primary" type="submit">
                                {" "}
                                Submit
                            </button>
                        </div>
                        </form>
                    </div>
        </Layout>

    );
}
export default AddLisiting;