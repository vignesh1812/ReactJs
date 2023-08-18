import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import {FaTwitter } from "react-icons/fa";
import {BiLogoInstagram } from "react-icons/bi";
import './Footer.css';

const Footer = () => {
    return (
        <div className='bg-dark text-white'>
            <div className="sociallinks text-center" id="social">
                <h3 className="display-6">Follow us!</h3>
                <ul className="list-unstyled list-inline text-center">
                    <li className="list-inline-item"><a href="/" x ><i className=" fa fa-facebook-square"><FaFacebookSquare/></i></a></li>
                    <li className="list-inline-item"><a href="/" x ><i className=" fa fa-twitter"><FaTelegram/></i></a></li>
                    <li className="list-inline-item"><a href="/" x ><i className=" fa fa-telegram"><FaTwitter/></i></a></li>
                    <li className="list-inline-item"><a href="/" x ><i className=" fa fa-youtube"><BiLogoInstagram/></i></a></li>
                </ul>
            </div>
            <div className="row text-center">
                <div className="col">copyright &copy; 2023 Techvox.designed by vicky</div>
            </div>


        </div>
    )
}

export default Footer