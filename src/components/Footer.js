import React from 'react'
import {Link} from "react-scroll"

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Chicago IL</p>
                        </div>
                        <div className="d-flex">
                            <a href="773-251-2356">773-251-2356</a> 
                        </div>
                        <div className="d-flex">
                            <p>David_roman09@yahoo.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <Link smooth={true} to="home" className="footer-nav">Home</Link>
                                <br/>
                                <Link smooth={true} to="about" className="footer-nav">About me</Link>
                                <br/>
                                <Link smooth={true} to="services" className="footer-nav">Services</Link>
                            </div>
                            <div className="col">
                                <Link smooth={true} to="experience" className="footer-nav">Experience</Link>
                                <br/>
                                <Link smooth={true} to="portfolio" className="footer-nav">Portfolio</Link>
                                <br/>
                                <Link smooth={true} to="contacts" className="footer-nav">Contacts</Link>
                            </div>
                            <p className="pt-3 text-center"> Copyright&copy;
                            {new Date().getFullYear()}&nbsp; David Roman</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
