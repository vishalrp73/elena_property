import React from "react";
import '../styles/Body.css'
import PrintIcon from '@mui/icons-material/Print';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import MapIcon from '@mui/icons-material/Map';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import FacebookIcon from '@mui/icons-material/Facebook';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';




const Body = (props) => {
    return(
        <div className="body-container">
            <div className="body-navbar">
                <div className="body-navbar-left">
                    <button type="button" className="body-navbar-btn">Home  /</button>
                    <button type="button" className="body-navbar-btn">Property Search  /</button>
                    <button type="button" className="body-navbar-btn">Search Result  /</button>
                    <button type="button" className="body-navbar-btn">Description</button>
                </div>
                <div className="body-navbar-right">
                    <button type="button" className="body-print-btn">
                        <PrintIcon/>Print
                        </button>
                        </div>
            
            </div>
            <div className="body-information">
                <div className="body-left">
                    <div className="body-header">
                        <div className="body-header-left">
                            <h1 className="body-header-title">
                                {props.headline}
                            </h1>
                            <p className="rental-address">
                                {props.address}
                            </p>

                        </div>
                        <div className="body-header-right">
                            <h1 className="rental-price">
                                ${props.price}/week
                            </h1>
                            <p className="rental-date">
                                Available: Tue 7 Dec
                            </p>
                        </div>

                    </div>

                    <div className="body-icons">
                        <div className="body-icons-left">
                            <BedIcon/> {props.beds}    
                            <BathtubIcon/> {props.baths}   
                            <DirectionsCarIcon/> {props.parks}
                        </div>
                        <div className="body-location-btn">
                            <MapIcon/> MAP VIEW
                        </div>
                    </div>

                    <div className="body-house-photos">
                        <img src="house-pic.png" className="guide-photos" alt=""/>
                    </div>
                    
                    <div className="body-housing-description">
                        <h1 className="body-housing-description-title">
                            Description
                        </h1>
                        <p className="body-housing-description-paragraph">
                        Description

** Due to Covid-19 Level 3, we are unable to conduct open homes. Please register your interest through Viewing Tracker http://www.crockers.viewingtracker.com (please copy and paste this link). To apply use the TPS portal www.tpsportal.co.nz/tenancy_application/tps1199 **

Stunning and spacious family home over two levels. This gorgeous home offers 5 very generous bedrooms with three bathrooms. Open plan lounge, dining and kitchen, with the first of five bedrooms and one bathroom on ground level. The first level features four other spacious bedrooms, all with ample wardrobe and storage space. Master with large wardrobe space and ensuite. Full family bathroom services the remaining bedrooms. Neutral decor throughout this beautiful home. Single internal entrance garage with further off street parking. The second of two houses on driveway. Fully enclosed easy care garden. Quiet location. Zoned for ever popular Cosgrove School.

** COST TO MOVE IN: One weeks rent in advance and Bond of 4 weeks rent.
Please drive by to view the exterior, but please do not enter the grounds of the property.
If you are interested, please call to view the interior.
                        </p>
                    </div>

                    <div className="body-rental-credentials">
                        <div className="body-rental-credentials-left">
                            {/* brctl stands for body-rental-credentials-left-title */}
                            <p className="brclt">Address</p>
                            <p className="brclt">Accomodation</p>
                            <p className="brclt">Available</p>
                            <p className="brclt">Pets Welcome</p>
                            <p className="brclt">Car Park Available</p>
                        </div>
                        <div className="body-rental-credentials-right">
                        {/* brcrt stands for body-rental-credentials-right-title */}
                        <p className="brcrt">{props.address}</p>
                        <p className="brcrt">{props.beds} bedrooms {props.baths} bathromm</p>
                        <p className="brcrt">Tuesday, 7 December</p>
                        <p className="brcrt">Yes</p>
                        <p className="brcrt">Yes</p>
                        </div>
                    </div>
                    <div className="body-footer">
                        <div className="body-footer-left">
                            <button type="button" className="body-return-button">
                                <SettingsBackupRestoreIcon/> Back to Search Result
                            </button>
                        </div>
                        <div className="body-footer-right">
                            <button type="button" className="body-footer-book-btn">
                                Book a Viewing
                            </button>
                            <button type="button" className="body-footer-apply-btn">
                                Apply Online
                            </button>
                        </div>
                    </div>

                </div>

                <div className="body-right">
                    <div className="body-right-btns">
                           <button type="button" className="body-right-book-btn">
                                Book a Viewing
                            </button>
                            <button type="button" className="body-right-apply-btn">
                                Apply Online
                            </button>
                    </div>

                    <div className="body-right-agent">
                        <img src="agent-pic.png" className="agent-photo" alt=""/>
                    </div>

                    <div className="body-right-terms">
                        <h1 className="body-right-move">
                            Cost To Move In:<br/>
                            $3,450.00
                        </h1>
                        <p className="body-right-costs">
                            One week's rent in <br/>
                            advance: ${props.price} <br/>
                            Bond (4 week's rent): ${props.price*4}
                        </p>
                    </div>

                    <div className="body-right-icons">
                        <TwitterIcon/>
                        <FacebookIcon/>
                        <AlternateEmailIcon/>
                        <InstagramIcon/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Body