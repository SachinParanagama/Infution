import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomeNavBar from './HomeNavBar';
import Footer from './Footer';
import {Link} from "react-router-dom";


export default function LoadingPage() {

     const [q, setQ] = useState("");

    const handleproceedCus = () => {
        window.location.replace("http://localhost:3000/UserLogin");
    };

    const handleproceedAdmin = () => {
        window.location.replace("http://localhost:3000/AdminLogin");
    };

    
    return (
        <>
            <HomeNavBar />
            <div className='body8'>

                <div className='topic1'>

                    <h1>Welcome To</h1>
                    <h1>Infution E-Commerce Platform</h1>

                </div>

                <div className='topic2'>
                    <p>Qyuick Search</p>
                </div>

                <div className='topic3'>
                    <p>Pay Online</p>
                </div>

                <div className='topic4'>
                    <p>Smartcard</p>
                </div>

                <div className='topic5'>
                    <p>NFC Technology</p>
                </div>

                <Link to = '/add-feedback'><button  className="learn_btn"> Learn More </button></Link>


            </div>
            <Footer />
        </>

    )
}
