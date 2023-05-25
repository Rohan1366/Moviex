import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaWhatsapp,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                A film, also called a movie or a motion picture, is a series of still photographs on 
                film projected onto a screen using light in rapid succession. The optical phenomenon
                 known as persistence of vision gives the illusion of actual, smooth, and continuous movement.
                </div>
                <div className="socialIcons">
                <a className="icon" href="https://github.com/Rohan1366/"  target="_blank">
                        <FaGithub />
                    </a>
                    
                    <a className="icon" href="https://www.instagram.com/_rohan_ghadge_/"  target="_blank">
                        <FaInstagram />
                    </a>
                        
                    
                    <a className="icon" href="https://www.linkedin.com/in/rohan-ghadge-73963923b/"  target="_blank">
                        <FaLinkedin />
                    </a>
                    <a className="icon" href="https://wa.me/917620706408"  target="_blank">
                        <FaWhatsapp />
                    </a>
                </div>
                <h3 className='text-center' style={{marginTop:"30px"}}>All Right Reserved &copy; Rohan Ghadge</h3>
            </ContentWrapper>
            
        </footer>
    );
};

export default Footer;
