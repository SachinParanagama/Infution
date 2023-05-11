import React from "react";
import {Link} from "react-router-dom";
import {FaHome} from "react-icons/fa";
import './AddProductNavBar.css';

function ViewMyProductsNavBar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light nav">

            <div className="container-fluid">
    
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

            
                <div className="collapse navbar-collapse"></div>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav Navbtn">

                        <Link to="/seller-home" type="radio" className="btn nav-link anime color" style={{color:"white"}} aria-current="page">Add Product</Link>
                        <Link to="/my-products" type="radio" className="btn nav-link anime color active" style={{color:"white"}}>My Products</Link>
                        <Link to="/printreport" className="btn nav-link anime color" style={{color:"white"}} aria-current="page">Generate Report</Link>

                    </div>
                </div>
            </div>
        </nav>
        
    )
}

export default ViewMyProductsNavBar;