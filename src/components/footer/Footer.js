import React from "react";
import './Footer.css'
import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


const Footer = () => {
    return(
        <div className="footer-container">
            <div className="footer-left">
                <div className="footer-logo"><button type="button" className="footer-logo-btn"><img src="akl-prprty-logo.png" className="home-pic-grid" alt=""/></button></div>
                <div className="footer-icons">
                    <button type="button" className="footer-btns-right"><TwitterIcon/></button>
                    <button type="button" className="footer-btns-right"><FacebookIcon/></button>
                    <button type="button" className="footer-btns-right"><AlternateEmailIcon/></button>
                    <button type="button" className="footer-btns-right"><InstagramIcon/></button>
                </div>
            </div>
            <div className="footer-right">
                <button type="button" className="footer-btns">Management</button>
                <button type="button" className="footer-btns">About Us</button>
                <button type="button" className="footer-btns">Property Search</button>
                <button type="button" className="footer-btns">FAQ</button>
                <button type="button" className="footer-btns">Contact Us</button>
                <button type="button" className="footer-btns-search"><SearchIcon className="search-button"/></button>
            </div>
        </div>
    )
}

export default Footer