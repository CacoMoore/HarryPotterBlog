import { Link } from "react-router-dom";
import React from 'react';


const Profile = (props) => {
    let photo = { backgroundImage: `url('${props.housephoto}')` , backgroundRepeat: "no-repeat", backgroundSize: "cover"};
    
    return (
       
        <div className="p-5" style={photo}>
            <div className="container-fluid py-5 bg-dark bg-opacity-50 w-50">
                <h1 className="display-5 fw-bold text-light">{props.housetitle}</h1>
                <p className="col-md-8 fs-6 text-light">{props.housedesc}</p>
                <Link to="/">
                <button className="btn btn-dark btn-sm" type="button"> Back to home </button></Link>
                
            </div>
        </div>
    );

};

export default Profile;